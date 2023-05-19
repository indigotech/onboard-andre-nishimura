import { gql } from '@apollo/client';

export interface User {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  role: string;
}

export interface UserDetailsQueryData {
  user: User;
}

export const userDetailsQuery = gql`
  query UserDetailsQuery($userId: ID!) {
    user(id: $userId) {
      id
      name
      email
      phone
      birthDate
      role
    }
  }
`;
