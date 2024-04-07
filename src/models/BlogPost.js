// models/BlogPost.js

import mongoose from 'mongoose';

const { Schema } = mongoose;

const blogPostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;
