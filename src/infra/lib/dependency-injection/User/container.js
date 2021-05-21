"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("domain/lib");
const User_1 = require("../../adapter/faunadb/user/adapter/User");
const User_2 = require("../../adapter/faunadb/user/queryService/User");
const GetUserById_1 = require("../../presenter/user/GetUserById");
const awilix_1 = require("awilix");
const presenter = new GetUserById_1.GqlGetUserByIdPresenter();
const userContainer = awilix_1.createContainer({
    injectionMode: awilix_1.InjectionMode.CLASSIC
});
userContainer.register({
    presenter: awilix_1.asValue(presenter),
    userAdapter: awilix_1.asClass(User_1.GqlUserAdapter),
    queryService: awilix_1.asClass(User_2.GqlUserQueryService),
    useCase: awilix_1.asClass(lib_1.GetUserByIdInteractor)
});
exports.default = userContainer;
//# sourceMappingURL=container.js.map