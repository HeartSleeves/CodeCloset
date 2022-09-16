const { AuthenticationError } = require('apollo-server-express');
const { User, Snippet, Comment, Tag } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('snippets');
    },
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate('snippets');
    },
    snippets: async (parent, { email }) => {
      const params = email ? { email } : {};
      return Snippet.find(params).sort({ createdAt: -1 });
    },
    snippet: async (parent, { snippetId }) => {
      return Snippet.findOne({ _id: snippetId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('snippets');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addSnippet: async (parent, { snippetTitle, snippetDescription, snippetText }, context) => {
      if (context.user) {
        const snippet = await Snippet.create({
          snippetTitle,
          snippetDescription,
          snippetText,
          snippetAuthor: context.user.email,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { snippets: snippet._id } }
        );

        return snippet;
        
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { snippetId, commentText }, context) => {
      if (context.user) {
        return Snippet.findOneAndUpdate(
          { _id: snippetId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.email },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { snippetId, commentId }, context) => {
      if (context.user) {
        return Snippet.findOneAndUpdate(
          { _id: snippetId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // addTag: async (parent, { tagText }, context) => {
    //   if (context.user) {
    //     const tag = await Tag.create({
    //       tagText,
    //     });

    //     await Snippet.findOneAndUpdate(
    //       { _id: context.snippet._id },
    //       { $addToSet: { tags: tag._id } }
    //     );

    //     return tag;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
}
}
module.exports = resolvers;
