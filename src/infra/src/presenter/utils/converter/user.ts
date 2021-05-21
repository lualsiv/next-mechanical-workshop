import { UserDto } from 'domain/lib/entity';
import { Role, User } from 'schema';
// import { UserDto } from 'domain';

export const toGqlUser = (user: UserDto | null | undefined): User | null => {
  if (!user) return null;
  return {
    _id: user._id,
    email: user.email,
    roles: (user.roles as unknown) as Role[],
  };
};