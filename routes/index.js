import express from "express";

import {getVideos} from '../controllers/videosController.js';

const router = express.Router();

router.get('/videos', getVideos);

export default router;