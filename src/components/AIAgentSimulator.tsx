import React, { useState, useEffect, useRef } from "react";
import { Terminal, CornerDownLeft, Play, RefreshCw, Cpu } from "lucide-react";

interface TerminalLine {
  text: string;
  type: "input" | "output" | "system" | "error";
  isHtml?: boolean;
}

export default function AIAgentSimulator() {
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [suggestions] = useState([
    "help",
    "about",
    "skills",
    "projects",
    "patent",
    "mcp",
    "availability",
    "contact",
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial welcome lines
    setHistory([
      { text: "Initializing YuvrajB-Agent-v1.4.2 [Kernel Core Stable]...", type: "system" },
      { text: "Successfully connected to Model Context Protocol (MCP) data silo.", type: "system" },
      { text: "Type 'help' or click any quick command shortcut below to explore Yuvraj's professional profile.", type: "output" },
    ]);
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const runCommand = (cmd: string) => {
    const rawCmd = cmd.trim().toLowerCase();
    const newLines: TerminalLine[] = [{ text: `visitor@yuvraj-portfolio:~$ ${cmd}`, type: "input" }];

    if (rawCmd === "") {
      setHistory((prev) => [...prev, ...newLines]);
      return;
    }

    if (rawCmd === "clear") {
      setHistory([]);
      return;
    }

    switch (rawCmd) {
      case "help":
        newLines.push({
          text: `
<div class="font-mono text-slate-300">
  <span class="text-brand-cyan">Available System Commands:</span>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2 pl-4">
    <div><span class="text-brand-emerald">about</span>      - Professional summary</div>
    <div><span class="text-brand-emerald">skills</span>     - Core technical skills</div>
    <div><span class="text-brand-emerald">projects</span>   - Enterprise ML & Web platforms</div>
    <div><span class="text-brand-emerald">patent</span>     - Modular Pipes Patent info</div>
    <div><span class="text-brand-emerald">mcp</span>        - Model Context Protocol info</div>
    <div><span class="text-brand-emerald">availability</span> - Join notice & shift preferences</div>
    <div><span class="text-brand-emerald">contact</span>    - Email, phone, & social accounts</div>
    <div><span class="text-brand-emerald">clear</span>      - Reset terminal output log</div>
  </div>
</div>`,
          type: "output",
          isHtml: true,
        });
        break;

      case "about":
        newLines.push({
          text: `
<div class="font-mono text-slate-300 leading-relaxed">
  <span class="text-white font-bold block mb-1">Yuvraj Nilesh Bharade | AI Engineer & AWS Specialist</span>
  Experienced AI Engineer specializing in Cloud-native ecosystems, Agentic AI, and LLMOps. 
  Expert at scaling systems with AWS Bedrock / SageMaker, building high-throughput microservices using Java Spring Boot, 
  and researching custom deep learning solutions to bridge corporate data silos.
</div>`,
          type: "output",
          isHtml: true,
        });
        break;

      case "skills":
        newLines.push({
          text: `
<div class="font-mono text-slate-300 space-y-2">
  <div><span class="text-brand-cyan font-bold">• Generative AI & LLMOps:</span> AWS Bedrock, Agentic AI, Prompt Engineering, Model Context Protocol (MCP), Agent Core, RAG.</div>
  <div><span class="text-brand-cyan font-bold">• Cloud & DevOps:</span> AWS (SageMaker, S3, Lambda, EC2), Cloud-Native Microservices, API Gateway, Docker.</div>
  <div><span class="text-brand-cyan font-bold">• AI/ML & Deep Learning:</span> Computer Vision, Explainable AI (XAI), PyTorch, TensorFlow, Scikit-learn.</div>
  <div><span class="text-brand-cyan font-bold">• Programming:</span> Java (Spring Boot), Python (Django/Flask), JavaScript (React), SQL, REST APIs.</div>
  <div><span class="text-brand-cyan font-bold">• Tools & Workflows:</span> Git/GitHub, Jira, Postman, AWS Well-Architected Tool.</div>
</div>`,
          type: "output",
          isHtml: true,
        });
        break;

      case "projects":
        newLines.push({
          text: `
<div class="font-mono text-slate-300 space-y-3">
  <div>
    <span class="text-white font-bold block">1. NSB Real Property Valuer Platform (Full-Stack & AI Developer)</span>
    <span class="text-xs text-slate-400 block">Tech: Python, Django, AWS S3, Market Data Analytics</span>
    • Architected business analytics dashboard utilizing AWS pipelines.
    • Visualized market volatility and real estate history indexes for valuation.
  </div>
  <div>
    <span class="text-white font-bold block">2. Generative AI-Powered Educational Platform (Lead Developer)</span>
    <span class="text-xs text-slate-400 block">Tech: LLMOps, Prompt Management, Django, REST APIs</span>
    • Context-aware content generation connecting third-party Generative LLMs.
    • Boosted user engagement by 30% through intelligent UX/UI integration.
  </div>
  <div>
    <span class="text-white font-bold block">3. Weed Eradication AI + IoT System (Developer & Researcher)</span>
    <span class="text-xs text-slate-400 block">Tech: Computer Vision, PyTorch, Edge Computing</span>
    • Structured high-accuracy real-time object detection models for resource-constrained IoT nodes.
    • Published technical methodology in the SmartCom Conference.
  </div>
</div>`,
          type: "output",
          isHtml: true,
        });
        break;

      case "patent":
        newLines.push({
          text: `
<div class="font-mono text-slate-300 space-y-2">
  <div>
    <span class="text-brand-cyan font-bold block">💡 Patent Applied (Indian Patent App No: 202621050232)</span>
    <span class="italic text-slate-400">"A System and Method for Real-Time Adaptive Feature Extraction using Evolving Modular Pipes"</span>
    • Engineered an Adaptive Thermodynamic Processing logic layer to mitigate catastrophic forgetting.
    • Retained over 95% of prior core weights throughout sequential corporate datasets.
  </div>
  <div class="pt-1">
    <span class="text-brand-cyan font-bold block">📚 SmartCom Conference Publication</span>
    <span class="italic text-slate-400">First Author: "IoT and AI-based Weed Detection System"</span>
    • Real-time localized agricultural object detection modeling on low-powered edge devices.
  </div>
</div>`,
          type: "output",
          isHtml: true,
        });
        break;

      case "mcp":
        newLines.push({
          text: `
<div class="font-mono text-slate-300 leading-relaxed">
  <span class="text-brand-cyan font-bold block">🔌 Model Context Protocol (MCP) & Agent Core Optimization</span>
  Designed autonomous agent hierarchies within AWS Bedrock environment. Hand-crafted the backend schemas
  needed to feed contextual, real-time enterprise database variables directly to LLM query windows. 
  This decreases token waste by filtering redundant context blocks and securing sensitive files.
</div>`,
          type: "output",
          isHtml: true,
        });
        break;

      case "availability":
        newLines.push({
          text: `
<div class="font-mono text-slate-300">
  <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-brand-emerald animate-ping"></span> <span class="font-bold text-white">Status:</span> <span class="text-brand-emerald">Actively Exploring</span></div>
  <div class="mt-1 font-semibold text-slate-300">Available to discuss open roles and consultations.</div>
</div>`,
          type: "output",
          isHtml: true,
        });
        break;

      case "contact":
        newLines.push({
          text: `
<div class="font-mono text-slate-300 py-1 space-y-1">
  <div><span class="text-brand-cyan font-bold">Email:</span>      yuvrajbharade26@gmail.com</div>
  <div><span class="text-brand-cyan font-bold">Phone:</span>      +91 7666798673</div>
  <div><span class="text-brand-cyan font-bold">Location:</span>   Pune, Maharashtra, India</div>
  <div><span class="text-brand-cyan font-bold">LinkedIn:</span>   linkedin.com/in/yuvraj-bharade-profile-link/</div>
</div>`,
          type: "output",
          isHtml: true,
        });
        break;

      default:
        newLines.push({
          text: `Command not found: '${cmd}'. Type 'help' to see valid commands.`,
          type: "error",
        });
    }

    setHistory((prev) => [...prev, ...newLines]);
    setInputVal("");
  };

  const handleSuggestClick = (suggestion: string) => {
    runCommand(suggestion);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(inputVal);
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[460px] max-w-full" id="cli-agent-simulator">
      {/* Terminal Title Bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex justify-between items-center select-none shrink-0" id="terminal-decorations">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
          </div>
          <span className="text-slate-400 font-mono text-xs ml-2 flex items-center gap-1">
            <Terminal className="w-3.5 h-3.5 text-brand-cyan" /> yuvrajb@agent-core:~
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 px-2 py-0.5 rounded-full font-mono">
            MCP ONLINE
          </span>
        </div>
      </div>

      {/* Terminal Lines Terminal Output */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 font-mono text-[13px] leading-relaxed space-y-3" id="terminal-lines-silo">
        {history.map((line, idx) => (
          <div key={idx} className="break-words">
            {line.type === "input" && (
              <span className="text-slate-100 font-medium">{line.text}</span>
            )}
            {line.type === "system" && (
              <span className="text-slate-500 flex items-center gap-1.5 font-mono text-xs">
                <Cpu className="w-3 h-3 text-brand-purple" /> {line.text}
              </span>
            )}
            {line.type === "error" && (
              <span className="text-red-400 font-mono">⚠️ {line.text}</span>
            )}
            {line.type === "output" && (
              line.isHtml ? (
                <div dangerouslySetInnerHTML={{ __html: line.text }} />
              ) : (
                <span className="text-slate-300">{line.text}</span>
              )
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Suggested Quick Buttons */}
      <div className="bg-slate-900/60 border-t border-slate-800/80 p-3 select-none shrink-0">
        <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1.5 tracking-wider font-semibold">
          Quick agent shortcuts (Click to Query):
        </span>
        <div className="flex flex-wrap gap-1.5">
          {suggestions.map((sug) => (
            <button
              key={sug}
              onClick={() => handleSuggestClick(sug)}
              className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800 text-slate-300 border border-slate-700/80 hover:bg-brand-cyan hover:text-slate-950 hover:border-brand-cyan transition-all cursor-pointer"
              id={`shortcut-${sug}`}
            >
              /{sug}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Input Row */}
      <form
        onSubmit={handleFormSubmit}
        className="bg-slate-950 border-t border-slate-800 flex items-center px-4 py-3 shrink-0"
        id="terminal-input-row"
      >
        <span className="text-brand-cyan font-mono text-sm mr-2 shrink-0 select-none">
          visitor@yuvraj-portfolio:~$
        </span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type command (e.g. 'help', 'skills') and press Enter..."
          className="bg-transparent text-white outline-none font-mono text-sm flex-1 placeholder:text-slate-600 min-w-0"
          autoFocus
          id="cli-terminal-input"
        />
        <button
          type="submit"
          className="ml-2 text-slate-500 hover:text-brand-cyan transition-colors"
          title="Send Command"
          id="btn-send-cli-cmd"
        >
          <CornerDownLeft className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
