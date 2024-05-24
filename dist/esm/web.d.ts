import { WebPlugin } from '@capacitor/core';
import type { VapiPlugin } from './definitions';
export declare class VapiWeb extends WebPlugin implements VapiPlugin {
    start(options: {
        assistantId: string;
    }): Promise<void>;
    stop(): Promise<void>;
    configure(_options: {
        publicKey: string;
    }): Promise<void>;
    setMuted(_options: {
        muted: boolean;
    }): Promise<void>;
    send(_options: {
        type: string;
        control: string;
    }): Promise<void>;
}
