import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    token
    user {
     _id
    username
    email
  }
  }
}
`;

export const SAVE_BOOK = gql`
mutation saveBook($input: bookInput!) {
  saveBook(input: $input ) {
    _id
    email
    username
    bookCount
    savedBooks {
      bookId
      title
      authors
      description
      link
      image
    }
  }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
  removeBook(bookId: $bookId ) {
   _id
    email
    username
    bookCount
    savedBooks {
      bookId
      title
      authors
      description
      link
      image
    }
    }
  }
`;