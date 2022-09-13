const {Schema, model}=require('mongoose');
const dateFormat= require('../utils/dateFormat');

const snippetSchema= new Schema({
    snippetTitle:{
        type:String,
    },
    snippetDescription: {
        type: String,
    },
    snippetText:{
        type:String,
    },
    snippetAuthor:{
        type:String, 
        required: true,
        trim:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        get: (timestamp)=> dateFormat(timestamp),
    },
    comments: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Comment',
        }
    ],



})

const Snippet= model('Snippet', snippetSchema)
module.exports= Snippet;