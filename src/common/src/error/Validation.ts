export class ValidationError extends Error {
    constructor(message?: string) {
      super(message || 'Falha na validação');
      this.name = 'ValidationError';
    }
  }