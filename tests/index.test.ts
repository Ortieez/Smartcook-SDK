import { Config } from '../src/resources/base';
import { Basics } from '../src/resources/basics/basics';
import { describe, expect, test } from '@jest/globals';
import { DefaultResponse, ErrorResponse } from '../src/resources/basics/types';

let config: Config = {
  userId: 34,
  secret: '628man'
};

let client = new Basics(config);

const isDefaultResponse = (x: any): x is DefaultResponse =>
  typeof x.docu === 'string';

describe('Default API call', () => {
  test('default api call should indicate that the sdk is working', async () => {
    let res: DefaultResponse | ErrorResponse = await client.default();

    if (isDefaultResponse(res)) {
      let resultWithoutSignatureAndTime = {
        stat: res.stat,
        mess: res.mess,
        docu: res.docu,
        user: res.user
      };

      expect(resultWithoutSignatureAndTime).toStrictEqual({
        stat: 'ok',
        mess: 'No or not supported operation.',
        docu: 'https://github.com/bubilem/smartcook/tree/main/docs/api',
        user: 0
      });
    } else {
      throw new Error('Wrong credentials/body/data/response');
    }
  });
});
