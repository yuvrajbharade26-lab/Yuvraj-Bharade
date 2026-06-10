import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Calendar, MapPin, Sparkles, Server, Code, Shield } from "lucide-react";

interface TimelineExp {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  badge: string;
  summary: string;
  technicalDetails: {
    stack: string[];
    outcomes: string[];
  };
  highlights: {
    title: string;
    text: string;
    icon: any;
  }[];
}

export default function ExperienceTimeline({ readabilityMode = false }: { readabilityMode?: boolean }) {
  const [selectedExpId, setSelectedExpId] = useState<string>("adaptive");

  const experiences: TimelineExp[] = [
    {
      id: "adaptive",
      role: readabilityMode ? "AI Consulting Lead & Software Engineer" : "AI Engineer & Lead Consultant",
      company: "Adaptive Systems Solutions",
      period: "4.5 Years of Professional Experience",
      location: "Pune, Maharashtra",
      badge: readabilityMode ? "Lead Architect" : "Lead Architect",
      summary: readabilityMode
        ? "Works as the primary developer and strategy leader. Designs cloud-hosted Artificial Intelligence pipelines, coordinates secure API structures that fetch records for models, and manages consulting targets successfully."
        : "Specialized in cloud-native Generative AI pipelines, autonomous model orchestration, full-stack microservice backends, and stakeholder strategy consultant workflows.",
      technicalDetails: {
        stack: ["AWS Bedrock (Amazon Large AI)", "SageMaker (AI endpoints)", "AWS Lambda", "Java Spring Boot", "Python Django", "Model Context Protocol (MCP)", "React", "Docker"],
        outcomes: [
          readabilityMode 
            ? "Designed highly efficient Java backend microservices that serve model predictions quickly under heavy traffic."
            : "Developed high-throughput Java Spring Boot microservice architectures resulting in low latency deliveries of large models inference.",
          readabilityMode
            ? "Collected exact corporate user specifications and delivered all project deliverables with high client satisfaction."
            : "Secured direct customer requirements and successfully delivered client production targets with zero degradation windows.",
        ],
      },
      highlights: [
        {
          title: readabilityMode ? "Advanced AI Agent Integration" : "Agent Core & MCP Integration",
          text: readabilityMode
            ? "Built smart automated AI helpers that connect using a secure protocol to read from company files. This helps the AI answer complex questions instantly with zero manual delay."
            : "Engineered autonomous LLM agents leveraging Model Context Protocol (MCP) to seamlessly pipeline knowledge from isolated corporate databases directly into agent contexts.",
          icon: Server,
        },
        {
          title: readabilityMode ? "Patented Memory Protection Patent" : "Thermodynamic logic patent",
          text: readabilityMode
            ? "Invented and submitted an Indian Patent application (App: 202621050232) for a software system that stops artificial intelligence from overwriting its memory when it learns new facts."
            : "Designed his patent-pending Modular Pipes (Indian Patent App 202621050232) framework preventing catastrophic forgetting, maintaining 95%+ sequential dataset retention.",
          icon: Sparkles,
        },
        {
          title: "Enterprise AWS Scaling",
          text: readabilityMode
            ? "Configured secure AWS server environments to support and process massive volumes of client requests without system slowdowns."
            : "Configured AWS-hosted prompt environments and neural layer monitoring on Bedrock and SageMaker to scale with customer query fluctuations.",
          icon: Shield,
        },
      ],
    },
    {
      id: "smart-auto",
      role: readabilityMode ? "AI Researcher & Core Developer" : "AI Developer & Researcher",
      company: "Smart Automation Systems",
      period: "Research & Development Focus",
      location: "Pune, Maharashtra",
      badge: "CV Research Lead",
      summary: readabilityMode
        ? "Lead researcher and writer for deep learning programs. Deployed smart computer vision cameras and automated machine systems for agricultural use."
        : "Spearheaded advanced deep learning modeling, localized real-time object detection pipelines, and custom embedded agricultural automation solutions.",
      technicalDetails: {
        stack: ["PyTorch Deep Learning", "TensorFlow", "Computer Vision", "Explainable AI (XAI)", "Python Flask", "Docker", "S3 Storage", "Microcontrollers & IoT"],
        outcomes: [
          readabilityMode
            ? "Authored and published research on direct-field weed detection models in respected scientific conference files."
            : "Published custom real-time IoT + AI detection models in internationally recognized SmartCom conference proceedings.",
          readabilityMode
            ? "Shrunk the physical file size of neural networks so they can run smoothly on small battery-operated field sensors."
            : "Maintained strong visual accuracy while decreasing overall file size for constrained mobile/microcontroller targets.",
        ],
      },
      highlights: [
        {
          title: readabilityMode ? "Automated Farm AI Robotics" : "Localized Weed Eradication IoT",
          text: readabilityMode
            ? "Directed the hardware-software lifecycle of farm robots that use cameras and smart intelligence to identify weeds and remove them."
            : "Led the full hardware-software lifecycle of intelligent weed termination rigs. Integrated real-time PyTorch models on resource-restricted devices.",
          icon: Code,
        },
        {
          title: readabilityMode ? "Super Optimized Systems" : "Optimized Inference",
          text: readabilityMode
            ? "Optimized hardware code processing limits, saving compute power while maintaining highly accurate localized results in the field."
            : "Reduced inference compute costs by stripping non-essential model dimensions and pruning weights, yielding high precision localized predictions.",
          icon: Server,
        },
        {
          title: "Public Technical Speaker",
          text: readabilityMode
            ? "Presented custom development results to academic panels, government sponsors, and company stakeholders in expert panels."
            : "Authored technical methods and presented findings to national stakeholders and academic sponsors during conference panel workshops.",
          icon: Sparkles,
        },
      ],
    },
  ];

  const currentExp = experiences.find((e) => e.id === selectedExpId) || experiences[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="experience-interactive-grid">
      {/* Selector vertical list */}
      <div className="lg:col-span-4 space-y-3" id="timeline-selectors">
        <span className={`text-[10px] font-mono uppercase tracking-widest block mb-1 ${
          readabilityMode ? "text-slate-500 font-bold" : "text-slate-500"
        }`}>
          {readabilityMode ? "Select Role to View details" : "Select Position to Inspect"}
        </span>
        {experiences.map((exp) => {
          const isActive = exp.id === selectedExpId;
          return (
            <button
              key={exp.id}
              onClick={() => setSelectedExpId(exp.id)}
              className={`w-full text-left p-5 rounded-xl border transition-all duration-300 relative overflow-hidden flex flex-col cursor-pointer ${
                isActive
                  ? readabilityMode
                    ? "bg-white border-cyan-600 shadow-md text-slate-800 font-bold"
                    : "bg-slate-900 border-brand-cyan/40 shadow-[0_4px_20px_rgba(34,211,238,0.06)]"
                  : readabilityMode
                  ? "bg-slate-100 hover:bg-slate-200/65 border-slate-250 text-slate-700 font-medium"
                  : "bg-slate-950/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/20"
              }`}
              id={`selector-role-${exp.id}`}
            >
              {isActive && (
                <motion.div
                  className={`absolute left-0 top-0 bottom-0 w-1 ${readabilityMode ? "bg-cyan-600" : "bg-brand-cyan"}`}
                  layoutId="active-experience-bar"
                />
              )}
              <span className={`text-[11px] font-mono border px-2.5 py-0.5 rounded-full w-fit mb-2 font-bold ${
                isActive
                  ? readabilityMode
                    ? "bg-cyan-50 border-cyan-200 text-cyan-700"
                    : "bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan"
                  : readabilityMode
                  ? "bg-slate-200 border-slate-300 text-slate-600"
                  : "bg-slate-900/40 border border-slate-800 text-slate-400"
              }`}>
                {exp.badge}
              </span>
              <h4 className={`font-display font-bold text-base leading-tight ${
                readabilityMode ? (isActive ? "text-cyan-800" : "text-slate-800") : "text-white"
              }`}>
                {exp.role}
              </h4>
              <p className={`text-sm mt-1 font-sans font-medium ${readabilityMode ? "text-slate-600" : "text-slate-400"}`}>{exp.company}</p>
              
              <div className={`flex items-center gap-2 mt-4 text-[11px] font-mono font-bold ${
                readabilityMode ? "text-slate-500" : "text-slate-500"
              }`}>
                <Calendar className="w-3.5 h-3.5 shrink-0 text-cyan-600" />
                <span>{exp.period}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Experience Panel */}
      <div className="lg:col-span-8" id="timeline-detail-display">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedExpId}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className={`transition-all duration-350 border rounded-xl p-6 md:p-8 ${
              readabilityMode
                ? "bg-white border-slate-200 text-slate-850 shadow-md"
                : "bg-card-dark border-border-dark text-slate-100"
            }`}
          >
            {/* Header meta */}
            <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-5 mb-5 ${
              readabilityMode ? "border-slate-100" : "border-slate-800"
            }`}>
              <div>
                <h3 className={`font-display font-bold text-lg md:text-xl ${readabilityMode ? "text-slate-900" : "text-white"}`}>
                  {currentExp.role} @ <span className={readabilityMode ? "text-cyan-700" : "text-brand-cyan"}>{currentExp.company}</span>
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs mt-1.5 font-mono">
                  <span className={`flex items-center gap-1 font-bold ${readabilityMode ? "text-slate-600" : "text-slate-400"}`}>
                    <MapPin className="w-3.5 h-3.5 text-cyan-600" /> {currentExp.location}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className={`flex items-center gap-1 font-bold ${readabilityMode ? "text-slate-600" : "text-slate-400"}`}>
                    <Briefcase className="w-3.5 h-3.5 text-cyan-600" /> {currentExp.period}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick summary */}
            <p className={`text-sm leading-relaxed mb-6 font-medium ${readabilityMode ? "text-slate-700" : "text-slate-300"}`}>
              {currentExp.summary}
            </p>

            {/* highlights timeline */}
            <div className="space-y-5 mb-6">
              <h4 className={`text-[10px] font-mono uppercase tracking-widest font-bold ${
                readabilityMode ? "text-slate-500" : "text-slate-500"
              }`}>
                {readabilityMode ? "Key achievements" : "Major Core Systems Delivered"}
              </h4>
              <div className="space-y-4">
                {currentExp.highlights.map((h, i) => {
                  const Icon = h.icon;
                  return (
                    <div 
                      key={i} 
                      className={`flex gap-4 items-start border p-4 rounded-xl ${
                        readabilityMode
                          ? "bg-slate-50 border-slate-150 text-slate-800"
                          : "bg-slate-950/40 border-slate-900/60"
                      }`}
                    >
                      <div className={`p-2 rounded-lg shrink-0 border ${
                        readabilityMode
                          ? "bg-cyan-50 border-cyan-200 text-cyan-700"
                          : "bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan"
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className={`text-sm font-bold font-display ${readabilityMode ? "text-slate-900" : "text-slate-100"}`}>
                          {h.title}
                        </h5>
                        <p className={`text-xs mt-1 leading-relaxed font-medium ${readabilityMode ? "text-slate-600" : "text-slate-400"}`}>
                          {h.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tech tag list */}
            <div className={`space-y-2 border-t pt-5 ${readabilityMode ? "border-slate-100" : "border-slate-800/60"}`}>
              <h4 className={`text-[10px] font-mono uppercase tracking-widest font-bold ${
                readabilityMode ? "text-slate-500" : "text-slate-500"
              }`}>
                {readabilityMode ? "Languages & Tech Tools Details" : "Environment Stack Used:"}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {currentExp.technicalDetails.stack.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-1 text-xs font-mono font-bold rounded border ${
                      readabilityMode
                        ? "text-cyan-800 bg-cyan-50/50 border-cyan-150"
                        : "text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/10"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Measurable outcomes list */}
            {currentExp.technicalDetails.outcomes.length > 0 && (
              <div className="space-y-2.5 mt-5">
                <h4 className={`text-[10px] font-mono uppercase tracking-widest font-bold ${
                  readabilityMode ? "text-slate-500" : "text-slate-500"
                }`}>
                  {readabilityMode ? "Demonstrated Business Impact" : "Measurable Operational Outcomes:"}
                </h4>
                <ul className="space-y-1.5 pl-1">
                  {currentExp.technicalDetails.outcomes.map((bullet, idx) => (
                    <li key={idx} className={`text-xs flex items-start gap-2 leading-relaxed font-medium ${
                      readabilityMode ? "text-slate-700" : "text-slate-300"
                    }`}>
                      <span className={`mt-1 font-extrabold ${readabilityMode ? "text-emerald-600" : "text-brand-cyan"}`}>✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
