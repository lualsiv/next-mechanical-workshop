import { IllegalArgumentError } from 'common';

import { CreateUserInteractor } from '../CreateUser';
import { MockUserAdapter } from '../__mocks__/MockUserAdapter';
import { MockCreateUserPresenter } from '../__mocks__/MockUserPresenter';

/**
 * Generate interactor
 */
const setup = () => {
  const repository = new MockUserAdapter();
  const presenter = new MockCreateUserPresenter();
  const interactor = new CreateUserInteractor(repository, presenter);

  return { interactor, presenter };
};

describe('CreateUserInteractor', () => {
  test('Consegui processar a solicitação e gerar uma nova entidade', async () => {
    const { interactor, presenter } = setup();
    const request = { email: 'aaa@bbb.com' };

    await interactor.handle(request);

    // The data specified in request was obtained as response
    const response = presenter.getResponse();
    expect(response?.user?.email).toBe(request.email);
  });

  test('Consegui processar vários pedidos', async () => {
    const { interactor, presenter } = setup();

    let i = 0;
    while (i <= 10) {
      ++i;
      const request = { email: `aaa${i}@bbb.com` };
      await interactor.handle(request);
    }

    // response として request で指定したデータが得られた
    const response = presenter.getResponse();
    expect(response?.user?.email).toBe(`aaa${i}@bbb.com`);
  });

  test('Falha porque você especificou um endereço de e-mail inválido', async () => {
    const { interactor } = setup();
    const request = { email: 'hogehoge' };

    await expect(interactor.handle(request)).rejects.toThrow(IllegalArgumentError);
  });
});