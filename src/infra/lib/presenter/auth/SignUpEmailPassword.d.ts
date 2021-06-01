import { User } from 'schema';
import { SignUpEmailPasswordPresenter, SignUpEmailPasswordOutputData } from 'domain/lib/usecase';
declare type Response = {
    user: User | null;
    token: string | null;
};
export declare class GqlSignUpEmailPasswordPresenter implements SignUpEmailPasswordPresenter {
    private response;
    getResponse(): Response | null;
    output(response: SignUpEmailPasswordOutputData): Promise<void>;
}
export {};
//# sourceMappingURL=SignUpEmailPassword.d.ts.map