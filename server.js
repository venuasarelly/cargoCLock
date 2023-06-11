const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/user');
const Message = require('./model/message')
const cors = require("cors")
const app = express();
app.use(express.urlencoded({ extended: true }))


app.use(cors())
// Connect to MongoDB
mongoose.connect('mongodb+srv://venu:CHINNU@cluster0.dt57vkn.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));


app.use(express.json());

app.get("/",cors(),(req,res)=>{

})
app.post('/register', async (req, res) => {
  try {
    const { username, email, password, usertype, address } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.json("exist");
    }

    const newUser = new User({ username, email, password, usertype, address });
    await newUser.save();

    res.json("notexist");
  } catch (error) {
    res.status(500).json({ message: 'Failed' });
  }
});

app.get('/allusers', async (req, res) => {
  try {
    // Retrieve all users from the database
    const allUsers = await User.find();

    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve users' });
  }
});


// Login route
app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        res.json("notexist");
      }
  
      // Check if password is correct
      if (password !== user.password) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      res.json("exist");
    } catch (error) {
      res.status(500).json({ message: 'Failed to login' });
    }
  });

  app.post('/messages', async (req, res) => {
    try {
      const { orderId, to, from, quantity, address, transporter } = req.body;
  
      // Create a new message object
      const newMessage = new Message({
        orderId,
        to,
        from,
        quantity,
        address,
        transporter
      });
  
      // Save the message in the database
      const savedMessage = await newMessage.save();
  
     res.json("submitted");
    } catch (error) {
     res.json("not");
    }
  });

  // app.post('/reply', async (req, res) => {
  //   try {
  //     const { orderId, price, message } = req.body;
  
  //     // Create a new reply object
  //     const newReply = new Reply({
  //       orderId,
  //       price,
  //       message
  //     });
  
  //     const savedReply = await newReply.save();
  
  //     res.status(201).json({ message: 'Reply sent successfully', savedReply });
  //   } catch (error) {
  //     res.status(500).json({ message: 'Failed to send reply' });
  //   }
  // });
  
  
// Start the server
app.listen(3001, () => {
  console.log('Server started on port 3000');
});
