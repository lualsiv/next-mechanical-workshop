import { NotFoundError } from 'common';
import {
    UserQueryService,
    denyIfNotSet,
    GetUserByIdQuery,
    GetUserByIdQueryResult,
  } from 'domain/lib';
import { User } from 'schema';
import {sdk} from '../../libraries/graphql-cllient'
import { UserFactory } from '../entity/user';

  export class GqlUserQueryService implements UserQueryService {
    public async getUserById(query: GetUserByIdQuery) {
        denyIfNotSet(query, ['id']);
        const { id } = query;
    
        const result = await sdk.FindUserById({id: id});
        if (!result.findUserByID) throw new NotFoundError();
    
        const res: GetUserByIdQueryResult = {
          user: UserFactory.toDto(result.findUserByID as User),
        };
        return res;
      }
  }