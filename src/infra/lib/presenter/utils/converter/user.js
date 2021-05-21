"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toGqlUser = void 0;
// import { UserDto } from 'domain';
const toGqlUser = (user) => {
    if (!user)
        return null;
    return {
        _id: user._id,
        email: user.email,
        roles: user.roles,
    };
};
exports.toGqlUser = toGqlUser;
//# sourceMappingURL=user.js.map