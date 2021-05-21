// import { RoleType, UserDto } from "domain/lib";
// import { Role, User } from 'schema';

// export class AuthEmailPasswordFactory {
//     public static toDto(auth: User): UserDto {
//       return {
//         _id: auth._id,
//         email: auth.email,
//         name: auth.client?.name ? auth.client?.name : "",
//         roles: auth.roles.map(role =>{
//             return role.toString() as RoleType
//         }),
//         createdAt: auth.createdAt,
//         updatedAt: auth.updatedAt,
//         password: ""
//       };
//     }
  
//     public static toEntity(auth: User): AuthEmailPasswordEntity {
//       const schema = AuthEmailPasswordFactory.toDto(auth);
//       return new AuthEmailPasswordEntity(schema);
//     }
//   }