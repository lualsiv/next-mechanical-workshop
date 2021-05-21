import { GetUserOutputData, GetUserPresenter } from 'domain/lib/usecase';
import { User } from 'schema';
export declare class GqlGetUserPresenter implements GetUserPresenter {
    private response;
    getResponse(): User | null;
    output(response: GetUserOutputData): Promise<void>;
}
//# sourceMappingURL=GetUser.d.ts.map