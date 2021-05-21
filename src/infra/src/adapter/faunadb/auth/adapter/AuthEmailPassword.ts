import { AuthEmailPasswordAdapter, SignUpEmailPasswordInputData, UserDto } from 'domain/lib';
import { SignUpEmailPasswordRequest, User } from 'schema';
import { sdk } from '../../libraries/graphql-cllient';
import { UserFactory } from '../../user/entity/user';

export class GqlAuthEmailPasswordAdapter implements AuthEmailPasswordAdapter {
  public async getByEmail(email: string) {
    const result = await sdk.FindUserByEmail({ email });
    
    if (!result.findUserByEmail) return null;

    return UserFactory.toEntity(result.findUserByEmail);
  }

  public async create(request: SignUpEmailPasswordInputData) {
    const auth = request as SignUpEmailPasswordRequest;

    const result = await sdk.SignUpEmailPassword({ input: auth });

    return UserFactory.toEntity(result.signUpEmailPassword);
  }
}
