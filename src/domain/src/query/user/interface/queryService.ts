import { UserDto } from '../../../entity/user/UserDto';
import { Nullable } from '../../type';

export type GetUserByIdQuery = {
  id: string;  
};
export type GetUserByIdQueryResult = {
  user: Nullable<UserDto>;
};

export interface UserQueryService {
  getUserById(query: GetUserByIdQuery): Promise<GetUserByIdQueryResult>;
}