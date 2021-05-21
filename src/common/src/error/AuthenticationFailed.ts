export class AuthenticationFailedError extends Error {
    constructor(message?: string) {
      super(message || 'Autenticação falhou');
      this.name = 'AuthenticationFailedError';
    }
  }