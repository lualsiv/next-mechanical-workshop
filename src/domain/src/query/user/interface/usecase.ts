import { UserEntity } from '../../../entity/user/UserEntity';

export type GetUserByIdInputData = {
  id: string;  
};

export interface GetUserByIdUseCase {
  handle(request: GetUserByIdInputData, actor: UserEntity): void;
}