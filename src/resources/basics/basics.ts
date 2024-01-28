import { Base } from '../base';
import { DefaultResponse, EchoResponse, ErrorResponse } from './types';

export class Basics extends Base {
  echo(message: string): Promise<EchoResponse | ErrorResponse> {
    return this.request('/echo', {
      method: 'POST',
      body: this.prepareBody({
        mess: message
      })
    });
  }

  default(): Promise<DefaultResponse | ErrorResponse> {
    return this.request('/');
  }
}
