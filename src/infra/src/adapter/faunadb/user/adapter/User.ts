import { UserAdapter, UserEntity } from "domain/lib";
import { UserFactory } from "../entity/user";
import {sdk} from '../../libraries/graphql-cllient'
import { Role, User, UserInput } from "schema";
import { NotFoundError } from "common";
export class GqlUserAdapter implements UserAdapter {
      
    public async getById(id: string) {
      const result = await sdk.FindUserById({id});
      if (!result) return null;
  
      return UserFactory.toEntity(result.findUserByID as User);
    }
  
    // public async create(request: CreateUserInputData) {
    //   const user =  {email: request.email, roles: [RoleTypes.Anonymous.toString() as Role]} as UserInput;      
    //   const result = await sdk.CreateUser({input: user})
  
    //   return UserFactory.toEntity(result.createUser);
    // }
  
    public async update(userEntity: UserEntity) {
      const user = UserFactory.fromEntity(userEntity);
      const saved = await sdk.UpdatUser({id: user._id, data: user});
  
      return UserFactory.toEntity(saved.updateUser);
    }
  
    public async delete(id: string) {
      const user = await sdk.FindUserById({id});
      if (!user.findUserByID) throw new NotFoundError();
  
      await sdk.DeleteUser({id});
  
      return UserFactory.toEntity(user.findUserByID as User);
    }
  }