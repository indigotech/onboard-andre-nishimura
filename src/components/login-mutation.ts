import { gql } from '@apollo/client';

export const LoginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
      user {
        id
        name
      }
    }
  }
`;
