import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { ConflictError } from 'common';

import { AuthEmailPasswordAdapter } from './interfaces/adapter';
import { SignUpEmailPasswordInputData, SignUpEmailPasswordUseCase } from './interfaces/usecase';
import {
  SignUpEmailPasswordOutputData,
  SignUpEmailPasswordPresenter,
} from './interfaces/presenter';
import { UserAdapter } from '../user/interface/adapter';

// dotenv.config();

export class SignUpEmailPasswordInteractor implements SignUpEmailPasswordUseCase {
  private authAdapter: AuthEmailPasswordAdapter;
  private presenter: SignUpEmailPasswordPresenter;

  constructor(authAdapter: AuthEmailPasswordAdapter, presenter: SignUpEmailPasswordPresenter) {
    this.authAdapter = authAdapter;
    this.presenter = presenter;
  }

  public async handle(request: SignUpEmailPasswordInputData) {
    // You cannot register with an email address that has already been registered
    const existedAuthEntity = await this.authAdapter.getByEmail(request.email);
    if (existedAuthEntity) throw new ConflictError('That email address is already registered');

    // Generate auth entity
    const userEntity = await this.authAdapter.create({
      email: request.email,
      name: request.name,
      password: request.password,
      roles: request.roles,
      createdAt: request.createdAt,
    });

    const userId = userEntity.getId().toString();

    // Generate JWT token
    const tokenPayload = {
      id: userId,
      roles: userEntity.getRoles().map((role) => role.toString()),
    };
    // const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;
    const token = ''; //jwt.sign(tokenPayload, JWT_SECRET!, { expiresIn: JWT_EXPIRES_IN });

    // Returns a JWT token and a signed-up user
    const outputData: SignUpEmailPasswordOutputData = {
      token,
      user: userEntity.toDto(),
    };
    this.presenter.output(outputData);
  }
}
