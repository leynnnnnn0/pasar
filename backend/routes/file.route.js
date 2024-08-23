import express from 'express';
import {PdfReader} from "pdfreader";
import {extractPdfText} from "../controllers/file.controller.js";
const router = express.Router();

router.post('/extract-text', extractPdfText);

export default router;