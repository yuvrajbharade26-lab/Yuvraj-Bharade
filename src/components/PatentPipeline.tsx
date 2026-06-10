import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, RefreshCw, Zap, Sliders, ShieldCheck, CheckCircle2, Info, GitBranch, Layers } from "lucide-react";

interface PipelineNode {
  id: string;
  name: string;
  role: string;
  description: string;
  baseMetric: string;
}

export default function PatentPipeline() {
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
      name: "Sequential Dataset Stream",
      role: "Continuous Input Buffer",
      description: "Applies non-disruptive temporal sequencing to sequential cold-start streams. Groups incoming dataset batches without fracturing existing sequential pipelines.",
      baseMetric: "Throughput: 1,480 seq/sec",
    },
    {
      id: "entropy",
      name: "Thermodynamic Entropy Controller",
      role: "Plasticity Equilibrium Guard",
      description: "Directly calculates synaptic drift forces and erects localized high-entropy barriers to lock legacy critical weights. Allows lower entropy pathways to carve out spaces for new inputs.",
      baseMetric: "Synaptic Restrict: Delta < 0.04",
    },
    {
      id: "evolving-node",
      name: "Evolving Modular Pipe",
      role: "Topology Router Node",
      description: "An isolated topological pipeline router that dynamically spins up small supplementary neural layers when sequence indicators signal rapid legacy degradation.",
      baseMetric: "Sparsity Spawn: 2-4 sub-layers",
    },
    {
      id: "consolidation",
      name: "Offline Structural Consolidation",
      role: "Post-Processing Weights Guard",
      description: "Safely merges redundant pathways offline, optimizing overall inference speed while locking confirmed high-priority mathematical weights.",
      baseMetric: "Structural Sparing: 95.8% - 98.2%",
    },
  ];

  // Mathematical approximation of retention based on the visitor's controls
  const computedRetention = useMemo(() => {
    // Better retention comes from lower plasticity delta (less drift allowance) and balanced/extreme entropy protection.
    let base = 98.4;
    
    // synapticPlasticity delta penalty (lower delta is better, higher drift allow degrades)
    const driftPenalty = (synapticPlasticity - 0.05) * 4.5;
    base -= driftPenalty;

    // sequence depth impact (more samples degrades slightly is standard, but moderated by pipes)
    const seqImpact = (seqDataDepth / 500) * 1.2;
    base -= seqImpact;

    // entropy guard impact
    if (entropyGuard === "standard") base -= 2.2;
    if (entropyGuard === "extreme") base += 0.4; // Slightly more rigid, but higher retention

    return Math.min(Math.max(+base.toFixed(2), 85.0), 99.8);
  }, [synapticPlasticity, seqDataDepth, entropyGuard]);

  // Simulated live execution callback
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
    <div className="bg-card-dark border border-border-dark rounded-xl p-6 lg:p-8 space-y-6" id="patent-pipeline-interactive">
      
      {/* Patent Identification Meta Tag */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-900 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold text-slate-950 bg-brand-cyan uppercase tracking-wider rounded">
              PENDING INDIAN PATENT
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              App No: 202621050232
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-display font-medium text-white">
            Evolving Modular Pipes Framework
          </h3>
          <p className="text-xs text-slate-400 font-sans mt-1">
            Preventing catastrophic forgetting in sequential neural streams by balancing dynamic plasticity and thermodynamic entropy bounds.
          </p>
        </div>

        <div>
          {simStep === "idle" && (
            <button
              onClick={handleRunSimulation}
              className="px-4 py-2 text-xs font-mono font-semibold rounded bg-brand-cyan text-slate-950 hover:bg-cyan-300 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.2)] cursor-pointer"
            >
              <Cpu className="w-4 h-4 animate-spin-slow" />
              <span>Simulate Pipeline</span>
            </button>
          )}

          {simulationActive && (
            <div className="px-4 py-2 text-xs font-mono rounded bg-slate-900 border border-brand-cyan/20 text-brand-cyan flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Transmitting (Step: {simStep.toUpperCase()})...</span>
            </div>
          )}

          {simStep === "synthesized" && (
            <button
              onClick={handleReset}
              className="px-4 py-2 text-xs font-mono rounded bg-slate-950 hover:bg-slate-900 text-slate-300 border border-slate-800 transition-all flex items-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Simulator</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Interactive Work Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: System Control Deck (Interactive Sliders) */}
        <div className="lg:col-span-4 bg-slate-950/40 p-5 rounded-xl border border-slate-900 space-y-5" id="control-sliders-deck">
          <div className="flex items-center gap-1.5 mb-2">
            <Sliders className="w-4 h-4 text-brand-cyan" />
            <h4 className="text-white font-display font-medium text-xs uppercase tracking-wider">
              Mathematical Parameters
            </h4>
          </div>

          {/* Slider 1 */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-[11px] font-mono">
              <span className="text-slate-400">Synaptic Drift Limit (Δ)</span>
              <span className="text-brand-cyan font-bold">{synapticPlasticity}</span>
            </div>
            <input
              type="range"
              min="0.02"
              max="0.30"
              step="0.01"
              value={synapticPlasticity}
              onChange={(e) => setSynapticPlasticity(parseFloat(e.target.value))}
              disabled={simulationActive}
              className="w-full h-1 bg-slate-800 rounded outline-none accent-brand-cyan cursor-pointer disabled:opacity-50"
            />
            <p className="text-[10px] text-slate-500 leading-normal">
              Controls weight drift allowability. Lower values strictly freeze critical pathways.
            </p>
          </div>

          {/* Slider 2 */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-[11px] font-mono">
              <span className="text-slate-400">Sequential Stream Depth</span>
              <span className="text-brand-cyan font-bold">{seqDataDepth}k samples</span>
            </div>
            <input
              type="range"
              min="20"
              max="500"
              step="10"
              value={seqDataDepth}
              onChange={(e) => setSeqDataDepth(parseInt(e.target.value))}
              disabled={simulationActive}
              className="w-full h-1 bg-slate-800 rounded outline-none accent-brand-cyan cursor-pointer disabled:opacity-50"
            />
            <p className="text-[10px] text-slate-500 leading-normal">
              Volume of sequential datasets queued for backpropagation streams.
            </p>
          </div>

          {/* Radio Selector Choice */}
          <div className="space-y-2 pt-1 border-t border-slate-900">
            <span className="text-[11px] font-mono text-slate-400 block">
              Thermodynamic Entropy Guard level
            </span>
            <div className="grid grid-cols-3 gap-1.5 text-[10px] font-mono">
              {["standard", "balanced", "extreme"].map((level) => (
                <button
                  key={level}
                  onClick={() => setEntropyGuard(level as any)}
                  disabled={simulationActive}
                  className={`py-1.5 rounded text-center transition-all cursor-pointer ${
                    entropyGuard === level
                      ? "bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-bold"
                      : "bg-slate-900/60 border border-slate-950 text-slate-400 hover:text-slate-350"
                  }`}
                >
                  {level.toUpperCase()}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 leading-normal">
              Sets the thermal entropy height limit isolating the prior parameter clusters.
            </p>
          </div>

          {/* Theoretical Projected Output Display */}
          <div className="pt-4 border-t border-slate-900 bg-slate-950/20 rounded p-3 text-center space-y-1">
            <span className="text-[9px] font-mono text-slate-500 block uppercase">
              Projected Knowledge Retention Rate
            </span>
            <div className="text-2xl font-mono font-bold text-brand-emerald">
              {computedRetention}%
            </div>
            <p className="text-[9px] text-slate-500">
              Enterprise baseline requires &gt;95.0% retention rate.
            </p>
          </div>
        </div>

        {/* Right Side: Nodes Flow Map Visualization */}
        <div className="lg:col-span-8 flex flex-col justify-between border border-slate-900 bg-slate-950/60 rounded-xl p-4 md:p-6 relative overflow-hidden">
          
          {/* Subtle design grid overlay */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 pointer-events-none opacity-[0.02]">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="border-t border-l border-white"></div>
            ))}
          </div>

          {/* Pipeline Map */}
          <div className="relative z-10 space-y-6 my-2">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
              Active Modular Network Mapping
            </span>

            {/* Interactive SVG Connector Beam Layer */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
              
              {/* Connection visual lines */}
              <div className="hidden sm:block absolute top-[26px] left-[12%] right-[12%] h-[2px] bg-slate-800 z-0">
                {simStep === "streaming" && (
                  <motion.div
                    className="h-full bg-gradient-to-r from-brand-cyan via-brand-emerald to-brand-purple"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  />
                )}
                {simStep === "stabilizing" && (
                  <div className="h-full w-full bg-brand-cyan/60 animate-pulse"></div>
                )}
                {simStep === "synthesized" && (
                  <div className="h-full w-full bg-brand-emerald"></div>
                )}
              </div>

              {nodes.map((node, i) => {
                const isActive = activeNode === node.id;
                
                // Styling determination
                let colorClasses = "border-slate-800 bg-slate-900 text-slate-400";
                if (isActive) {
                  colorClasses = "border-brand-cyan bg-slate-900 text-brand-cyan shadow-[0_0_15px_rgba(34,211,238,0.25)] scale-105";
                } else if (simStep === "synthesized") {
                  colorClasses = "border-brand-emerald/40 bg-slate-900/60 text-brand-emerald";
                }

                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(node.id)}
                    className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 relative z-10 ${colorClasses}`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-center justify-center mb-2 font-mono text-xs text-brand-cyan">
                      {i + 1}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-100 font-display block leading-tight">
                      {node.name.split(" ")[0]} {node.name.split(" ")[1] || ""}
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 mt-1 block truncate max-w-full">
                      {node.role.slice(0, 20)}...
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Step Inspector Panel mapping directly under */}
            <div className="bg-slate-900/40 border border-slate-900/80 rounded-lg p-4 space-y-2 mt-4">
              {(() => {
                const nodeInfo = nodes.find((n) => n.id === activeNode) || nodes[1];
                return (
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/10 px-2 py-0.5 rounded uppercase">
                        Active Node: {nodeInfo.role}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {nodeInfo.baseMetric}
                      </span>
                    </div>
                    <h5 className="font-display font-medium text-sm text-slate-200 mt-1">
                      {nodeInfo.name}
                    </h5>
                    <p className="text-xs text-slate-400 leading-relaxed pt-1 select-all">
                      {nodeInfo.description}
                    </p>
                  </div>
                );
              })()}
            </div>

          </div>

          {/* Simulation Output Stats Row */}
          <div className="border-t border-slate-900 pt-4 mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-900/20 p-2.5 rounded border border-slate-900 text-center sm:text-left">
              <span className="text-[9px] font-mono text-slate-500 uppercase block">Simulation Status</span>
              <span className="text-xs font-mono font-bold text-white uppercase flex items-center justify-center sm:justify-start gap-1 mt-0.5">
                {simStep === "idle" && <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>}
                {simStep === "streaming" && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>}
                {simStep === "stabilizing" && <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>}
                {simStep === "synthesized" && <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></span>}
                {simStep === "idle" ? "Standby" : simStep.toUpperCase()}
              </span>
            </div>

            <div className="bg-slate-900/20 p-2.5 rounded border border-slate-900 text-center sm:text-left">
              <span className="text-[9px] font-mono text-slate-500 uppercase block">Preservation Target</span>
              <span className="text-xs font-mono font-bold text-brand-emerald block mt-0.5">
                {simStep === "synthesized" ? `${computedRetention}% Retained` : `Aim >= 95.0%`}
              </span>
            </div>

            <div className="bg-slate-900/20 p-2.5 rounded border border-slate-900 text-center sm:text-left">
              <span className="text-[9px] font-mono text-slate-500 uppercase block">Plasticity Budget</span>
              <span className="text-xs font-mono font-bold text-slate-300 block mt-0.5">
                {(0.35 - synapticPlasticity).toFixed(2)} synaptic space
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
