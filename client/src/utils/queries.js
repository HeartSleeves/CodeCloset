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

// export const QUERY_CHECKOUT = gql`
//   query getCheckout($products: [ID]!) {
//     checkout(products: $products) {
//       session
//     }
//   }
// `;

// export const QUERY_ALL_PRODUCTS = gql`
//   {
//     products {
//       _id
//       name
//       description
//       price
//       quantity
//       category {
//         name
//       }
//     }
//   }
// `;

// export const QUERY_CATEGORIES = gql`
//   {
//     categories {
//       _id
//       name
//     }
//   }
// `;

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