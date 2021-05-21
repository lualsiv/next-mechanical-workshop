import { GetUserOutputData, GetUserPresenter } from 'domain/lib/usecase';
import { User } from 'schema';
// import { GetUserPresenter, GetUserOutputData } from 'domain';

import { toGqlUser } from '../utils/converter/user';

export class GqlGetUserPresenter implements GetUserPresenter {
  private response: User | null = null;

  public getResponse() {
    return this.response;
  }

  public async output(response: GetUserOutputData) {
    this.response = toGqlUser(response?.user);
  }
}