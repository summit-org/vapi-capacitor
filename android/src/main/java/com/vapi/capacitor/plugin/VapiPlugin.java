package com.vapi.capacitor.plugin;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Vapi")
public class VapiPlugin extends Plugin {

    private Vapi implementation = new Vapi();

    @PluginMethod
    public void start(PluginCall call) {
        call.resolve();
    }

    @PluginMethod
    public void stop(PluginCall call) {
        call.resolve();
    }
}
