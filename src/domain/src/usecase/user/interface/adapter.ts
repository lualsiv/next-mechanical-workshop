import { UserEntity } from '../../../entity/user/UserEntity';

export interface UserAdapter {
  getById(id: string): Promise<UserEntity | null>;

  update(user: UserEntity): Promise<UserEntity>;
  delete(id: string): Promise<UserEntity>;
}