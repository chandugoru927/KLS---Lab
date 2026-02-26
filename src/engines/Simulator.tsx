import React from 'react';

export function Simulator() {
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Circuit Simulator</h1>
          <p className="text-slate-500">Drag and drop components to design your circuit.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium">Run Simulation</button>
          <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50">Export PDF</button>
        </div>
      </div>
      
      <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm flex overflow-hidden">
        {/* Component Library Sidebar */}
        <div className="w-64 border-r border-slate-100 p-4 bg-slate-50/50">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Components</h3>
          <div className="space-y-2">
            {['Resistor', 'Capacitor', 'Inductor', 'Diode', 'Transistor', 'Op-Amp', 'Voltage Source', 'Ground'].map(comp => (
              <div key={comp} className="p-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 cursor-grab hover:border-indigo-300 hover:shadow-sm transition-all">
                {comp}
              </div>
            ))}
          </div>
        </div>
        
        {/* Canvas Area */}
        <div className="flex-1 relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] flex items-center justify-center">
          <div className="text-center">
            <p className="text-slate-400 text-sm">Simulator Engine Placeholder</p>
            <p className="text-slate-300 text-xs mt-1">Canvas implementation will go here</p>
          </div>
        </div>

        {/* Properties Panel */}
        <div className="w-64 border-l border-slate-100 p-4 bg-slate-50/50">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Properties</h3>
          <p className="text-xs text-slate-400 italic">Select a component to view properties</p>
        </div>
      </div>
    </div>
  );
}
