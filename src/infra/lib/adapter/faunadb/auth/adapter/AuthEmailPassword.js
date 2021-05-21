"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlAuthEmailPasswordAdapter = void 0;
const graphql_cllient_1 = require("../../libraries/graphql-cllient");
const user_1 = require("../../user/entity/user");
class GqlAuthEmailPasswordAdapter {
    async getByEmail(email) {
        const result = await graphql_cllient_1.sdk.FindUserByEmail({ email });
        if (!result.findUserByEmail)
            return null;
        return user_1.UserFactory.toEntity(result.findUserByEmail);
    }
    async create(request) {
        const auth = request;
        const result = await graphql_cllient_1.sdk.SignUpEmailPassword({ input: auth });
        return user_1.UserFactory.toEntity(result.signUpEmailPassword);
    }
}
exports.GqlAuthEmailPasswordAdapter = GqlAuthEmailPasswordAdapter;
//# sourceMappingURL=AuthEmailPassword.js.map