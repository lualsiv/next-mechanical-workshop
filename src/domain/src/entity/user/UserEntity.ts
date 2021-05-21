import { ValidationError, ConflictError } from 'common';

import { UserDto, denyIllegalUserDto } from './UserDto';
import { ID } from '../common/ID';
import { Email } from '../common/Email';
import { Role, RoleTypes, RoleType } from '../common/Role';
import { Password } from '../common/Password';

export class UserEntity {
  private id: ID;
  private email: Email;
  private name: string;
  private roles: Role[] = [new Role(RoleTypes.Anonymous)];
  private password: Password;

  constructor(user: UserDto) {
    denyIllegalUserDto(user);
    this.id = new ID(user._id);
    this.email = new Email(user.email);
    this.name = user.name;
    this.roles = user.roles.map((role) => new Role(role as RoleType));
    this.password = new Password(user.password)
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getName(){
    return this.name;
  }

  getRoles() {
    return this.roles;
  }

  getPassword() {
    return this.password;
  }

  setId(id: ID) {
    this.id = id;
    this.isValid();
  }

  setEmail(email: Email) {
    this.email = email;
    this.isValid();
  }

  setName(name: string){
    this.name = name;
    this.isValid();
  }

  updateRoles(newRoles: Role[]) {
    this.roles = newRoles;
    this.isValid();
  }

  addRole(targetRole: Role) {
    if (this.roles.some((role) => role.isEqual(targetRole))) {
      throw new ConflictError('Role já existente');
    }

    this.updateRoles([...(this.roles || []), targetRole]);
  }

  removeRole(targetRole: Role) {
    if (!this.roles.some((role) => role.isEqual(targetRole))) {
      throw new ConflictError('Role não existente');
    }

    const newRoles = this.roles?.filter((role) => !role.isEqual(targetRole));
    if (!newRoles.length) {
      throw new ValidationError('Você não pode fazer nada que exclua todas as funções');
    }

    this.updateRoles(newRoles);
  }

  toDto(): UserDto {
    return {
      _id: this.id.toString(),
      email: this.email.toString(),
      roles: this.roles.map((role) => role.toString()),
      password: this.password.toString(),
      name: this.name
    };
  }

  isValid(): boolean {
    try {
      denyIllegalUserDto(this.toDto());
    } catch {
      return false;
    }
    return true;
  }
}