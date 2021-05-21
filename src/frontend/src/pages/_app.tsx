import React from 'react';
import { AppProps } from 'next/app';
import '@styles/global.scss';

// import { SingUpContainerContext } from "";
import signUpContainer from 'infra/lib/dependency-injection/SignUp/container';
import { SingUpContainerContext } from 'lib/contexts';
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SingUpContainerContext.Provider value={signUpContainer}>
      <Component {...pageProps} />
    </SingUpContainerContext.Provider>
  );
}

export default MyApp;
