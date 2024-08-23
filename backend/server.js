import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { PdfReader } from 'pdfreader';

const app = express();

app.use(cors({
    origin: 'http://localhost:3001'
}));

app.use(fileUpload());

app.post('/extract-text', (req, res) => {
    if (!req.files || !req.files.pdfFile) {
        return res.status(400).send('No file uploaded');
    }

    const fileBuffer = req.files.pdfFile.data;
    const pdfReader = new PdfReader();
    let text = '';

    pdfReader.parseBuffer(fileBuffer, (err, item) => {
        if (err) {
            console.error('Error:', err);
            return res.status(500).send('Error processing PDF');
        }
        if (item && item.text) {
            text += item.text;
        } else if (!item) {
            // End of file
            return res.send(text);
        }
    });
});

app.listen(8080, () => {
    console.log('Server running on port 8080');
});
