"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.FindUserByEmailDocument = exports.FindUserByIdDocument = exports.AllUsersDocument = exports.DeleteUserDocument = exports.UpdatUserDocument = exports.SignUpEmailPasswordDocument = exports.SignInEmailPasswordRequestDocument = exports.Role = exports.BudgetStatus = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
var BudgetStatus;
(function (BudgetStatus) {
    BudgetStatus["Opened"] = "OPENED";
    BudgetStatus["Waitingforapproval"] = "WAITINGFORAPPROVAL";
    BudgetStatus["Okay"] = "OKAY";
    BudgetStatus["Running"] = "RUNNING";
    BudgetStatus["Ready"] = "READY";
})(BudgetStatus = exports.BudgetStatus || (exports.BudgetStatus = {}));
var Role;
(function (Role) {
    Role["Anonymous"] = "ANONYMOUS";
    Role["Member"] = "MEMBER";
    Role["Admin"] = "ADMIN";
})(Role = exports.Role || (exports.Role = {}));
exports.SignInEmailPasswordRequestDocument = graphql_tag_1.default `
    mutation SignInEmailPasswordRequest($input: SignInEmailPasswordRequest) {
  signInEmailPassword(input: $input)
}
    `;
exports.SignUpEmailPasswordDocument = graphql_tag_1.default `
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
exports.UpdatUserDocument = graphql_tag_1.default `
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
exports.DeleteUserDocument = graphql_tag_1.default `
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
exports.AllUsersDocument = graphql_tag_1.default `
    query AllUsers {
  allUsers {
    _id
    email
    createdAt
  }
}
    `;
exports.FindUserByIdDocument = graphql_tag_1.default `
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
exports.FindUserByEmailDocument = graphql_tag_1.default `
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
const defaultWrapper = sdkFunction => sdkFunction();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        SignInEmailPasswordRequest(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.SignInEmailPasswordRequestDocument, variables, requestHeaders));
        },
        SignUpEmailPassword(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.SignUpEmailPasswordDocument, variables, requestHeaders));
        },
        UpdatUser(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.UpdatUserDocument, variables, requestHeaders));
        },
        DeleteUser(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.DeleteUserDocument, variables, requestHeaders));
        },
        AllUsers(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.AllUsersDocument, variables, requestHeaders));
        },
        FindUserById(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.FindUserByIdDocument, variables, requestHeaders));
        },
        FindUserByEmail(variables, requestHeaders) {
            return withWrapper(() => client.request(exports.FindUserByEmailDocument, variables, requestHeaders));
        }
    };
}
exports.getSdk = getSdk;
//# sourceMappingURL=graphql-client.js.map