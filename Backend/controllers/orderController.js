import OrderModel from "../models/orderModel.js"
import UserModel from "../models/userModel.js"
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
      const {orderId, status} = req.body
      await OrderModel.findByIdAndUpdate(orderId, {status})
      res.json({success: true, message: "Order status updated successfully"})
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
    updateStatus
}