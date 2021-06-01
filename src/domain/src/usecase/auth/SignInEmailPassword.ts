import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { NotFoundError, AuthenticationFailedError } from 'common';

import { AuthEmailPasswordAdapter } from './interfaces/adapter';
import { SignInEmailPasswordInputData, SignInEmailPasswordUseCase } from './interfaces/usecase';
import { SignInEmailPasswordOutputData, SignInEmailPasswordPresenter } from './interfaces/presenter';
import { UserAdapter } from '../user/interface/adapter';

dotenv.config();

export class SignInEmailPasswordInteractor implements SignInEmailPasswordUseCase {
  private authAdapter: AuthEmailPasswordAdapter;
  private userAdapter: UserAdapter;
  private presenter: SignInEmailPasswordPresenter;

  constructor(
    authAdapter: AuthEmailPasswordAdapter,
    userAdapter: UserAdapter,
    presenter: SignInEmailPasswordPresenter,
  ) {
    this.authAdapter = authAdapter;
    this.userAdapter = userAdapter;
    this.presenter = presenter;
  }

  public async handle(request: SignInEmailPasswordInputData) {
    const authEntity = await this.authAdapter.getByEmail(request.email);
    if (!authEntity) throw new NotFoundError('O endereço de email não está registrado');

    // パスワードがマッチしているか
    const access_token = await this.authAdapter.signin(request);
    // const passwordMatched = await authEntity.getPassword().compareWith(request.password);
    // if (!passwordMatched) throw new AuthenticationFailedError();

    // 対応する user エンティティを取得
    const userId = authEntity.getId().toString();
    const userEntity = await this.userAdapter.getById(userId);
    if (!userEntity) throw new NotFoundError('O usuário correspondente ao resultado da autenticação não pode ser encontrado');

    // JWT トークンを生成
    const tokenPayload = {
      id: userId,      
      roles: userEntity.getRoles().map((role) => role.toString()),
      access_token
    };
    const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;
    const token = jwt.sign(tokenPayload, JWT_SECRET!, { expiresIn: JWT_EXPIRES_IN });

    const outputData: SignInEmailPasswordOutputData = {
      token,
      user: userEntity.toDto(),
    };
    this.presenter.output(outputData);
  }
}
