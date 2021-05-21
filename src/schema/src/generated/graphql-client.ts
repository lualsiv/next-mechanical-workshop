import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: Date;
};

export type Address = {
  __typename?: 'Address';
  street: Scalars['String'];
  number?: Maybe<Scalars['Int']>;
  city: Scalars['String'];
  state: Scalars['String'];
  zipCode: Scalars['String'];
};

export type Budget = {
  __typename?: 'Budget';
  createdAt?: Maybe<Scalars['Time']>;
  updatedAt: Scalars['Time'];
  dueDate: Scalars['Time'];
  vehicle?: Maybe<Vehicle>;
  owner?: Maybe<User>;
  status?: Maybe<BudgetStatus>;
};

export enum BudgetStatus {
  Opened = 'OPENED',
  Waitingforapproval = 'WAITINGFORAPPROVAL',
  Okay = 'OKAY',
  Running = 'RUNNING',
  Ready = 'READY'
}

export type Client = {
  __typename?: 'Client';
  name?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  rg?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Time']>;
  telephone?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteUser: User;
  signInEmailPassword: Scalars['String'];
  signUpEmailPassword: User;
  updateUser: User;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationSignInEmailPasswordArgs = {
  input?: Maybe<SignInEmailPasswordRequest>;
};


export type MutationSignUpEmailPasswordArgs = {
  input?: Maybe<SignUpEmailPasswordRequest>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data: UserInput;
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<Maybe<User>>>;
  findUserByID?: Maybe<User>;
  findUserByEmail?: Maybe<User>;
};


export type QueryFindUserByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindUserByEmailArgs = {
  email?: Maybe<Scalars['String']>;
};

export enum Role {
  Anonymous = 'ANONYMOUS',
  Member = 'MEMBER',
  Admin = 'ADMIN'
}

export type SignInEmailPasswordRequest = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpEmailPasswordRequest = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  roles: Array<Role>;
  createdAt?: Maybe<Scalars['Time']>;
};


export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  roles: Array<Role>;
  createdAt?: Maybe<Scalars['Time']>;
  updatedAt?: Maybe<Scalars['Time']>;
  client?: Maybe<Client>;
};

export type UserInput = {
  email: Scalars['String'];
  roles: Array<Role>;
  createdAt?: Maybe<Scalars['Time']>;
  updatedAt?: Maybe<Scalars['Time']>;
};

export type Vehicle = {
  __typename?: 'Vehicle';
  licensePlate?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Time']>;
  vehicleMaker?: Maybe<VehicleMaker>;
  owner?: Maybe<User>;
};

export type VehicleMaker = {
  __typename?: 'VehicleMaker';
  name?: Maybe<Scalars['String']>;
};

export type SignInEmailPasswordRequestMutationVariables = Exact<{
  input?: Maybe<SignInEmailPasswordRequest>;
}>;


export type SignInEmailPasswordRequestMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'signInEmailPassword'>
);

export type SignUpEmailPasswordMutationVariables = Exact<{
  input?: Maybe<SignUpEmailPasswordRequest>;
}>;


export type SignUpEmailPasswordMutation = (
  { __typename?: 'Mutation' }
  & { signUpEmailPassword: (
    { __typename?: 'User' }
    & Pick<User, '_id' | 'email' | 'roles' | 'createdAt'>
    & { client?: Maybe<(
      { __typename?: 'Client' }
      & Pick<Client, 'name'>
    )> }
  ) }
);

export type UpdatUserMutationVariables = Exact<{
  id: Scalars['ID'];
  data: UserInput;
}>;


export type UpdatUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'User' }
    & Pick<User, '_id' | 'email' | 'roles' | 'createdAt' | 'updatedAt'>
  ) }
);

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteUser: (
    { __typename?: 'User' }
    & Pick<User, '_id' | 'email' | 'roles' | 'createdAt' | 'updatedAt'>
  ) }
);

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { allUsers?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'email' | 'createdAt'>
  )>>> }
);

export type FindUserByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindUserByIdQuery = (
  { __typename?: 'Query' }
  & { findUserByID?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'email' | 'roles' | 'createdAt' | 'updatedAt'>
  )> }
);

export type FindUserByEmailQueryVariables = Exact<{
  email?: Maybe<Scalars['String']>;
}>;


export type FindUserByEmailQuery = (
  { __typename?: 'Query' }
  & { findUserByEmail?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'email' | 'roles' | 'createdAt' | 'updatedAt'>
  )> }
);


export const SignInEmailPasswordRequestDocument = gql`
    mutation SignInEmailPasswordRequest($input: SignInEmailPasswordRequest) {
  signInEmailPassword(input: $input)
}
    `;
export const SignUpEmailPasswordDocument = gql`
    mutation SignUpEmailPassword($input: SignUpEmailPasswordRequest) {
  signUpEmailPassword(input: $input) {
    _id
    email
    roles
    createdAt
    client {
      name
    }
  }
}
    `;
export const UpdatUserDocument = gql`
    mutation UpdatUser($id: ID!, $data: UserInput!) {
  updateUser(id: $id, data: $data) {
    _id
    email
    roles
    createdAt
    updatedAt
  }
}
    `;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: ID!) {
  deleteUser(id: $id) {
    _id
    email
    roles
    createdAt
    updatedAt
  }
}
    `;
export const AllUsersDocument = gql`
    query AllUsers {
  allUsers {
    _id
    email
    createdAt
  }
}
    `;
export const FindUserByIdDocument = gql`
    query FindUserById($id: ID!) {
  findUserByID(id: $id) {
    _id
    email
    roles
    createdAt
    updatedAt
  }
}
    `;
export const FindUserByEmailDocument = gql`
    query FindUserByEmail($email: String) {
  findUserByEmail(email: $email) {
    _id
    email
    roles
    createdAt
    updatedAt
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    SignInEmailPasswordRequest(variables?: SignInEmailPasswordRequestMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SignInEmailPasswordRequestMutation> {
      return withWrapper(() => client.request<SignInEmailPasswordRequestMutation>(SignInEmailPasswordRequestDocument, variables, requestHeaders));
    },
    SignUpEmailPassword(variables?: SignUpEmailPasswordMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SignUpEmailPasswordMutation> {
      return withWrapper(() => client.request<SignUpEmailPasswordMutation>(SignUpEmailPasswordDocument, variables, requestHeaders));
    },
    UpdatUser(variables: UpdatUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdatUserMutation> {
      return withWrapper(() => client.request<UpdatUserMutation>(UpdatUserDocument, variables, requestHeaders));
    },
    DeleteUser(variables: DeleteUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserMutation> {
      return withWrapper(() => client.request<DeleteUserMutation>(DeleteUserDocument, variables, requestHeaders));
    },
    AllUsers(variables?: AllUsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllUsersQuery> {
      return withWrapper(() => client.request<AllUsersQuery>(AllUsersDocument, variables, requestHeaders));
    },
    FindUserById(variables: FindUserByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindUserByIdQuery> {
      return withWrapper(() => client.request<FindUserByIdQuery>(FindUserByIdDocument, variables, requestHeaders));
    },
    FindUserByEmail(variables?: FindUserByEmailQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindUserByEmailQuery> {
      return withWrapper(() => client.request<FindUserByEmailQuery>(FindUserByEmailDocument, variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;