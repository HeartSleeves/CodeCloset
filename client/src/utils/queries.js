import { gql } from '@apollo/client';

export const QUERY_SNIPPET = gql`
  {
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

export const QUERY_COMMENTS = gql`
  {
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      _id
      email
      snippets {
        _id
        snippetTitle
        snippetDescription
        snippetText
        snippetAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
      snippets {
        _id
        snippetTitle
        snippetDescription
        snippetText
        snippetAuthor
        createdAt
      }
    }
  }
`;