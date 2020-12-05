"use strict";
//Aplication Depenencies (require)
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const superagent = require('superagent');
let pg = require('pg');
const e = require('express');
const client = new pg.Client(process.env.DATABASE_URL);
// const axios =require('axios');
// const yelp = require('yelp-fusion');

//application setup (port,server,use cors)
const PORT = process.env.PORT || 3000;
const server = express();
server.use(cors());

