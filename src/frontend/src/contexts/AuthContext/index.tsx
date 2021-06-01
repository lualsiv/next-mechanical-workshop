// contexts/auth.js
import React, { createContext, useState, useContext, useEffect, FC, useCallback } from 'react';
import Router, { useRouter } from 'next/router';
import { getToken, resetToken, setToken } from '../../libraries/auth-token';

import { UserDto, UserEntity } from 'domain/lib/entity/user';
import jwtDecode from 'jwt-decode';

type PickedUser = Pick<any, 'id' | 'roles' | 'email'>;
type Actor = PickedUser | null;
type Jwt = Pick<any, 'id' | 'roles'>;
type SubmitFunction = (email: string, password: string) => Promise<void>;

type AuthContext = {
  actor: Actor;
  login: SubmitFunction;
  logout: () => void;
  refetchMe: () => void;
};

const AuthContext: any = createContext<AuthContext>({
  actor: null,
  login: async () => {
    //
  },
  logout: () => {
    //
  },
  refetchMe: () => {
    //
  },
});

export const AuthProvider: FC = ({ children }) => {
  const [actor, setActor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const getUser = (id: string) => {
    var user = {
      id: '',
      roles: [''],
      email: '',
    };
    setActor(user);
  };

  const refetchMe = useCallback(() => {
    const token = getToken();
    if (!token) return;

    var aux = jwtDecode<Jwt>(token);
    const { id } = jwtDecode<Jwt>(token);
    console.info('jwt:', aux);
    if (!id) return;

    getUser(id);
  }, [getUser, setActor]);

  const login = useCallback<SubmitFunction>(async (email, password) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const { token, user } = (await res.json()) || {};

      if (token) setToken(token);
      if (user) setActor(user);
    }
  }, []);

  const logout = async () => {
    const res = await fetch('/api/auth/logout');
    if (res.ok) {
      resetToken();
      Router.push('/login');
    }
  };

  useEffect(() => {
    refetchMe();
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!actor, actor, login, isLoading: loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth: any = () => useContext(AuthContext);

export const ProtectRoute = ({ children }) => {
  var aux = useAuth();
  var arrayAllow = ['/login', '/create-account'];
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  console.info('aux', aux);
  console.info('isloading', isLoading);
  console.info('isAuthenticated', isAuthenticated);
  if (isLoading || (!isAuthenticated && arrayAllow.indexOf(router.asPath) < 0)) {
    return <div>Loading</div>;
  }
  return children;
};
