const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db/db');
const employeeRoutes = require('./routes/employeeRoutes');
const formRoutes = require("./routes/formRoutes");
const authRoutes = require("./routes/authRoutes");


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB("*");

// Routes

app.use('/api/employees', employeeRoutes);
app.use("/api/forms", formRoutes);
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
