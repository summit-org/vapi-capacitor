import { PluginListenerHandle } from '@capacitor/core';

type VapiEventNames =
  | 'call-end'
  | 'call-start'
  | 'volume-level'
  | 'speech-start'
  | 'speech-end'
  | 'message'
  | 'error';

export interface VapiPlugin {
  start(options: { assistantId: string }): Promise<void>;
  stop(): Promise<void>;
  configure(options: { publicKey: string }): Promise<void>;
  setMuted(options: { muted: boolean }): Promise<void>;
  send(options: { type: string; control: string }): Promise<void>;
  addListener(
    eventName: VapiEventNames,
    listenerFunc: (event: any) => void,
  ): Promise<PluginListenerHandle>;
}
