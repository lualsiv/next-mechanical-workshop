import { NotFoundError, UnauthorizedError } from 'common';

import { DeleteUserInteractor } from '../DeleteUser';
import { MockUserAdapter } from '../__mocks__/MockUserAdapter';
import { MockDeleteUserPresenter } from '../__mocks__/MockUserPresenter';
import { UserEntity } from '../../../entity/user/UserEntity';
import { RoleTypes } from '../../../entity/common/Role';

/**
 * Generate interactor
 */
const setup = async () => {
  const adapter = new MockUserAdapter();
  const target = await adapter.create({ email: 'aaa@bb.com' });

  const presenter = new MockDeleteUserPresenter();
  const interactor = new DeleteUserInteractor(adapter, presenter);

  return { adapter, target, interactor, presenter };
};

describe('DeleteUserInteractor', () => {
  test('Success: The Admin role was able to delete the entity', async () => {
    const { target, interactor, presenter } = await setup();
    const targetId = target.getId().getId();
    const actor = new UserEntity({
      id: `${targetId + 1}`,
      email: 'actor@email.com',
      roles: [RoleTypes.Admin],
    });

    await interactor.handle({ id: targetId }, actor);

    const response = presenter.getResponse();
    expect(target.getId().isEqual(response?.user?.id)).toBeTruthy();
  });

  test('Success: You were able to delete an entity for yourself', async () => {
    const { target, interactor, presenter } = await setup();
    const targetId = target.getId().getId();

    await interactor.handle({ id: targetId }, target);

    const response = presenter.getResponse();
    expect(target.getId().isEqual(response?.user?.id)).toBeTruthy();
  });

  test('Failure: You specified an ID that does not exist', async () => {
    const { target, interactor } = await setup();
    const targetId = '99999';

    await expect(interactor.handle({ id: targetId }, target)).rejects.toThrow(NotFoundError);
  });

  test('Failure: Operated by an actor who is not in the Admin role', async () => {
    const { target, interactor } = await setup();
    const targetId = target.getId().getId();
    const actor = new UserEntity({
      id: `${targetId + 1}`,
      email: 'actor@email.com',
      roles: [RoleTypes.Member],
    });

    await expect(interactor.handle({ id: targetId }, actor)).rejects.toThrow(UnauthorizedError);
  });
});