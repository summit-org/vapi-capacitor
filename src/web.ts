import { WebPlugin } from '@capacitor/core';

import type { VapiPlugin } from './definitions';

export class VapiWeb extends WebPlugin implements VapiPlugin {
  async start(options: { assistantId: string }): Promise<void> {
    console.log('ECHO', options);
  }
  async stop(): Promise<void> {
    console.log('ECHO');
  }
  async configure(_options: { publicKey: string }): Promise<void> {}
  async setMuted(_options: { muted: boolean }): Promise<void> {}
  async send(_options: { type: string; control: string }): Promise<void> {}
}
