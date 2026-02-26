import React from 'react';
import { Cpu, Activity, Wifi, Database } from 'lucide-react';

export function IoTEngine() {
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">IoT Visualization Hub</h1>
          <p className="text-slate-500">Real-time MQTT data streams and device management.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-bold border border-emerald-100">
            <Wifi className="w-3 h-3 animate-pulse" /> Broker Connected
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">Add Device</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1">
        {/* Device List */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4 shadow-sm">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Devices</h3>
          {[
            { name: 'ESP32-Temp-01', status: 'online', ip: '192.168.1.45' },
            { name: 'Arduino-Flow-X', status: 'online', ip: '192.168.1.48' },
            { name: 'Pico-W-Sensor', status: 'offline', ip: '192.168.1.52' },
          ].map(device => (
            <div key={device.name} className="p-3 border border-slate-100 rounded-xl hover:border-indigo-200 transition-all cursor-pointer group">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-slate-900">{device.name}</span>
                <span className={`w-2 h-2 rounded-full ${device.status === 'online' ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
              </div>
              <p className="text-[10px] text-slate-500 font-mono">{device.ip}</p>
            </div>
          ))}
        </div>

        {/* Real-time Charts */}
        <div className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Activity className="w-4 h-4 text-indigo-600" /> Live Telemetry
            </h3>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-500">TEMP</span>
              <span className="px-2 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-500">HUMIDITY</span>
            </div>
          </div>
          
          <div className="flex-1 border-b border-slate-100 relative">
             {/* Placeholder for Recharts/D3 */}
             <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-slate-300 text-sm italic">Real-time data visualization engine placeholder</p>
             </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-slate-50 rounded-xl">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Avg Temp</p>
              <p className="text-xl font-bold text-slate-900">24.5°C</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Peak Load</p>
              <p className="text-xl font-bold text-slate-900">82%</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Messages/sec</p>
              <p className="text-xl font-bold text-slate-900">124</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
