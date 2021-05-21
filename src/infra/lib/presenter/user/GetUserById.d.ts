import { User } from 'schema';
import { GetUserByIdPresenter, GetUserByIdOutputData } from 'domain/lib';
export declare class GqlGetUserByIdPresenter implements GetUserByIdPresenter {
    private response;
    getResponse(): User | null;
    output(response: GetUserByIdOutputData): Promise<void>;
}
//# sourceMappingURL=GetUserById.d.ts.map