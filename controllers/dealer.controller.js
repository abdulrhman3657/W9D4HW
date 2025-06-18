import Dealer from "../models/dealer.js"

// import Product from '../models/product.model.js';
import mongoose from 'mongoose';

// export const getProducts = async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json({success: true, data: products})
//     } catch (error) {
//         console.log("fetch error:", error);
//         return res.status(500).json({success: false, message: "server error"})
//     }
// }

// export const createProduct = async (req, res) => {
//     const product = req.body; // user will send this data

//     if(!product.name || !product.price || !product.image) {
//         return res.status(400).json({success: false, message: "please provide all fields"})
//     }

//     const newProduct =  await new Product(product);

//     try {
//         await newProduct.save();
//         res.status(201).json({success: true, data: newProduct})
//     } catch (error) {
//         console.error("Error in create product:", error.message);
//         res.status(500).json({success: false, message: "server Error"})
//     }

// }

// export const deleteProduct = async (req, res) => {
//     const {id} = req.params;
//     // console.log("id:", id);

//     // console.log(typeof(id)) is a String

//     if (!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({success: false, message: "product not found"})
//     }
 
//     try{
//         await Product.findByIdAndDelete(id);
//         res.status(200).json({success: true, message: "product deleted"})
//     } catch (error) {
//         console.log("delete error:", error);
//         res.status(500).json({success: false, message: "server error"})
//     }

// }

// export const updateProduct = async (req, res) => {
//     const { id }  = req.params;
    
//     // console.log(typeof(id))

//     const product = req.body;

//     if (!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({success: false, message: "product not found"})
//     }

//     try{
//         const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
//         res.status(200).json({success: true, data: updatedProduct})
//     } catch (error) {
//         console.log("update error:", error);
//         res.status(500).json({success: false, message: "server error"})
//     }

// }

export const createDealer = async (req, res) => {

    try {

    const dealer = new Dealer(req.body)
    await dealer.save();

    console.log(dealer)

    res.status(201).json(dealer)
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: error
        })
    }

}

export const getDealers = async (req, res) => {

    const dealers = await Dealer.find()

    console.log(dealers)

    res.status(200).json(dealers)

}

export const getDealer = async (req, res) => {

}

export const updateDealer = async (req, res) => {

}

export const deleteDealer = async (req, res) => {

}


// import { generateToken } from "../lib/utils.js";
// import User from "../models/user.model.js";
// import bcrypt from "bcryptjs";
// import cloudinary from "../lib/cloudinary.js";

// export const signup = async (req, res) => {
//   const { fullName, email, password } = req.body;
//   try {
//     if (!fullName || !email || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     if (password.length < 6) {
//       return res.status(400).json({ message: "Password must be at least 6 characters" });
//     }

//     const user = await User.findOne({ email });

//     if (user) return res.status(400).json({ message: "Email already exists" });

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = new User({
//       fullName,
//       email,
//       password: hashedPassword,
//     });

//     if (newUser) {
//       // generate jwt token here
//       generateToken(newUser._id, res);
//       await newUser.save();

//       res.status(201).json({
//         _id: newUser._id,
//         fullName: newUser.fullName,
//         email: newUser.email,
//         profilePic: newUser.profilePic,
//       });
//     } else {
//       res.status(400).json({ message: "Invalid user data" });
//     }
//   } catch (error) {
//     console.log("Error in signup controller", error.message);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// export const login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     const isPasswordCorrect = await bcrypt.compare(password, user.password);
//     if (!isPasswordCorrect) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // genereate the token
//     generateToken(user._id, res);

//     res.status(200).json({
//       _id: user._id,
//       fullName: user.fullName,
//       email: user.email,
//       profilePic: user.profilePic,
//     });
//   } catch (error) {
//     console.log("Error in login controller", error.message);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// export const logout = (req, res) => {
//   try {
//     res.cookie("jwt", "", { maxAge: 0 });
//     res.status(200).json({ message: "Logged out successfully" });
//   } catch (error) {
//     console.log("Error in logout controller", error.message);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// export const updateProfile = async (req, res) => {
//   try {
//     const { profilePic } = req.body;
//     const userId = req.user._id;

//     if (!profilePic) {
//       return res.status(400).json({ message: "Profile pic is required" });
//     }

//     const uploadResponse = await cloudinary.uploader.upload(profilePic);
//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       { profilePic: uploadResponse.secure_url },
//       { new: true }
//     );

//     res.status(200).json(updatedUser);
//   } catch (error) {
//     console.log("error in update profile:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// export const checkAuth = (req, res) => {
//   try {
//     res.status(200).json(req.user);
//   } catch (error) {
//     console.log("Error in checkAuth controller", error.message);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };