import { gql } from '@apollo/client';

interface User {
  id: string;
  name: string;
}

export interface LoginData {
  token: string;
  user: User;
}

export const loginMutation = gql`
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
