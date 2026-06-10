import React, { useState, useEffect, useRef } from "react";
import { Terminal, CornerDownLeft, Play, RefreshCw, Cpu, HelpCircle, BookOpen, User, Briefcase, Award, Mail, Sparkles, Database } from "lucide-react";

interface TerminalLine {
  text: string;
  type: "input" | "output" | "system" | "error";
  isHtml?: boolean;
}

export default function AIAgentSimulator({ readabilityMode = false }: { readabilityMode?: boolean }) {
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

  // FAQ states for Readability Mode
  const [selectedFAQ, setSelectedFAQ] = useState<string>("about");
  const [cliOverride, setCliOverride] = useState<boolean>(false);

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
  <span class="text-brand-cyan font-bold">Available System Commands:</span>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2 pl-4">
    <div><span class="text-brand-emerald font-bold">about</span>      - Professional summary</div>
    <div><span class="text-brand-emerald font-bold">skills</span>     - Core technical skills</div>
    <div><span class="text-brand-emerald font-bold">projects</span>   - Enterprise ML & Web platforms</div>
    <div><span class="text-brand-emerald font-bold">patent</span>     - Modular Pipes Patent info</div>
    <div><span class="text-brand-emerald font-bold">mcp</span>        - Model Context Protocol info</div>
    <div><span class="text-brand-emerald font-bold">availability</span> - Join notice & shift preferences</div>
    <div><span class="text-brand-emerald font-bold">contact</span>    - Email, phone, & social accounts</div>
    <div><span class="text-brand-emerald font-bold">clear</span>      - Reset terminal output log</div>
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
  4.5 years of industry experience specializing in Cloud-native ecosystems, Agentic AI, and LLMOps. 
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
    <span class="text-xs text-slate-400 block font-semibold">Tech: Python, Django, AWS S3, Market Data Analytics</span>
    • Architected business analytics dashboard utilizing AWS pipelines.
    • Visualized market volatility and real estate history indexes for valuation.
  </div>
  <div>
    <span class="text-white font-bold block">2. Generative AI-Powered Educational Platform (Lead Developer)</span>
    <span class="text-xs text-slate-400 block font-semibold">Tech: LLMOps, Prompt Management, Django, REST APIs</span>
    • Context-aware content generation connecting third-party Generative LLMs.
    • Boosted user engagement by 30% through intelligent UX/UI integration.
  </div>
  <div>
    <span class="text-white font-bold block">3. Weed Eradication AI + IoT System (Developer & Researcher)</span>
    <span class="text-xs text-slate-400 block font-semibold">Tech: Computer Vision, PyTorch, Edge Computing</span>
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
    <span class="text-brand-cyan font-bold block">💡 Patent Filed (Indian Patent App No: 202621050232)</span>
    <span class="italic text-slate-400 font-semibold">"A System and Method for Real-Time Adaptive Feature Extraction using Evolving Modular Pipes"</span>
    • Engineered an Adaptive Thermodynamic Processing logic layer to mitigate catastrophic forgetting.
    • Retained over 95% of prior core weights throughout sequential corporate datasets.
  </div>
  <div class="pt-1">
    <span class="text-brand-cyan font-bold block">📚 SmartCom Conference Publication</span>
    <span class="italic text-slate-400 font-semibold">First Author: "IoT and AI-based Weed Detection System"</span>
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
  <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-brand-emerald animate-ping"></span> <span class="font-bold text-white">Notice Period:</span> <span class="text-brand-emerald font-bold">Immediate Joiner</span></div>
  <div class="mt-1 font-semibold text-slate-300">Available to start work right away.</div>
  <div class="mt-1"><span class="font-bold text-white">UAN Status:</span> Fully Validated and Clear.</div>
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

  // Plain English FAQ Data for Readability Mode
  const faqs = [
    {
      id: "about",
      label: "Profile Summary",
      question: "Who is Yuvraj and what is his background?",
      icon: User,
      answer: (
        <div className="space-y-3 font-sans text-slate-700">
          <p className="font-semibold text-slate-900 text-sm">
            Yuvraj Nilesh Bharade is an AI Engineer and Cloud Systems Specialist based in Pune, India.
          </p>
          <p className="text-xs leading-relaxed">
            With over <strong>4.5 years of experience</strong>, Yuvraj acts as a technical lead and consultant. He builds cloud-native artificial intelligence setups that assist big companies in automating their operations. He specializes in the Amazon Web Services (AWS) cloud environment, microservices, and modern artificial intelligence pipelines.
          </p>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center gap-2 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block shrink-0 animate-pulse"></span>
            <span className="font-bold text-slate-800">Immediately Available:</span>
            <span className="text-slate-600">Ready to join your organization or consulting contract right away.</span>
          </div>
        </div>
      ),
    },
    {
      id: "skills",
      label: "Technical Skills",
      question: "Which tools, languages, and skills does Yuvraj have?",
      icon: Briefcase,
      answer: (
        <div className="space-y-3 font-sans">
          <p className="font-bold text-slate-900 text-xs uppercase tracking-wider">Yuvraj's Technical Capabilities:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">
              <span className="font-bold text-cyan-800 block mb-1">🤖 Generative AI & AI Agents</span>
              <p className="text-slate-600 leading-normal">Cloud prompt hubs, AWS Bedrock, Agentic AI, smart data flow, and database pipelines (RAG).</p>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">
              <span className="font-bold text-cyan-800 block mb-1">☁️ Cloud Platforms & DevOps</span>
              <p className="text-slate-600 leading-normal">Amazon Web Services (AWS SageMaker, Lambda, S3, EC2), secure microservice structures, API Gateways, and Docker containers.</p>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">
              <span className="font-bold text-cyan-800 block mb-1">💻 Computer Vision & AI</span>
              <p className="text-slate-600 leading-normal">Object detection on edge devices, AI-powered image processing, and deep learning frameworks (PyTorch, TensorFlow).</p>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">
              <span className="font-bold text-cyan-800 block mb-1">🔧 Programming Languages</span>
              <p className="text-slate-600 leading-normal">Java (Spring Boot core), Python (Django/Flask frameworks), Javascript (React UI), SQL, and robust REST APIs.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "projects",
      label: "Delivered Solutions",
      question: "What real systems has Yuvraj built and delivered?",
      icon: Award,
      answer: (
        <div className="space-y-3 font-sans text-xs">
          <div className="border bg-slate-50 p-3 rounded-lg border-slate-150 space-y-1">
            <h4 className="font-bold text-slate-950 text-[13px]">1. Real Property Valuer Platform</h4>
            <p className="text-slate-600 font-medium">Django Web and AWS S3 Storage Integration</p>
            <p className="text-slate-500 leading-relaxed pt-1">
              Developed an analytics platform that gathers real estate market data, analyzes price fluctuations, and provides clean valuation charts directly to mortgage banks.
            </p>
          </div>
          <div className="border bg-slate-50 p-3 rounded-lg border-slate-150 space-y-1">
            <h4 className="font-bold text-slate-950 text-[13px]">2. Generative AI Educational Platform</h4>
            <p className="text-slate-600 font-medium">Large Language Model Integration (LLMs)</p>
            <p className="text-slate-500 leading-relaxed pt-1">
              Coordinated back-end APIs to deliver safe, smart AI feedback on course materials, which boosted course completion rates by 30% for students.
            </p>
          </div>
          <div className="border bg-slate-50 p-3 rounded-lg border-slate-150 space-y-1">
            <h4 className="font-bold text-slate-950 text-[13px]">3. Farming Weed Detection System (AI+IoT)</h4>
            <p className="text-slate-600 font-medium">Computer Vision Research & Development</p>
            <p className="text-slate-500 leading-relaxed pt-1">
              Researched and built a lightweight neural network that runs on compact, low-powered hardware in the field. Deployed to detect and eradicate invasive farm weeds automatically.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "patent",
      label: "Patent & Research",
      question: "What is Yuvraj's Indian Patent and Published Research?",
      icon: Sparkles,
      answer: (
        <div className="space-y-3 font-sans text-xs">
          <div className="p-3 bg-amber-50/50 border border-amber-200/60 rounded-lg space-y-1.5">
            <span className="font-bold text-amber-800 text-[10px] bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200/50 uppercase">
              Indian Patent App No: 202621050232
            </span>
            <h4 className="font-bold text-slate-950 text-sm">Adaptive Feature Extraction using Evolving Modular Pipes</h4>
            <p className="text-slate-600 leading-relaxed">
              When artificial intelligence is introduced to new data, it can completely forget what it translated earlier (called "catastrophic forgetting"). Yuvraj's invention builds active safety buffers, locking old key weights so the model remembers historical data while learning new items.
            </p>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
            <span className="font-bold text-cyan-800 text-[10px] bg-cyan-50 px-2.5 py-0.5 rounded border border-cyan-200/50 uppercase">
              SmartCom Conference Speaker
            </span>
            <h4 className="font-bold text-slate-950 text-sm">IoT Weed Detection & Automated System</h4>
            <p className="text-slate-600 leading-relaxed">
              Authored a scientific paper presenting methods for running intense deep learning models inside smaller, low-powered farm automation chips.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "mcp",
      label: "AI Orchestration (MCP)",
      question: "What is Model Context Protocol and how does Yuvraj use it?",
      icon: Database,
      answer: (
        <div className="space-y-3 font-sans text-xs text-slate-700">
          <p className="font-semibold text-slate-900 text-[13px]">
            Model Context Protocol (MCP) is like an extremely secure adapter plug between an AI and your actual business database files.
          </p>
          <p className="leading-relaxed">
            Usually, feeding business files to an AI model wastes high bandwidth and raises privacy issues. Yuvraj structures intelligent autonomous agents inside AWS environments. He designs MCP schema servers that extract and serve only the exact relevant context needed by the AI, saving server costs by preventing token waste and strictly hiding private data.
          </p>
        </div>
      ),
    },
    {
      id: "contact",
      label: "Direct Contact Info",
      question: "How can I easily get in touch with Yuvraj?",
      icon: Mail,
      answer: (
        <div className="space-y-3 font-sans text-xs">
          <p className="font-semibold text-slate-900">Feel free to connect directly through any of these verified channels:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700 font-mono">
            <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">
              <span className="text-slate-450 block text-[9px] uppercase font-sans font-bold">Email Address</span>
              <a href="mailto:yuvrajbharade26@gmail.com" className="font-bold text-cyan-700 hover:underline">yuvrajbharade26@gmail.com</a>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">
              <span className="text-slate-450 block text-[9px] uppercase font-sans font-bold">Phone Number</span>
              <a href="tel:+917666798673" className="font-bold text-slate-800 hover:underline">+91 7666798673</a>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">
              <span className="text-slate-450 block text-[9px] uppercase font-sans font-bold">LinkedIn Profile</span>
              <a href="https://linkedin.com/in/yuvraj-bharade-profile-link/" target="_blank" rel="noreferrer" className="font-bold text-slate-800 hover:underline">yuvraj-bharade-profile-link</a>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">
              <span className="text-slate-450 block text-[9px] uppercase font-sans font-bold">Office Base</span>
              <span className="font-bold text-slate-800 font-sans">Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const activeFAQItem = faqs.find((f) => f.id === selectedFAQ) || faqs[0];

  // If Readability Mode is active and visitor hasn't explicitly overridden to see the terminal:
  if (readabilityMode && !cliOverride) {
    return (
      <div 
        className="transition-all duration-300 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-md flex flex-col h-[460px] max-w-full font-sans text-slate-800" 
        id="faq-readable-simulator"
      >
        {/* Header Bar */}
        <div className="bg-slate-50 border-b border-slate-150 px-4 py-3 flex justify-between items-center select-none shrink-0">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-600" />
            <span className="text-slate-800 font-semibold text-xs tracking-wide">
              Simplified AI Profile Assistant
            </span>
          </div>
          <button
            onClick={() => setCliOverride(true)}
            className="text-[10px] bg-slate-250 hover:bg-slate-200 border border-slate-300 px-3 py-1 rounded-md text-slate-600 font-mono font-bold transition-all cursor-pointer"
            title="Switch to Developer Console"
          >
            Show CLI Terminal Mode
          </button>
        </div>

        {/* Content Body Layout */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Left panel selector list */}
          <div className="md:w-[170px] border-b md:border-b-0 md:border-r border-slate-150 bg-slate-50/50 p-2.5 space-y-1 overflow-y-auto shrink-0 md:h-full">
            <span className="text-[9px] font-bold text-slate-450 uppercase tracking-widest pl-1.5 block mb-1">
              SELECT CATGORY
            </span>
            {faqs.map((f) => {
              const Icon = f.icon;
              const isSelected = f.id === selectedFAQ;
              return (
                <button
                  key={f.id}
                  onClick={() => setSelectedFAQ(f.id)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    isSelected 
                      ? "bg-cyan-600 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{f.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right panel detail view */}
          <div className="flex-1 p-4 md:p-6 overflow-y-auto bg-white flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="space-y-1">
                <span className="text-[10px] text-cyan-600 font-bold uppercase tracking-wide">
                  Category: {activeFAQItem.label}
                </span>
                <h3 className="text-[15px] font-bold text-slate-900 leading-snug">
                  {activeFAQItem.question}
                </h3>
              </div>
              <div className="border-t border-slate-100 pt-3">
                {activeFAQItem.answer}
              </div>
            </div>

            {/* Quick guide label at bottom */}
            <div className="text-[10px] text-slate-450 border-t border-slate-100 pt-3.5 mt-4 flex items-center justify-between font-mono">
              <span>✓ Verified Profile Asset</span>
              <span>1 Click Direct Answers</span>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // Return standard high-tech dynamic cli terminal
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[460px] max-w-full transition-all duration-300" id="cli-agent-simulator">
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
          {readabilityMode && (
            <button
              onClick={() => setCliOverride(false)}
              className="text-[9px] bg-slate-800 text-slate-300 hover:text-white border border-slate-700 px-2 py-0.5 rounded cursor-pointer transition-all"
            >
              Back to FAQ Mode
            </button>
          )}
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
