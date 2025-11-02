const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');


const connectDB = require('./config/db');

dotenv.config();
connectDB();

const authRoutes = require('./routes/userRoute');
const jobRoutes = require('./routes/jobroute');
const applicationRoutes = require('./routes/applicationroute');

const app = express();
app.use(cors());
app.use(express.json());



app.get('/health', (req, res) => res.json({ status: 'ok' }));  //healthy check to be displayed in response status as "ok"

app.use('/api/users',         authRoutes);
app.use('/api/jobs',          jobRoutes);
app.use('/api/applications',  applicationRoutes);

app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

app.use((err, req, res, next) => {
  if (err.name === 'MulterError') return res.status(400).json({ message: err.message });  //global handler for multer purposes.
  return res.status(500).json({ message: err.message || 'Server error' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));  //server running on local host port:5000
