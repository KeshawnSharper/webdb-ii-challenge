const express = require('express');

const db = require('./data/dbConfig.js');

const carRouter = require(`./carRouter`)

const server = express();

server.use(express.json());

server.use(`/api/cars`,carRouter)

module.exports = server;