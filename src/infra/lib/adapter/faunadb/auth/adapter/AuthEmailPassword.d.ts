import { AuthEmailPasswordAdapter, SignUpEmailPasswordInputData } from 'domain/lib';
export declare class GqlAuthEmailPasswordAdapter implements AuthEmailPasswordAdapter {
    getByEmail(email: string): Promise<import("domain/lib").UserEntity | null>;
    create(request: SignUpEmailPasswordInputData): Promise<import("domain/lib").UserEntity>;
}
//# sourceMappingURL=AuthEmailPassword.d.ts.map