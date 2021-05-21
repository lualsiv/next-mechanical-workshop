import { PropertyRequiredError, IllegalArgumentError } from 'common';
import { denyIllegalEmail } from '../common/Email';
import { denyIllegalPassword } from '../common/Password';

import { Role, RoleType } from '../common/Role';
import { TimeStampTypes, denyDoesNotHaveRequiredProperties } from '../utils';

export type UserDto = {
  _id: string;
  email: string;
  name: string;
  roles: RoleType[];
  password: string;
} & TimeStampTypes;

export const denyIllegalRoles = (roles: string[]) => {
  if (!roles) throw new PropertyRequiredError('roles');
  if (!roles.length) throw new IllegalArgumentError('Requer uma ou mais Roles');
  roles.forEach((role) => new Role(role as RoleType));
};

export const denyIllegalUserDto = (user: UserDto) => {
  if (!user) throw new PropertyRequiredError('user');
  denyDoesNotHaveRequiredProperties(user, ['id', 'email', 'name', 'roles']);
  denyIllegalRoles(user.roles);
  denyIllegalEmail(user.email);
  denyIllegalPassword(user.password);
};