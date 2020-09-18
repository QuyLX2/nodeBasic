const express = require('express');

const router = express.Router();

const Post = require('../model/post');

router.get('/', (req, res) => {
    res.send('we are on posted');
});

router.post('/', async (req, res) => {
    // console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savePost = await post.save();
        res.json(savePost);
    } catch (err) {
        res.json({ message: err })
    }
});

//specific post
router.get('/:postId', async (req, res) => {
    // console.log(req.params.postId);
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post)
    } catch (err) {
        res.json({ message: err })
    }
});

//delete post
router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.remove({ _id: req.params.postId });
        res.json(removePost);
    } catch (err) {
        res.json({ message: err });
    }
});

//update a post
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } })
        res.json(updatePost);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports.router = router;