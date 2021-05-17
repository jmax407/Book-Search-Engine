import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
<<<<<<< HEAD
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
=======
mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    token
    user {
     _id
    username
    email
  }
>>>>>>> develop
  }
`;

export const SAVE_BOOK = gql`
<<<<<<< HEAD
  mutation saveBook($bookId: ID!) {
      saveBook(bookId: $bookId) {
        title
        description
      }
=======
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
>>>>>>> develop
  }
`;

<<<<<<< HEAD
// export const REMOVE_BOOK = gql`
//   mutation removeBook($bookId: ID!) {
//     removeBook(bookId: $bookId) {
          
//       }
//   }
// `;
=======
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
>>>>>>> develop
