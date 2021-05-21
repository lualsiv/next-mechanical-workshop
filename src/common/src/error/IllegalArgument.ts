import { ValidationError } from './Validation';

export class IllegalArgumentError extends ValidationError {
  constructor(message?: string) {
    super(message || 'Argumento ilegal.');
    this.name = 'IllegalArgumentError';
  }
}