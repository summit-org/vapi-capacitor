import { WebPlugin } from '@capacitor/core';

import type { VapiPlugin } from './definitions';

export class VapiWeb extends WebPlugin implements VapiPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
