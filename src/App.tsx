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
  BookOpen,
  Glasses
} from "lucide-react";

import AIAgentSimulator from "./components/AIAgentSimulator";
import PatentPipeline from "./components/PatentPipeline";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillMatrix from "./components/SkillMatrix";

interface VisitorMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  status: "queued" | "routing" | "processed";
}

export default function App() {
  const [messages, setMessages] = useState<VisitorMessage[]>([]);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  
  // Readability & Plain English Mode Switch
  const [readabilityMode, setReadabilityMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("yuvraj_readability_mode");
    return saved === "true";
  });

  const handleToggleReadability = () => {
    setReadabilityMode((prev) => {
      const next = !prev;
      localStorage.setItem("yuvraj_readability_mode", String(next));
      return next;
    });
  };

  // Form states
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Load message logs from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("yuvraj_visitor_messages");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleCopyContact = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    const newMsg: VisitorMessage = {
      id: Date.now().toString(),
      name: formName,
      email: formEmail,
      subject: formSubject || "General Opportunity Inquiry",
      message: formMessage,
      timestamp: new Date().toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }),
      status: "queued"
    };

    const updated = [newMsg, ...messages];
    setMessages(updated);
    localStorage.setItem("yuvraj_visitor_messages", JSON.stringify(updated));

    // Reset Form
    setFormName("");
    setFormEmail("");
    setFormSubject("");
    setFormMessage("");
    setFormSubmitted(true);

    // Simulate Agent processing steps
    setTimeout(() => {
      setMessages((prev) => {
        const next = prev.map((m) => (m.id === newMsg.id ? { ...m, status: "routing" as const } : m));
        localStorage.setItem("yuvraj_visitor_messages", JSON.stringify(next));
        return next;
      });
    }, 2500);

    setTimeout(() => {
      setMessages((prev) => {
        const next = prev.map((m) => (m.id === newMsg.id ? { ...m, status: "processed" as const } : m));
        localStorage.setItem("yuvraj_visitor_messages", JSON.stringify(next));
        return next;
      });
    }, 6000);
  };

  return (
    <div 
      className={`min-h-screen flex flex-col transition-all duration-300 selection:bg-cyan-500/25 ${
        readabilityMode 
          ? "bg-slate-50 text-slate-800" 
          : "bg-bg-dark text-slate-100 selection:bg-brand-cyan/30"
      }`} 
      id="portfolio-root"
    >
      
      {/* Decorative ambient blurred backgrounds (Only visible in standard futuristic dark mode for cleaner space) */}
      {!readabilityMode && (
        <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 left-[10%] w-[350px] h-[350px] rounded-full bg-brand-cyan/5 blur-[120px] ambient-glow"></div>
          <div className="absolute top-80 right-[15%] w-[450px] h-[450px] rounded-full bg-brand-purple/5 blur-[150px] ambient-glow" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-[1800px] left-[5%] w-[400px] h-[400px] rounded-full bg-brand-emerald/5 blur-[130px] ambient-glow" style={{ animationDelay: "4s" }}></div>
        </div>
      )}

      {/* Modern Top Header / Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        readabilityMode 
          ? "bg-white/95 border-b border-slate-200 shadow-sm" 
          : "bg-bg-dark/85 border-b border-slate-900/90"
      }`} id="top-navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Pulsing indicator block */}
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-sm ${
              readabilityMode 
                ? "bg-cyan-50 border border-cyan-200 text-cyan-700" 
                : "bg-slate-900 border border-slate-800 text-brand-cyan"
            }`}>
              Y
            </div>
            <div>
              <span className={`font-display font-bold text-sm tracking-wide block ${
                readabilityMode ? "text-slate-900" : "text-white"
              }`}>
                YUVRAJ BHARADE
              </span>
              <span className={`text-[10px] font-mono flex items-center gap-1.5 leading-none mt-0.5 ${
                readabilityMode ? "text-slate-600 font-bold" : "text-slate-400"
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse"></span>
                ACTIVE IN PUNE
              </span>
            </div>
          </div>

          {/* Nav links */}
          <nav className={`hidden md:flex items-center gap-8 text-xs font-mono font-bold ${
            readabilityMode ? "text-slate-600" : "text-slate-400"
          }`}>
            <a href="#about-section" className="hover:text-cyan-600 transition-colors">/about</a>
            <a href="#simulation-section" className="hover:text-cyan-600 transition-colors">{readabilityMode ? "/profile-faq" : "/mcp-terminal"}</a>
            <a href="#patent-section" className="hover:text-cyan-600 transition-colors">{readabilityMode ? "/pending-patent" : "/patented-logic"}</a>
            <a href="#experience-section" className="hover:text-cyan-600 transition-colors">/experience</a>
            <a href="#projects-section" className="hover:text-cyan-600 transition-colors">/projects</a>
            <a href="#skills-section" className="hover:text-cyan-600 transition-colors">/skills</a>
          </nav>

          {/* Mode Switch & Contact Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Readability mode toggle switch button */}
            <button
              onClick={handleToggleReadability}
              className={`px-3 py-1.5 rounded-md text-xs font-bold font-mono transition-all duration-350 cursor-pointer flex items-center gap-1.5 border ${
                readabilityMode
                  ? "bg-cyan-50 border-cyan-300 text-cyan-800 hover:bg-cyan-100 shadow-sm"
                  : "bg-slate-900/80 border-slate-800 hover:border-slate-755 text-slate-300 hover:text-white"
              }`}
              id="readability-mode-toggle"
              title={readabilityMode ? "Switch back to Futuristic Dark Theme" : "Switch to Simplified High-Legibility Reading Theme"}
            >
              <Glasses className={`w-3.5 h-3.5 ${readabilityMode ? "text-cyan-700 animate-pulse" : "text-slate-400"}`} />
              <span className="hidden sm:inline">
                {readabilityMode ? "Theme: Readable Light" : "Readability Mode Off"}
              </span>
              <span className="sm:hidden">{readabilityMode ? "Light" : "Readable"}</span>
            </button>

            <a
              href="mailto:yuvrajbharade26@gmail.com"
              className={`px-3.5 py-1.5 text-xs font-mono font-bold rounded-md transition-all flex items-center gap-1.5 cursor-pointer border ${
                readabilityMode
                  ? "bg-slate-905 hover:bg-slate-855 text-white border-slate-900"
                  : "bg-slate-900 hover:text-white border border-slate-800 hover:border-slate-700 text-slate-300"
              }`}
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
        
        {/* READABILITY MODE EDUCATION TIP (Discreetly prompts user they can toggle back and forth) */}
        {readabilityMode && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-cyan-52/60 border border-cyan-200 rounded-xl text-xs font-sans text-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <span className="p-1 px-2.5 rounded bg-cyan-100 text-cyan-800 font-bold uppercase tracking-wide text-[9px] shrink-0">
                INFO
              </span>
              <p className="font-medium text-[11.5px] leading-relaxed">
                <strong>Plain English & Readable Theme is currently Active.</strong> Complex technical AI terminology, codes, and terminal screens have been simplified with high-contrast light styling so anyone can interact effortlessly.
              </p>
            </div>
            <button 
              onClick={handleToggleReadability}
              className="text-[11px] text-cyan-800 underline hover:text-cyan-950 font-bold shrink-0 self-end sm:self-auto"
            >
              Back to Dark CLI theme
            </button>
          </motion.div>
        )}

        {/* HERO SECTION */}
        <section id="about-section" className="scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Bio Card Column */}
            <div 
              className={`flex flex-col justify-between border rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                readabilityMode 
                  ? "border-slate-200 bg-white text-slate-800 shadow-md" 
                  : "border-border-dark bg-card-dark text-slate-100"
              }`} 
              id="profile-hero-card"
            >
              <div className="space-y-6">
                
                {/* availability pill and profile image mock */}
                <div className="flex items-center justify-between">
                  {/* Status chip */}
                  <span className={`text-[10px] font-mono px-3 py-1 rounded-full flex items-center gap-1.5 font-bold uppercase tracking-wider ${
                    readabilityMode
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "text-brand-emerald bg-brand-emerald/10 border border-brand-emerald/20"
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-ping"></span>
                    Immediate Joiner
                  </span>
                  <span className={`text-[10px] font-mono uppercase font-semibold ${readabilityMode ? "text-slate-500" : "text-slate-500"}`}>
                    v1.4 Status Stable
                  </span>
                </div>

                <div className="space-y-2.5">
                  <span className={`text-xs font-mono uppercase tracking-widest block font-bold ${
                    readabilityMode ? "text-cyan-705 text-cyan-700" : "text-brand-cyan"
                  }`}>
                    AWS & Full-Stack Specialist
                  </span>
                  <h1 className={`text-3xl md:text-4xl font-display font-medium tracking-tight leading-none ${
                    readabilityMode ? "text-slate-900 font-bold" : "text-white"
                  }`}>
                    Yuvraj Nilesh Bharade
                  </h1>
                  <h2 className={`text-base font-sans leading-normal ${
                    readabilityMode ? "text-slate-650 text-slate-705 font-medium" : "text-slate-400"
                  }`}>
                    {readabilityMode 
                      ? "Innovative systems developer with 4.5 years of experience delivering cloud-hosted programming, smart automated workflows, and digital database bridges for multi-user client targets."
                      : "Innovative AI Engineer with 4.5 years of experience architecting cloud-native microservices, Agentic workflows, and sequential feature-extraction structures."
                    }
                  </h2>
                </div>

                {/* Technical key indicators / Quick stats */}
                <div className={`grid grid-cols-2 gap-4 p-4 rounded-xl border ${
                  readabilityMode 
                    ? "bg-slate-50 border-slate-150 text-slate-800" 
                    : "bg-slate-950/60 border-slate-900"
                }`} id="hero-quick-data-box">
                  <div>
                    <span className={`text-[10px] font-mono uppercase block font-bold ${readabilityMode ? "text-slate-500" : "text-slate-500"}`}>
                      EXPERIENCE RECORD
                    </span>
                    <span className={`text-lg font-bold font-display ${readabilityMode ? "text-slate-900" : "text-white"}`}>
                      4.5 Years
                    </span>
                    <span className={`text-[10px] block font-mono font-semibold ${readabilityMode ? "text-slate-600" : "text-slate-400"}`}>
                      Lead Consulting
                    </span>
                  </div>
                  <div>
                    <span className={`text-[10px] font-mono uppercase block font-bold ${readabilityMode ? "text-slate-500" : "text-slate-500"}`}>
                      PATENT STATUS
                    </span>
                    <span className={`text-lg font-bold font-display ${readabilityMode ? "text-cyan-700" : "text-brand-cyan"}`}>
                      1 Filed
                    </span>
                    <span className={`text-[10px] block font-mono font-semibold ${readabilityMode ? "text-slate-600" : "text-slate-400"}`}>
                      Indian App '26
                    </span>
                  </div>
                </div>

              </div>

              {/* Quick copy contacts */}
              <div className={`border-t pt-6 mt-8 space-y-3 ${
                readabilityMode ? "border-slate-100" : "border-slate-800/80"
              }`} id="hero-interactive-contacts">
                <span className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                  readabilityMode ? "text-slate-500" : "text-slate-500"
                }`}>
                  {readabilityMode ? "Direct Contact Links" : "Quick-Connect (Click to Copy Metadata)"}
                </span>
                
                <div className="space-y-2">
                  <button
                    onClick={() => handleCopyContact("yuvrajbharade26@gmail.com", "email")}
                    className={`w-full text-xs font-mono py-2.5 px-3 rounded-lg border flex justify-between items-center transition-all cursor-pointer group font-bold ${
                      readabilityMode
                        ? "bg-slate-50 hover:bg-slate-100 border-slate-205 text-slate-800"
                        : "bg-slate-950 hover:bg-slate-900 border-slate-900 hover:border-slate-800 text-slate-300 hover:text-white"
                    }`}
                    id="copy-email-trigger"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className={`w-3.5 h-3.5 ${readabilityMode ? "text-cyan-600" : "text-slate-400"}`} />
                      <span className="select-all">yuvrajbharade26@gmail.com</span>
                    </span>
                    <span className={`text-[10px] lowercase transition-all ${readabilityMode ? "text-cyan-700" : "text-brand-cyan"}`}>
                      {copiedText === "email" ? "copied!" : "click to copy"}
                    </span>
                  </button>

                  <button
                    onClick={() => handleCopyContact("+917666798673", "phone")}
                    className={`w-full text-xs font-mono py-2.5 px-3 rounded-lg border flex justify-between items-center transition-all cursor-pointer group font-bold ${
                      readabilityMode
                        ? "bg-slate-50 hover:bg-slate-100 border-slate-205 text-slate-800"
                        : "bg-slate-950 hover:bg-slate-900 border-slate-900 hover:border-slate-800 text-slate-300 hover:text-white"
                    }`}
                    id="copy-phone-trigger"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className={`w-3.5 h-3.5 ${readabilityMode ? "text-cyan-600" : "text-slate-400"}`} />
                      <span className="select-all">+91 7666798673</span>
                    </span>
                    <span className={`text-[10px] lowercase transition-all ${readabilityMode ? "text-cyan-700" : "text-brand-cyan"}`}>
                      {copiedText === "phone" ? "copied!" : "click to copy"}
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
                    <Layers className={`w-4 h-4 ${readabilityMode ? "text-cyan-600" : "text-brand-cyan"}`} />
                    <h3 className={`text-xs font-mono uppercase tracking-widest font-bold leading-none ${
                        readabilityMode ? "text-slate-600" : "text-slate-400"
                    }`}>
                      {readabilityMode ? "Interactive Profile Knowledge Finder" : "Integrated Profile Agent / MCP Query Window"}
                    </h3>
                  </div>
                  <span className={`text-xs font-mono font-bold ${readabilityMode ? "text-slate-500" : "text-slate-500"}`}>
                    {readabilityMode ? "Direct FAQ Mode v1.4" : "CLI-Engine v1.4"}
                  </span>
                </div>
                
                <AIAgentSimulator readabilityMode={readabilityMode} />
              </div>
            </div>

          </div>
        </section>

        {/* INTERACTIVE PATENT & PUBLICATIONS BLOCK */}
        <section id="patent-section" className="space-y-8 scroll-mt-20">
          <div className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b pb-5 ${
            readabilityMode ? "border-slate-200" : "border-slate-800"
          }`}>
            <div>
              <span className={`text-xs font-mono uppercase tracking-widest font-bold ${
                readabilityMode ? "text-cyan-700" : "text-brand-cyan"
              }`}>
                {readabilityMode ? "Invention & Scientific Research" : "Patent & Scientific Disclosure"}
              </span>
              <h2 className={`text-2xl md:text-3xl font-display font-medium tracking-tight mt-1 ${
                readabilityMode ? "text-slate-900 font-bold" : "text-white"
              }`}>
                {readabilityMode ? "Yuvraj's Intellectual Property" : "Sequential Forgetting Mitigation"}
              </h2>
            </div>
            <p className={`text-xs md:text-sm max-w-md font-sans leading-relaxed ${
              readabilityMode ? "text-slate-650 font-medium" : "text-slate-400"
            }`}>
              {readabilityMode 
                ? "Experience the interactive sandbox below. Modulate the knobs on the left and see how the patent buffers successfully prevent computer parameter forgetting."
                : "Interactive simulators highlighting certified research contributions solving core catastrophic memory leaks in sequential enterprise AI pipelines."
              }
            </p>
          </div>

          <PatentPipeline readabilityMode={readabilityMode} />

          {/* Research Publication Spotlight Sub-card */}
          <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 border rounded-2xl p-6 items-center transition-all ${
            readabilityMode 
              ? "bg-white border-slate-200 text-slate-800 shadow-md" 
              : "bg-slate-900/10 border-slate-800/80 text-slate-100"
          }`} id="weed-detection-publication">
            <div className="md:col-span-8 space-y-3">
              <span className={`text-[10px] font-mono px-2.5 py-1 rounded w-fit block font-bold uppercase border ${
                readabilityMode
                  ? "text-cyan-800 bg-cyan-50 border-cyan-200"
                  : "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20"
              }`}>
                SmartCom Conference Proceedings • First Author
              </span>
              <h3 className={`text-lg md:text-xl font-display font-bold ${readabilityMode ? "text-slate-900" : "text-white"}`}>
                IoT and AI-based Weed Detection and Automated Eradication System
              </h3>
              <p className={`text-xs leading-relaxed ${readabilityMode ? "text-slate-600 font-medium" : "text-slate-305 text-slate-300"}`}>
                {readabilityMode 
                  ? "Researched and built automated agricultural robotics. Designed real-time computer vision cameras that identify weeds on farm soil. Presented developer guidelines, system parameters, and model metrics to the SmartCom panel as the first drafting author."
                  : "Researched and deployed real-time localized target recognition systems utilizing optimized edge convolutional networks. Authorship addresses requirement workflows, deployment constraints, and resource-bound model validation."
                }
              </p>
            </div>
            
            <div className="md:col-span-4 flex justify-end">
              <div className={`p-4 rounded-xl border text-xs font-mono space-y-2.5 w-full md:w-60 ${
                readabilityMode
                  ? "bg-slate-50 border-slate-205 text-slate-800"
                  : "bg-slate-950/60 border-slate-950 text-slate-300"
              }`} id="weed-pub-details">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-bold">FORMAT:</span>
                  <span className={`${readabilityMode ? "text-slate-900" : "text-slate-100"} font-bold`}>Paper Published</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-bold">RESEARCH ROLE:</span>
                  <span className={`${readabilityMode ? "text-slate-900" : "text-slate-100"} font-bold`}>Lead Developer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-bold">HARDWARE TYPE:</span>
                  <span className="text-cyan-600 font-bold">Edge Micro IoT</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE TIMELINE SECTION */}
        <section id="experience-section" className="space-y-8 scroll-mt-20">
          <div className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b pb-5 ${
            readabilityMode ? "border-slate-200" : "border-slate-800"
          }`}>
            <div>
              <span className={`text-xs font-mono uppercase tracking-widest font-bold ${
                readabilityMode ? "text-cyan-700" : "text-brand-cyan"
              }`}>
                {readabilityMode ? "Professional Milestones" : "Career Journey Map"}
              </span>
              <h2 className={`text-2xl md:text-3xl font-display font-medium tracking-tight mt-1 ${
                readabilityMode ? "text-slate-900 font-bold" : "text-white"
              }`}>
                {readabilityMode ? "Yuvraj's Work Experience" : "Professional Experience"}
              </h2>
            </div>
            <p className={`text-xs md:text-sm max-w-md font-sans leading-relaxed ${
              readabilityMode ? "text-slate-650 font-medium" : "text-slate-400"
            }`}>
              {readabilityMode 
                ? "A cumulative summary of Yuvraj's employment history, detailing client solutions, back-end code optimizations, and deployed assets."
                : "4.5 years of consistent AI consulting and systems engineering solving microservice latency and model deployment barriers."
              }
            </p>
          </div>

          <ExperienceTimeline readabilityMode={readabilityMode} />
        </section>

        {/* DETAILED PROJECT DASHBOARD GRIDS */}
        <section id="projects-section" className="space-y-8 scroll-mt-20">
          <div className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b pb-5 ${
            readabilityMode ? "border-slate-200" : "border-slate-800"
          }`}>
            <div>
              <span className={`text-xs font-mono uppercase tracking-widest font-bold ${
                readabilityMode ? "text-cyan-700" : "text-brand-cyan"
              }`}>
                {readabilityMode ? "Delivered Software" : "Production-Ready Portfolios"}
              </span>
              <h2 className={`text-2xl md:text-3xl font-display font-medium tracking-tight mt-1 ${
                readabilityMode ? "text-slate-900 font-bold" : "text-white"
              }`}>
                {readabilityMode ? "Completed Customer Projects" : "Enterprise Solutions Delivered"}
              </h2>
            </div>
            <p className={`text-xs md:text-sm max-w-md font-sans leading-relaxed ${
              readabilityMode ? "text-slate-650 font-medium" : "text-slate-400"
            }`}>
              {readabilityMode 
                ? "Explore direct instances of database structures, server pipelines, and custom services engineered for real business clients."
                : "Deep dives into actual business code structures, database connections, and pipeline architectures engineered for customers."
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="enterprise-p_grid">
            
            {/* Project 1: NSB */}
            <div className={`border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group ${
              readabilityMode
                ? "bg-white border-slate-205 hover:border-cyan-600 shadow-md text-slate-800"
                : "bg-card-dark border-border-dark hover:border-slate-700/80 text-slate-100"
            }`} id="project-card-nsb">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className={`text-[10px] font-mono uppercase tracking-widest leading-none font-bold ${
                    readabilityMode ? "text-slate-500" : "text-slate-400"
                  }`}>
                    {readabilityMode ? "AWS Analytics Platform" : "AWS-Hosted Pipeline Platform"}
                  </span>
                  <span className={`p-1 px-2.5 rounded font-mono text-[10px] font-bold ${
                    readabilityMode
                      ? "bg-cyan-50 border border-cyan-200 text-cyan-800"
                      : "bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan"
                  }`}>
                    Python Django
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className={`text-lg font-display font-bold group-hover:text-cyan-600 transition-colors flex items-center gap-1.5 ${
                    readabilityMode ? "text-slate-900" : "text-white"
                  }`}>
                    NSB Real Property Valuer Platform <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-600 transition-colors" />
                  </h3>
                  <p className={`text-xs leading-relaxed font-sans font-medium ${readabilityMode ? "text-slate-600" : "text-slate-400"}`}>
                    {readabilityMode
                      ? "Engineered property market databases utilizing Amazon S3 pipelines and automated scrapers. Calculated real-time historical volatility charts to assist valuers in estimating home pricing trends."
                      : "Engineered market data analytics structures utilizing AWS S3 and automated scraping pipelines to calculate market volatility indices, delivering historical comparisons directly to real estate valuation monitors."
                    }
                  </p>
                </div>
              </div>

              <div className={`border-t pt-4 mt-6 space-y-3 ${readabilityMode ? "border-slate-100" : "border-slate-800/60"}`}>
                <div className="flex justify-between items-center text-[11px] font-mono font-bold">
                  <span className="text-slate-550 lowercase font-bold">ROLE:</span>
                  <span className={`${readabilityMode ? "text-slate-900" : "text-slate-200"} font-bold text-right`}>Full-Stack &amp; AI Developer</span>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${readabilityMode ? "bg-slate-100 border-slate-200 text-slate-700 font-bold" : "bg-slate-900 border-slate-800 text-slate-400"}`}>AWS S3</span>
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${readabilityMode ? "bg-slate-100 border-slate-200 text-slate-700 font-bold" : "bg-slate-900 border-slate-800 text-slate-400"}`}>Market Analytics</span>
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${readabilityMode ? "bg-slate-100 border-slate-200 text-slate-700 font-bold" : "bg-slate-900 border-slate-800 text-slate-400"}`}>Django Pipelines</span>
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${readabilityMode ? "bg-slate-100 border-slate-200 text-slate-700 font-bold" : "bg-slate-900 border-slate-800 text-slate-400"}`}>Automated ETL</span>
                </div>
              </div>
            </div>

            {/* Project 2: Generative AI */}
            <div className={`border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group ${
              readabilityMode
                ? "bg-white border-slate-205 hover:border-cyan-600 shadow-md text-slate-800"
                : "bg-card-dark border-border-dark hover:border-slate-700/80 text-slate-100"
            }`} id="project-card-genai-edu">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className={`text-[10px] font-mono uppercase tracking-widest leading-none font-bold ${
                    readabilityMode ? "text-slate-500" : "text-slate-400"
                  }`}>
                    {readabilityMode ? "AI Prompt Systems" : "LLMOps & Prompt Engineering"}
                  </span>
                  <span className={`p-1 px-2.5 rounded font-mono text-[10px] font-bold ${
                    readabilityMode
                      ? "bg-cyan-50 border border-cyan-200 text-cyan-800"
                      : "bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan"
                  }`}>
                    Generative APIs
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className={`text-lg font-display font-bold group-hover:text-cyan-600 transition-colors flex items-center gap-1.5 ${
                    readabilityMode ? "text-slate-900" : "text-white"
                  }`}>
                    Generative AI Educational Platform <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-600 transition-colors" />
                  </h3>
                  <p className={`text-xs leading-relaxed font-sans font-medium ${readabilityMode ? "text-slate-600" : "text-slate-400"}`}>
                    {readabilityMode
                      ? "Constructed secure, context-aware prompt templates and smart AI content filters inside an educational backend on Python. Streamlined page speeds, boosting general student platform engagement by over 30%."
                      : "Constructed a secure, context-aware prompt template and context-retrieval routing layer back-ended with Python. Applied UX/UI refinement and latency streamlining, boosting general student engagement levels by over 30%."
                    }
                  </p>
                </div>
              </div>

              <div className={`border-t pt-4 mt-6 space-y-3 ${readabilityMode ? "border-slate-100" : "border-slate-800/60"}`}>
                <div className="flex justify-between items-center text-[11px] font-mono font-bold">
                  <span className="text-slate-550 lowercase font-bold">ROLE:</span>
                  <span className={`${readabilityMode ? "text-slate-900" : "text-slate-200"} font-bold text-right`}>Lead API Developer</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${readabilityMode ? "bg-slate-100 border-slate-200 text-slate-700 font-bold" : "bg-slate-900 border-slate-800 text-slate-400"}`}>LLMOps</span>
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${readabilityMode ? "bg-slate-100 border-slate-200 text-slate-700 font-bold" : "bg-slate-900 border-slate-800 text-slate-400"}`}>Prompt Silos</span>
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${readabilityMode ? "bg-slate-100 border-slate-200 text-slate-700 font-bold" : "bg-slate-900 border-slate-800 text-slate-400"}`}>Django API</span>
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${readabilityMode ? "bg-slate-100 border-slate-200 text-slate-700 font-bold" : "bg-slate-900 border-slate-800 text-slate-400"}`}>Adaptive UI</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SKILLS MATRIX COMPONENT */}
        <section id="skills-section" className="space-y-8 scroll-mt-20">
          <div className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b pb-5 ${
            readabilityMode ? "border-slate-200" : "border-slate-800"
          }`}>
            <div>
              <span className={`text-xs font-mono uppercase tracking-widest font-bold ${
                readabilityMode ? "text-cyan-705 text-cyan-700" : "text-brand-cyan"
              }`}>
                Technical Stack Index
              </span>
              <h2 className={`text-2xl md:text-3xl font-display font-medium tracking-tight mt-1 ${
                readabilityMode ? "text-slate-900 font-bold" : "text-white"
              }`}>
                Capability Matrix
              </h2>
            </div>
            <p className={`text-xs md:text-sm max-w-md font-sans leading-relaxed ${
              readabilityMode ? "text-slate-650 font-medium" : "text-slate-400"
            }`}>
              {readabilityMode 
                ? "Click any category button below to filter his comfortable technologies. Check the right hand details card for actual real-world business implementations."
                : "Filter Yuvraj's competencies by categorical domains to evaluate active performance levels and structural integrations."
              }
            </p>
          </div>

          <SkillMatrix readabilityMode={readabilityMode} />
        </section>

        {/* INTERACTIVE RESUME PREVIEW & OFFLINE PERSISTENCE MESSAGING INBOX */}
        <section id="contact-section" className="scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="final-contact-layout">
            
            {/* Contact Details Card: left */}
            <div className={`border rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ${
              readabilityMode
                ? "bg-white border-slate-200 text-slate-800 shadow-md"
                : "border-border-dark bg-card-dark text-slate-100"
            }`} id="quick-contact-silo">
              <div className="space-y-6">
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                    readabilityMode ? "text-cyan-700" : "text-brand-cyan"
                  }`}>
                    {readabilityMode ? "Contact Channels" : "Enterprise Communication"}
                  </span>
                  <h3 className={`text-xl md:text-2xl font-display font-bold tracking-tight mt-1 ${
                    readabilityMode ? "text-slate-900" : "text-white"
                  }`}>
                    Book Introduction
                  </h3>
                  <p className={`text-xs font-sans mt-1 leading-normal ${readabilityMode ? "text-slate-600 font-medium" : "text-slate-400"}`}>
                    Yuvraj is an immediate joiner and validates critical logistics quickly. Use direct points or the interactive simulator route.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className={`flex items-center gap-3.5 border p-3.5 rounded-xl ${
                    readabilityMode ? "bg-slate-50/50 border-slate-200 text-slate-800" : "bg-slate-950/40 border-slate-900"
                  }`}>
                    <div className={`p-2 rounded-lg border ${
                      readabilityMode ? "bg-cyan-50 border-cyan-200 text-cyan-705 text-cyan-750 text-cyan-700" : "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan"
                    }`}>
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-slate-500 uppercase block font-bold">DIRECT EMAIL ID</span>
                      <span className={`text-xs font-mono font-bold select-all ${readabilityMode ? "text-slate-900 hover:text-cyan-600" : "text-slate-200"}`}>
                        yuvrajbharade26@gmail.com
                      </span>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className={`flex items-center gap-3.5 border p-3.5 rounded-xl ${
                    readabilityMode ? "bg-slate-50/50 border-slate-200 text-slate-800" : "bg-slate-950/40 border-slate-900"
                  }`}>
                    <div className={`p-2 rounded-lg border ${
                      readabilityMode ? "bg-cyan-50 border-cyan-200 text-cyan-700" : "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan"
                    }`}>
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-slate-500 uppercase block font-bold">PHONE &amp; WHATSAPP</span>
                      <span className={`text-xs font-mono font-bold select-all ${readabilityMode ? "text-slate-900" : "text-slate-200"}`}>
                        +91 7666798673
                      </span>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className={`flex items-center gap-3.5 border p-3.5 rounded-xl ${
                    readabilityMode ? "bg-slate-50/50 border-slate-200 text-slate-800" : "bg-slate-950/40 border-slate-900"
                  }`}>
                    <div className={`p-2 rounded-lg border ${
                      readabilityMode ? "bg-cyan-50 border-cyan-200 text-cyan-700" : "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan"
                    }`}>
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-slate-500 uppercase block font-bold">CURRENT BASE</span>
                      <span className={`text-xs font-sans font-bold ${readabilityMode ? "text-slate-805 text-slate-800" : "text-slate-200"}`}>
                        Pune, Maharashtra, India
                      </span>
                    </div>
                  </div>
                </div>

                {/* Educational parameters */}
                <div className={`border-t pt-5 space-y-3 ${readabilityMode ? "border-slate-100" : "border-slate-900"}`}>
                  <span className="text-[10px] font-mono text-slate-550 uppercase block font-bold">
                    Academic Qualifications
                  </span>
                  
                  <div className="text-xs space-y-3 font-sans">
                    <div>
                      <span className="font-bold text-slate-850 text-slate-900 block font-display">Master of Computer Applications (MCA)</span>
                      <span className={`font-mono text-[10px] font-bold ${readabilityMode ? "text-slate-600" : "text-slate-400"}`}>Sinhgad Institute of Management, Pune</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-850 text-slate-900 block font-display">Bachelor of Science in Computer Science (B.Sc. CS)</span>
                      <span className={`font-mono text-[10px] font-bold ${readabilityMode ? "text-slate-600" : "text-slate-400"}`}>Kaveri College, Pune</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Additional verification metrics */}
              <div className={`border-t pt-5 mt-6 flex justify-between items-center text-[10px] font-mono font-bold ${
                readabilityMode ? "border-slate-100 text-slate-500" : "border-slate-900 text-slate-500"
              }`}>
                <span>UAN STATUS: VALIDATED</span>
                <span>NOTICE PERIOD: IMMEDIATE</span>
              </div>
            </div>

            {/* Offline Message persistence portal: right */}
            <div className={`border rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ${
              readabilityMode
                ? "bg-white border-slate-200 text-slate-800 shadow-md"
                : "border-border-dark bg-card-dark text-slate-105 text-slate-100"
            }`} id="visitor-messages-portal">
              <div className="space-y-6">
                
                <div className="flex justify-between items-start">
                  <div>
                    <span className={`text-xs font-mono uppercase tracking-widest flex items-center gap-1 font-bold ${
                      readabilityMode ? "text-cyan-705 text-cyan-700" : "text-brand-cyan"
                    }`}>
                      <Sparkles className="w-3.5 h-3.5" /> Secure Dispatch Box
                    </span>
                    <h3 className={`text-lg md:text-xl font-display font-bold tracking-tight mt-0.5 ${
                      readabilityMode ? "text-slate-900" : "text-white"
                    }`}>
                      Send a Message to Yuvraj
                    </h3>
                  </div>
                </div>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`border rounded-xl p-6 text-center space-y-4 ${
                      readabilityMode ? "bg-cyan-50/50 border-cyan-200 text-slate-800" : "bg-brand-cyan/5 border-brand-cyan/20"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full border flex items-center justify-center mx-auto ${
                      readabilityMode ? "bg-cyan-100 border-cyan-200 text-cyan-700" : "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan"
                    }`}>
                      <CheckCircle2 className="w-6 h-6 animate-pulse" />
                    </div>
                    <div className="space-y-1">
                      <h4 className={`font-bold font-display ${readabilityMode ? "text-slate-900" : "text-white"}`}>Message Transmitted!</h4>
                      <p className={`text-xs max-w-sm mx-auto leading-relaxed ${readabilityMode ? "text-slate-600 font-medium" : "text-slate-400"}`}>
                        Your message has been filed into local browser state storage logs. Watch the live simulated routing pipeline updates below!
                      </p>
                    </div>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className={`text-xs font-bold font-mono hover:underline ${readabilityMode ? "text-cyan-700" : "text-brand-cyan"}`}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSendMessage} className="space-y-4" id="visitor-contact-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-[10px] font-mono uppercase mb-1.5 font-bold ${readabilityMode ? "text-slate-600" : "text-slate-500"}`}>
                          Your Name / Enterprise <span className="text-cyan-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="John Doe from Acme Corp"
                          className={`w-full border rounded-lg p-2.5 text-xs outline-none transition-colors font-bold ${
                            readabilityMode
                              ? "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-cyan-600 focus:bg-white"
                              : "bg-slate-950 border-slate-900 text-white placeholder:text-slate-600 focus:border-brand-cyan/60"
                          }`}
                          id="input-form-name"
                        />
                      </div>
                      <div>
                        <label className={`block text-[10px] font-mono uppercase mb-1.5 font-bold ${readabilityMode ? "text-slate-600" : "text-slate-500"}`}>
                          Your Email ID <span className="text-cyan-600">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="john.doe@company.com"
                          className={`w-full border rounded-lg p-2.5 text-xs outline-none transition-colors font-bold ${
                            readabilityMode
                              ? "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-cyan-600 focus:bg-white"
                              : "bg-slate-950 border-slate-900 text-white placeholder:text-slate-600 focus:border-brand-cyan/60"
                          }`}
                          id="input-form-email"
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-[10px] font-mono uppercase mb-1.5 font-bold ${readabilityMode ? "text-slate-600" : "text-slate-500"}`}>
                        Subject / Focus
                      </label>
                      <input
                        type="text"
                        value={formSubject}
                        onChange={(e) => setFormSubject(e.target.value)}
                        placeholder="e.g. Lead AI Engineering Position"
                        className={`w-full border rounded-lg p-2.5 text-xs outline-none transition-colors font-bold ${
                          readabilityMode
                            ? "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-cyan-600 focus:bg-white"
                            : "bg-slate-950 border-slate-900 text-white placeholder:text-slate-600 focus:border-brand-cyan/60"
                        }`}
                        id="input-form-subj"
                      />
                    </div>

                    <div>
                      <label className={`block text-[10px] font-mono uppercase mb-1.5 font-bold ${readabilityMode ? "text-slate-600" : "text-slate-500"}`}>
                        Detailed Message <span className="text-cyan-600">*</span>
                      </label>
                      <textarea
                        required
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        rows={3}
                        placeholder="Describe your project, contract timeline, or open role requirements..."
                        className={`w-full border rounded-lg p-2.5 text-xs outline-none resize-none transition-colors font-bold ${
                          readabilityMode
                            ? "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-cyan-600 focus:bg-white"
                            : "bg-slate-950 border-slate-900 text-white placeholder:text-slate-600 focus:border-brand-cyan/60"
                        }`}
                        id="input-form-msg"
                      />
                    </div>

                    <button
                      type="submit"
                      className={`w-full text-xs font-mono font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all cursor-pointer ${
                        readabilityMode
                          ? "bg-cyan-600 text-white shadow-md shadow-cyan-100"
                          : "bg-brand-cyan text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:bg-cyan-300"
                      }`}
                      id="btn-submit-contact"
                    >
                      <Send className="w-3.5 h-3.5" />
                      {readabilityMode ? "Post message to visitor list" : "Transmit message to pipeline"}
                    </button>
                  </form>
                )}

                {/* Simulated live transmission feed */}
                <div className={`border-t pt-5 mt-6 ${readabilityMode ? "border-slate-100" : "border-slate-900"}`} id="visitor-messages-log">
                  <span className={`text-[10px] font-mono uppercase tracking-wider block mb-3 font-bold ${
                    readabilityMode ? "text-slate-500" : "text-slate-500"
                  }`}>
                    {readabilityMode ? "Submitted message queue logs" : "Active Transmission Queue Logs"} ({messages.length})
                  </span>
                  
                  {messages.length === 0 ? (
                    <div className={`text-center py-6 text-xs font-mono border border-dashed rounded-xl ${
                      readabilityMode ? "bg-slate-100/40 border-slate-200 text-slate-500" : "bg-slate-950/20 border-slate-900 text-slate-550"
                    }`} id="empty-queue-msg">
                      <span>Log is currently empty. Send a message to seed the simulated local queue pipeline!</span>
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1" id="message-logs-container">
                      {messages.map((m) => (
                        <div key={m.id} className={`text-xs border p-3 rounded-lg flex justify-between items-center gap-3 font-medium ${
                          readabilityMode ? "bg-slate-50 border-slate-200 text-slate-800" : "bg-slate-950/80 border-slate-900 text-slate-300"
                        }`}>
                          <div className="truncate flex-1">
                            <span className={`font-bold font-display block truncate leading-tight ${readabilityMode ? "text-slate-900" : "text-slate-300"}`}>
                              {m.subject}
                            </span>
                            <span className={`text-[10px] font-mono block truncate mt-0.5 font-bold ${readabilityMode ? "text-slate-600" : "text-slate-555"}`}>
                              From: {m.name} | {m.email}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2 shrink-0 select-none">
                            <span className={`text-[10px] font-mono font-bold ${readabilityMode ? "text-slate-500" : "text-slate-400"}`}>{m.timestamp}</span>
                            <span className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded border ${
                              m.status === "queued" 
                                ? readabilityMode 
                                  ? "bg-amber-50 text-amber-850 border-amber-200 font-bold" 
                                  : "bg-amber-500/10 text-amber-400 border border-amber-500/20" 
                                : m.status === "routing"
                                ? readabilityMode
                                  ? "bg-cyan-55 bg-cyan-50 text-cyan-850 border-cyan-200 font-bold"
                                  : "bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20"
                                : readabilityMode
                                ? "bg-emerald-50 text-emerald-850 border-emerald-200 font-bold"
                                : "bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20"
                            }`}>
                              {m.status.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER METADATA MARKERS */}
      <footer className={`border-t transition-all duration-300 py-8 select-none ${
        readabilityMode ? "bg-white border-slate-250" : "bg-slate-950/30 border-slate-900/40"
      }`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono font-bold ${
          readabilityMode ? "text-slate-600" : "text-slate-500"
        }`} id="global-footer">
          <div>
            <span>© 2026 Yuvraj Nilesh Bharade. All Rights Reserved.</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5">
            <span>UAN Validated</span>
            <span>✓ Host Connection Stable</span>
            <a
              href="https://linkedin.com/in/yuvraj-bharade-profile-link/"
              target="_blank"
              rel="noreferrer"
              className={`hover:text-cyan-600 transition-colors flex items-center gap-1 ${
                readabilityMode ? "text-slate-700" : "text-slate-400"
              }`}
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
