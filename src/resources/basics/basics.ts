import { Base } from '../base';
import { ErrorResponse, ValidResponse } from './types';

export class Basics extends Base {
  echo(message: string): Promise<ValidResponse | ErrorResponse> {
    return this.request('/echo', {
      method: 'POST',
      body: this.prepareBody({
        mess: message
      })
    });
  }

  default(): Promise<ValidResponse | ErrorResponse> {
    return this.request('/');
  }
}
