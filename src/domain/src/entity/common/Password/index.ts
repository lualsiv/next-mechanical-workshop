import { PropertyRequiredError, IllegalArgumentError } from 'common';

export const denyIllegalPassword = (password: string) => {
  if (!password) throw new PropertyRequiredError('password');
  return true;
};

export class Password {
  private password: string;

  constructor(password: string) {
    denyIllegalPassword(password);
    this.password = password;
  }

  getPassword() {
    return this.password;
  }

  toString() {
    return this.password;
  }

  isEqual(password: Password): boolean;
  isEqual(password: string): boolean;
  isEqual(password: unknown): boolean {
    if (password instanceof Password)
      return (password as Password).toString() === this.getPassword();
    if (typeof password === 'string') return password === this.getPassword();
    throw new IllegalArgumentError('Não foi possível comparar a senha');
  }  
}