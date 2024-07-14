const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/users.html'));

});

router.post('/', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    res.send(`username: ${username} Password: ${password}`);
});


module.exports = router;