// import { currency } from "../../admin/src/App.jsx"
import OrderModel from "../models/orderModel.js"
import UserModel from "../models/userModel.js"
import Strip from "stripe"

//global variables
const currency = "inr"
const deliveryCharges = 100

//Gate way initialized
const stripe = new Strip(process.env.STRIPE_SECRET_KEY)

//Placing Orders using COD method

const placeOrder = async (req, res) => {
    //logic to place an order
    try {

        const { userId, items, amount, address } = req.body
        const orderData = { userId, items, amount, address, paymentMethod: "COD", payment: false, date: Date.now() }
        const newOrder = new OrderModel(orderData)
        await newOrder.save()

        await UserModel.findByIdAndUpdate(userId, { cartData: {} })
        res.json({ success: true, message: "Order Placed Successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }

}

// placing orders using stripe metgod

const placeOrderStripe = async (req, res) => {
    //logic to place an order
    try {
        const { userId, items, amount, address } = req.body
        const { origin } = req.headers
        const orderData = { userId, items, amount, address, paymentMethod: "Stripe", payment: false, date: Date.now() }
        const newOrder = new OrderModel(orderData)
        await newOrder.save()
        const line_items = items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        }))
        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: "Delivery Charges"
                },
                unit_amount: deliveryCharges * 100
            },
            quantity: 1
        })
        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: "payment",
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
        })
        res.json({
            success: true,
            session_url: session.url
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })

    }
}
// verify strip
const verifyStrip = async (req, res) => {
    const { orderId, success, userId } = req.body
    try {
        if (success === 'true') {
            await OrderModel.findByIdAndUpdate(orderId, { payment: true });
            await userModel.findByIdAndUpdate(userId, { cartData: {} })
            res.json({ success: true, message: "Order Placed Successfully" })

        }
        else {
            await OrderModel.findByIdAndDelete(orderId)
            res.json({ success: false })
        }
    } catch (error) {

        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }

}
//Placing order using razorpay method

const placeOrderRazorpay = async (req, res) => {
    //logic to place an order
}

// ALl orders Data for admin panel

const allOrders = async (req, res) => {
    //logic to get all orders
    try {
        const orders = await OrderModel.find({})
        res.json({ success: true, message: "Orders fetched successfully", orders })
    } catch (error) {

        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
}

//User Ordera data for frontend

const userOrders = async (req, res) => {
    //logic to get user orders
    try {
        const { userId } = req.body
        const orders = await OrderModel.find({ userId })
        res.json({ success: true, message: "Orders fetched successfully", orders })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
}

// update order status

const updateStatus = async (req, res) => {
    //logic to update order status
    try {
        const { orderId, status } = req.body
        await OrderModel.findByIdAndUpdate(orderId, { status })
        res.json({ success: true, message: "Order status updated successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
}


export {
    placeOrder,
    placeOrderStripe,
    placeOrderRazorpay,
    allOrders,
    userOrders,
    updateStatus,
    verifyStrip
}