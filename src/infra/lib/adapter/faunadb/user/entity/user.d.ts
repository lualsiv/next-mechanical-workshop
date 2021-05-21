import { UserDto, UserEntity } from 'domain/lib';
import { User } from 'schema';
export declare class UserFactory {
    static fromDto(user: UserDto): User;
    static fromEntity(userEntity: UserEntity): User;
    static toDto(user: User): UserDto;
    static toEntity(user: User): UserEntity;
}
//# sourceMappingURL=user.d.ts.map