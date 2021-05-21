import { AuthenticationFailedError, UnauthorizedError } from 'common';

import { RoleTypes } from '../../../entity/common/Role';
import { ID } from '../../../entity/common/ID';
import { UserEntity } from '../../../entity/user/UserEntity';
import {
  denyUnauthenticated,
  denyWhenActorHasOnlyAnonymousRole,
  allowOnlyWhenActorHasMemberRole,
  allowOnlyWhenActorIsOwner,
} from '../common';

describe('PolicyDecisionCommon', () => {
  describe('denyUnauthenticated', () => {
    test('Sucesso: o ator está definido', () => {
      const actor = new UserEntity({ id: '1', email: 'aaa@bb.com', roles: [RoleTypes.Member] });
      denyUnauthenticated(actor);
    });

    test('Falha: ator não definido', () => {
      expect(() => denyUnauthenticated(null)).toThrow(AuthenticationFailedError);
    });

    test('Falha: ator não definido (com mensagem)', () => {
      expect(() => denyUnauthenticated(null, 'Por favor entre')).toThrow(
        /Por favor entre/,
      );
    });
  });

  describe('denyWhenActorHasOnlyAnonymousRole', () => {
    test('Sucesso: a função do membro está definida', () => {
      const actor = new UserEntity({ id: '1', email: 'aaa@bb.com', roles: [RoleTypes.Member] });
      denyWhenActorHasOnlyAnonymousRole(actor);
    });

    test('Sucesso: Anônimo+Membro', () => {
      const actor = new UserEntity({
        id: '1',
        email: 'aaa@bb.com',
        roles: [RoleTypes.Anonymous, RoleTypes.Member],
      });
      denyWhenActorHasOnlyAnonymousRole(actor);
    });

    test('Failure: I only have the Anonymous role', () => {
      const actor = new UserEntity({ id: '1', email: 'aaa@bb.com', roles: [RoleTypes.Anonymous] });
      expect(() => denyWhenActorHasOnlyAnonymousRole(actor)).toThrow(UnauthorizedError);
    });

    test('Failure: actor not set', () => {
      expect(() => denyWhenActorHasOnlyAnonymousRole(null)).toThrow(AuthenticationFailedError);
    });

    test('Failure: actor not set (with message)', () => {
      expect(() => denyWhenActorHasOnlyAnonymousRole(null, 'Please give member authority')).toThrow(
        /Please give member authority/,
      );
    });
  });

  describe('allowOnlyWhenActorHasMemberRole', () => {
    test('Success: Member role is set', () => {
      const actor = new UserEntity({ id: '1', email: 'aaa@bb.com', roles: [RoleTypes.Member] });
      allowOnlyWhenActorHasMemberRole(actor);
    });

    test('Success: Anonymous+Member', () => {
      const actor = new UserEntity({
        id: '1',
        email: 'aaa@bb.com',
        roles: [RoleTypes.Anonymous, RoleTypes.Member],
      });
      denyWhenActorHasOnlyAnonymousRole(actor);
    });

    test('Failure: I only have the Anonymous role', () => {
      const actor = new UserEntity({ id: '1', email: 'aaa@bb.com', roles: [RoleTypes.Anonymous] });
      expect(() => allowOnlyWhenActorHasMemberRole(actor)).toThrow(UnauthorizedError);
    });

    test('Failure: I only have the Admin role', () => {
      const actor = new UserEntity({ id: '1', email: 'aaa@bb.com', roles: [RoleTypes.Admin] });
      expect(() => allowOnlyWhenActorHasMemberRole(actor)).toThrow(UnauthorizedError);
    });

    test('Failure: Anonymous+Admin', () => {
      const actor = new UserEntity({
        id: '1',
        email: 'aaa@bb.com',
        roles: [RoleTypes.Anonymous, RoleTypes.Admin],
      });
      expect(() => allowOnlyWhenActorHasMemberRole(actor)).toThrow(UnauthorizedError);
    });

    test('Failure: actor not set', () => {
      expect(() => allowOnlyWhenActorHasMemberRole(null)).toThrow(AuthenticationFailedError);
    });

    test('Failure: actor not set (with message)', () => {
      expect(() => allowOnlyWhenActorHasMemberRole(null, 'Please give member authority')).toThrow(
        /Please give member authority/,
      );
    });
  });

  describe('allowOnlyWhenActorIsOwner', () => {
    test('Success: Same ownerId', () => {
      const ownerId = new ID('1');
      const actor = new UserEntity({
        id: ownerId.getId(),
        email: 'aaa@bb.com',
        roles: [RoleTypes.Member],
      });
      allowOnlyWhenActorIsOwner(ownerId, actor);
    });

    test('Failure: Different ownerId', () => {
      const ownerId = new ID('1');
      const actor = new UserEntity({ id: '2', email: 'aaa@bb.com', roles: [RoleTypes.Member] });
      expect(() => allowOnlyWhenActorIsOwner(ownerId, actor)).toThrow(UnauthorizedError);
    });

    test('Failure: actor not set', () => {
      const ownerId = new ID('1');
      expect(() => allowOnlyWhenActorIsOwner(ownerId, null)).toThrow(AuthenticationFailedError);
    });

    test('Failure: actor not set (with message)', () => {
      const ownerId = new ID('1');
      expect(() => allowOnlyWhenActorIsOwner(ownerId, null, 'The owner is different')).toThrow(
        /The owner is different/,
      );
    });
  });
});