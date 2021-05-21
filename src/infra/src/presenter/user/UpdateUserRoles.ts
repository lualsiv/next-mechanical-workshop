import { User } from 'schema';
import { UpdateUserRolesPresenter, UpdateUserRolesOutputData } from 'domain/lib';

import { toGqlUser } from '../utils/converter/user';

export class GqlUpdateUserRolesPresenter implements UpdateUserRolesPresenter {
  private response: User | null = null;

  public getResponse() {
    return this.response;
  }

  public async output(response: UpdateUserRolesOutputData) {
    this.response = toGqlUser(response.user)!;
  }
}
