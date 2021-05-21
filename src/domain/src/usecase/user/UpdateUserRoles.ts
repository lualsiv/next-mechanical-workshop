import { NotFoundError } from 'common';

import { UserAdapter } from './interface/adapter';
import { UpdateUserRolesInputData, UpdateUserRolesUseCase } from './interface/usecase';
import { UpdateUserRolesOutputData, UpdateUserRolesPresenter } from './interface/presenter';
import { Role, RoleType } from '../../entity/common/Role';
import { UserEntity } from '../../entity/user/UserEntity';
import { allowOnlyWhenActorIsOwner } from '../../policy/decision/common';

export class UpdateUserRolesInteractor implements UpdateUserRolesUseCase {
  private adapter: UserAdapter;
  private presenter: UpdateUserRolesPresenter;

  constructor(adapter: UserAdapter, presenter: UpdateUserRolesPresenter) {
    this.adapter = adapter;
    this.presenter = presenter;
  }

  public async handle(request: UpdateUserRolesInputData, actor: UserEntity) {
    const userEntity = await this.adapter.getById(request.id);
    if (!userEntity) throw new NotFoundError();

    allowOnlyWhenActorIsOwner(userEntity.getId(), actor);

    const roles = request.roles.map((role) => new Role(role as RoleType));
    userEntity.updateRoles(roles);

    await this.adapter.update(userEntity);

    const outputData: UpdateUserRolesOutputData = { user: userEntity.toDto() };
    this.presenter.output(outputData);
  }
}