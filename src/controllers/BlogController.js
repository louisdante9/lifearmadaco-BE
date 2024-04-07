// controllers/BlogController.js

import BlogPost from '../models/BlogPost.js';

// Function to retrieve a list of blog posts
export const getBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.status(200).json(blogPosts);
  } catch (error) {
    console.error('Error retrieving blog posts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to retrieve details of a specific blog post
export const getBlogPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const blogPost = await BlogPost.findById(id);
    if (!blogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json(blogPost);
  } catch (error) {
    console.error('Error retrieving blog post by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to add a new blog post
export const addBlogPost = async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const newBlogPost = new BlogPost({ title, content, author });
    await newBlogPost.save();
    res.status(201).json(newBlogPost);
  } catch (error) {
    console.error('Error adding blog post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to update an existing blog post
export const updateBlogPost = async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  try {
    const updatedBlogPost = await BlogPost.findByIdAndUpdate(id, { title, content, author }, { new: true });
    if (!updatedBlogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json(updatedBlogPost);
  } catch (error) {
    console.error('Error updating blog post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to delete a blog post
export const deleteBlogPost = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlogPost = await BlogPost.findByIdAndDelete(id);
    if (!deletedBlogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
