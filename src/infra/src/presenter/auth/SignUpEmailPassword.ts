import { User } from 'schema';
import { SignUpEmailPasswordPresenter, SignUpEmailPasswordOutputData } from 'domain/lib/usecase';

import { toGqlUser } from '../utils/converter/user';

type Response = {
  user: User | null;
  token: string | null;
};

export class GqlSignUpEmailPasswordPresenter implements SignUpEmailPasswordPresenter {
  private response: Response | null = null;

  public getResponse() {
    return this.response;
  }

  public async output(response: SignUpEmailPasswordOutputData) {
    var user = toGqlUser(response.user);
    this.response = { user: user, token: response.token };
  }
}
