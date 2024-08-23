import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import fileRoute from "./routes/file.route.js";

const app = express();

app.use(cors({
    origin: 'http://localhost:3001'
}));
app.use(fileUpload());

app.use("/api/file", fileRoute);

app.listen(8080, () => {
    console.log('Server running on port 8080');
});
