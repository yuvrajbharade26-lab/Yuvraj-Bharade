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
  Github
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
                    Immediate Joiner
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
                    Innovative AI Engineer with 4.5 years of experience architecting cloud-native microservices, Agentic workflows, and sequential feature-extraction structures.
                  </h2>
                </div>

                {/* Technical key indicators / Quick stats */}
                <div className="grid grid-cols-2 gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-900" id="hero-quick-data-box">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">EXPERIENCE RECORD</span>
                    <span className="text-lg font-bold text-white font-display">4.5 Years</span>
                    <span className="text-[10px] text-slate-400 block font-mono">Lead Consulting</span>
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
              4.5 years of consistent AI consulting and systems engineering solving microservice latency and model deployment barriers.
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
                    Yuvraj is an immediate joiner and validates critical logistics quickly. Use direct points or the interactive simulator route.
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
                <span>UAN STATUS: VALIDATED</span>
                <span>NOTICE PERIOD: IMMEDIATE</span>
              </div>
            </div>

            {/* Offline Message persistence portal: right */}
            <div className="lg:col-span-7 border border-border-dark bg-card-dark rounded-2xl p-6 md:p-8 flex flex-col justify-between" id="visitor-messages-portal">
              <div className="space-y-6">
                
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-mono text-brand-cyan uppercase tracking-widest flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-brand-cyan" /> Secure Dispatch Box
                    </span>
                    <h3 className="text-lg md:text-xl font-display font-medium text-white tracking-tight mt-0.5">
                      Send a Message to Yuvraj
                    </h3>
                  </div>
                </div>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-brand-cyan/5 border border-brand-cyan/20 rounded-xl p-6 text-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mx-auto">
                      <CheckCircle2 className="w-6 h-6 animate-pulse" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-white font-semibold font-display">Message Transmitted!</h4>
                      <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                        Your message has been filed into local browser state storage logs. Watch the live simulated routing pipeline updates below!
                      </p>
                    </div>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-brand-cyan font-mono hover:underline"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSendMessage} className="space-y-4" id="visitor-contact-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1.5 font-semibold">
                          Your Name / Enterprise <span className="text-brand-cyan">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="John Doe from Acme Corp"
                          className="w-full bg-slate-950 border border-slate-900 focus:border-brand-cyan/60 rounded-lg p-2.5 text-xs text-white placeholder:text-slate-600 outline-none transition-colors"
                          id="input-form-name"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1.5 font-semibold">
                          Your Email ID <span className="text-brand-cyan">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="john.doe@company.com"
                          className="w-full bg-slate-950 border border-slate-900 focus:border-brand-cyan/60 rounded-lg p-2.5 text-xs text-white placeholder:text-slate-600 outline-none transition-colors"
                          id="input-form-email"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1.5 font-semibold">
                        Subject / Focus
                      </label>
                      <input
                        type="text"
                        value={formSubject}
                        onChange={(e) => setFormSubject(e.target.value)}
                        placeholder="e.g. Lead AI Engineering Position"
                        className="w-full bg-slate-950 border border-slate-900 focus:border-brand-cyan/60 rounded-lg p-2.5 text-xs text-white placeholder:text-slate-600 outline-none transition-colors"
                        id="input-form-subj"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1.5 font-semibold">
                        Detailed Message <span className="text-brand-cyan">*</span>
                      </label>
                      <textarea
                        required
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        rows={3}
                        placeholder="Describe your project, contract timeline, or open role requirements..."
                        className="w-full bg-slate-950 border border-slate-900 focus:border-brand-cyan/60 rounded-lg p-2.5 text-xs text-white placeholder:text-slate-600 outline-none resize-none transition-colors"
                        id="input-form-msg"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-cyan text-slate-950 text-xs font-mono font-medium py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.15)] cursor-pointer"
                      id="btn-submit-contact"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Transmit message to pipeline
                    </button>
                  </form>
                )}

                {/* Simulated live transmission feed */}
                <div className="border-t border-slate-900 pt-5 mt-6" id="visitor-messages-log">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-3">
                    Active Transmission Queue Logs ({messages.length})
                  </span>
                  
                  {messages.length === 0 ? (
                    <div className="text-center py-6 text-xs text-slate-500 font-mono bg-slate-950/20 border border-dashed border-slate-900 rounded-xl" id="empty-queue-msg">
                      <span>Log is currently empty. Send a message to seed the simulated local queue pipeline!</span>
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1" id="message-logs-container">
                      {messages.map((m) => (
                        <div key={m.id} className="text-xs bg-slate-950/80 border border-slate-900 p-3 rounded-lg flex justify-between items-center gap-3">
                          <div className="truncate flex-1">
                            <span className="font-bold text-slate-300 font-display block truncate leading-tight">
                              {m.subject}
                            </span>
                            <span className="text-[10px] font-mono text-slate-500 block truncate mt-0.5">
                              From: {m.name} | {m.email}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2 shrink-0 select-none">
                            <span className="text-[10px] font-mono text-slate-400">{m.timestamp}</span>
                            <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded ${
                              m.status === "queued" 
                                ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" 
                                : m.status === "routing"
                                ? "bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20"
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
      <footer className="border-t border-slate-900/40 bg-slate-950/30 py-8 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500" id="global-footer">
          <div>
            <span>© 2026 Yuvraj Nilesh Bharade. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-5">
            <span>UAN Validated</span>
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
