import { createContext } from 'react';
import { AwilixContainer } from 'awilix';
import { ISingUpCradle } from 'infra/lib';

export const SingUpContainerContext = createContext<AwilixContainer<ISingUpCradle>>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  null as any
);