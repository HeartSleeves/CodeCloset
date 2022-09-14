import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser $email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_SNIPPET = gql`
  mutation addSnippet($snippetText: String!) {
    addSnippet(snippetText: $snippetText) {
      _id
      snippetTitle
      snippetDescription
      snippetText
      snippetAuthor
      createdAt
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment( $commentText: String!) {
    addComment(commentText: $commentText) {
      _id
      commentText
      commentAuthor
      createdAt
    //   comments {
    //     _id
    //     commentText
    //     createdAt
    //   }
    }
  }
`;
