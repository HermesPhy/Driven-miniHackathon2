import express from "express";

import {getVideos} from '../controllers/videosController.js';
import {getQuestions} from '../controllers/questionsController.js';

const router = express.Router();

router.get('/videos/:id', getVideos);
router.get('/questions/:id', getQuestions);

export default router;