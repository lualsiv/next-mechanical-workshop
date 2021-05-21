import { GetUserByIdInteractor } from "domain/lib";
import { GqlUserAdapter } from "../../adapter/faunadb/user/adapter/User";
import { GqlUserQueryService } from "../../adapter/faunadb/user/queryService/User";
import { GqlGetUserByIdPresenter } from "../../presenter/user/GetUserById";
export interface IUserCradle {
    presenter: GqlGetUserByIdPresenter;
    userAdapter: GqlUserAdapter;
    queryService: GqlUserQueryService;
    useCase: GetUserByIdInteractor;
}
declare const userContainer: import("awilix").AwilixContainer<IUserCradle>;
export default userContainer;
//# sourceMappingURL=container.d.ts.map