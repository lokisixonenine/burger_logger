// set/call dependencies/modules
const express = require("express");
const handlebars = require("handlebars");
const path = require("path");

// set port
const PORT = process.env.port || 3000;

// listen(port)
applicationCache.addEventListener(PORT, () => {
    console.log(`I am the port and I can hear you on: ${PORT}`)
})