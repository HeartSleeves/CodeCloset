import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_SNIPPET = gql`
  mutation addSnippet($snippetTitle: String!, $snippetDescription: String!, $snippetText: String!) {
    addSnippet(snippetTitle: $snippetTitle, snippetDescription: $snippetDescription, snippetText: $snippetText) {
        _id
        snippetTitle
        snippetDescription
        snippetText
        snippetAuthor
        createdAt
        comments {
          _id
        }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $email: String!
    $password: String!
  ) {
    addUser(
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
