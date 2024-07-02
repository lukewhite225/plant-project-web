const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Import route handlers
const indexRoutes = require('./routes/index');
const plantmonitorRoutes = require('./routes/plantmonitor');
const usersRoutes = require('./routes/users');

// Use route handlers
app.use('/', indexRoutes);
app.use('/plantmonitor', plantmonitorRoutes);
app.use('/users', usersRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});