const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema= new Schema({
    commentText:{
        type:String,
    },
    commentAuthor:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
})

const Comment= model('Comment',commentSchema);

module.exports= Comment;