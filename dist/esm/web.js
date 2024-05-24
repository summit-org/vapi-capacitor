import { WebPlugin } from '@capacitor/core';
export class VapiWeb extends WebPlugin {
    async start(options) {
        console.log('ECHO', options);
    }
    async stop() {
        console.log('ECHO');
    }
    async configure(_options) { }
    async setMuted(_options) { }
    async send(_options) { }
}
//# sourceMappingURL=web.js.map