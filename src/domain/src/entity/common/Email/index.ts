import { PropertyRequiredError, IllegalArgumentError } from 'common';

const regex = /[^\s]+@[^\s]+/;

export const denyIllegalEmail = (email: string) => {
  if (!email) throw new PropertyRequiredError('email');
  if (!regex.test(email)) throw new IllegalArgumentError('Informe o endereço de e-mail correto');
  return true;
};

export class Email {
  private email: string;

  constructor(email: string) {
    denyIllegalEmail(email);
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  toString() {
    return this.email;
  }

  isEqual(email: Email): boolean;
  isEqual(email: string): boolean;
  isEqual(email: unknown): boolean {
    if (email instanceof Email) return (email as Email).toString() === this.getEmail();
    if (typeof email === 'string') return email === this.getEmail();
    throw new IllegalArgumentError('Não foi possível comparar o e-mail.');
  }
}