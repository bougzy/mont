



// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');
// const multer = require('multer');
// const path = require('path');
// const { storage, firestore } = require('./firebase');
// require('dotenv').config();

// const app = express();

// app.use(express.json());

// app.use(cors({}));

// const PORT = process.env.PORT || 5000;


// // Connect to MongoDB
// mongoose.connect('mongodb+srv://lista:lista@lista.mozvr.mongodb.net/lista', { })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));


// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Schema Definitions
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   isBlocked: { type: Boolean, default: false },
// });

// const propertySchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   address: String,
//   phoneNumber: String,
//   images: [String],
//   videos: [String],
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
// });

// // Models
// const User = mongoose.model('User', userSchema);
// const Property = mongoose.model('Property', propertySchema);

// // Middleware for authentication
// const authenticateToken = (req, res, next) => {
//   const token = req.header('auth-token');
//   if (!token) return res.status(401).send('Access Denied');

//   try {
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = verified;
//     next();
//   } catch (err) {
//     res.status(400).send('Invalid Token');
//   }
// };

// // Setup multer for file uploads
// const multerStorage = multer.memoryStorage();
// const upload = multer({ storage: multerStorage });

// // Function to upload files to Firebase Storage
// const uploadFileToFirebase = (file, folder) => {
//   return new Promise((resolve, reject) => {
//     const storageRef = storage.ref();
//     const fileRef = storageRef.child(`${folder}/${Date.now()}-${file.originalname}`);

//     const uploadTask = fileRef.put(file.buffer);

//     uploadTask.on(
//       'state_changed',
//       null,
//       (error) => reject(error),
//       () => {
//         uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
//           resolve(downloadURL);
//         });
//       }
//     );
//   });
// };

// // Root route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Apartment Renting API');
// });

// // User Registration
// app.post('/register', async (req, res) => {
//   const { username, email, password } = req.body;
//   if (!email) return res.status(400).send("Email is required");
  
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password, salt);

//   const user = new User({
//     username,
//     email,
//     password: hashedPassword,
//   });

//   try {
//     const savedUser = await user.save();
//     res.send({ user: user._id });
//   } catch (err) {
//     if (err.code === 11000) {
//       return res.status(400).send('User with this email already exists');
//     }
//     res.status(400).send(err);
//   }
// });

// // Admin Login with hardcoded credentials
// app.post('/admin/login', async (req, res) => {
//   const { username, password } = req.body;

//   if (username === 'admin' && password === 'admin123') {
//     const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.header('auth-token', token).send({ token });
//   } else {
//     res.status(403).send('Invalid Admin Credentials');
//   }
// });

// // User Login
// app.post('/login', async (req, res) => {
//   const user = await User.findOne({ username: req.body.username });
//   if (!user || user.isBlocked) return res.status(400).send('Access denied');

//   const validPass = await bcrypt.compare(req.body.password, user.password);
//   if (!validPass) return res.status(400).send('Invalid password');

//   const token = jwt.sign({ _id: user._id, role: 'user' }, process.env.JWT_SECRET, { expiresIn: '1h' });
//   res.header('auth-token', token).send({ token });
// });

// // Property route
// app.post('/property', authenticateToken, upload.fields([{ name: 'images', maxCount: 5 }, { name: 'videos', maxCount: 2 }]), async (req, res) => {
//   try {
//     const { title, description, address, phoneNumber } = req.body;

//     // Validate inputs
//     if (!title || !description || !address || !phoneNumber) {
//       return res.status(400).send('All fields are required');
//     }

//     // Upload images
//     const imageUrls = req.files['images'] ? await Promise.all(req.files['images'].map(file => uploadFileToFirebase(file, 'images'))) : [];
//     // Upload videos
//     const videoUrls = req.files['videos'] ? await Promise.all(req.files['videos'].map(file => uploadFileToFirebase(file, 'videos'))) : [];

//     // Save property metadata to Firestore
//     const propertyRef = firestore.collection('properties').doc();
//     await propertyRef.set({
//       title,
//       description,
//       address,
//       phoneNumber,
//       images: imageUrls,
//       videos: videoUrls,
//       user: req.user._id,
//     });

