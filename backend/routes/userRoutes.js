import express from 'express';
import User from '../models/userModel.js';
import News from '../models/newsModel.js';
import { isAuth, generateToken } from '../utils.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { re } from 'mathjs';

const userRouter = express.Router();

userRouter.post(
    '/signin', 
    expressAsyncHandler(async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user),
                });
                return;
            }

        }
        res.status(401).send({ message: "invalid email or password"})
    })
);

userRouter.post(
    '/signup',
    expressAsyncHandler(async (req, res) => {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
        });
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            res.status(400).send({ message: 'Email is already registered' });
            return;
        }
        const existingUser2 = await User.findOne({ phone: req.body.phone });
        if (existingUser2) {
            res.status(400).send({ message: 'Phone Number is already registered' });
            return;
        }
        const user = await newUser.save();
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user),
        });
    })
);

userRouter.put(
    '/profile',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.user._id);
      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
          user.password = bcrypt.hashSync(req.body.password, 8);
        }
  
        const updatedUser = await user.save();
        res.send({
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          isAdmin: updatedUser.isAdmin,
          token: generateToken(updatedUser),
        });
      } else {
        res.status(404).send({ message: 'User not found' });
      }
    })
  );

userRouter.post(
  '/newsletter',
  expressAsyncHandler(async (req, res) => {
    const newNewsletter = new News({
      email: req.body.email,
    });
    const news = await newNewsletter.save();
    res.send({
      email: news.email,
    })
  })
)
  
export default userRouter;