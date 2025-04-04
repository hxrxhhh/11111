const express = require('express');
const multer = require('multer');
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Load service account key
const KEYFILEPATH = 'YOUR_SERVICE_ACCOUNT.json'; // Path to your downloaded JSON file
const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: SCOPES,
});

const drive = google.drive({ version: 'v3', auth });

// Upload video to Google Drive
app.post('/upload', upload.single('video'), async (req, res) => {
    try {
        const filePath = req.file.path;
        const response = await drive.files.create({
            requestBody: {
                name: req.file.originalname,
                parents: ['https://drive.google.com/drive/folders/11RbtaxCnbC9aRCsBs4iIk3vesAWvCyrJ'], // Replace with your Google Drive folder ID
            },
            media: {
                mimeType: req.file.mimetype,
                body: fs.createReadStream(filePath),
            },
        });
        fs.unlinkSync(filePath); // Delete file from server after upload
        res.send('Video uploaded successfully!');
    } catch (error) {
        res.status(500).send('Upload failed: ' + error.message);
    }
});

app.listen(3000, () => console.log('Server started on port 3000'));