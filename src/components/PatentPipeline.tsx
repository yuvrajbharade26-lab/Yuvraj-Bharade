import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, RefreshCw, Zap, Sliders, ShieldCheck, CheckCircle2, Info, GitBranch, Layers, BookOpen } from "lucide-react";

interface PipelineNode {
  id: string;
  name: string;
  role: string;
  description: string;
  baseMetric: string;
}

export default function PatentPipeline({ readabilityMode = false }: { readabilityMode?: boolean }) {
  const [activeNode, setActiveNode] = useState<string>("entropy");
  const [synapticPlasticity, setSynapticPlasticity] = useState<number>(0.12); // Synaptic drift threshold delta
  const [seqDataDepth, setSeqDataDepth] = useState<number>(180); // In thousands of samples
  const [entropyGuard, setEntropyGuard] = useState<"standard" | "balanced" | "extreme">("balanced");
  const [simulationActive, setSimulationActive] = useState<boolean>(false);
  const [simStep, setSimStep] = useState<"idle" | "streaming" | "stabilizing" | "synthesized">("idle");
  const [simProgress, setSimProgress] = useState<number>(0);

  const nodes: PipelineNode[] = [
    {
      id: "input",
      name: readabilityMode ? "Inflow of New Info" : "Sequential Dataset Stream",
      role: readabilityMode ? "Smooth Inflow Buffer" : "Continuous Input Buffer",
      description: readabilityMode
        ? "Groups new batches of customer dataset records together beautifully. It streams information continuously without interrupting or breaking any of your active processes."
        : "Applies non-disruptive temporal sequencing to sequential cold-start streams. Groups incoming dataset batches without fracturing existing sequential pipelines.",
      baseMetric: "Throughput: 1,480 seq/sec",
    },
    {
      id: "entropy",
      name: readabilityMode ? "Intelligent Safety Filter" : "Thermodynamic Entropy Controller",
      role: readabilityMode ? "System Memory Guard" : "Plasticity Equilibrium Guard",
      description: readabilityMode
        ? "This safety logic calculates potential memory loss. It builds temporary safety walls inside the AI's mind, keeping old memories from being frozen or run over, while letting new data carve out new spaces."
        : "Directly calculates synaptic drift forces and erects localized high-entropy barriers to lock legacy critical weights. Allows lower entropy pathways to carve out spaces for new inputs.",
      baseMetric: "Synaptic Restrict: Delta < 0.04",
    },
    {
      id: "evolving-node",
      name: readabilityMode ? "Evolving Network Router" : "Evolving Modular Pipe",
      role: readabilityMode ? "Dynamic Router" : "Topology Router Node",
      description: readabilityMode
        ? "A smart router that automatically spins up tiny supplementary micro-layers when it detects that the new incoming data is starting to confuse or degrade the older core system."
        : "An isolated topological pipeline router that dynamically spins up small supplementary neural layers when sequence indicators signal rapid legacy degradation.",
      baseMetric: "Sparsity Spawn: 2-4 sub-layers",
    },
    {
      id: "consolidation",
      name: readabilityMode ? "Automatic Offline Cleanup" : "Offline Structural Consolidation",
      role: readabilityMode ? "Efficiency Optimizer" : "Post-Processing Weights Guard",
      description: readabilityMode
        ? "Safely merges and cleans up any redundant pathways during off-peak offline hours. This ensures maximum server speed while locked high-priority parameters are safe."
        : "Safely merges redundant pathways offline, optimizing overall inference speed while locking confirmed high-priority mathematical weights.",
      baseMetric: "Structural Sparing: 95.8% - 98.2%",
    },
  ];

  // Mathematical approximation of retention based on the visitor's controls
  const computedRetention = useMemo(() => {
    let base = 98.4;
    const driftPenalty = (synapticPlasticity - 0.05) * 4.5;
    base -= driftPenalty;
    const seqImpact = (seqDataDepth / 500) * 1.2;
    base -= seqImpact;
    if (entropyGuard === "standard") base -= 2.2;
    if (entropyGuard === "extreme") base += 0.4;

    return Math.min(Math.max(+base.toFixed(2), 85.0), 99.8);
  }, [synapticPlasticity, seqDataDepth, entropyGuard]);

  const handleRunSimulation = () => {
    if (simulationActive) return;
    setSimulationActive(true);
    setSimStep("streaming");
    setSimProgress(0);

    const interval = setInterval(() => {
      setSimProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setSimStep("stabilizing");
          
          setTimeout(() => {
            setSimStep("synthesized");
            setSimulationActive(false);
          }, 1000);

          return 100;
        }
        return prev + 10;
      });
    }, 120);
  };

  const handleReset = () => {
    setSimStep("idle");
    setSimProgress(0);
    setSimulationActive(false);
  };

  return (
    <div 
      className={`transition-all duration-300 rounded-xl p-6 lg:p-8 space-y-6 border ${
        readabilityMode 
          ? "bg-white border-slate-200 text-slate-800 shadow-md" 
          : "bg-card-dark border-border-dark text-slate-100"
      }`} 
      id="patent-pipeline-interactive"
    >
      
      {/* Patent Identification Meta Tag */}
      <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-5 ${
        readabilityMode ? "border-slate-100" : "border-slate-900"
      }`}>
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className={`px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded ${
              readabilityMode ? "bg-cyan-600 text-white" : "text-slate-950 bg-brand-cyan"
            }`}>
              PENDING INDIAN PATENT
            </span>
            <span className={`text-[10px] font-mono ${readabilityMode ? "text-slate-500 font-semibold" : "text-slate-500"}`}>
              App No: 202621050232
            </span>
            {readabilityMode && (
              <span className="text-[10px] font-sans font-medium text-amber-755 bg-amber-50 px-2 rounded flex items-center gap-1">
                <BookOpen className="w-3 h-3 text-amber-600" /> Plain English Enabled
              </span>
            )}
          </div>
          <h3 className={`text-lg md:text-xl font-display font-semibold ${readabilityMode ? "text-slate-900" : "text-white"}`}>
            {readabilityMode ? "Yuvraj's Indian Patent: Infinite Memory System" : "Evolving Modular Pipes Framework"}
          </h3>
          <p className={`text-xs font-sans mt-1 leading-relaxed ${readabilityMode ? "text-slate-600 max-w-2xl font-medium" : "text-slate-400"}`}>
            {readabilityMode 
              ? "Normally, when artificial intelligence is trained with new files, it completely overwrites its past training (called Catastrophic Forgetting). Yuvraj patented a unique technology that builds intelligent safety buffers to lock old skills in place while learning new items."
              : "Preventing catastrophic forgetting in sequential neural streams by balancing dynamic plasticity and thermodynamic entropy bounds."
            }
          </p>
        </div>

        <div>
          {simStep === "idle" && (
            <button
              onClick={handleRunSimulation}
              className={`px-4 py-2.5 text-xs font-mono font-bold rounded hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.2)] cursor-pointer ${
                readabilityMode 
                  ? "bg-cyan-600 hover:bg-cyan-700 text-white shadow-cyan-200" 
                  : "bg-brand-cyan text-slate-950 hover:bg-cyan-300"
              }`}
            >
              <Cpu className="w-4 h-4 animate-spin-slow" />
              <span>{readabilityMode ? "Start Safety Simulation" : "Simulate Pipeline"}</span>
            </button>
          )}

          {simulationActive && (
            <div className={`px-4 py-2.5 text-xs font-mono rounded font-bold flex items-center gap-2 ${
              readabilityMode
                ? "bg-cyan-50 border border-cyan-200 text-cyan-800"
                : "bg-slate-900 border border-brand-cyan/20 text-brand-cyan"
            }`}>
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>{readabilityMode ? "Simulating System Processes..." : `Transmitting (${simStep.toUpperCase()})...`}</span>
            </div>
          )}

          {simStep === "synthesized" && (
            <button
              onClick={handleReset}
              className={`px-4 py-2.5 text-xs font-mono rounded font-bold transition-all flex items-center gap-2 cursor-pointer ${
                readabilityMode 
                  ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300" 
                  : "bg-slate-950 hover:bg-slate-900 text-slate-300 border border-slate-800"
              }`}
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{readabilityMode ? "Reset Safe Simulator" : "Reset Simulator"}</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Interactive Work Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: System Control Deck (Interactive Sliders) */}
        <div className={`lg:col-span-4 p-5 rounded-xl border space-y-5 ${
          readabilityMode 
            ? "bg-slate-50/60 border-slate-150 text-slate-800" 
            : "bg-slate-950/40 border-slate-900"
        }`} id="control-sliders-deck">
          <div className="flex items-center gap-1.5 mb-2">
            <Sliders className={`w-4 h-4 ${readabilityMode ? "text-cyan-600" : "text-brand-cyan"}`} />
            <h4 className={`font-display font-bold text-xs uppercase tracking-wider ${readabilityMode ? "text-slate-700 font-bold" : "text-white"}`}>
              {readabilityMode ? "Interactive System Tuning" : "Mathematical Parameters"}
            </h4>
          </div>

          {/* Slider 1 */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-[11px] font-mono">
              <span className={readabilityMode ? "text-slate-600 font-bold" : "text-slate-400"}>
                {readabilityMode ? "Synaptic Shift Limit (Memory Sway)" : "Synaptic Drift Limit (Δ)"}
              </span>
              <span className={`font-bold ${readabilityMode ? "text-cyan-700" : "text-brand-cyan"}`}>{synapticPlasticity}</span>
            </div>
            <input
              type="range"
              min="0.02"
              max="0.30"
              step="0.01"
              value={synapticPlasticity}
              onChange={(e) => setSynapticPlasticity(parseFloat(e.target.value))}
              disabled={simulationActive}
              className={`w-full h-1.5 rounded outline-none cursor-pointer disabled:opacity-50 ${
                readabilityMode ? "bg-slate-200 accent-cyan-600" : "bg-slate-800 accent-brand-cyan"
              }`}
            />
            <p className={`text-[10px] leading-normal ${readabilityMode ? "text-slate-500 font-medium" : "text-slate-500"}`}>
              {readabilityMode 
                ? "Controls how loose the neural network weights are allowed to sway. Lower limits completely lock older key processes so they are never forgotten." 
                : "Controls weight drift allowability. Lower values strictly freeze critical pathways."}
            </p>
          </div>

          {/* Slider 2 */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-[11px] font-mono">
              <span className={readabilityMode ? "text-slate-600 font-bold" : "text-slate-400"}>
                {readabilityMode ? "Batch Size of Incoming Training" : "Sequential Stream Depth"}
              </span>
              <span className={`font-bold ${readabilityMode ? "text-cyan-700" : "text-brand-cyan"}`}>{seqDataDepth}k samples</span>
            </div>
            <input
              type="range"
              min="20"
              max="500"
              step="10"
              value={seqDataDepth}
              onChange={(e) => setSeqDataDepth(parseInt(e.target.value))}
              disabled={simulationActive}
              className={`w-full h-1.5 rounded outline-none cursor-pointer disabled:opacity-50 ${
                readabilityMode ? "bg-slate-200 accent-cyan-600" : "bg-slate-800 accent-brand-cyan"
              }`}
            />
            <p className={`text-[10px] leading-normal ${readabilityMode ? "text-slate-500 font-medium" : "text-slate-500"}`}>
              {readabilityMode 
                ? "The volume of live sequential datasets currently entering the model's training timeline." 
                : "Volume of sequential datasets queued for backpropagation streams."}
            </p>
          </div>

          {/* Radio Selector Choice */}
          <div className={`space-y-2 pt-2 border-t ${readabilityMode ? "border-slate-100" : "border-slate-900"}`}>
            <span className={`text-[11px] font-mono block ${readabilityMode ? "text-slate-600 font-bold" : "text-slate-400"}`}>
              {readabilityMode ? "Memory Safety Guard Height" : "Thermodynamic Entropy Guard level"}
            </span>
            <div className="grid grid-cols-3 gap-1.5 text-[10px] font-mono">
              {["standard", "balanced", "extreme"].map((level) => (
                <button
                  key={level}
                  onClick={() => setEntropyGuard(level as any)}
                  disabled={simulationActive}
                  className={`py-1.5 rounded text-center transition-all cursor-pointer font-bold ${
                    entropyGuard === level
                      ? readabilityMode
                        ? "bg-cyan-100 border border-cyan-300 text-cyan-800"
                        : "bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan"
                      : readabilityMode
                        ? "bg-slate-100 border border-slate-200 text-slate-550 hover:text-slate-900"
                        : "bg-slate-900/60 border border-slate-950 text-slate-400 hover:text-slate-350"
                  }`}
                >
                  {level.toUpperCase()}
                </button>
              ))}
            </div>
            <p className={`text-[10px] leading-normal ${readabilityMode ? "text-slate-500 font-medium" : "text-slate-500"}`}>
              {readabilityMode 
                ? "Sets the security barrier height. Extreme mode maximally preserves past memories with highest rigid safety." 
                : "Sets the thermal entropy height limit isolating the prior parameter clusters."}
            </p>
          </div>

          {/* Theoretical Projected Output Display */}
          <div className={`pt-4 border-t rounded p-3 text-center space-y-1 ${
            readabilityMode ? "border-slate-100 bg-cyan-50/40" : "border-slate-900 bg-slate-950/20"
          }`}>
            <span className={`text-[9px] font-mono block uppercase ${readabilityMode ? "text-slate-500 font-bold" : "text-slate-500"}`}>
              {readabilityMode ? "Old Memory Retention Metric" : "Projected Knowledge Retention Rate"}
            </span>
            <div className={`text-2xl font-mono font-bold ${readabilityMode ? "text-emerald-700" : "text-brand-emerald"}`}>
              {computedRetention}%
            </div>
            <p className={`text-[9px] ${readabilityMode ? "text-slate-550 font-medium" : "text-slate-500"}`}>
              {readabilityMode ? "Standard enterprise targets require >95% to pass safety audit." : "Enterprise baseline requires >95.0% retention rate."}
            </p>
          </div>
        </div>

        {/* Right Side: Nodes Flow Map Visualization */}
        <div className={`lg:col-span-8 flex flex-col justify-between border rounded-xl p-4 md:p-6 relative overflow-hidden ${
          readabilityMode 
            ? "bg-white border-slate-200 text-slate-800" 
            : "border-slate-900 bg-slate-950/60 text-slate-100"
        }`}>
          
          {/* Subtle design grid overlay */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 pointer-events-none opacity-[0.02]">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="border-t border-l border-white"></div>
            ))}
          </div>

          {/* Pipeline Map */}
          <div className="relative z-10 space-y-6 my-2">
            <span className={`text-[10px] font-mono uppercase tracking-widest block ${readabilityMode ? "text-slate-500 font-bold" : "text-slate-500"}`}>
              {readabilityMode ? "Continuous Training Memory Flow Steps" : "Active Modular Network Mapping"}
            </span>

            {/* Interactive SVG Connector Beam Layer */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
              
              {/* Connection visual lines */}
              <div className={`hidden sm:block absolute top-[26px] left-[12%] right-[12%] h-[2px] z-0 ${
                readabilityMode ? "bg-slate-200" : "bg-slate-800"
              }`}>
                {simStep === "streaming" && (
                  <motion.div
                    className={readabilityMode ? "h-full bg-gradient-to-r from-cyan-600 to-emerald-600" : "h-full bg-gradient-to-r from-brand-cyan via-brand-emerald to-brand-purple"}
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  />
                )}
                {simStep === "stabilizing" && (
                  <div className={`h-full w-full animate-pulse ${readabilityMode ? "bg-cyan-400" : "bg-brand-cyan/60"}`}></div>
                )}
                {simStep === "synthesized" && (
                  <div className={`h-full w-full ${readabilityMode ? "bg-emerald-600" : "bg-brand-emerald"}`}></div>
                )}
              </div>

              {nodes.map((node, i) => {
                const isActive = activeNode === node.id;
                
                // Styling determination
                let colorClasses = readabilityMode 
                  ? "border-slate-200 bg-white text-slate-500 hover:border-slate-350 hover:bg-slate-50" 
                  : "border-slate-800 bg-slate-900 text-slate-400";
                  
                if (isActive) {
                  colorClasses = readabilityMode
                    ? "border-cyan-600 bg-white text-cyan-700 shadow-sm scale-105 font-bold"
                    : "border-brand-cyan bg-slate-900 text-brand-cyan shadow-[0_0_15px_rgba(34,211,238,0.25)] scale-105";
                } else if (simStep === "synthesized") {
                  colorClasses = readabilityMode
                    ? "border-emerald-500 bg-slate-50 text-emerald-800 font-bold"
                    : "border-brand-emerald/40 bg-slate-900/60 text-brand-emerald";
                }

                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(node.id)}
                    className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 relative z-10 ${colorClasses}`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 font-mono text-xs font-bold border ${
                      isActive 
                        ? readabilityMode 
                          ? "bg-cyan-50 border-cyan-200 text-cyan-700" 
                          : "bg-slate-950/80 border-slate-800/80 text-brand-cyan" 
                        : readabilityMode 
                        ? "bg-slate-50 border-slate-200 text-slate-600" 
                        : "bg-slate-950/80 border-slate-800/80 text-brand-cyan"
                    }`}>
                      {i + 1}
                    </div>
                    <span className={`text-[11.5px] font-semibold font-display block leading-tight ${
                      readabilityMode ? (isActive ? "text-cyan-700" : "text-slate-800") : "text-slate-100"
                    }`}>
                      {node.name.split(" ")[0]} {node.name.split(" ")[1] || ""}
                    </span>
                    <span className={`text-[9px] font-mono mt-1 block truncate max-w-full ${readabilityMode ? "text-slate-500" : "text-slate-400"}`}>
                      {node.role}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Step Inspector Panel mapping directly under */}
            <div className={`border rounded-lg p-4 space-y-2 mt-4 ${
              readabilityMode ? "bg-slate-50 border-slate-150" : "bg-slate-900/40 border-slate-900/80"
            }`}>
              {(() => {
                const nodeInfo = nodes.find((n) => n.id === activeNode) || nodes[1];
                return (
                  <div className="space-y-1">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <span className={`text-[10px] font-mono border px-2 py-0.5 rounded uppercase font-bold ${
                        readabilityMode
                          ? "text-cyan-700 bg-cyan-50 border-cyan-200"
                          : "text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/10"
                      }`}>
                        {readabilityMode ? "Current Step Mode: " : "Active Node: "}{nodeInfo.role}
                      </span>
                      <span className={`text-[11px] font-mono ${readabilityMode ? "text-slate-500 font-bold" : "text-slate-400"}`}>
                        {nodeInfo.baseMetric}
                      </span>
                    </div>
                    <h5 className={`font-display font-bold text-sm mt-1 ${readabilityMode ? "text-slate-800" : "text-slate-200"}`}>
                      {nodeInfo.name}
                    </h5>
                    <p className={`text-xs leading-relaxed pt-1 select-all ${readabilityMode ? "text-slate-600 font-medium" : "text-slate-400"}`}>
                      {nodeInfo.description}
                    </p>
                  </div>
                );
              })()}
            </div>

          </div>

          {/* Simulation Output Stats Row */}
          <div className={`border-t pt-4 mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 ${
            readabilityMode ? "border-slate-150" : "border-slate-900"
          }`}>
            <div className={`p-2.5 rounded border text-center sm:text-left ${
              readabilityMode ? "bg-slate-100/30 border-slate-200" : "bg-slate-900/20 border-slate-900"
            }`}>
              <span className={`text-[9px] font-mono uppercase block ${readabilityMode ? "text-slate-500 font-bold" : "text-slate-500"}`}>
                {readabilityMode ? "Simulator State" : "Simulation Status"}
              </span>
              <span className={`text-xs font-mono font-bold uppercase flex items-center justify-center sm:justify-start gap-1 mt-0.5 ${readabilityMode ? "text-slate-800" : "text-white"}`}>
                {simStep === "idle" && <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>}
                {simStep === "streaming" && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>}
                {simStep === "stabilizing" && <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 animate-pulse"></span>}
                {simStep === "synthesized" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>}
                {simStep === "idle" ? (readabilityMode ? "Idle / Off" : "Standby") : simStep.toUpperCase()}
              </span>
            </div>

            <div className={`p-2.5 rounded border text-center sm:text-left ${
              readabilityMode ? "bg-slate-100/30 border-slate-200" : "bg-slate-900/20 border-slate-900"
            }`}>
              <span className={`text-[9px] font-mono uppercase block ${readabilityMode ? "text-slate-500 font-bold" : "text-slate-500"}`}>
                {readabilityMode ? "Final Memory Safe percentage" : "Preservation Target"}
              </span>
              <span className={`text-xs font-mono font-bold block mt-0.5 ${readabilityMode ? "text-emerald-700" : "text-brand-emerald"}`}>
                {simStep === "synthesized" ? `${computedRetention}% Recovered` : (readabilityMode ? `Goal is 95%+` : `Aim >= 95.0%`)}
              </span>
            </div>

            <div className={`p-2.5 rounded border text-center sm:text-left ${
              readabilityMode ? "bg-slate-100/30 border-slate-200" : "bg-slate-900/20 border-slate-900"
            }`}>
              <span className={`text-[9px] font-mono uppercase block ${readabilityMode ? "text-slate-350 font-bold" : "text-slate-550"}`}>
                {readabilityMode ? "Available Neural Space" : "Plasticity Budget"}
              </span>
              <span className={`text-xs font-mono font-bold block mt-0.5 ${readabilityMode ? "text-slate-700" : "text-slate-300"}`}>
                {(0.35 - synapticPlasticity).toFixed(2)} synaptic space
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
