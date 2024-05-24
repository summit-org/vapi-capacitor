import { registerPlugin } from '@capacitor/core';
const Vapi = registerPlugin('Vapi', {
    web: () => import('./web').then(m => new m.VapiWeb()),
});
export * from './definitions';
export { Vapi };
//# sourceMappingURL=index.js.map