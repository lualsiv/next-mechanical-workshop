import { SignUpEmailPasswordInteractor } from 'domain/lib';
import { GqlUserAdapter } from '../../adapter/faunadb/user/adapter/User';
import { GqlUserQueryService } from '../../adapter/faunadb/user/queryService/User';

import { createContainer, asClass, InjectionMode, Lifetime, asValue } from 'awilix';
import { GqlSignUpEmailPasswordPresenter } from '../../presenter/auth/SignUpEmailPassword';
import { GqlAuthEmailPasswordAdapter } from '../../adapter/faunadb/auth/adapter/AuthEmailPassword';

export interface ISingUpCradle {
  presenter: GqlSignUpEmailPasswordPresenter;
  authAdapter: GqlAuthEmailPasswordAdapter;  
  useCase: SignUpEmailPasswordInteractor;
}

const presenter = new GqlSignUpEmailPasswordPresenter();

const singUpContainer = createContainer<ISingUpCradle>({
  injectionMode: InjectionMode.CLASSIC,
});

singUpContainer.register({
  presenter: asValue(presenter),  
  authAdapter: asClass(GqlAuthEmailPasswordAdapter),  
  useCase: asClass(SignUpEmailPasswordInteractor),
});

export default singUpContainer;
