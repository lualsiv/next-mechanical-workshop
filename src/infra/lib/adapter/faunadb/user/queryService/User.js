"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlUserQueryService = void 0;
const common_1 = require("common");
const lib_1 = require("domain/lib");
const graphql_cllient_1 = require("../../libraries/graphql-cllient");
const user_1 = require("../entity/user");
class GqlUserQueryService {
    async getUserById(query) {
        lib_1.denyIfNotSet(query, ['id']);
        const { id } = query;
        const result = await graphql_cllient_1.sdk.FindUserById({ id: id });
        if (!result.findUserByID)
            throw new common_1.NotFoundError();
        const res = {
            user: user_1.UserFactory.toDto(result.findUserByID),
        };
        return res;
    }
}
exports.GqlUserQueryService = GqlUserQueryService;
//# sourceMappingURL=User.js.map