var capacitorVapi = (function (exports, core) {
    'use strict';

    const Vapi = core.registerPlugin('Vapi', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.VapiWeb()),
    });

    class VapiWeb extends core.WebPlugin {
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

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        VapiWeb: VapiWeb
    });

    exports.Vapi = Vapi;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
