import { ValidationError } from './Validation';

export class PropertyRequiredError extends ValidationError {
  public property: string;

  constructor(property: string) {
    super(`${property} Parâmetro obrigatório`);
    this.name = 'PropertyRequiredError';
    this.property = property;
  }
}