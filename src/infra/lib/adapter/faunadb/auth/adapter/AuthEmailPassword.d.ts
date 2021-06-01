import { AuthEmailPasswordAdapter, SignInEmailPasswordInputData, SignUpEmailPasswordInputData } from 'domain/lib';
export declare class GqlAuthEmailPasswordAdapter implements AuthEmailPasswordAdapter {
    getByEmail(email: string): Promise<import("domain/lib").UserEntity | null>;
    create(request: SignUpEmailPasswordInputData): Promise<import("domain/lib").UserEntity>;
    signin(request: SignInEmailPasswordInputData): Promise<string>;
}
//# sourceMappingURL=AuthEmailPassword.d.ts.map