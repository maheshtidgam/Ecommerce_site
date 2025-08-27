import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "$";
    const delivery_fee = 100;
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate()

    const [products, setProducts] = useState([])
    const [token, setToken] = useState("")



    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error("Please select a size")
            return;
        }

        let cartData = structuredClone(cartItems)
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            }
            else {
                cartData[itemId][size] = 1
            }
        }
        else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCartItems(cartData)
        if (token) {
            try {
                const response = await axios.post(`${backendUrl}/api/cart/add`, { itemId, size }, { headers: { token } })
                if (response.data.success) {
                    toast.success(response.data.message)
                }
                else {
                    toast.error(response.data.message)

                }

            }
            catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    }



    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            for (const size in cartItems[item]) {
                try {
                    if (cartItems[item][size] > 0) {
                        totalCount += cartItems[item][size]
                    }
                }
                catch (err) {
                }
            }
        }
        return totalCount
    }





    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[itemId][size] = quantity
        setCartItems(cartData)
        if (token) {
            try {
                const response = await axios.post(`${backendUrl}/api/cart/update`, { itemId, size, quantity }, { headers: { token } })
            }
            catch {
                console.log(error)
                toast.error(error.message)
            }
        }

    }

    const getUserCart = async (token) => {
        try {
            const response = await axios.post(`${backendUrl}/api/cart/get`, {}, { headers: { token } })
            if (response.data.success) {
                setCartItems(response.data.cartData)
            }

        }
        catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }


    const getCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            let itemInfo = products.find((product) => product._id === item)
            for (const size in cartItems[item]) {
                try {
                    if (cartItems[item][size] > 0) {
                        totalAmount += itemInfo.price * cartItems[item][size]
                    }
                }
                catch (err) {
                }
            }
        }
        return totalAmount


    }

    const getProductsData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/product/list`)
            if (response.data.success) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    useEffect(() => {
        getProductsData()
    }, [])

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
    }, [token])

    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch,
        cartItems, setCartItems, addToCart, getCartCount, updateQuantity, getCartAmount, navigate, backendUrl, getProductsData, setProducts, token, setToken

    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
