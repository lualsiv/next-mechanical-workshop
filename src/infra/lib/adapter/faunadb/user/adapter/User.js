"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlUserAdapter = void 0;
const user_1 = require("../entity/user");
const graphql_cllient_1 = require("../../libraries/graphql-cllient");
const common_1 = require("common");
class GqlUserAdapter {
    async getById(id) {
        const result = await graphql_cllient_1.sdk.FindUserById({ id });
        if (!result)
            return null;
        return user_1.UserFactory.toEntity(result.findUserByID);
    }
    // public async create(request: CreateUserInputData) {
    //   const user =  {email: request.email, roles: [RoleTypes.Anonymous.toString() as Role]} as UserInput;      
    //   const result = await sdk.CreateUser({input: user})
    //   return UserFactory.toEntity(result.createUser);
    // }
    async update(userEntity) {
        const user = user_1.UserFactory.fromEntity(userEntity);
        const saved = await graphql_cllient_1.sdk.UpdatUser({ id: user._id, data: user });
        return user_1.UserFactory.toEntity(saved.updateUser);
    }
    async delete(id) {
        const user = await graphql_cllient_1.sdk.FindUserById({ id });
        if (!user.findUserByID)
            throw new common_1.NotFoundError();
        await graphql_cllient_1.sdk.DeleteUser({ id });
        return user_1.UserFactory.toEntity(user.findUserByID);
    }
}
exports.GqlUserAdapter = GqlUserAdapter;
//# sourceMappingURL=User.js.map