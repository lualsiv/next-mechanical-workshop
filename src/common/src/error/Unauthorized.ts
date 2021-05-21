export class UnauthorizedError extends Error {
    constructor(message?: string) {
      super(message || 'Não há autorização para realizar essa operação');
      this.name = 'UnauthorizedError';
    }
  }