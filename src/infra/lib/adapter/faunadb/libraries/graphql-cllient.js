"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sdk = void 0;
const graphql_request_1 = require("graphql-request");
const schema_1 = require("schema");
const { FAUNA_ACCESS_KEY_ADMIN } = process.env;
console.info("FAUNA_ACCESS_KEY_ADMIN", FAUNA_ACCESS_KEY_ADMIN);
const client = new graphql_request_1.GraphQLClient('https://graphql.fauna.com/graphql', {
    headers: {
        Authorization: 'Bearer ' + FAUNA_ACCESS_KEY_ADMIN
    }
});
const sdk = schema_1.getSdk(client);
exports.sdk = sdk;
//# sourceMappingURL=graphql-cllient.js.map