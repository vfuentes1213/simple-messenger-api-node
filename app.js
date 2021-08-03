const express = require('express')
const app = express()

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./openapi.yml');
const messageRouter = require("./routes/message")

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/v1/message", messageRouter)
module.exports = app;