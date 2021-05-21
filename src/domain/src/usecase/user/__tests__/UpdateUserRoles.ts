import { IllegalArgumentError, NotFoundError, UnauthorizedError } from 'common';

import { UpdateUserRolesInteractor } from '../UpdateUserRoles';
import { RoleTypes } from '../../../entity/common/Role';
import { MockUserAdapter } from '../__mocks__/MockUserAdapter';
import { MockUpdateUserRolesPresenter } from '../__mocks__/MockUserPresenter';
import { ID } from '../../../entity/common/ID';
import { UserEntity } from '../../../entity/user/UserEntity';
import { UpdateUserRolesInputData } from '../interface/usecase';

/**
 * Create one user
 */
const setup = async () => {
  // adapter
  const adapter = new MockUserAdapter();
  const actor = await adapter.create({ email: 'target@email.com' });

  // interactor
  const presenter = new MockUpdateUserRolesPresenter();
  const interactor = new UpdateUserRolesInteractor(adapter, presenter);

  return { actor, interactor, presenter };
};

describe('UpdateUserRolesInteractor', () => {
  test('I was able to process the request and set up a new role', async () => {
    const { actor, interactor, presenter } = await setup();
    const request = { id: actor.getId().toString(), roles: [RoleTypes.Member] };

    await interactor.handle(request, actor);

    // The data specified in request was obtained as response
    const response = presenter.getResponse();
    expect(response?.user?.roles).toEqual(request.roles);
  });

  test('Failed because you specified an ID that does not exist', async () => {
    const { actor, interactor } = await setup();
    const request = { id: '255', roles: [RoleTypes.Member] };

    await expect(interactor.handle(request, actor)).rejects.toThrow(NotFoundError);
  });

  test('Failed because you specified an invalid role', async () => {
    const { actor, interactor } = await setup();
    const request = ({
      id: actor.getId().toString(),
      roles: ['hogehoge'],
    } as unknown) as UpdateUserRolesInputData;

    await expect(interactor.handle(request, actor)).rejects.toThrow(IllegalArgumentError);
  });

  test('An error was returned because the operation was performed by someone other than the person himself / herself.', async () => {
    const { actor, interactor } = await setup();
    const request = { id: actor.getId().toString(), roles: [RoleTypes.Member] };

    const others = new UserEntity(actor.toDto());
    others.setId(new ID('99999'));

    await expect(interactor.handle(request, others)).rejects.toThrow(UnauthorizedError);
  });
});