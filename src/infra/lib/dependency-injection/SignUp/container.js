"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("domain/lib");
const awilix_1 = require("awilix");
const SignUpEmailPassword_1 = require("../../presenter/auth/SignUpEmailPassword");
const AuthEmailPassword_1 = require("../../adapter/faunadb/auth/adapter/AuthEmailPassword");
const presenter = new SignUpEmailPassword_1.GqlSignUpEmailPasswordPresenter();
const singUpContainer = awilix_1.createContainer({
    injectionMode: awilix_1.InjectionMode.CLASSIC,
});
singUpContainer.register({
    presenter: awilix_1.asValue(presenter),
    authAdapter: awilix_1.asClass(AuthEmailPassword_1.GqlAuthEmailPasswordAdapter),
    useCase: awilix_1.asClass(lib_1.SignUpEmailPasswordInteractor),
});
exports.default = singUpContainer;
//# sourceMappingURL=container.js.map