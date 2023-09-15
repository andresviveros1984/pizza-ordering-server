const express = require('express');
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv")

dotenv.config()


let port = process.env.port || 8000 

const { 
    getPizzas, 
    getPizza, 
    getOrders, 
    getOrder, 
    createOrder, 
    updateOrder,
    deleteOrder,
    rewriteOrder
} = require("./handlers");

express()

    .use(express.json())
    .use(helmet())
    .use(morgan("tiny"))

    .get("/pizzas", getPizzas)
    .get("/pizzas/:pizzaId", getPizza)
    .get("/orders", getOrders)
    .get("/orders/:orderId", getOrder)

    .post("/orders", createOrder)

    .patch("/orders/:orderId", updateOrder)

    .put("/orders/:orderId", rewriteOrder)

    .delete("/orders/:orderId", deleteOrder)


    .listen(port, () => {
        console.log(`Server listening on port ${8000}`)
    });