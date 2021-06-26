const { Router } = require('express');
const router = Router();
const Post = require('../models/postModel')



router.patch('/', async (req, res) => {
  try{
    const currPost = await Post.findById(req.body.idPost)
    if(!currPost.likes.includes(res.locals.userId)){
      currPost.likes.push(res.locals.userId)
      currPost.save()
    }else{
      currPost.likes.splice(currPost.likes.indexOf(res.locals.userId),1)
      currPost.save()
    }
    res.sendStatus(200)
  }catch(err){
    console.error(err.message)
  }
});


module.exports = router;
