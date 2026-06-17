import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  FileText,
  Send,
  MessageSquare,
  Sparkles,
  Layers,
  Zap,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ClipboardCheck,
  Copy,
  ChevronRight,
  Github,
  Brain,
  BarChart3,
  Code
} from "lucide-react";

import AIAgentSimulator from "./components/AIAgentSimulator";
import PatentPipeline from "./components/PatentPipeline";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillMatrix from "./components/SkillMatrix";

export default function App() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  
  // Core Stronghold Tabs state
  const [mlTab, setMlTab] = useState<"stack" | "impact">("stack");
  const [webTab, setWebTab] = useState<"stack" | "impact">("stack");
  const [dataTab, setDataTab] = useState<"stack" | "impact">("stack");

  const handleCopyContact = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="min-h-screen bg-bg-dark text-slate-100 flex flex-col selection:bg-brand-cyan/30 selection:text-white" id="portfolio-root">
      
      {/* Decorative ambient blurred backgrounds */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 left-[10%] w-[350px] h-[350px] rounded-full bg-brand-cyan/5 blur-[120px] ambient-glow"></div>
        <div className="absolute top-80 right-[15%] w-[450px] h-[450px] rounded-full bg-brand-purple/5 blur-[150px] ambient-glow" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-[1800px] left-[5%] w-[400px] h-[400px] rounded-full bg-brand-emerald/5 blur-[130px] ambient-glow" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Modern Top Header / Navigation */}
      <header className="sticky top-0 z-50 bg-bg-dark/85 backdrop-blur-md border-b border-slate-900/90" id="top-navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Pulsing indicator block */}
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-display font-bold text-brand-cyan text-sm">
              Y
            </div>
            <div>
              <span className="text-white font-display font-medium text-sm tracking-wide block">
                YUVRAJ BHARADE
              </span>
              <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5 leading-none mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse"></span>
                ACTIVE IN PUNE
              </span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono text-slate-400">
            <a href="#about-section" className="hover:text-brand-cyan transition-colors">/about</a>
            <a href="#simulation-section" className="hover:text-brand-cyan transition-colors">/mcp-terminal</a>
            <a href="#patent-section" className="hover:text-brand-cyan transition-colors">/patented-logic</a>
            <a href="#experience-section" className="hover:text-brand-cyan transition-colors">/experience</a>
            <a href="#projects-section" className="hover:text-brand-cyan transition-colors">/projects</a>
            <a href="#skills-section" className="hover:text-brand-cyan transition-colors">/skills</a>
          </nav>

          {/* Quick Contact Right Buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href="mailto:yuvrajbharade26@gmail.com"
              className="px-3.5 py-1.5 text-xs font-mono font-medium text-slate-300 bg-slate-900 hover:text-white border border-slate-800 hover:border-slate-700 rounded-md transition-all flex items-center gap-1.5 cursor-pointer"
              id="header-btn-email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container Wrapper */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 z-10 space-y-16 md:space-y-24">
        
        {/* HERO SECTION */}
        <section id="about-section" className="scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Bio Card Column */}
            <div className="lg:col-span-5 flex flex-col justify-between border border-border-dark bg-card-dark rounded-2xl p-6 md:p-8" id="profile-hero-card">
              <div className="space-y-6">
                
                {/* availability pill and profile image mock */}
                <div className="flex items-center justify-between">
                  {/* Status chip */}
                  <span className="text-[10px] font-mono text-brand-emerald bg-brand-emerald/10 border border-brand-emerald/20 px-3 py-1 rounded-full flex items-center gap-1.5 font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-ping"></span>
                    Actively Exploring
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    v1.4 Status Stable
                  </span>
                </div>

                <div className="space-y-2.5">
                  <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest block font-medium">
                    AWS & Full-Stack Specialist
                  </span>
                  <h1 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-white leading-none">
                    Yuvraj Nilesh Bharade
                  </h1>
                  <h2 className="text-base text-slate-400 font-sans tracking-wide">
                    Innovative AI Engineer specializing in cloud-native microservices, autonomous Agentic workflows, and persistent sequential feature-extraction models.
                  </h2>
                </div>

                {/* Technical key indicators / Quick stats */}
                <div className="grid grid-cols-2 gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-900" id="hero-quick-data-box">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">EXPERIENCE RECORD</span>
                    <span className="text-lg font-bold text-white font-display">Lead Scale</span>
                    <span className="text-[10px] text-slate-400 block font-mono">Cloud & ML Architecture</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">PATENT STATUS</span>
                    <span className="text-lg font-bold text-brand-cyan font-display">Applied</span>
                    <span className="text-[10px] text-slate-400 block font-mono">Indian App '26</span>
                  </div>
                </div>

              </div>

              {/* Quick copy contacts */}
              <div className="border-t border-slate-800/80 pt-6 mt-8 space-y-3" id="hero-interactive-contacts">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                  Quick-Connect (Click to Copy Metadata)
                </span>
                
                <div className="space-y-2">
                  <button
                    onClick={() => handleCopyContact("yuvrajbharade26@gmail.com", "email")}
                    className="w-full text-xs font-mono py-2 px-3 rounded-lg bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 text-slate-300 hover:text-white flex justify-between items-center transition-all cursor-pointer group"
                    id="copy-email-trigger"
                  >
                    <span className="flex items-center gap-2 text-slate-400">
                      <Mail className="w-3.5 h-3.5" />
                      <span>yuvrajbharade26@gmail.com</span>
                    </span>
                    <span className="text-[10px] text-brand-cyan hidden group-hover:block transition-all">
                      {copiedText === "email" ? "Copied!" : "Copy"}
                    </span>
                  </button>

                  <button
                    onClick={() => handleCopyContact("+917666798673", "phone")}
                    className="w-full text-xs font-mono py-2 px-3 rounded-lg bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 text-slate-300 hover:text-white flex justify-between items-center transition-all cursor-pointer group"
                    id="copy-phone-trigger"
                  >
                    <span className="flex items-center gap-2 text-slate-400">
                      <Phone className="w-3.5 h-3.5" />
                      <span>+91 7666798673</span>
                    </span>
                    <span className="text-[10px] text-brand-cyan hidden group-hover:block transition-all">
                      {copiedText === "phone" ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>
              </div>

            </div>

            {/* Terminal Play Simulator Column */}
            <div className="lg:col-span-7 flex flex-col justify-center" id="simulation-section">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Layers className="text-brand-cyan w-4 h-4" />
                    <h3 className="text-sm font-mono text-slate-400 uppercase tracking-widest font-semibold leading-none">
                      Integrated Profile Agent / MCP Query Window
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">CLI-Engine v1.4</span>
                </div>
                
                <AIAgentSimulator />
              </div>
            </div>

          </div>
        </section>

        {/* CORE TECHNICAL STRONGHOLDS TRIAD SECTION */}
        <section id="strongholds-section" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-slate-800 pb-5">
            <div>
              <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
                Professional Triad
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight mt-1">
                Core Technical Strongholds
              </h2>
            </div>
            <p className="text-xs md:text-sm text-slate-400 max-w-md font-sans">
              Forging advanced systems at the intersection of reactive client engineering, predictive analytics, and high-performance ML models.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* STRONGHOLD 1: ML & DL */}
            <div className="bg-card-dark border border-border-dark hover:border-brand-cyan/40 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.1)]" id="stronghold-ml-dl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-3xl group-hover:bg-brand-cyan/10 transition-all duration-300"></div>
              <div className="space-y-6 relative z-10">
                {/* Header detail */}
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-brand-cyan/10 text-brand-cyan rounded-xl border border-brand-cyan/25">
                    <Brain className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/10 px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                    Deep Intelligence
                  </span>
                </div>

                {/* Typography and brief */}
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-semibold text-white tracking-tight">
                    Machine Learning & DL
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    Designing custom deep networks, solving sequence-learning limitations, and implementing robust inference frameworks on enterprise cloud architectures.
                  </p>
                </div>

                {/* Custom Interactive Switcher Tabs */}
                <div className="flex border-b border-slate-800/80 p-0.5 bg-slate-950/40 rounded-lg">
                  <button
                    onClick={() => setMlTab("stack")}
                    className={`flex-1 text-center py-1.5 text-[10px] uppercase tracking-wider font-mono font-semibold rounded-md transition-all cursor-pointer ${
                      mlTab === "stack"
                        ? "bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Tech Stack
                  </button>
                  <button
                    onClick={() => setMlTab("impact")}
                    className={`flex-1 text-center py-1.5 text-[10px] uppercase tracking-wider font-mono font-semibold rounded-md transition-all cursor-pointer ${
                      mlTab === "impact"
                        ? "bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Key Impacts
                  </button>
                </div>

                {/* Tab content viewer */}
                <div className="min-h-[140px] text-xs font-sans">
                  <AnimatePresence mode="wait">
                    {mlTab === "stack" ? (
                      <motion.div
                        key="ml-stack"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="space-y-2.5"
                      >
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-slate-900/40 rounded p-2 border border-slate-900">
                            <span className="text-[9px] font-mono text-slate-500 uppercase block">Models & Architectures</span>
                            <span className="text-[11px] font-medium text-slate-300">Transformers, CNNs, Sequence RNNs, GANs</span>
                          </div>
                          <div className="bg-slate-900/40 rounded p-2 border border-slate-900">
                            <span className="text-[9px] font-mono text-slate-500 uppercase block">Minds & Tools</span>
                            <span className="text-[11px] font-medium text-slate-300">PyTorch, TensorFlow, HuggingFace, Keras</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-slate-900/40 rounded p-2 border border-slate-900">
                            <span className="text-[9px] font-mono text-slate-500 uppercase block">Cloud & Inference</span>
                            <span className="text-[11px] font-medium text-slate-300">AWS Bedrock, SageMaker, Deep Learning AMIs</span>
                          </div>
                          <div className="bg-slate-900/40 rounded p-2 border border-slate-900">
                            <span className="text-[9px] font-mono text-slate-500 uppercase block">AI Agents</span>
                            <span className="text-[11px] font-medium text-slate-300">MCP Servers, LangChain, Tool-Use Agents</span>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="ml-impact"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="space-y-2 text-[11px] text-slate-300 leading-relaxed font-sans"
                      >
                        <div className="flex items-start gap-1.5">
                          <span className="text-brand-cyan mt-0.5">•</span>
                          <p>
                            <strong>Indian Patent Applied (2026):</strong> Solved catastrophic forgetting in streaming backprop systems via adaptive modular pipes.
                          </p>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="text-brand-cyan mt-0.5">•</span>
                          <p>
                            <strong>Conference Proceeding:</strong> First-author publication at SmartCom on Edge ConvNets for real-time mobile weed detection.
                          </p>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="text-brand-cyan mt-0.5">•</span>
                          <p>
                            <strong>Agent Integration:</strong> Programmed scalable autonomous agents managing API logs and telemetry queries.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="border-t border-slate-900 pt-4 mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Domain Focus</span>
                <span className="text-brand-cyan">Advanced Neural Ops</span>
              </div>
            </div>

            {/* STRONGHOLD 2: WEB DEVELOPMENT */}
            <div className="bg-card-dark border border-border-dark hover:border-brand-emerald/40 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.1)]" id="stronghold-web-dev">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/5 rounded-full blur-3xl group-hover:bg-brand-emerald/10 transition-all duration-300"></div>
              <div className="space-y-6 relative z-10">
                {/* Header detail */}
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-brand-emerald/10 text-brand-emerald rounded-xl border border-brand-emerald/25">
                    <Code className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-brand-emerald bg-brand-emerald/5 border border-brand-emerald/10 px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                    High Throughput
                  </span>
                </div>

                {/* Typography and brief */}
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-semibold text-white tracking-tight">
                    Web Development & Architecture
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    Building robust Java Spring Boot microservices, high-performance backends, and highly responsive interactive web interfaces.
                  </p>
                </div>

                {/* Custom Interactive Switcher Tabs */}
                <div className="flex border-b border-slate-800/80 p-0.5 bg-slate-950/40 rounded-lg">
                  <button
                    onClick={() => setWebTab("stack")}
                    className={`flex-1 text-center py-1.5 text-[10px] uppercase tracking-wider font-mono font-semibold rounded-md transition-all cursor-pointer ${
                      webTab === "stack"
                        ? "bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Tech Stack
                  </button>
                  <button
                    onClick={() => setWebTab("impact")}
                    className={`flex-1 text-center py-1.5 text-[10px] uppercase tracking-wider font-mono font-semibold rounded-md transition-all cursor-pointer ${
                      webTab === "impact"
                        ? "bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Key Impacts
                  </button>
                </div>

                {/* Tab content viewer */}
                <div className="min-h-[140px] text-xs font-sans">
                  <AnimatePresence mode="wait">
                    {webTab === "stack" ? (
                      <motion.div
                        key="web-stack"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="space-y-2.5"
                      >
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-slate-900/40 rounded p-2 border border-slate-900">
                            <span className="text-[9px] font-mono text-slate-500 uppercase block">Backend Ecosystem</span>
                            <span className="text-[11px] font-medium text-slate-300">Java Spring Boot, Express Node, Python (FastAPI, Django)</span>
                          </div>
                          <div className="bg-slate-900/40 rounded p-2 border border-slate-900">
                            <span className="text-[9px] font-mono text-slate-500 uppercase block">Interactive UI</span>
                            <span className="text-[11px] font-medium text-slate-300">React, TypeScript, Tailwind CSS, motion animations</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-slate-900/40 rounded p-2 border border-slate-900">
                            <span className="text-[9px] font-mono text-slate-500 uppercase block">Distributed Arch</span>
                            <span className="text-[11px] font-medium text-slate-300">RESTful APIs, RPC, WebSocket Streams, SSE Conduits</span>
                          </div>
                          <div className="bg-slate-900/40 rounded p-2 border border-slate-900">
                            <span className="text-[9px] font-mono text-slate-500 uppercase block">Infrastructure</span>
                            <span className="text-[11px] font-medium text-slate-300">Docker, AWS ECS/EC2, Nginx, Linux Containers</span>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="web-impact"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="space-y-2 text-[11px] text-slate-300 leading-relaxed font-sans"
                      >
                        <div className="flex items-start gap-1.5">
                          <span className="text-brand-emerald mt-0.5">•</span>
                          <p>
                            <strong>Sub-50ms Microservices:</strong> Deployed highly responsive spring-boot gateways configured with optimized database connection pools.
                          </p>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="text-brand-emerald mt-0.5">•</span>
                          <p>
                            <strong>Reactive Portfolios:</strong> Built modern web terminals simulating Model-Context Protocol environments with robust real-time updates.
                          </p>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="text-brand-emerald mt-0.5">•</span>
                          <p>
                            <strong>Cloud Native Delivery:</strong> Leveraged Dockerized pipelines to deploy fault-tolerant, autoscale-ready container architectures.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="border-t border-slate-900 pt-4 mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Domain Focus</span>
                <span className="text-brand-emerald">Systems & Client Delivery</span>
              </div>
            </div>

            {/* STRONGHOLD 3: DATA ANALYTICS & BIG DATA */}
            <div className="bg-card-dark border border-border-dark hover:border-brand-purple/40 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.1)]" id="stronghold-data-analytics">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/5 rounded-full blur-3xl group-hover:bg-brand-purple/10 transition-all duration-300"></div>
              <div className="space-y-6 relative z-10">
                {/* Header detail */}
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-brand-purple/10 text-brand-purple rounded-xl border border-brand-purple/25">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-brand-purple bg-brand-purple/5 border border-brand-purple/10 px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                    Advanced Insights
                  </span>
                </div>

                {/* Typography and brief */}
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-semibold text-white tracking-tight">
                    Data Science & Analytics
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    Constructing low-latency ETL conduits, consolidating disparate enterprise streams, and deriving high-fidelity predictive indicators.
                  </p>
                </div>

                {/* Custom Interactive Switcher Tabs */}
                <div className="flex border-b border-slate-800/80 p-0.5 bg-slate-950/40 rounded-lg">
                  <button
                    onClick={() => setDataTab("stack")}
                    className={`flex-1 text-center py-1.5 text-[10px] uppercase tracking-wider font-mono font-semibold rounded-md transition-all cursor-pointer ${
                      dataTab === "stack"
                        ? "bg-brand-purple/10 text-brand-purple border border-brand-purple/20"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Tech Stack
                  </button>
                  <button
                    onClick={() => setDataTab("impact")}
                    className={`flex-1 text-center py-1.5 text-[10px] uppercase tracking-wider font-mono font-semibold rounded-md transition-all cursor-pointer ${
                      dataTab === "impact"
                        ? "bg-brand-purple/10 text-brand-purple border border-brand-purple/20"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Key Impacts
                  </button>
                </div>

                {/* Tab content viewer */}
                <div className="min-h-[140px] text-xs font-sans">
                  <AnimatePresence mode="wait">
                    {dataTab === "stack" ? (
                      <motion.div
                        key="data-stack"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="space-y-2.5"
                      >
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-slate-900/40 rounded p-2 border border-slate-900">
                            <span className="text-[9px] font-mono text-slate-500 uppercase block">Data Analysis</span>
                            <span className="text-[11px] font-medium text-slate-300">Pandas, NumPy, Scikit-Learn, SciPy Stats</span>
                          </div>
                          <div className="bg-slate-900/40 rounded p-2 border border-slate-900">
                            <span className="text-[9px] font-mono text-slate-500 uppercase block">Databases & Lakes</span>
                            <span className="text-[11px] font-medium text-slate-300">PostgreSQL, Firestore, BigQuery, AWS S3/Glacier</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-slate-900/40 rounded p-2 border border-slate-900">
                            <span className="text-[9px] font-mono text-slate-500 uppercase block">Metric Visuals</span>
                            <span className="text-[11px] font-medium text-slate-300">Recharts, D3.js Charts, Power BI, Seaborn</span>
                          </div>
                          <div className="bg-slate-900/40 rounded p-2 border border-slate-900">
                            <span className="text-[9px] font-mono text-slate-500 uppercase block">Pipelines</span>
                            <span className="text-[11px] font-medium text-slate-300">ETL scripts, AWS Data Pipeline, SQS queues</span>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="data-impact"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="space-y-2 text-[11px] text-slate-300 leading-relaxed font-sans"
                      >
                        <div className="flex items-start gap-1.5">
                          <span className="text-brand-purple mt-0.5">•</span>
                          <p>
                            <strong>Abolished Data Silos:</strong> Extracted, cleaned, and unified sequential enterprise database schemas into structured JSON/CSV repositories.
                          </p>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="text-brand-purple mt-0.5">•</span>
                          <p>
                            <strong>Latency Analytics Models:</strong> Visualized performance metrics, mapping synaptic drift parameters against model retention rates.
                          </p>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="text-brand-purple mt-0.5">•</span>
                          <p>
                            <strong>Sub-second Dashboard Indexes:</strong> Optimized analytical rendering of dataset tables handling hundreds of thousands of samples.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="border-t border-slate-900 pt-4 mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Domain Focus</span>
                <span className="text-brand-purple">Predictive Science & Pipelines</span>
              </div>
            </div>

          </div>
        </section>

        {/* INTERACTIVE PATENT & PUBLICATIONS BLOCK */}
        <section id="patent-section" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-slate-800 pb-5">
            <div>
              <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
                Patent & Scientific Disclosure
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight mt-1">
                Sequential Forgetting Mitigation
              </h2>
            </div>
            <p className="text-xs md:text-sm text-slate-400 max-w-md font-sans">
              Interactive simulators highlighting certified research contributions solving core catastrophic memory leaks in sequential enterprise AI pipelines.
            </p>
          </div>

          <PatentPipeline />

          {/* Research Publication Spotlight Sub-card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-900/10 border border-slate-800/80 rounded-2xl p-6 items-center" id="weed-detection-publication">
            <div className="md:col-span-8 space-y-3">
              <span className="text-[10px] font-mono text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-2.5 py-1 rounded w-fit block font-semibold uppercase">
                SmartCom Conference Proceedings • First Author
              </span>
              <h3 className="text-lg md:text-xl font-display font-semibold text-white">
                IoT and AI-based Weed Detection and Automated Eradication System
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                Researched and deployed real-time localized target recognition systems utilizing optimized edge convolutional networks. Authorship addresses requirement workflows, deployment constraints, and resource-bound model validation.
              </p>
            </div>
            
            <div className="md:col-span-4 flex justify-end">
              <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-950 text-xs font-mono space-y-2.5 w-full md:w-56" id="weed-pub-details">
                <div className="flex justify-between">
                  <span className="text-slate-500">FORMAT:</span>
                  <span className="text-slate-300 font-bold">Paper Published</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">RESEARCH ROLE:</span>
                  <span className="text-slate-300 font-bold">Lead Developer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">HARDWARE TYPE:</span>
                  <span className="text-brand-cyan font-semibold">Edge Micro IoT</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE TIMELINE SECTION */}
        <section id="experience-section" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-slate-800 pb-5">
            <div>
              <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
                Career Journey Map
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight mt-1">
                Professional Experience
              </h2>
            </div>
            <p className="text-xs md:text-sm text-slate-400 max-w-md font-sans">
              Dedicated track record of high-performance AI consulting and systems engineering solving microservice latency and model deployment barriers.
            </p>
          </div>

          <ExperienceTimeline />
        </section>

        {/* DETAILED PROJECT DASHBOARD GRIDS */}
        <section id="projects-section" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-slate-800 pb-5">
            <div>
              <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
                Production-Ready Portfolios
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight mt-1">
                Enterprise Solutions Delivered
              </h2>
            </div>
            <p className="text-xs md:text-sm text-slate-400 max-w-md font-sans">
              Deep dives into actual business code structures, database connections, and pipeline architectures engineered for customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="enterprise-p_grid">
            
            {/* Project 1: NSB */}
            <div className="bg-card-dark border border-border-dark hover:border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group" id="project-card-nsb">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest leading-none">
                    AWS-Hosted Pipeline Platform
                  </span>
                  <span className="p-1 px-2.5 rounded bg-brand-cyan/10 border border-brand-cyan/20 font-mono text-[10px] text-brand-cyan">
                    Python Django
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-display font-medium text-white group-hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                    NSB Real Property Valuer Platform <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-brand-cyan transition-colors" />
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    Engineered market data analytics structures utilizing AWS S3 and automated scraping pipelines to calculate market volatility indices, delivering historical comparisons directly to real estate valuation monitors.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-800/60 pt-4 mt-6 space-y-3">
                <div className="flex justify-between items-center text-[11px] font-mono">
                  <span className="text-slate-500 uppercase">YUVRAJ'S ROLE:</span>
                  <span className="text-slate-200 font-semibold text-right">Full-Stack &amp; AI Developer</span>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">AWS S3</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">Market Analytics</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">Django Pipelines</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">Automated ETL</span>
                </div>
              </div>
            </div>

            {/* Project 2: Generative AI */}
            <div className="bg-card-dark border border-border-dark hover:border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group" id="project-card-genai-edu">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest leading-none">
                    LLMOps &amp; Prompt Engineering
                  </span>
                  <span className="p-1 px-2.5 rounded bg-brand-cyan/10 border border-brand-cyan/20 font-mono text-[10px] text-brand-cyan">
                    Generative APIs
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-display font-medium text-white group-hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                    Generative AI Educational Platform <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-brand-cyan transition-colors" />
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    Constructed a secure, context-aware prompt template and context-retrieval routing layer back-ended with Python. Applied UX/UI refinement and latency streamlining, boosting general student engagement levels by over 30%.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-800/60 pt-4 mt-6 space-y-3">
                <div className="flex justify-between items-center text-[11px] font-mono">
                  <span className="text-slate-500 uppercase">YUVRAJ'S ROLE:</span>
                  <span className="text-slate-200 font-semibold text-right">Lead API Developer</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">LLMOps</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">Prompt Silos</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">Django API</span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">Adaptive UI</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SKILLS MATRIX COMPONENT */}
        <section id="skills-section" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-slate-800 pb-5">
            <div>
              <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
                Technical Stack Index
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight mt-1">
                Capability Matrix
              </h2>
            </div>
            <p className="text-xs md:text-sm text-slate-400 max-w-md font-sans">
              Filter Yuvraj&apos;s competencies by categorical domains to evaluate active performance levels and structural integrations.
            </p>
          </div>

          <SkillMatrix />
        </section>

        {/* INTERACTIVE RESUME PREVIEW & OFFLINE PERSISTENCE MESSAGING INBOX */}
        <section id="contact-section" className="scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="final-contact-layout">
            
            {/* Contact Details Card: left */}
            <div className="lg:col-span-5 border border-border-dark bg-card-dark rounded-2xl p-6 md:p-8 flex flex-col justify-between" id="quick-contact-silo">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider block">
                    Enterprise Communication
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-white tracking-tight mt-1">
                    Book Introduction
                  </h3>
                  <p className="text-xs text-slate-400 font-sans mt-1">
                    Yuvraj is ready to collaborate and validates critical logistics quickly. Use direct points or the interactive simulator route.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="flex items-center gap-3.5 bg-slate-950/40 border border-slate-900 p-3.5 rounded-xl">
                    <div className="p-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-lg text-brand-cyan">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-slate-500 uppercase block">DIRECT EMAIL ID</span>
                      <span className="text-xs font-mono font-medium text-slate-200 select-all">
                        yuvrajbharade26@gmail.com
                      </span>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-center gap-3.5 bg-slate-950/40 border border-slate-900 p-3.5 rounded-xl">
                    <div className="p-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-lg text-brand-cyan">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-slate-500 uppercase block">PHONE &amp; WHATSAPP</span>
                      <span className="text-xs font-mono font-medium text-slate-200 select-all">
                        +91 7666798673
                      </span>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-center gap-3.5 bg-slate-950/40 border border-slate-900 p-3.5 rounded-xl">
                    <div className="p-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-lg text-brand-cyan">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-slate-500 uppercase block">CURRENT BASE</span>
                      <span className="text-xs font-sans font-medium text-slate-200">
                        Pune, Maharashtra, India
                      </span>
                    </div>
                  </div>
                </div>

                {/* Educational parameters */}
                <div className="border-t border-slate-900 pt-5 space-y-3">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">
                    Academic Certifications
                  </span>
                  
                  <div className="text-xs space-y-2">
                    <div>
                      <span className="font-semibold text-slate-200 block font-display">Master of Computer Applications (MCA)</span>
                      <span className="text-slate-400 font-mono text-[10px]">Sinhgad Institute of Management, Pune</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-200 block font-display">Bachelor of Science in Computer Science (B.Sc. CS)</span>
                      <span className="text-slate-400 font-mono text-[10px]">Kaveri College, Pune</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Additional verification metrics */}
              <div className="border-t border-slate-900 pt-5 mt-6 flex justify-between items-center text-[10px] font-mono text-slate-500">
                <span>PORTFOLIO: PRODUCTION READY</span>
                <span>STATUS: ACTIVE NOW</span>
              </div>
            </div>

            {/* Professional Engagement & SLA Protocols Card: right */}
            <div className="lg:col-span-7 border border-border-dark bg-card-dark rounded-2xl p-6 md:p-8 flex flex-col justify-between" id="engagement-protocols-portal">
              <div className="space-y-6">
                
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-mono text-brand-emerald uppercase tracking-widest flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-brand-emerald" /> Operational SLA & Direct Connect
                    </span>
                    <h3 className="text-lg md:text-xl font-display font-medium text-white tracking-tight mt-0.5">
                      Professional Reach-Out protocols
                    </h3>
                  </div>
                </div>

                {/* Grid of SLA specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-950/50 border border-slate-900 p-4 rounded-xl space-y-2">
                    <div className="flex items-center gap-2 text-brand-cyan font-mono text-[10px] uppercase font-bold tracking-wider">
                      <Zap className="w-3.5 h-3.5" /> High-Performance Delivery
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      Delivering sub-50ms latency microservice architectures, clean type-safe structures, and production-ready enterprise integrations.
                    </p>
                  </div>

                  <div className="bg-slate-950/50 border border-slate-900 p-4 rounded-xl space-y-2">
                    <div className="flex items-center gap-2 text-brand-emerald font-mono text-[10px] uppercase font-bold tracking-wider">
                      <Brain className="w-3.5 h-3.5" /> Intelligent Orchestration
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      Deploying custom Agentic workflows, model context protocols, and high-fidelity sequence feature-extraction pipelines.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-950/30 border border-slate-900/60 rounded-xl p-5 space-y-4">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                    Direct Interaction Handles
                  </span>

                  <div className="space-y-3">
                    {/* LinkedIn button */}
                    <a
                      href="https://linkedin.com/in/yuvraj-bharade-profile-link/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-3 bg-slate-950 border border-slate-900 hover:border-brand-cyan/40 hover:bg-slate-900/40 rounded-xl group transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-brand-cyan/10 rounded text-brand-cyan">
                          <Linkedin className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-sans text-slate-200 group-hover:text-white transition-colors">
                          Yuvraj's Professional LinkedIn Profile
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-brand-cyan transition-colors" />
                    </a>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Copy Email Button */}
                      <button
                        onClick={() => handleCopyContact("yuvrajbharade26@gmail.com", "email")}
                        className="flex items-center justify-between p-3 bg-slate-950 border border-slate-900 hover:border-brand-emerald/40 hover:bg-slate-900/40 rounded-xl group transition-all cursor-pointer text-left w-full"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 bg-brand-emerald/10 rounded text-brand-emerald">
                            <Mail className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-slate-500 block uppercase">COPIABLE EMAIL ID</span>
                            <span className="text-[11px] font-mono text-slate-300 group-hover:text-white">
                              yuvrajbharade26@gmail.com
                            </span>
                          </div>
                        </div>
                        <div>
                          {copiedText === "email" ? (
                            <ClipboardCheck className="w-3.5 h-3.5 text-brand-emerald" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-emerald transition-colors" />
                          )}
                        </div>
                      </button>

                      {/* Copy Phone Button */}
                      <button
                        onClick={() => handleCopyContact("+917666798673", "phone")}
                        className="flex items-center justify-between p-3 bg-slate-950 border border-slate-900 hover:border-brand-purple/40 hover:bg-slate-900/40 rounded-xl group transition-all cursor-pointer text-left w-full"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 bg-brand-purple/10 rounded text-brand-purple">
                            <Phone className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-slate-500 block uppercase">Direct Cell Number</span>
                            <span className="text-[11px] font-mono text-slate-300 group-hover:text-white">
                              +91 7666798673
                            </span>
                          </div>
                        </div>
                        <div>
                          {copiedText === "phone" ? (
                            <ClipboardCheck className="w-3.5 h-3.5 text-brand-purple" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-purple transition-colors" />
                          )}
                        </div>
                      </button>
                    </div>
                  </div>

                  {copiedText && (
                    <div className="text-center pt-1 animate-pulse">
                      <span className="text-[10px] font-mono text-brand-emerald uppercase font-bold">
                        ✓ Copied to clipboard for immediate use
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-[10.5px] text-slate-500 leading-relaxed text-center font-sans">
                  Available for remote positions worldwide and relocations to Indian/Global hubs. Fully aligned to coordinate with US, EMEA, and APAC development timelines on demand.
                </p>

              </div>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER METADATA MARKERS */}
      <footer className="border-t border-slate-900/40 bg-slate-950/30 py-8 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500" id="global-footer">
          <div>
            <span>© 2026 Yuvraj Nilesh Bharade. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-5">
            <span>✓ Host Connection Stable</span>
            <a
              href="https://linkedin.com/in/yuvraj-bharade-profile-link/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-brand-cyan transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
