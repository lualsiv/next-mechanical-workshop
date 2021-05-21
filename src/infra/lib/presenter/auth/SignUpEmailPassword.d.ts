import { User } from 'schema';
import { SignUpEmailPasswordPresenter, SignUpEmailPasswordOutputData } from 'domain/lib/usecase';
export declare class GqlSignUpEmailPasswordPresenter implements SignUpEmailPasswordPresenter {
    private response;
    getResponse(): User | null;
    output(response: SignUpEmailPasswordOutputData): Promise<void>;
}
//# sourceMappingURL=SignUpEmailPassword.d.ts.map