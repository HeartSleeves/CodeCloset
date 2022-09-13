import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      email
      snippets {
        _id
        snippetTitle
        createdAt
      }
    }
  }
`;

export const QUERY_SNIPPETS = gql`
  query getSnippets {
    snippets {
      _id
      snippetTitle
      snippetDescription
      snippetText
      snippetAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_SNIPPET = gql`
  query getSingleSnippet($snippetId: ID!) {
    snippet(snippetId: $snippetId) {
      _id
      snippetTitle
      snippetDescription
      snippetText
      snippetAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;
