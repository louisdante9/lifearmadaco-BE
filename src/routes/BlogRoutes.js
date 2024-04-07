// routes/BlogRoutes.js

import express from 'express';
import { getBlogPosts, getBlogPostById, addBlogPost, updateBlogPost, deleteBlogPost } from '../controllers/BlogController.js';

const router = express.Router();

router.get('/blog/posts', getBlogPosts);
router.get('/blog/posts/:id', getBlogPostById);
router.post('/blog/posts', addBlogPost);
router.put('/blog/posts/:id', updateBlogPost);
router.delete('/blog/posts/:id', deleteBlogPost);

export default router;
