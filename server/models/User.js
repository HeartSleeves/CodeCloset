const {Schema, model}= require('mongoose');
const bcrypt =require('bcrypt');

const snippetSchema= require('./Snippet');
const commentSchema= require('./Comment');

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

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

userSchema.methods.isCorrectPassword = async function(password){
    return await bcrypt.compare(password,this.password);
};

// userSchema.virtual('snippetCount').get(function(){
//     return this.savedSnippets.length;
// });

const User =model('User', userSchema);

module.exports= User;