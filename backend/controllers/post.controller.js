
import Post from "../models/post.model.js"

export const getPosts = async(req,res) => {
    const posts = await Post.find()
    res.status(200).json(posts)
}

export const getpost = async (req,res) => {
    const posts = await Post.findOne({slug: req.params.slug})
    res.status(200).json(posts)
} 

export const createpost = async (req,res) => {
    const newPost = new Post(req.body)

    const post = await newPost.save()
    res.status(200).json(post)
}

export const deletepost = async (req,res) => {

    const post = await Post.findByIdAndDelete(req.params.id)
    res.status(200).json("Post has been deleted")
}