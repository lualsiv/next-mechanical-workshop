import { DeleteUserOutputData } from 'domain/lib/usecase';
import { DeleteUserPresenter } from 'domain/lib/usecase';
import { User } from 'schema';
export declare class GqlDeleteUserPresenter implements DeleteUserPresenter {
    private response;
    getResponse(): User | null;
    output(response: DeleteUserOutputData): Promise<void>;
}
//# sourceMappingURL=DeleteUser.d.ts.map