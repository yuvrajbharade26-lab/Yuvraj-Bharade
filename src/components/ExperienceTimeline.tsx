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

export default function ExperienceTimeline() {
  const [selectedExpId, setSelectedExpId] = useState<string>("adaptive");

  const experiences: TimelineExp[] = [
    {
      id: "adaptive",
      role: "AI Engineer & Lead Consultant",
      company: "Adaptive Systems Solutions",
      period: "4.5 Years of Professional Experience",
      location: "Pune, Maharashtra",
      badge: "Lead Architect",
      summary: "Specialized in cloud-native Generative AI pipelines, autonomous model orchestration, full-stack microservice backends, and stakeholder strategy consultant workflows.",
      technicalDetails: {
        stack: ["AWS Bedrock", "SageMaker", "AWS Lambda", "Java Spring Boot", "Python Django", "Model Context Protocol (MCP)", "React", "Docker"],
        outcomes: [
          "Developed high-throughput Java Spring Boot microservice architectures resulting in low latency deliveries of large models inference.",
          "Secured direct customer requirements and successfully delivered client production targets with zero degradation windows.",
        ],
      },
      highlights: [
        {
          title: "Agent Core & MCP Integration",
          text: "Engineered autonomous LLM agents leveraging Model Context Protocol (MCP) to seamlessly pipeline knowledge from isolated corporate databases directly into agent contexts.",
          icon: Server,
        },
        {
          title: "Thermodynamic logic patent",
          text: "Designed his patent-pending Modular Pipes (Indian Patent App 202621050232) framework preventing catastrophic forgetting, maintaining 95%+ sequential dataset retention.",
          icon: Sparkles,
        },
        {
          title: "AWS Bedrock & SageMaker Orchestration",
          text: "Configured AWS-hosted prompt environments and neural layer monitoring on Bedrock and SageMaker to scale with customer query fluctuations.",
          icon: Shield,
        },
      ],
    },
    {
      id: "smart-auto",
      role: "AI Developer & Researcher",
      company: "Smart Automation Systems",
      period: "Research & Development Focus",
      location: "Pune, Maharashtra",
      badge: "CV Research Lead",
      summary: "Spearheaded advanced deep learning modeling, localized real-time object detection pipelines, and custom embedded agricultural automation solutions.",
      technicalDetails: {
        stack: ["PyTorch", "TensorFlow", "Computer Vision", "Explainable AI (XAI)", "Python Flask", "Docker", "S3", "Microcontrollers / IoT"],
        outcomes: [
          "Published custom real-time IoT + AI detection models in internationally recognized SmartCom conference proceedings.",
          "Maintained strong visual accuracy while decreasing overall file size for constrained mobile/microcontroller targets.",
        ],
      },
      highlights: [
        {
          title: "Localized Weed Eradication IoT",
          text: "Led the full hardware-software lifecycle of intelligent weed termination rigs. Integrated real-time PyTorch models on resource-restricted devices.",
          icon: Code,
        },
        {
          title: "Optimized Inference",
          text: "Reduced inference compute costs by stripping non-essential model dimensions and pruning weights, yielding high precision localized predictions.",
          icon: Server,
        },
        {
          title: "Technical Writing First Author",
          text: "Authored technical methods and presented findings to national stakeholders and academic sponsors during conference panel workshops.",
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
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">
          Select Position to Inspect
        </span>
        {experiences.map((exp) => {
          const isActive = exp.id === selectedExpId;
          return (
            <button
              key={exp.id}
              onClick={() => setSelectedExpId(exp.id)}
              className={`w-full text-left p-5 rounded-xl border transition-all duration-300 relative overflow-hidden flex flex-col cursor-pointer ${
                isActive
                  ? "bg-slate-900 border-brand-cyan/40 shadow-[0_4px_20px_rgba(34,211,238,0.06)]"
                  : "bg-slate-950/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/20"
              }`}
              id={`selector-role-${exp.id}`}
            >
              {isActive && (
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-brand-cyan"
                  layoutId="active-experience-bar"
                />
              )}
              <span className="text-[11px] font-mono text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-2.5 py-0.5 rounded-full w-fit mb-2">
                {exp.badge}
              </span>
              <h4 className="text-white font-display font-medium text-base leading-tight">
                {exp.role}
              </h4>
              <p className="text-sm text-slate-400 mt-1 font-sans">{exp.company}</p>
              
              <div className="flex items-center gap-2 mt-4 text-[11px] font-mono text-slate-500">
                <Calendar className="w-3.5 h-3.5 shrink-0" />
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
            className="bg-card-dark border border-border-dark rounded-xl p-6 md:p-8"
          >
            {/* Header meta */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-5 mb-5">
              <div>
                <h3 className="text-white font-display font-semibold text-lg md:text-xl">
                  {currentExp.role} @ <span className="text-brand-cyan">{currentExp.company}</span>
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-1.5 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" /> {currentExp.location}
                  </span>
                  <span className="text-slate-700">•</span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-slate-500" /> {currentExp.period}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick summary */}
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {currentExp.summary}
            </p>

            {/* highlights timeline */}
            <div className="space-y-5 mb-6">
              <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                Major Core Systems Delivered
              </h4>
              <div className="space-y-4">
                {currentExp.highlights.map((h, i) => {
                  const Icon = h.icon;
                  return (
                    <div key={i} className="flex gap-4 items-start bg-slate-950/40 border border-slate-900/60 p-4 rounded-xl">
                      <div className="p-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-lg text-brand-cyan shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-slate-100 font-display">
                          {h.title}
                        </h5>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {h.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tech tag list */}
            <div className="space-y-2 border-t border-slate-800/60 pt-5">
              <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                Environment Stack Used:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {currentExp.technicalDetails.stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/10 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Measurable outcomes list */}
            {currentExp.technicalDetails.outcomes.length > 0 && (
              <div className="space-y-2.5 mt-5">
                <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                  Measurable Operational Outcomes:
                </h4>
                <ul className="space-y-1.5 pl-1">
                  {currentExp.technicalDetails.outcomes.map((bullet, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-brand-cyan mt-1 font-bold">✓</span>
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
