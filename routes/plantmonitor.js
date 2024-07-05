const express = require('express');
const path = require('path');
const router = express.Router();
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const Gpio = require('onoff').Gpio;

const sensor = new Gpio(17,'in', 'both');// Number is subject to change

const getSensorData = () => {
    return sensor.readSync(); // Read GPIO pin value
};

router.get('/data', (req, res) => {
    const data = getSensorData();
    console.log('sensor num', data)
    res.json({ value: data});

});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/plantmonitor.html'));

});

module.exports = router;