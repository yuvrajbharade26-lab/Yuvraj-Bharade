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

export default function SkillMatrix({ readabilityMode = false }: { readabilityMode?: boolean }) {
  const [activeGroup, setActiveGroup] = useState<string>("gen-ai");

  const skillGroups: SkillGroup[] = [
    {
      id: "gen-ai",
      name: readabilityMode ? "AI Assistants & Agents" : "Generative AI & LLMOps",
      icon: BrainCircuit,
      skills: [
        { name: "AWS Bedrock Integration", proficiency: 94 },
        { name: "Smart AI Agents Core", proficiency: 92 },
        { name: "Model Context Protocol (MCP)", proficiency: 95 },
        { name: "RAG / Secure Data Fetch", proficiency: 90 },
        { name: "AI Prompt Optimization", proficiency: 93 },
      ],
      demonstratedUse: "Designed and built secure, smart enterprise AI models that read and understand actual business documentation while shielding sensitive proprietary files from public exposure.",
      architectureHighlight: "Safe Content Router with Multi-Agent Logic.",
    },
    {
      id: "cloud-devops",
      name: "Cloud Hosting & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS SageMaker Deployment", proficiency: 88 },
        { name: "Serverless AWS Lambda", proficiency: 91 },
        { name: "Data S3 & Secure Servers EC2", proficiency: 93 },
        { name: "Microservice Frameworks", proficiency: 92 },
        { name: "Docker Software Packaging", proficiency: 87 },
      ],
      demonstratedUse: "Structured robust, automated cloud backends on AWS. Transmitted and mapped market analytic files into live cloud endpoints for real estate comparisons.",
      architectureHighlight: "Auto-scaling microservices with failsafe backups.",
    },
    {
      id: "ai-ds",
      name: "Smart Algorithms & Vision",
      icon: Cpu,
      skills: [
        { name: "Computer Vision (Cameras)", proficiency: 92 },
        { name: "Deep Neural Networks PyTorch", proficiency: 90 },
        { name: "Explainable AI (Readable Logic)", proficiency: 85 },
        { name: "Mathematical Data Models", proficiency: 89 },
      ],
      demonstratedUse: "Created smart crop-camera algorithms that run on lightweight farm hardware, pruning unnecessary logic to save battery charge on-field.",
      architectureHighlight: "Optimized small Convolutional Neural Networks.",
    },
    {
      id: "programming",
      name: "Software Programming",
      icon: Terminal,
      skills: [
        { name: "Java Core (Spring Boot)", proficiency: 90 },
        { name: "Python Core (Django / Flask)", proficiency: 91 },
        { name: "Modern Web UI (React / JS)", proficiency: 86 },
        { name: "Structured SQL & APIs", proficiency: 92 },
      ],
      demonstratedUse: "Engineered ultra-fast cloud server services using Java Spring Boot to return intelligent results instantly, lowering latency bounds below 100ms.",
      architectureHighlight: "High-speed multi-threaded requests handling.",
    },
  ];

  const currentGroup = skillGroups.find((g) => g.id === activeGroup) || skillGroups[0];
  const IconComponent = currentGroup.icon;

  return (
    <div className={`transition-all duration-300 rounded-xl p-6 lg:p-8 border ${
      readabilityMode
        ? "bg-white border-slate-200 text-slate-800 shadow-md"
        : "bg-card-dark border-border-dark text-slate-100"
    }`} id="skill-matrix-panel">
      {/* Category selector pills */}
      <div className={`flex flex-wrap gap-2 mb-8 border-b pb-5 ${
        readabilityMode ? "border-slate-100" : "border-slate-800"
      }`} id="skill-category-headers">
        {skillGroups.map((group) => {
          const GroupIcon = group.icon;
          const isActive = group.id === activeGroup;
          return (
            <button
              key={group.id}
              onClick={() => setActiveGroup(group.id)}
              className={`px-4 py-2.5 rounded-lg border text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer ${
                isActive
                  ? readabilityMode
                    ? "bg-cyan-600 border-cyan-700 text-white shadow-sm font-bold"
                    : "bg-brand-cyan/10 border-brand-cyan text-brand-cyan shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                  : readabilityMode
                  ? "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
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
            <Sparkles className={`w-4 h-4 ${readabilityMode ? "text-cyan-600" : "text-brand-cyan"}`} />
            <h4 className={`font-display font-bold text-sm ${readabilityMode ? "text-slate-900" : "text-white"}`}>
              {readabilityMode ? "Proven Skill Comfort Levels" : "Core Capabilities Proficiency"}
            </h4>
          </div>

          <div className="space-y-4">
            {currentGroup.skills.map((skill, index) => (
              <div key={skill.name} className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className={`flex items-center gap-2 font-bold ${readabilityMode ? "text-slate-700" : "text-slate-200"}`}>
                    <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${readabilityMode ? "text-cyan-600" : "text-brand-cyan"}`} />
                    {skill.name}
                  </span>
                  <span className={`font-bold ${readabilityMode ? "text-slate-600" : "text-slate-400"}`}>{skill.proficiency}%</span>
                </div>
                <div className={`h-2.5 rounded-full overflow-hidden ${readabilityMode ? "bg-slate-100 border border-slate-200" : "bg-slate-950"}`}>
                  <motion.div
                    className={readabilityMode ? "h-full bg-cyan-600" : "h-full bg-gradient-to-r from-brand-cyan to-brand-emerald"}
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
        <div className={`lg:col-span-6 flex flex-col justify-between self-stretch border rounded-xl p-5 ${
          readabilityMode
            ? "bg-slate-50 border-slate-150 text-slate-800"
            : "bg-slate-950/40 border-slate-900"
        }`} id="skill-use-case-card">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-lg shrink-0 border ${
                readabilityMode
                  ? "bg-cyan-50 border-cyan-200 text-cyan-700"
                  : "bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan"
              }`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-[10px] font-mono uppercase block leading-none font-bold ${readabilityMode ? "text-slate-500" : "text-slate-500"}`}>
                  {readabilityMode ? "Business Application Case" : "Demonstrated Experience"}
                </span>
                <span className={`text-sm font-bold font-display mt-0.5 block ${readabilityMode ? "text-slate-900" : "text-white"}`}>
                  {readabilityMode ? `${currentGroup.name} in Action` : `${currentGroup.name} in Enterprise`}
                </span>
              </div>
            </div>

            <p className={`text-xs leading-relaxed border p-3.5 rounded-lg font-sans font-medium ${
              readabilityMode
                ? "bg-white border-slate-200 text-slate-700"
                : "bg-slate-900/40 border-slate-800 text-slate-300"
            }`}>
              {currentGroup.demonstratedUse}
            </p>
          </div>

          <div className={`border-t pt-4 mt-6 ${readabilityMode ? "border-slate-200" : "border-slate-900"}`}>
            <span className={`text-[10px] font-mono uppercase block tracking-wider font-bold ${
              readabilityMode ? "text-slate-500" : "text-slate-500"
            }`}>
              {readabilityMode ? "Core System Design Choice:" : "KEY ARCHITECTURAL HIGHLIGHT"}
            </span>
            <span className={`text-[11px] font-mono font-bold block mt-1 tracking-wide ${
              readabilityMode ? "text-cyan-800" : "text-brand-cyan"
            }`}>
              {currentGroup.architectureHighlight}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
