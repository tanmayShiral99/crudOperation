const express = require('express');
const router = express.Router();
const studInfo = require('../models/form');


//Gives you all post which you stored in database
router.get('/', async(req,res)=>{
    const getPost=  await studInfo.find();
    console.log(getPost);
    res.json(getPost);
})

//To get specific post 
router.get('/:id',async(req,res)=>{
    const specPost= await studInfo.find({name: req.params.id});
    try {
        // console.log(req.body);
        if (!specPost) {
            return res.status(404).send();
        }else{
            res.json(specPost);
        }
    } catch (error) {
        res.status(404).json({message:error});
    }
 })

 router.patch('/:id',async(req,res)=>{
  const updatedPost=  await studInfo.updateOne({name:req.params.id},{$set : {name: req.body.name}});
  try {
    res.json(updatedPost);
  } catch (error) {
    res.json({message:error}).status('404');
  }
 });

router.delete('/:id',async(req,res)=>{

    try {
        const deletedPost = await studInfo.deleteOne({name: req.params.id});
        res.json(deletedPost);
    
    } catch (error) {
        res.json({message:error}).status(404);
    }
   
})

router.post('/', async (req,res)=>{
    console.log(req.body);
    const post =new studInfo({
        name :req.body.name,
        lastName : req.body.lastName,
        location:req.body.location  
    });
    try{
    const savePost = await post.save()
     res.json(savePost);
    }catch(err){
        res.json({message : err})
    }
})


module.exports =router;