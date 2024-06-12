import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

/*
    @Desc Create new Order
    @route POST api/orders
    @access Private
*/
const addOrderItems = asyncHandler(async (req, res) => {
    res.send("add order items")
})


/*
    @Desc get logged in users Order
    @route GET api/orders/myorders
    @access Private
*/
const getMyOrders = asyncHandler(async (req, res) => {
    res.send("Get my Orders")
})


/*
    @Desc get order by ID
    @route GET api/orders/:id
    @access Private
*/
const getOrderById = asyncHandler(async (req, res) => {
    res.send("Get order by id")
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