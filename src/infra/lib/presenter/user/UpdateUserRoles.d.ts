import { User } from 'schema';
import { UpdateUserRolesPresenter, UpdateUserRolesOutputData } from 'domain/lib';
export declare class GqlUpdateUserRolesPresenter implements UpdateUserRolesPresenter {
    private response;
    getResponse(): User | null;
    output(response: UpdateUserRolesOutputData): Promise<void>;
}
//# sourceMappingURL=UpdateUserRoles.d.ts.map