//     res.status(201).json({ id: propertyRef.id, title, description, address, phoneNumber, images: imageUrls, videos: videoUrls });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // User routes
// app.get('/user/properties', authenticateToken, async (req, res) => {
//   try {
//     const properties = await Property.find({ user: req.user._id });
//     res.send(properties);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// // Delete property
// app.delete('/property/:id', authenticateToken, async (req, res) => {
//   try {
//     const property = await Property.findOneAndDelete({ _id: req.params.id, user: req.user._id });
//     if (!property) return res.status(404).send('Property not found or unauthorized');
//     res.send('Property deleted successfully');
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// // Admin routes
// app.get('/admin/users', adminAuth, async (req, res) => {
//   try {
//     const users = await User.find();
//     res.send(users);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// app.post('/admin/block-user', adminAuth, async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.body.userId, { isBlocked: true }, { new: true });
//     res.send(user);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// app.post('/admin/unblock-user', adminAuth, async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.body.userId, { isBlocked: false }, { new: true });
//     res.send(user);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// app.post('/admin/delete-property', adminAuth, async (req, res) => {
//   try {
//     const property = await Property.findByIdAndDelete(req.body.propertyId);
//     if (!property) return res.status(404).send('Property not found');
//     res.send(property);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// // Fetch all properties
// app.get('/properties', async (req, res) => {
//   try {
//     const properties = await Property.find().populate('user', 'username');
//     res.send(properties);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// // // The "catchall" handler: for any request that doesn't match an API route, send back the React app
// // // Change 'build' to 'dist' in these lines
// app.use(express.static(path.join(__dirname, 'client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({}));

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Schema Definitions
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isBlocked: { type: Boolean, default: false },
});

const propertySchema = new mongoose.Schema({
  title: String,
  description: String,
  address: String,
  phoneNumber: String,
  images: [String],
  videos: [String],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

// Models
const User = mongoose.model('User', userSchema);
const Property = mongoose.model('Property', propertySchema);

// Middleware for authentication
const authenticateToken = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads', file.fieldname);
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });



// User Registration
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  if (!email) return res.status(400).send("Email is required");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).send('User with this email already exists');
    }
    res.status(400).send(err);
  }
});

// Admin Login with hardcoded credentials
app.post('/admin/login', async (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin123') {
    const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.header('auth-token', token).send({ token });
  } else {
    res.status(403).send('Invalid Admin Credentials');
  }
});

// User Login
app.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user || user.isBlocked) return res.status(400).send('Access denied');

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send('Invalid password');

  const token = jwt.sign({ _id: user._id, role: 'user' }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.header('auth-token', token).send({ token });
});

// Property route
app.post('/property', authenticateToken, upload.fields([{ name: 'images', maxCount: 5 }, { name: 'videos', maxCount: 2 }]), async (req, res) => {
  try {
    const { title, description, address, phoneNumber } = req.body;

    // Validate inputs
    if (!title || !description || !address || !phoneNumber) {
      return res.status(400).send('All fields are required');
    }

    // Get file paths
    const imageUrls = req.files['images'] ? req.files['images'].map(file => file.path) : [];
    const videoUrls = req.files['videos'] ? req.files['videos'].map(file => file.path) : [];

    // Save property metadata to MongoDB
    const property = new Property({
      title,
      description,
      address,
      phoneNumber,
      images: imageUrls,
      videos: videoUrls,
      user: req.user._id,
    });

    await property.save();
    res.status(201).json({ id: property._id, title, description, address, phoneNumber, images: imageUrls, videos: videoUrls });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// User routes
app.get('/user/properties', authenticateToken, async (req, res) => {
  try {
    const properties = await Property.find({ user: req.user._id });
    res.send(properties);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete property
app.delete('/property/:id', authenticateToken, async (req, res) => {
  try {
    const property = await Property.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!property) return res.status(404).send('Property not found or unauthorized');
    res.send('Property deleted successfully');
  } catch (err) {
    res.status(400).send(err);
  }
});

// Admin routes
app.get('/admin/users', authenticateToken, async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post('/admin/block-user', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.body.userId, { isBlocked: true }, { new: true });
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post('/admin/unblock-user', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.body.userId, { isBlocked: false }, { new: true });
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post('/admin/delete-property', authenticateToken, async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.body.propertyId);
    if (!property) return res.status(404).send('Property not found');
    res.send(property);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Fetch all properties
app.get('/properties', async (req, res) => {
  try {
    const properties = await Property.find().populate('user', 'username');
    res.send(properties);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Static file serving
app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
