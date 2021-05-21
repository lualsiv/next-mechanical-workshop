import { SignUpEmailPasswordInteractor } from 'domain/lib';
import { GqlSignUpEmailPasswordPresenter } from '../../presenter/auth/SignUpEmailPassword';
import { GqlAuthEmailPasswordAdapter } from '../../adapter/faunadb/auth/adapter/AuthEmailPassword';
export interface ISingUpCradle {
    presenter: GqlSignUpEmailPasswordPresenter;
    authAdapter: GqlAuthEmailPasswordAdapter;
    useCase: SignUpEmailPasswordInteractor;
}
declare const singUpContainer: import("awilix").AwilixContainer<ISingUpCradle>;
export default singUpContainer;
//# sourceMappingURL=container.d.ts.map