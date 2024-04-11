//http://player-ip-address:8000 - to access hosted site. This info is also shown in DWS LOG
//http://192.168.1.80:8000/index.html - also works
// This script will only work for players connected via Ethernet 

//npx webpack --config webpack.config.js

console.log("RLB App version 1.0")

const express = require('express');
const app = express();
const path = require('path');

const diClass = require('@brightsign/deviceinfo');

var networkConfigClass = require("@brightsign/networkconfiguration");
var nc = new networkConfigClass("eth0");

var NetworkStatus = require("@brightsign/networkstatus");
var networkStatus = new NetworkStatus();

const di = new diClass();
let SN = di.serialNumber;
let model = di.model;
let OSversion = di.osVersion;

console.log(SN);
console.log(model);
console.log(OSversion);

networkStatus.getInterfaceStatus("eth0").then(
    function(data) {
        console.log("***General Interface Data***");
        console.log(JSON.stringify(data));
        console.log(data);
        console.log("player IP Address: ",data.ipAddressList[0].address)
        console.log("Access Hosted Web page - Brightsign Series 5 Image Gallery - via:  http://" + data.ipAddressList[0].address + ":8000")
    })
.catch(
    function(data) {
        console.log(JSON.stringify(data));
});

// Serve static files from root directory (including index.html)
app.use(express.static(path.join(__dirname)));

// Serve images from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// specific route for '/' to serve index.html 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server on port 8000
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});