const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

// Enable compression
app.use(compression());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
