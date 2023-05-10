import { gql } from '@apollo/client';

export type UserType = {
  id: string;
  name: string;
  email: string;
};

export type UserListQueryDataType = {
  users: {
    nodes: UserType[];
  };
};

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
