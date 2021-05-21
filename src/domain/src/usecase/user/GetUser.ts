import { UserAdapter } from './interface/adapter';
import { GetUserInputData, GetUserUseCase } from './interface/usecase';
import { GetUserOutputData, GetUserPresenter } from './interface/presenter';

export class GetUserInteractor implements GetUserUseCase {
  private adapter: UserAdapter;
  private presenter: GetUserPresenter;

  constructor(adapter: UserAdapter, presenter: GetUserPresenter) {
    this.adapter = adapter;
    this.presenter = presenter;
  }

  public async handle(request: GetUserInputData) {
    const userEntity = await this.adapter.getById(request.id);

    const outputData: GetUserOutputData = { user: userEntity?.toDto() ?? null };
    this.presenter.output(outputData);
  }
}