import { useState } from "react";
import { motion } from "motion/react";
import { BrainCircuit, Cloud, Cpu, Terminal, Sparkles, CheckCircle } from "lucide-react";

interface SkillGroup {
  id: string;
  name: string;
  icon: any;
  skills: { name: string; proficiency: number }[];
  demonstratedUse: string;
  architectureHighlight: string;
}

export default function SkillMatrix() {
  const [activeGroup, setActiveGroup] = useState<string>("gen-ai");

  const skillGroups: SkillGroup[] = [
    {
      id: "gen-ai",
      name: "Generative AI & LLMOps",
      icon: BrainCircuit,
      skills: [
        { name: "AWS Bedrock", proficiency: 94 },
        { name: "Agentic AI / Agent Core", proficiency: 92 },
        { name: "Model Context Protocol (MCP)", proficiency: 95 },
        { name: "RAG Automation", proficiency: 90 },
        { name: "Prompt Operations", proficiency: 93 },
      ],
      demonstratedUse: "Architected autonomous data pipelines using Bedrock, feeding live enterprise context to LLMs while using Model Context Protocol (MCP) to avoid proprietary data exposure.",
      architectureHighlight: "Multi-Agent Coordinator with Semantic routing gates.",
    },
    {
      id: "cloud-devops",
      name: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS SageMaker", proficiency: 88 },
        { name: "AWS Lambda / serverless", proficiency: 91 },
        { name: "AWS S3 & EC2", proficiency: 93 },
        { name: "Microservices & API Gateway", proficiency: 92 },
        { name: "Docker Containerization", proficiency: 87 },
      ],
      demonstratedUse: "Built highly-scalable, fault-tolerant infrastructure layers on AWS. Orchestrated AWS S3 pipelines to pass real estate volatility datasets into SageMaker endpoints.",
      architectureHighlight: "Elastic microservices with AWS Lambda failover pipelines.",
    },
    {
      id: "ai-ds",
      name: "AI/ML & Deep Learning",
      icon: Cpu,
      skills: [
        { name: "Computer Vision", proficiency: 92 },
        { name: "Deep Learning (PyTorch/TF)", proficiency: 90 },
        { name: "Explainable AI (XAI)", proficiency: 85 },
        { name: "Classical ML (Scikit-Learn)", proficiency: 89 },
      ],
      demonstratedUse: "Authored peer-reviewed agricultural object detection pipelines on edge hardware, utilizing weight quantization to run intensive PyTorch networks inside IoT controllers.",
      architectureHighlight: "Pruned convolutional neural networks (CNNs).",
    },
    {
      id: "programming",
      name: "Programming & Frameworks",
      icon: Terminal,
      skills: [
        { name: "Java (Spring Boot)", proficiency: 90 },
        { name: "Python (Django / Flask)", proficiency: 91 },
        { name: "JavaScript / React", proficiency: 86 },
        { name: "SQL & RESTful APIs", proficiency: 92 },
      ],
      demonstratedUse: "Designed and implemented robust enterprise microservices using Java Spring Boot to serve high-volume intelligent predictions with latencies optimized under 100ms.",
      architectureHighlight: "High-concurrency Spring Boot multi-threaded request routing.",
    },
  ];

  const currentGroup = skillGroups.find((g) => g.id === activeGroup) || skillGroups[0];
  const IconComponent = currentGroup.icon;

  return (
    <div className="bg-card-dark border border-border-dark rounded-xl p-6 lg:p-8" id="skill-matrix-panel">
      {/* Category selector pills */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-800 pb-5" id="skill-category-headers">
        {skillGroups.map((group) => {
          const GroupIcon = group.icon;
          const isActive = group.id === activeGroup;
          return (
            <button
              key={group.id}
              onClick={() => setActiveGroup(group.id)}
              className={`px-4 py-2.5 rounded-lg border text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer ${
                isActive
                  ? "bg-brand-cyan/10 border-brand-cyan text-brand-cyan shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                  : "bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
              id={`btn-skill-cat-${group.id}`}
            >
              <GroupIcon className="w-4 h-4 shrink-0" />
              <span>{group.name}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="skills-grid-body">
        {/* Proficiency bar list */}
        <div className="lg:col-span-6 space-y-5" id="skills-level-bars">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-brand-cyan" />
            <h4 className="text-white font-display font-medium text-sm">
              Core Capabilities Proficiency
            </h4>
          </div>

          <div className="space-y-4">
            {currentGroup.skills.map((skill, index) => (
              <div key={skill.name} className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-200 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                    {skill.name}
                  </span>
                  <span className="text-slate-400 font-semibold">{skill.proficiency}%</span>
                </div>
                <div className="h-2 bg-slate-950 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-brand-cyan to-brand-emerald"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use-case description card */}
        <div className="lg:col-span-6 flex flex-col justify-between self-stretch bg-slate-950/40 border border-slate-900 rounded-xl p-5" id="skill-use-case-card">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-lg text-brand-cyan shrink-0">
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase block leading-none">
                  Demonstrated Experience
                </span>
                <span className="text-sm font-semibold text-white font-display mt-0.5 block">
                  {currentGroup.name} in Enterprise
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-300 bg-slate-900/40 border border-slate-800 p-3.5 rounded-lg font-sans">
              {currentGroup.demonstratedUse}
            </p>
          </div>

          <div className="border-t border-slate-900 pt-4 mt-6">
            <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider font-semibold">
              KEY ARCHITECTURAL HIGHLIGHT
            </span>
            <span className="text-[11px] font-mono text-brand-cyan font-bold block mt-1 tracking-wide">
              {currentGroup.architectureHighlight}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
