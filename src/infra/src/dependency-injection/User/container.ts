import { GetUserByIdInteractor } from "domain/lib";
import { GqlUserAdapter } from "../../adapter/faunadb/user/adapter/User";
import { GqlUserQueryService } from "../../adapter/faunadb/user/queryService/User";
import { GqlGetUserByIdPresenter } from "../../presenter/user/GetUserById";

import { createContainer, asClass, InjectionMode, Lifetime, asValue } from 'awilix';

export interface IUserCradle {
  presenter: GqlGetUserByIdPresenter
  userAdapter: GqlUserAdapter
  queryService: GqlUserQueryService
  useCase: GetUserByIdInteractor
}

const presenter = new GqlGetUserByIdPresenter()

  const userContainer = createContainer<IUserCradle>({
    injectionMode: InjectionMode.CLASSIC
  })

  userContainer.register({
    presenter: asValue(presenter),
    userAdapter: asClass(GqlUserAdapter),
    queryService: asClass(GqlUserQueryService),
    useCase: asClass(GetUserByIdInteractor)
  })


export default userContainer