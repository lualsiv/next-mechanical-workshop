import { DeleteUserOutputData } from 'domain/lib/usecase';
import { DeleteUserPresenter } from 'domain/lib/usecase';
import { User } from 'schema';
// import { DeleteUserPresenter, DeleteUserOutputData } from 'domain';

import { toGqlUser } from '../utils/converter/user';

export class GqlDeleteUserPresenter implements DeleteUserPresenter {
  private response: User | null = null;

  public getResponse() {
    return this.response;
  }

  public async output(response: DeleteUserOutputData) {
    this.response = toGqlUser(response.user)!;
  }
}