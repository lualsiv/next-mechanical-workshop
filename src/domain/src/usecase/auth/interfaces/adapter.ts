import { UserDto, UserEntity } from '../../../entity';
import { SignInEmailPasswordInputData, SignUpEmailPasswordInputData } from './usecase';

export interface AuthEmailPasswordAdapter {
  getByEmail(email: string): Promise<UserEntity | null>;
  
  create(input: SignUpEmailPasswordInputData): Promise<UserEntity>;

  signin(input: SignInEmailPasswordInputData) : Promise<string>;
}