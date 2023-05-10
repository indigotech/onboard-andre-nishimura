import { gql } from '@apollo/client';

type UserType = {
  id: string;
  name: string;
};

export type LoginType = {
  token: string;
  user: UserType;
};

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
