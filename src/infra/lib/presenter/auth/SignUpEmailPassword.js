"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlSignUpEmailPasswordPresenter = void 0;
const user_1 = require("../utils/converter/user");
class GqlSignUpEmailPasswordPresenter {
    constructor() {
        this.response = null;
    }
    getResponse() {
        return this.response;
    }
    async output(response) {
        var user = user_1.toGqlUser(response.user);
        this.response = { user: user, token: response.token };
    }
}
exports.GqlSignUpEmailPasswordPresenter = GqlSignUpEmailPasswordPresenter;
//# sourceMappingURL=SignUpEmailPassword.js.map