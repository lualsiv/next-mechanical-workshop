import { UserAdapter, UserEntity } from "domain/lib";
export declare class GqlUserAdapter implements UserAdapter {
    getById(id: string): Promise<UserEntity | null>;
    update(userEntity: UserEntity): Promise<UserEntity>;
    delete(id: string): Promise<UserEntity>;
}
//# sourceMappingURL=User.d.ts.map