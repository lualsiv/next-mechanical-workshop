import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Time: Date;
};
export declare type Address = {
    __typename?: 'Address';
    street: Scalars['String'];
    number?: Maybe<Scalars['Int']>;
    city: Scalars['String'];
    state: Scalars['String'];
    zipCode: Scalars['String'];
};
export declare type Budget = {
    __typename?: 'Budget';
    createdAt?: Maybe<Scalars['Time']>;
    updatedAt: Scalars['Time'];
    dueDate: Scalars['Time'];
    vehicle?: Maybe<Vehicle>;
    owner?: Maybe<User>;
    status?: Maybe<BudgetStatus>;
};
export declare enum BudgetStatus {
    Opened = "OPENED",
    Waitingforapproval = "WAITINGFORAPPROVAL",
    Okay = "OKAY",
    Running = "RUNNING",
    Ready = "READY"
}
export declare type Client = {
    __typename?: 'Client';
    name?: Maybe<Scalars['String']>;
    cpf?: Maybe<Scalars['String']>;
    rg?: Maybe<Scalars['String']>;
    birthDate?: Maybe<Scalars['Time']>;
    telephone?: Maybe<Scalars['String']>;
    address?: Maybe<Address>;
};
export declare type Mutation = {
    __typename?: 'Mutation';
    deleteUser: User;
    signInEmailPassword: Scalars['String'];
    signUpEmailPassword: User;
    updateUser: User;
};
export declare type MutationDeleteUserArgs = {
    id: Scalars['ID'];
};
export declare type MutationSignInEmailPasswordArgs = {
    input?: Maybe<SignInEmailPasswordRequest>;
};
export declare type MutationSignUpEmailPasswordArgs = {
    input?: Maybe<SignUpEmailPasswordRequest>;
};
export declare type MutationUpdateUserArgs = {
    id: Scalars['ID'];
    data: UserInput;
};
export declare type Query = {
    __typename?: 'Query';
    allUsers?: Maybe<Array<Maybe<User>>>;
    findUserByID?: Maybe<User>;
    findUserByEmail?: Maybe<User>;
};
export declare type QueryFindUserByIdArgs = {
    id: Scalars['ID'];
};
export declare type QueryFindUserByEmailArgs = {
    email?: Maybe<Scalars['String']>;
};
export declare enum Role {
    Anonymous = "ANONYMOUS",
    Member = "MEMBER",
    Admin = "ADMIN"
}
export declare type SignInEmailPasswordRequest = {
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type SignUpEmailPasswordRequest = {
    email: Scalars['String'];
    name: Scalars['String'];
    password: Scalars['String'];
    roles: Array<Role>;
    createdAt?: Maybe<Scalars['Time']>;
};
export declare type User = {
    __typename?: 'User';
    _id: Scalars['ID'];
    email: Scalars['String'];
    roles: Array<Role>;
    createdAt?: Maybe<Scalars['Time']>;
    updatedAt?: Maybe<Scalars['Time']>;
    client?: Maybe<Client>;
};
export declare type UserInput = {
    email: Scalars['String'];
    roles: Array<Role>;
    createdAt?: Maybe<Scalars['Time']>;
    updatedAt?: Maybe<Scalars['Time']>;
};
export declare type Vehicle = {
    __typename?: 'Vehicle';
    licensePlate?: Maybe<Scalars['String']>;
    color?: Maybe<Scalars['String']>;
    year?: Maybe<Scalars['Int']>;
    createdAt?: Maybe<Scalars['Time']>;
    vehicleMaker?: Maybe<VehicleMaker>;
    owner?: Maybe<User>;
};
export declare type VehicleMaker = {
    __typename?: 'VehicleMaker';
    name?: Maybe<Scalars['String']>;
};
export declare type SignInEmailPasswordRequestMutationVariables = Exact<{
    input?: Maybe<SignInEmailPasswordRequest>;
}>;
export declare type SignInEmailPasswordRequestMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'signInEmailPassword'>);
export declare type SignUpEmailPasswordMutationVariables = Exact<{
    input?: Maybe<SignUpEmailPasswordRequest>;
}>;
export declare type SignUpEmailPasswordMutation = ({
    __typename?: 'Mutation';
} & {
    signUpEmailPassword: ({
        __typename?: 'User';
    } & Pick<User, '_id' | 'email' | 'roles' | 'createdAt'> & {
        client?: Maybe<({
            __typename?: 'Client';
        } & Pick<Client, 'name'>)>;
    });
});
export declare type UpdatUserMutationVariables = Exact<{
    id: Scalars['ID'];
    data: UserInput;
}>;
export declare type UpdatUserMutation = ({
    __typename?: 'Mutation';
} & {
    updateUser: ({
        __typename?: 'User';
    } & Pick<User, '_id' | 'email' | 'roles' | 'createdAt' | 'updatedAt'>);
});
export declare type DeleteUserMutationVariables = Exact<{
    id: Scalars['ID'];
}>;
export declare type DeleteUserMutation = ({
    __typename?: 'Mutation';
} & {
    deleteUser: ({
        __typename?: 'User';
    } & Pick<User, '_id' | 'email' | 'roles' | 'createdAt' | 'updatedAt'>);
});
export declare type AllUsersQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type AllUsersQuery = ({
    __typename?: 'Query';
} & {
    allUsers?: Maybe<Array<Maybe<({
        __typename?: 'User';
    } & Pick<User, '_id' | 'email' | 'createdAt'>)>>>;
});
export declare type FindUserByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;
export declare type FindUserByIdQuery = ({
    __typename?: 'Query';
} & {
    findUserByID?: Maybe<({
        __typename?: 'User';
    } & Pick<User, '_id' | 'email' | 'roles' | 'createdAt' | 'updatedAt'>)>;
});
export declare type FindUserByEmailQueryVariables = Exact<{
    email?: Maybe<Scalars['String']>;
}>;
export declare type FindUserByEmailQuery = ({
    __typename?: 'Query';
} & {
    findUserByEmail?: Maybe<({
        __typename?: 'User';
    } & Pick<User, '_id' | 'email' | 'roles' | 'createdAt' | 'updatedAt'>)>;
});
export declare const SignInEmailPasswordRequestDocument: import("graphql").DocumentNode;
export declare const SignUpEmailPasswordDocument: import("graphql").DocumentNode;
export declare const UpdatUserDocument: import("graphql").DocumentNode;
export declare const DeleteUserDocument: import("graphql").DocumentNode;
export declare const AllUsersDocument: import("graphql").DocumentNode;
export declare const FindUserByIdDocument: import("graphql").DocumentNode;
export declare const FindUserByEmailDocument: import("graphql").DocumentNode;
export declare type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    SignInEmailPasswordRequest(variables?: Exact<{
        input?: Maybe<SignInEmailPasswordRequest> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<SignInEmailPasswordRequestMutation>;
    SignUpEmailPassword(variables?: Exact<{
        input?: Maybe<SignUpEmailPasswordRequest> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<SignUpEmailPasswordMutation>;
    UpdatUser(variables: UpdatUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdatUserMutation>;
    DeleteUser(variables: DeleteUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserMutation>;
    AllUsers(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllUsersQuery>;
    FindUserById(variables: FindUserByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindUserByIdQuery>;
    FindUserByEmail(variables?: Exact<{
        email?: Maybe<string> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindUserByEmailQuery>;
};
export declare type Sdk = ReturnType<typeof getSdk>;
//# sourceMappingURL=graphql-client.d.ts.map