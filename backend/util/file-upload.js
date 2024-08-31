require('dotenv').config();
const multer = require('multer');

// Handling file storage with multer
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/resume/');
    },
    filename: (req, file, cb) => {
        const fileExtension = file.mimetype.split('/')[1];
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// File type filter
const fileType = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') cb(null, true);
    else cb(null, false);
};

// Multer upload setup
exports.upload = multer({ storage: fileStorage, fileFilter: fileType });

// File upload handler
exports.fileUpload = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    try {
        return res.status(200).json({ message: 'File uploaded successfully', filePath: req.file.path });
    } 
    catch (err) {
        // Handle any errors that occur during the upload
        return res.status(500).json({ message: 'Failed to upload file' });
    }
};
