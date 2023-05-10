import { gql } from '@apollo/client';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserListQueryData {
  users: {
    nodes: User[];
  };
}

export const userListQuery = gql`
  query UserListQuery {
    users {
      nodes {
        id
        name
        email
      }
    }
  }
`;
