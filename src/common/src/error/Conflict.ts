export class ConflictError extends Error {
    constructor(message?: string) {
      super(message || 'Esta operação não pôde ser realizada porque outra operação conflitante foi realizada antes desta operação.');
      this.name = 'NotFoundError';
    }
  }