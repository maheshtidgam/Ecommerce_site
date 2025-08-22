import UserModel from "../models/userModel.js";
//add products to userCart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;
        const userData = await UserModel.findById(userId)
        let cartData = await userData.cartData
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            }
            else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        await UserModel.findByIdAndUpdate(userId, { cartData })
        res.json({ success: true, message: "Product added to cart successfully" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
}

//update user cart
const updateCart = async (req, res) => {
    try {

        const { userId, itemId, size, quantity } = req.body
        const userData = await UserModel.findById(userId)
        let cartData = await userData.cartData
        cartData[itemId][size] = quantity
        await UserModel.findByIdAndUpdate(userId, { cartData })
        res.json({ success: true, message: "Cart updated successfully" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
}

//get user cart
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body
        const userData = await UserModel.findById(userId)
        const cartData = await userData.cartData
        res.json({ success: true, message: "Cart fetched successfully", cartData })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
}



export { addToCart, updateCart, getUserCart }