const express = require('express');
const app = express();
const connectDB = require('./config/db');

connectDB();

app.get('/',(req,res) => res.json({ msg : "Hello World"  }));

app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server Running on ${PORT}`));