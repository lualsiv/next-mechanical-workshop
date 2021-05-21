import { UserDto, UserEntity } from '../../../entity';
import { SignUpEmailPasswordInputData } from './usecase';

export interface AuthEmailPasswordAdapter {
  getByEmail(email: string): Promise<UserEntity | null>;
  
  create(input: SignUpEmailPasswordInputData): Promise<UserEntity>;
}