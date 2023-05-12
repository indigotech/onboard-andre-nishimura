import { gql } from '@apollo/client';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserListQueryData {
  users: {
    nodes: User[];
    count: number;
  };
}

export const userListQuery = gql`
  query UserListQuery($offset: Int, $limit: Int) {
    users(data: { offset: $offset, limit: $limit }) {
      nodes {
        id
        name
        email
      }
      count
    }
  }
`;
