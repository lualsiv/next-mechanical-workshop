import { createContext } from 'react';
import { AwilixContainer } from 'awilix';
import { IUserCradle } from 'infra/lib';

export const UserContainerContext = createContext<AwilixContainer<IUserCradle>>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  null as any
);