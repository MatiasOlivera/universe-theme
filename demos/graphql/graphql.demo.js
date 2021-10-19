// https://github.com/apollographql/apollo-client
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'https://graphql.example.com'
});

// Query
client
  .query({
    query: gql`
      query Persons {
        allPersons(last: 2) {
          name
          age
          posts {
            title
          }
        }
      }
    `
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Query with fragments
client
  .query({
    query: gql`
      query Users {
        allUsers {
          ...addressDetails
        }
      }

      fragment addressDetails on User {
        name
        street
        zipcode
        city
      }
    `
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Aliases
client
  .query({
    query: gql`
      {
        first: User(id: "1") {
          name
        }
        second: User(id: "2") {
          name
        }
      }
    `
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Union
client
  .query({
    query: gql`
      {
        allPersons {
          name
          ... on Child {
            school
          }
          ... on Adult {
            work
          }
        }
      }
    `
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Introspection
client
  .query({
    query: gql`
      query {
        __schema {
          types {
            name
          }
        }
      }
    `
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
