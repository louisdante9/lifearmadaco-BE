import express from 'express';
import userRoutes from './routes/userRoutes.js';
import serviceProviderRoutes from './routes/serviceProviderRoutes.js';
import blogRoutes from './routes/BlogRoutes.js';
import clientRoutes from './routes/clientRoutes.js'; // Import client routes




const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api', serviceProviderRoutes);
app.use('/api', blogRoutes);
app.use('/api', clientRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
