const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname)));

// Route to serve the homepage (index.html) when the root is accessed
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Middleware for serving .html files when no extension is provided in the URL
app.use((req, res, next) => {
    if (req.path.indexOf('.') === -1) {
        var file = path.join(__dirname, req.path + '.html');
        
        // Set the Content-Type to 'text/html' for HTML files
        res.setHeader('Content-Type', 'text/html');

        res.sendFile(file, err => {
            if (err) {
                next();  // If the file is not found, go to the next middleware (possibly a 404 handler)
            }
        });
    } else {
        next();  // If the URL includes an extension, serve the file as is
    }
});

// Optional: 404 Handler for unmatched routes
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
    // Or send a custom 404 page
    // res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    console.log("Serving the home page:", indexPath);
    res.sendFile(indexPath);
});

app.use((req, res, next) => {
    if (req.path.indexOf('.') === -1) {
        var file = path.join(__dirname, req.path + '.html');
        console.log("Attempting to serve:", file);
        res.setHeader('Content-Type', 'text/html');
        res.sendFile(file, err => {
            if (err) {
                console.log("Error serving", file, ":", err.message);
                next();
            }
        });
    } else {
        next();
    }
});
