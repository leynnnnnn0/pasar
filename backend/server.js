import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import fileUpload from 'express-fileupload';
import fileRoute from "./routes/file.route.js";
import authRoute from "./routes/auth.route.js";
import oauthRoute from "./routes/oauth.route.js";
dotenv.config();
const app = express();


app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(fileUpload());

app.use("/api/file", fileRoute);
app.use("/api/auth", authRoute);
app.use("/oauth", oauthRoute);

app.listen(process.env.PORT, () => {
    console.log('Server running on port 8080');
});

// google-auth-library

