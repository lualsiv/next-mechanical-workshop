"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = void 0;
const lib_1 = require("domain/lib");
class UserFactory {
    static fromDto(user) {
        return {
            _id: user._id,
            email: user.email,
            roles: user.roles.map((role) => {
                return role.toString();
            }),
            createdAt: user.createdAt ?? undefined,
            updatedAt: user.updatedAt ?? undefined,
        };
    }
    static fromEntity(userEntity) {
        const userSchema = userEntity.toDto();
        return UserFactory.fromDto(userSchema);
    }
    static toDto(user) {
        console.info('toDto:', user);
        return {
            _id: user._id,
            name: user.client?.name ? user.client?.name : '',
            email: user.email,
            roles: user.roles.map((role) => {
                return role.toString();
            }),
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            password: '',
        };
    }
    static toEntity(user) {
        const schema = UserFactory.toDto(user);
        return new lib_1.UserEntity(schema);
    }
}
exports.UserFactory = UserFactory;
//# sourceMappingURL=user.js.map