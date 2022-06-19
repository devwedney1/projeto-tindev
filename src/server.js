const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes')

const server = express();

mongoose.connect('mongodb+srv://devlucaswedney:01030507dev@cluster0.qfn2x.mongodb.net/?retryWrites=true&w=majority'
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);