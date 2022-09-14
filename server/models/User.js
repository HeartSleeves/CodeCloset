const {Schema, model}= require('mongoose');
//const bcrypt =require('bcrypt');

//const snippetSchema= require('./Snippet');

const userSchema= new Schema(
    {
        email:{
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required:true,
        },
        snippets: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Snippet',
            }
        ],
        comments: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Comment',
            }
        ],
    },
    // {
    //     toJSON: {
    //         virtuals: true,
    //     },
    // }
);

userSchema.methods.checkPassword = async function(password){
    return compare(password,this.password);
};

userSchema.virtual('snippetCount').get(function(){
    return this.savedSnippets.length;
});

const User =model('User', userSchema);

module.exports= User;