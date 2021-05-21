import { NotFoundError } from 'common';

import { RoleTypes } from '../../../entity/common/Role';
import { UserEntity } from '../../../entity/user/UserEntity';
import { UserAdapter } from '../interface/adapter';
// import { CreateUserInputData } from '../interface/usecase';

type InMemoryStore = {
  idCounter: number;
  entities: Map<string, UserEntity>;
};

export const createInMemoryStore = (
  idCounter = 0,
  entities: Map<string, UserEntity> = new Map<string, UserEntity>(),
): InMemoryStore => {
  return {
    idCounter,
    entities,
  };
};

export class MockUserAdapter implements UserAdapter {
  private store: InMemoryStore;

  constructor() {
    this.store = createInMemoryStore();
  }

  public async getById(id: string) {
    return this.store.entities.get(id) ?? null;
  }

  // public async create(user: CreateUserInputData) {
  //   const id = `${++this.store.idCounter}`;
  //   const newEntity = new UserEntity({
  //     _id: id,
  //     email: user.email,
  //     roles: [RoleTypes.Member],
  //   });

  //   this.store.entities.set(id, newEntity);
  //   return newEntity;
  // }

  public async update(user: UserEntity) {
    const id = user.getId().toString();
    const targetEntity = this.store.entities.get(id);
    if (!targetEntity) throw new NotFoundError();

    this.store.entities.set(id, user);

    return user;
  }

  public async delete(id: string) {
    const targetEntity = this.store.entities.get(id);
    if (!targetEntity) throw new NotFoundError();

    this.store.entities.delete(id);

    return targetEntity;
  }
}