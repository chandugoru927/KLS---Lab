import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Rect, Text, Group, Circle, Line } from 'react-konva';
import { 
  Play, 
  Save, 
  Share2, 
  Cpu, 
  Zap, 
  Settings, 
  Layers, 
  Search, 
  ChevronRight, 
  Terminal, 
  Activity, 
  Info,
  Trash2,
  Copy,
  RotateCw,
  MousePointer2,
  Hand,
  Plus,
  Minus,
  Maximize,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

// Types
interface Component {
  id: string;
  type: string;
  name: string;
  x: number;
  y: number;
  rotation: number;
  properties: Record<string, any>;
  pins: Pin[];
}

interface Pin {
  id: string;
  name: string;
  x: number;
  y: number;
  type: 'digital' | 'analog' | 'power' | 'ground';
}

const COMPONENT_LIBRARY = [
  { 
    category: 'Microcontrollers', 
    items: [
      { id: 'arduino-uno', name: 'Arduino Uno', icon: Cpu, type: 'mcu' },
      { id: 'esp32', name: 'ESP32 DevKit', icon: Cpu, type: 'mcu' },
      { id: 'raspberry-pi', name: 'Raspberry Pi 4', icon: Cpu, type: 'mcu' },
    ] 
  },
  { 
    category: 'Sensors', 
    items: [
      { id: 'ultrasonic', name: 'Ultrasonic Sensor', icon: Activity, type: 'sensor' },
      { id: 'dht11', name: 'DHT11 Temp/Humid', icon: Activity, type: 'sensor' },
      { id: 'pir', name: 'PIR Motion', icon: Activity, type: 'sensor' },
    ] 
  },
  { 
    category: 'Actuators', 
    items: [
      { id: 'servo', name: 'Servo Motor', icon: Zap, type: 'actuator' },
      { id: 'dc-motor', name: 'DC Motor', icon: Zap, type: 'actuator' },
      { id: 'relay', name: 'Relay Module', icon: Zap, type: 'actuator' },
    ] 
  },
  { 
    category: 'Displays', 
    items: [
      { id: 'lcd-1602', name: 'LCD 16x2', icon: Layers, type: 'display' },
      { id: 'oled-096', name: 'OLED 0.96"', icon: Layers, type: 'display' },
    ] 
  },
  { 
    category: 'Power', 
    items: [
      { id: 'battery-9v', name: '9V Battery', icon: Zap, type: 'power' },
      { id: 'power-module', name: 'Breadboard Power', icon: Zap, type: 'power' },
    ] 
  }
];

export function CircuitCanvas() {
  const [components, setComponents] = useState<Component[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [logs, setLogs] = useState<{ msg: string; type: 'info' | 'warn' | 'error'; time: string }[]>([
    { msg: 'System initialized. Ready for simulation.', type: 'info', time: '10:30:00' },
    { msg: 'No power source detected in circuit.', type: 'warn', time: '10:30:05' }
  ]);
  const [stageScale, setStageScale] = useState(1);
  const [stagePos, setStagePos] = useState({ x: 0, y: 0 });
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeTab, setActiveTab] = useState<'properties' | 'pins' | 'serial'>('properties');

  const containerRef = useRef<HTMLDivElement>(null);
  const [stageSize, setStageSize] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setStageSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleDragStart = (e: any) => {
    const id = e.target.id();
    setSelectedId(id);
  };

  const handleDragEnd = (e: any) => {
    const id = e.target.id();
    const newComponents = components.map((comp) => {
      if (comp.id === id) {
        return {
          ...comp,
          x: e.target.x(),
          y: e.target.y(),
        };
      }
      return comp;
    });
    setComponents(newComponents);
  };

  const addComponent = (type: string, name: string) => {
    const newComp: Component = {
      id: `comp-${Date.now()}`,
      type,
      name,
      x: 100,
      y: 100,
      rotation: 0,
      properties: {
        name: name,
        model: 'Generic v1',
        voltage: '5V'
      },
      pins: [
        { id: 'vcc', name: 'VCC', x: 0, y: 0, type: 'power' },
        { id: 'gnd', name: 'GND', x: 0, y: 20, type: 'ground' },
        { id: 'd1', name: 'D1', x: 50, y: 0, type: 'digital' }
      ]
    };
    setComponents([...components, newComp]);
    setSelectedId(newComp.id);
  };

  const selectedComponent = components.find(c => c.id === selectedId);

  const handleWheel = (e: any) => {
    e.evt.preventDefault();
    const scaleBy = 1.1;
    const stage = e.target.getStage();
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
    };

    const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;
    setStageScale(newScale);
    setStagePos({
      x: (stage.getPointerPosition().x / newScale - mousePointTo.x) * newScale,
      y: (stage.getPointerPosition().y / newScale - mousePointTo.y) * newScale,
    });
  };

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col bg-slate-950 overflow-hidden">
      {/* Top Toolbar */}
      <div className="h-14 bg-slate-900 border-b border-white/10 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white text-xs">C</div>
            <h2 className="text-sm font-bold text-white tracking-tight">Smart Controller Project</h2>
          </div>
          <div className="h-4 w-[1px] bg-white/10"></div>
          <div className="flex items-center gap-1">
            <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold rounded uppercase">Autosaved</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white/5 rounded-lg p-1 border border-white/5 mr-2">
            <button className="p-1.5 text-slate-400 hover:text-white rounded-md transition-all">
              <MousePointer2 className="w-4 h-4" />
            </button>
            <button className="p-1.5 text-slate-400 hover:text-white rounded-md transition-all">
              <Hand className="w-4 h-4" />
            </button>
          </div>
          <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
            <Save className="w-4 h-4" />
          </button>
          <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
            <Share2 className="w-4 h-4" />
          </button>
          <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
          <button 
            onClick={() => setIsSimulating(!isSimulating)}
            className={cn(
              "flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all shadow-lg",
              isSimulating 
                ? "bg-red-600 hover:bg-red-700 text-white shadow-red-600/20" 
                : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20"
            )}
          >
            {isSimulating ? <Zap className="w-3.5 h-3.5 fill-current animate-pulse" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            {isSimulating ? 'Stop Simulation' : 'Start Simulation'}
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Panel: Components Library */}
        <div className="w-72 bg-slate-900 border-r border-white/10 flex flex-col shrink-0">
          <div className="p-4 border-b border-white/10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search components..." 
                className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-4">
            {COMPONENT_LIBRARY.map((cat) => (
              <div key={cat.category} className="space-y-1">
                <button className="w-full flex items-center justify-between px-2 py-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-slate-300 transition-colors">
                  {cat.category}
                  <ChevronRight className="w-3 h-3" />
                </button>
                <div className="grid grid-cols-2 gap-2 p-1">
                  {cat.items.map((item) => (
                    <button 
                      key={item.id}
                      onClick={() => addComponent(item.id, item.name)}
                      className="flex flex-col items-center justify-center gap-2 p-3 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-indigo-500/30 transition-all group"
                    >
                      <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="w-5 h-5 text-slate-400 group-hover:text-indigo-400" />
                      </div>
                      <span className="text-[10px] font-medium text-slate-400 text-center group-hover:text-white">{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center: Drag-and-drop Canvas */}
        <div ref={containerRef} className="flex-1 bg-slate-950 relative overflow-hidden">
          {/* Canvas Controls */}
          <div className="absolute bottom-6 right-6 z-10 flex flex-col gap-2">
            <div className="bg-slate-900 border border-white/10 rounded-xl p-1 flex flex-col gap-1 shadow-2xl">
              <button onClick={() => setStageScale(s => s * 1.1)} className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                <Plus className="w-4 h-4" />
              </button>
              <div className="h-[1px] bg-white/10 mx-2"></div>
              <button onClick={() => setStageScale(s => s / 1.1)} className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                <Minus className="w-4 h-4" />
              </button>
            </div>
            <button className="p-3 bg-slate-900 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-all shadow-2xl">
              <Maximize className="w-4 h-4" />
            </button>
          </div>

          {/* Grid Background */}
          <div className="absolute inset-0 pointer-events-none opacity-20" 
               style={{ 
                 backgroundImage: `radial-gradient(circle, #4f46e5 1px, transparent 1px)`, 
                 backgroundSize: `${20 * stageScale}px ${20 * stageScale}px`,
                 backgroundPosition: `${stagePos.x}px ${stagePos.y}px`
               }}>
          </div>

          <Stage
            width={stageSize.width}
            height={stageSize.height}
            scaleX={stageScale}
            scaleY={stageScale}
            x={stagePos.x}
            y={stagePos.y}
            onWheel={handleWheel}
            draggable
            onDragEnd={(e) => setStagePos({ x: e.target.x(), y: e.target.y() })}
          >
            <Layer>
              {components.map((comp) => (
                <Group
                  key={comp.id}
                  id={comp.id}
                  x={comp.x}
                  y={comp.y}
                  rotation={comp.rotation}
                  draggable
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  onClick={() => setSelectedId(comp.id)}
                >
                  {/* Component Body */}
                  <Rect
                    width={120}
                    height={80}
                    fill="#1e293b"
                    stroke={selectedId === comp.id ? "#4f46e5" : "#334155"}
                    strokeWidth={2}
                    cornerRadius={8}
                    shadowBlur={selectedId === comp.id ? 10 : 0}
                    shadowColor="#4f46e5"
                  />
                  <Text
                    text={comp.name}
                    fontSize={10}
                    fill="#94a3b8"
                    x={10}
                    y={10}
                    fontStyle="bold"
                  />
                  
                  {/* Pins */}
                  {comp.pins.map((pin, idx) => (
                    <Group key={pin.id} x={idx * 20 + 10} y={60}>
                      <Circle
                        radius={4}
                        fill={pin.type === 'power' ? '#ef4444' : pin.type === 'ground' ? '#000' : '#4f46e5'}
                        stroke="#fff"
                        strokeWidth={1}
                      />
                      <Text
                        text={pin.name}
                        fontSize={8}
                        fill="#64748b"
                        y={8}
                        x={-5}
                      />
                    </Group>
                  ))}
                </Group>
              ))}
            </Layer>
          </Stage>
        </div>

        {/* Right Panel: Properties & Pin Config */}
        <div className="w-80 bg-slate-900 border-l border-white/10 flex flex-col shrink-0">
          <div className="flex border-b border-white/10">
            {(['properties', 'pins', 'serial'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "flex-1 py-3 text-[10px] font-bold uppercase tracking-widest transition-all border-b-2",
                  activeTab === tab 
                    ? "text-indigo-400 border-indigo-500 bg-indigo-500/5" 
                    : "text-slate-500 border-transparent hover:text-slate-300"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {selectedComponent ? (
              <div className="space-y-6">
                {activeTab === 'properties' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white">General Settings</h3>
                      <div className="flex gap-1">
                        <button className="p-1.5 text-slate-500 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {Object.entries(selectedComponent.properties).map(([key, val]) => (
                        <div key={key} className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{key}</label>
                          <input 
                            type="text" 
                            value={val}
                            readOnly
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                          />
                        </div>
                      ))}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Rotation</label>
                        <div className="flex items-center gap-3">
                          <input type="range" className="flex-1 accent-indigo-500" />
                          <button className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white">
                            <RotateCw className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'pins' && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-white">Pin Mapping</h3>
                    <div className="space-y-2">
                      {selectedComponent.pins.map((pin) => (
                        <div key={pin.id} className="flex items-center justify-between p-3 bg-white/5 rounded-2xl border border-white/5">
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-2 h-2 rounded-full",
                              pin.type === 'power' ? 'bg-red-500' : pin.type === 'ground' ? 'bg-slate-400' : 'bg-indigo-500'
                            )}></div>
                            <span className="text-xs font-medium text-white">{pin.name}</span>
                          </div>
                          <span className="text-[10px] font-bold text-slate-500 uppercase">{pin.type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'serial' && (
                  <div className="space-y-4 h-full flex flex-col">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white">Serial Monitor</h3>
                      <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> Connected
                      </span>
                    </div>
                    <div className="flex-1 bg-black/50 rounded-2xl p-4 font-mono text-[10px] text-emerald-500/80 overflow-y-auto space-y-1 min-h-[300px]">
                      <p>{'>'} Initializing Serial at 9600 baud...</p>
                      <p>{'>'} [OK] Serial ready.</p>
                      {isSimulating && (
                        <>
                          <p>{'>'} Sensor Reading: 24.5°C</p>
                          <p>{'>'} Sensor Reading: 24.6°C</p>
                          <p>{'>'} Sensor Reading: 24.5°C</p>
                        </>
                      )}
                    </div>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Send command..." 
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-10 py-2 text-xs text-white focus:outline-none"
                      />
                      <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-indigo-400">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center">
                  <Info className="w-8 h-8 text-slate-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white uppercase tracking-widest">No Selection</p>
                  <p className="text-xs text-slate-500 mt-1">Select a component to view its properties and pin configuration.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Panel: Simulation Logs */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-slate-900 border-t border-white/10 flex flex-col z-20">
          <div className="h-10 bg-slate-950 flex items-center justify-between px-6 shrink-0">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                <Terminal className="w-3.5 h-3.5" /> Simulation Logs
              </div>
              <div className="h-3 w-[1px] bg-white/10"></div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> 12 Info
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> 2 Warnings
                </span>
              </div>
            </div>
            <button className="text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">
              Clear Logs
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 font-mono text-[11px] space-y-1">
            {logs.map((log, i) => (
              <div key={i} className="flex gap-4 group">
                <span className="text-slate-600 shrink-0">[{log.time}]</span>
                <span className={cn(
                  "shrink-0 font-bold",
                  log.type === 'info' ? 'text-blue-400' : log.type === 'warn' ? 'text-amber-400' : 'text-red-400'
                )}>
                  [{log.type.toUpperCase()}]
                </span>
                <span className="text-slate-400 group-hover:text-slate-300 transition-colors">{log.msg}</span>
              </div>
            ))}
            {isSimulating && (
              <div className="flex gap-4 animate-pulse">
                <span className="text-slate-600 shrink-0">[10:30:10]</span>
                <span className="text-emerald-400 shrink-0 font-bold">[SIM]</span>
                <span className="text-slate-400">Simulation running... processing logic...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
