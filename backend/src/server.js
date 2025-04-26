import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


const paroleeSchema = new mongoose.Schema({
  name: String,
  locations: [{ lat: Number, lng: Number, timestamp: Date }],
  calls: [{ number: String, duration: Number, timestamp: Date }]
});
const Parolee = mongoose.model('Parolee', paroleeSchema);

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  role: { type: String, enum: ['police', 'lawyer', 'judge'] }
});
const User = mongoose.model('User', userSchema);


const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};


app.post('/api/login', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: "User not found" });
  const token = jwt.sign({ email: user.email, role: user.role }, process.env.JWT_SECRET);
  res.json({ token });
});

app.get('/cpi/parolee/:id', auth, async (req, res) => {
  const parolee = await Parolee.findById(req.params.id);
  res.json(parolee);
});

app.post('/api/location', async (req, res) => {
  const { paroleeId, lat, lng } = req.body;
  await Parolee.findByIdAndUpdate(paroleeId, {
    $push: { locations: { lat, lng, timestamp: new Date() } }
  });
  res.sendStatus(200);
});

app.listen(3001, () => console.log('Backend running on port 3001'));