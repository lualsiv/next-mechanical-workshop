import {
    PropertyRequiredError,
    IllegalArgumentError,
    ConflictError,
    ValidationError,
  } from 'common';
  
  import { UserDto } from '../UserDto';
  import { UserEntity } from '../UserEntity';
  import { Role, RoleTypes } from '../../common/Role';
  import { ID } from '../../common/ID';
  import { Email } from '../../common/Email';
  
  describe('UserEntity', () => {
    describe('constructor', () => {
      test('OK: Consegui gerar uma entidade', () => {
        const user = { id: '1', email: 'aaa@bbb.com', roles: [RoleTypes.Member] };
        const user1 = new UserEntity(user);
        expect(user1.getId().isEqual(user.id)).toBeTruthy();
        expect(user1.getEmail().isEqual(user.email)).toBeTruthy();
      });
  
      test('NG: Falha devido à falta de id', () => {
        const user = { email: 'aaa@bbb.com', roles: [RoleTypes.Member] };
        expect(() => new UserEntity((user as unknown) as UserDto)).toThrow(PropertyRequiredError);
      });
  
      test('NG: Falha devido à falta de e-mail', () => {
        const user = { id: '1', roles: [RoleTypes.Member] };
        expect(() => new UserEntity((user as unknown) as UserDto)).toThrow(PropertyRequiredError);
      });
  
      test('NG: Falha devido à falta de funções', () => {
        const user = { id: '1', email: 'aaa@bbb.com' };
        expect(() => new UserEntity((user as unknown) as UserDto)).toThrow(PropertyRequiredError);
      });
  
      test('NG: Falha porque você especificou um endereço de e-mail inválido', () => {
        const user = { id: '1', email: 'aaaaaaaa', roles: [RoleTypes.Member] };
        expect(() => new UserEntity((user as unknown) as UserDto)).toThrow(IllegalArgumentError);
      });
    });
  
    describe('getter/setter', () => {
      const userDto = { id: '1', email: 'aaa@bbb.com', roles: [RoleTypes.Member] };
  
      test('OK: Id', () => {
        const user = new UserEntity(userDto);
        expect(user.getId().isEqual(userDto.id)).toBeTruthy();
  
        const newId = new ID('999');
        user.setId(newId);
        expect(user.getId().isEqual(newId)).toBeTruthy();
      });
  
      test('OK: Email', () => {
        const user = new UserEntity(userDto);
        expect(user.getEmail().isEqual(userDto.email)).toBeTruthy();
  
        const newEmail = new Email('new_email@bbb.com');
        user.setEmail(newEmail);
        expect(user.getEmail().isEqual(newEmail)).toBeTruthy();
      });
  
      test('OK: Roles', () => {
        const user = new UserEntity(userDto);
        expect(user.getRoles()?.[0].isEqual(RoleTypes.Member)).toBeTruthy();
  
        user.addRole(new Role(RoleTypes.Admin));
        expect(user.getRoles()?.length).toBe(2);
        expect(user.getRoles()?.some((role) => role.isEqual(RoleTypes.Admin))).toBeTruthy();
        expect(user.getRoles()?.some((role) => role.isEqual(RoleTypes.Member))).toBeTruthy();
  
        user.removeRole(new Role(RoleTypes.Member));
        expect(user.getRoles()?.length).toBe(1);
        expect(user.getRoles()?.some((role) => role.isEqual(RoleTypes.Admin))).toBeTruthy();
        expect(user.getRoles()?.some((role) => role.isEqual(RoleTypes.Member))).toBeFalsy();
      });
  
      test('NG: Você não pode adicionar uma função que já possui', () => {
        const user = new UserEntity(userDto);
        expect(() => user.addRole(new Role(RoleTypes.Member))).toThrow(ConflictError);
      });
  
      test('NG: Você não pode excluir uma função que não possui', () => {
        const user = new UserEntity(userDto);
        expect(() => user.removeRole(new Role(RoleTypes.Admin))).toThrow(ConflictError);
      });
  
      test('NG: Nem todas as funções podem ser excluídas', () => {
        const user = new UserEntity(userDto);
        expect(() => user.removeRole(new Role(RoleTypes.Member))).toThrow(ValidationError);
      });
    });
  });