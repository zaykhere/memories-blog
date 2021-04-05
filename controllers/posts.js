const mongoose = require("mongoose").set('debug', true);
const postMessage = require("../models/postMessage");

// @desc Get all bootcamps
//@route GET /posts/
//@access Public
exports.getPosts = async (req,res) => {
  try{
    const postMessages = await postMessage.find();
    res.json(postMessages);
  }
  catch(ex){
    console.log(ex);
  }
}

// @desc POST all bootcamps
//@route POST /posts/
//@access Public

exports.createPost = async (req,res) => {
 
  try{
    const newPost = postMessage.create(req.body);
    res.json(newPost);
  }

  catch(ex){
    console.log(ex);
  }
}

// @desc UPDATE all bootcamps
//@route POST /posts/:id
//@access Public

exports.updatePost = async (req,res) => {
  const {id: _id} = req.params;
  const data= req.body;
  if(!mongoose.Types.ObjectId.isValid(_id)) 
    return console.log("no post exists");
   try {
    const editedPost= await postMessage.findByIdAndUpdate(_id, data, {new: true})
    res.json(editedPost); 
   } catch (error) {
     console.log(error);
   }
  
}

exports.deletePost = async(req,res) => {
  const {id: _id}= req.params;
  if(!mongoose.Types.ObjectId.isValid(_id)) 
    return console.log("no post exists");
  await postMessage.findByIdAndRemove(_id);
  res.json({message: 'Post deleted successfully'});  
}

exports.likePost = async(req,res) => {
  const {id: _id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(_id)) 
    return console.log("no post exists");
  const post= await postMessage.findById(_id);
  const updatedPost = await postMessage.findByIdAndUpdate(_id, {likeCount: post.likeCount+1}, {new:true})
  res.json(updatedPost);  
}




