#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(VapiPlugin, "Vapi",
           CAP_PLUGIN_METHOD(start, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(stop, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(configure, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(setMuted, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(send, CAPPluginReturnNone);
)
