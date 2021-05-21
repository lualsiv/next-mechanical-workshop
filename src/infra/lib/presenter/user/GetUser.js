"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlGetUserPresenter = void 0;
// import { GetUserPresenter, GetUserOutputData } from 'domain';
const user_1 = require("../utils/converter/user");
class GqlGetUserPresenter {
    constructor() {
        this.response = null;
    }
    getResponse() {
        return this.response;
    }
    async output(response) {
        this.response = user_1.toGqlUser(response?.user);
    }
}
exports.GqlGetUserPresenter = GqlGetUserPresenter;
//# sourceMappingURL=GetUser.js.map