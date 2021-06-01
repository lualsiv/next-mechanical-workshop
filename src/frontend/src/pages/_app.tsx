import React from 'react';
import { AppProps } from 'next/app';
import '@styles/global.scss';
import { AuthProvider, ProtectRoute } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthProvider>
      <ProtectRoute>
        <Component {...pageProps} />
      </ProtectRoute>
    </AuthProvider>
  );
}

export default MyApp;
