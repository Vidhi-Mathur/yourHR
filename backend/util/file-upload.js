require('dotenv').config();
const multer = require('multer');
const Dropbox = require('dropbox').Dropbox;
const fetch = require('node-fetch');

const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN, fetch: fetch });

//Handling file storage with multer, not storing locally
const fileStorage = multer.memoryStorage()

// File type filter
const fileType = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') cb(null, true);
    else cb(null, false);
};

// Multer upload setup
exports.upload = multer({ storage: fileStorage, fileFilter: fileType });

// File upload handler
exports.fileUpload = async (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    try {
        const dropboxPath = `/uploads/resume/${Date.now()}-${req.file.originalname}`;
        const response = await dbx.filesUpload({ path: dropboxPath, contents: req.file.buffer });
        const sharedLink = await dbx.sharingCreateSharedLinkWithSettings({ path: response.result.path_lower });
        return res.status(200).json({ filePath: sharedLink.result.url.replace('?dl=0', '?dl=1') })
    } 
    catch(err){
        console.log(err)
        next(err)
    }
}