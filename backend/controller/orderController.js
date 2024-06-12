import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

/*
    @Desc Create new Order
    @route POST api/orders
    @access Private
*/
const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order Items')
    } else {
        const order = new Order({
            orderItems: orderItems.map((x) => ({
                ...x,
                product: x._id,
                _id: undefined
            })),
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        });
        const createOrder = await order.save();
        res.status(201).json(createOrder);
    }
})


/*
    @Desc get logged in users Order
    @route GET api/orders/myorders
    @access Private
*/
const getMyOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id })
    res.status(200).json(orders)
})


/*
    @Desc get order by ID
    @route GET api/orders/:id
    @access Private
*/
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')

    if (order) {
        res.status(200).json(order)
    } else {
        res.status(400)
        throw new Error('Order Not found')
    }

})


/*
    @Desc Update Orders to Pay
    @route GET api/orders/:id/pay
    @access Private
*/
const updateOrderToPaid = asyncHandler(async (req, res) => {
    res.send("Update order to paid")
})

/*
    @Desc Update Orders to deliver
    @route GET api/orders/:id/deliver
    @access Private/admin
*/
const updateOrderToDeliverd = asyncHandler(async (req, res) => {
    res.send("Update order to Delivered")
})


/*
    @Desc Get all Orders
    @route GET api/orders
    @access Private/admin
*/
const getAllOrders = asyncHandler(async (req, res) => {
    res.send("get all Orders")
})

export {
    addOrderItems,
    getMyOrders,
    getAllOrders,
    getOrderById,
    updateOrderToDeliverd,
    updateOrderToPaid
};