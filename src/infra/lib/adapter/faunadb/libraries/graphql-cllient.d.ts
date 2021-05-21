declare const sdk: {
    SignInEmailPasswordRequest(variables?: import("schema").Exact<{
        input?: import("schema").Maybe<import("schema").SignInEmailPasswordRequest> | undefined;
    }> | undefined, requestHeaders?: (import("graphql-request/dist/types.dom").Headers | string[][] | Record<string, string>) | undefined): Promise<import("schema").SignInEmailPasswordRequestMutation>;
    SignUpEmailPassword(variables?: import("schema").Exact<{
        input?: import("schema").Maybe<import("schema").SignUpEmailPasswordRequest> | undefined;
    }> | undefined, requestHeaders?: (import("graphql-request/dist/types.dom").Headers | string[][] | Record<string, string>) | undefined): Promise<import("schema").SignUpEmailPasswordMutation>;
    UpdatUser(variables: import("schema").Exact<{
        id: string;
        data: import("schema").UserInput;
    }>, requestHeaders?: (import("graphql-request/dist/types.dom").Headers | string[][] | Record<string, string>) | undefined): Promise<import("schema").UpdatUserMutation>;
    DeleteUser(variables: import("schema").Exact<{
        id: string;
    }>, requestHeaders?: (import("graphql-request/dist/types.dom").Headers | string[][] | Record<string, string>) | undefined): Promise<import("schema").DeleteUserMutation>;
    AllUsers(variables?: import("schema").Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: (import("graphql-request/dist/types.dom").Headers | string[][] | Record<string, string>) | undefined): Promise<import("schema").AllUsersQuery>;
    FindUserById(variables: import("schema").Exact<{
        id: string;
    }>, requestHeaders?: (import("graphql-request/dist/types.dom").Headers | string[][] | Record<string, string>) | undefined): Promise<import("schema").FindUserByIdQuery>;
    FindUserByEmail(variables?: import("schema").Exact<{
        email?: import("schema").Maybe<string> | undefined;
    }> | undefined, requestHeaders?: (import("graphql-request/dist/types.dom").Headers | string[][] | Record<string, string>) | undefined): Promise<import("schema").FindUserByEmailQuery>;
};
export { sdk };
//# sourceMappingURL=graphql-cllient.d.ts.map