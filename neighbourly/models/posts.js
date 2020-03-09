/* Posts mongoose model */
const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    posterName: {
        type: String,
        required: true,
        minlegth: 1,
        trim: true
    },
    comment: {
        type: String,
        required: true,
        minlegth: 1,
        trim: true
    },
    date: {
        type: String,
        required: true,
        minlegth: 1,
    }
})

const PostSchema = new mongoose.Schema({
    posterName: {
        type: String,
        required: true,
        minlegth: 1,
        trim: true
    },
    posterLocation: {
        type: String,
        required: true,
        minlegth: 1,
        trim: true
    },
    postTitle: {
        type: String,
        required: true,
        minlegth: 1,
        trim: true
    },
    postDifficulty: {
        type: Number,
        required: true,
        // default: 1
    },
    taskDate: {
        type: String,
        required: true,
        minlegth: 1,
        trim: true
    },
    jobDescription: {
        type: String,
        required: true,
        minlegth: 1,
    },
    comments: [commentSchema]
})

const Post = mongoose.model('Post', PostSchema);

module.exports = { Post }