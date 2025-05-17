const express = require('express');
const cors=require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); 
const transactionRoutes=require('./routes/transactions');

dotenv.config();  

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api/auth', authRoutes); 
app.use('/api/transactions',transactionRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});