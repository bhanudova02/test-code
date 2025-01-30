const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoClient = require('mongodb').MongoClient;

const app = express();
const conStr = "mongodb://127.0.0.1:27017";

app.use(cors());
app.use(express.json());

// Connect to MongoDB
async function getDatabase() {
  const client = await mongoClient.connect(conStr, { useNewUrlParser: true, useUnifiedTopology: true });
  return client.db("react-js-tutorial-dashboard");
}

// User Registration
app.post('/api/auth/signup', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send({ msg: 'All fields are required' });
  }

  const db = await getDatabase();
  const existingUser = await db.collection('register_collection').findOne({ email });

  if (existingUser) {
    return res.status(400).send({ msg: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10); // Hash password

  const newUser = {
    username,
    email,
    password: hashedPassword
  };

  await db.collection('register_collection').insertOne(newUser);
  res.status(201).send({ msg: 'User registered successfully' });
});

// User Login
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ msg: 'Email and password are required' });
  }

  const db = await getDatabase();
  const user = await db.collection('register_collection').findOne({ email });

  if (!user) {
    return res.status(401).send({ msg: 'Invalid credentials' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password); // Check password

  if (!isPasswordValid) {
    return res.status(401).send({ msg: 'Invalid credentials' });
  }

  res.status(200).send({ msg: 'Login successful' });
});

// Start Server
app.listen(5000, () => {
  console.log('Server started on http://127.0.0.1:5000');
});
