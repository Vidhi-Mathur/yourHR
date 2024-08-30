require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const candidateRoutes = require('./routes/candidate-route');
const { fileUpload, upload } = require('./util/file-upload');

const app = express();

app.use(cors({
    origin: '*'
}));

// Parsing JSON bodies
app.use(express.json({ limit: '50mb' }));

// Parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Forwarding routes
app.use('/', candidateRoutes);
app.post('/upload-resume', upload.single('resume'), fileUpload);

// Serving static files
app.use('/uploads/resume', express.static('uploads/resume'));

// Error handling
app.use((err, req, res, next) => {
    const code = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(code).json({ message: message });
});

// Listening to the server
mongoose.connect(process.env.MONGODB_URI)
    .then(() => app.listen(3000))
    .catch((err) => console.log(err));
