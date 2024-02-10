import express, { Application, Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';

const app: Application = express();
const limiter = rateLimit({
 windowMs: 10 * 60 * 1000, // 10 minutes
 max: 5, // Limit each IP to 5 requests per window
 handler: (req: Request, res: Response) => {
   res.status(429).json({
     success: false,
     message: 'Too many requests, please try again later.',
   });
 },
});

// CORS middleware
app.use((req: Request, res: Response, next: NextFunction) => {
 res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
 res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
 next();
});

// Database connection (assuming './db' returns a Promise<void>)
const mongoDB = require('./db');
mongoDB()
 .then(() => {
   console.log('Database operation completed successfully.');
 })
 .catch((error: Error) => {
   console.error('An error occurred during database operation:', error);
 });

// JSON middleware
app.use(express.json());

// Rate limiter middleware
app.use(limiter);

// Routes
app.use('/api/createPost', require('./Routes/createPost')); // Use distinct paths for clarity
app.use('/api/analyzePost', require('./Routes/analyzePost'));

app.listen(5000, () => {
 console.log('Server listening on port 5000');
});
