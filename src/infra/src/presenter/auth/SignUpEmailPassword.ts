import { User } from 'schema';
import {
  SignUpEmailPasswordPresenter,
  SignUpEmailPasswordOutputData,
} from 'domain/lib/usecase';

import { toGqlUser } from '../utils/converter/user';

export class GqlSignUpEmailPasswordPresenter implements SignUpEmailPasswordPresenter {
  private response: User | null = null;

  public getResponse() {
    return this.response;
  }

  public async output(response: SignUpEmailPasswordOutputData) {
    this.response = toGqlUser(response.user);
  }
}
