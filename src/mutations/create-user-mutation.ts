import { gql } from '@apollo/client';

export const createUserMutation = gql`
  mutation CreateUserMutation($data: UserInput!) {
    createUser(data: $data) {
      id
      name
    }
  }
`;
