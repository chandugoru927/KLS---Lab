import React from 'react';
import Editor from '@monaco-editor/react';

export function CodeEditor() {
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Firmware Editor</h1>
          <p className="text-slate-500">Write C++ or Python code for your embedded projects.</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none">
            <option>Arduino Uno</option>
            <option>ESP32</option>
            <option>Raspberry Pi Pico</option>
          </select>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">Compile & Upload</button>
        </div>
      </div>
      
      <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        <div className="h-10 border-b border-slate-100 bg-slate-50 flex items-center px-4 gap-4">
          <div className="text-xs font-bold text-indigo-600 border-b-2 border-indigo-600 h-full flex items-center px-2">main.cpp</div>
          <div className="text-xs font-medium text-slate-500 hover:text-slate-700 cursor-pointer h-full flex items-center px-2">config.h</div>
        </div>
        <div className="flex-1">
          <Editor
            height="100%"
            defaultLanguage="cpp"
            defaultValue={`// KLS Elite Projects - Firmware Template\n\nvoid setup() {\n  // initialize digital pin LED_BUILTIN as an output.\n  pinMode(LED_BUILTIN, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on\n  delay(1000);                       // wait for a second\n  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off\n  delay(1000);                       // wait for a second\n}`}
            theme="light"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>
        <div className="h-32 border-t border-slate-100 bg-slate-900 p-4 font-mono text-xs text-emerald-400 overflow-y-auto">
          <p>[INFO] Compiling main.cpp...</p>
          <p>[INFO] Linking objects...</p>
          <p>[SUCCESS] Build complete. Size: 4.2KB</p>
          <p className="text-slate-500 animate-pulse">_</p>
        </div>
      </div>
    </div>
  );
}
