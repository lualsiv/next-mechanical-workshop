"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlDeleteUserPresenter = void 0;
// import { DeleteUserPresenter, DeleteUserOutputData } from 'domain';
const user_1 = require("../utils/converter/user");
class GqlDeleteUserPresenter {
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
exports.GqlDeleteUserPresenter = GqlDeleteUserPresenter;
//# sourceMappingURL=DeleteUser.js.map