"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlUpdateUserRolesPresenter = void 0;
const user_1 = require("../utils/converter/user");
class GqlUpdateUserRolesPresenter {
    constructor() {
        this.response = null;
    }
    getResponse() {
        return this.response;
    }
    async output(response) {
        this.response = user_1.toGqlUser(response.user);
    }
}
exports.GqlUpdateUserRolesPresenter = GqlUpdateUserRolesPresenter;
//# sourceMappingURL=UpdateUserRoles.js.map