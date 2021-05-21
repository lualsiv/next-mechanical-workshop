import { GetUserInteractor } from '../GetUser';
import { MockUserAdapter } from '../__mocks__/MockUserAdapter';
import { MockGetUserPresenter } from '../__mocks__/MockUserPresenter';

/**
 * Create one user
 */
const setup = async () => {
  // repository
  const adapter = new MockUserAdapter();
  const userEntity = await adapter.create({ email: 'target@email.com' });
  const userId = userEntity.getId().toString();

  // interactor
  const presenter = new MockGetUserPresenter();
  const interactor = new GetUserInteractor(adapter, presenter);

  return { userId, interactor, presenter };
};

describe('GetUserInteractor', () => {
  test('I was able to process the request and get the entity', async () => {
    const { userId, interactor, presenter } = await setup();

    await interactor.handle({ id: userId });

    // The data specified in request was obtained as response
    const response = presenter.getResponse();
    expect(response?.user?.id).toBe(userId);
  });

  test('Null was returned because you specified an ID that does not exist', async () => {
    const { interactor, presenter } = await setup();

    await interactor.handle({ id: '99999' });

    // I got null as the response
    const response = presenter.getResponse();
    expect(response?.user).toBeNull();
  });
});