const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    snippets: [Snippet]!
  }

  type Snippet {
    _id: ID
    snippetTitle: String
    snippetDescription: String
    snippetText: String
    snippetAuthor: String
    createdAt: String
    comments: [Comment]!
  }
  
  type Comment{
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Tag{
    _id: ID
    tagText: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(email:String!):User
    snippets(email: String): [Snippet]!
    snippet(snippetId: ID!): Snippet
    me: User
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSnippet(snippetTitle: String!, snippetDescription: String!, snippetText: String!): Snippet
    addComment(snippetId: ID!, commentText: String!): Snippet
    removeComment(snippetId: ID!, commentId: ID!): Snippet
  }
`;

module.exports = typeDefs;
