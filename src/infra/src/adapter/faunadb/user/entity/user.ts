import { RoleEnum, RoleType, UserDto, UserEntity } from 'domain/lib';
import { Role, User } from 'schema';

export class UserFactory {
  public static fromDto(user: UserDto): User {
    return {
      _id: user._id,
      email: user.email,
      roles: user.roles.map((role) => {
        return role.toString() as Role;
      }),
      createdAt: user.createdAt ?? undefined,
      updatedAt: user.updatedAt ?? undefined,
    };
  }

  public static fromEntity(userEntity: UserEntity) {
    const userSchema = userEntity.toDto();
    return UserFactory.fromDto(userSchema);
  }

  public static toDto(user: User): UserDto {
    console.info('toDto:', user);
    return {
      _id: user._id,
      name: user.client?.name ? user.client?.name : '',
      email: user.email,
      roles: user.roles.map((role) => {
        return role.toString() as RoleType;
      }),
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      password: '',
    };
  }

  public static toEntity(user: User): UserEntity {
    const schema = UserFactory.toDto(user);
    return new UserEntity(schema);
  }
}
