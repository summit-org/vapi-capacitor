package com.vapi.capacitor.plugin;

import android.util.Log;

public class Vapi {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
