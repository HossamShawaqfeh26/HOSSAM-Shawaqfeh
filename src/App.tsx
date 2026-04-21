import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  ArrowRight, Mail, MessageCircle, Briefcase, Target, 
  CheckCircle2, Award, X, Linkedin, PlayCircle, BarChart, 
  FileText, Sparkles, Crosshair, Users, Activity, Mic, ArrowLeft,
  ArrowUpRight, Globe
} from 'lucide-react';

// --- Components ---

const FadeIn: React.FC<{ children: React.ReactNode; className?: string; delay?: number; }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const GlassCard: React.FC<{ children: React.ReactNode; className?: string; }> = ({ children, className = "" }) => (
  <div className={`bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const AnimatedCounter = ({ value, label }: { value: string, label: string }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="text-center p-8 bg-[#0d1220] border border-white/5 rounded-2xl shadow-xl flex flex-col items-center justify-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-400 font-medium tracking-wide uppercase">{label}</div>
    </div>
  );
};

// --- Data ---

const PORTFOLIO_DATA = [
  {
    id: "hospitality-organic",
    category: "Organic",
    title: "Hotel & Hospitality",
    description: "Organic content strategy, reels structure, and campaign execution for premium hospitality brands.",
    image: "https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776670558.967424000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::f8146d527d356c96:000001f5f96018bc:00064fdf598664df",
    items: [
      { type: "image", url: "https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776670558.967424000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::f8146d527d356c96:000001f5f96018bc:00064fdf598664df" },
      { type: "image", url: "https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776672778.848805000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::e9d0812fca4365fb:000001f5f96018bc:00064fdfddd8955f" },
      { type: "image", url: "https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776673043.73252000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::8acd3d6efe81d9b4:000001f5f96018bc:00064fdfed965d1f" }
    ]
  },
  {
    id: "beauty-organic",
    category: "Organic",
    title: "Beauty Brands",
    description: "Always-on organic content structure, aesthetics alignment, and product launches.",
    image: "https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776670761.911097000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::efbf28a4745af653:000001f5f96018bc:00064fdf659f0eff",
    items: [
      { type: "image", url: "https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776670761.911097000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::efbf28a4745af653:000001f5f96018bc:00064fdf659f0eff" },
      { type: "image", url: "https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776673202.26715000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::2b7b473f2a13cbdc:000001f5f96018bc:00064fdff710037f" },
      { type: "image", url: "https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776673387.324964000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::a702d7f7b56aba8d:000001f5f96018bc:00064fe0021bb30f" },
      { type: "image", url: "https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776669333.498197000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::617d5acb4e2ef409:000001f5f96018bc:00064fdf107b84df" }
    ]
  },
  {
    id: "events",
    category: "Organic",
    title: "Events Coverage",
    description: "Live stories and recap reels strategy setup for major events.",
    image: "https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776670888.597750000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::8427da108e4a4b78:000001f5f96018bc:00064fdf6d2bd2ff",
    items: [
      { type: "image", url: "https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776670888.597750000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::8427da108e4a4b78:000001f5f96018bc:00064fdf6d2bd2ff" },
      { type: "image", url: "https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776672908.274282000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::3d68ff498d651447:000001f5f96018bc:00064fdfe58c152f" }
    ]
  },
  {
    id: "tech-content",
    category: "Organic",
    title: "Tech & Information",
    description: "Simplifying complex tech information through structured content output.",
    image: "https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776671047.527742000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::a84c432724424138:000001f5f96018bc:00064fdf76a5444f",
    items: [
      { type: "image", url: "https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776671047.527742000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::a84c432724424138:000001f5f96018bc:00064fdf76a5444f" },
      { type: "image", url: "https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776672648.796832000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::ef80355841fe8941:000001f5f96018bc:00064fdfd61822cf" }
    ]
  },
  {
    id: "medical-ads",
    category: "Ads",
    title: "Healthcare Acquisition",
    description: "Paid social campaigns aimed at patient acquisition.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    items: [
      { type: "image", url: "https://images.unsplash.com/photo-1551076805-e18690c5e53b?auto=format&fit=crop&q=80&w=800" },
      { type: "image", url: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  {
    id: "handiva-storyboard",
    category: "Storyboards",
    title: "HanDiva Campaign",
    description: "AI-visualized concept sequence prior to production.",
    image: "https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776675762.147550000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::8907e297d90f2ca1:000001f5f96018bc:00064fe08fa81fbf",
    items: [
      { type: "image", url: "https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776675762.147550000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::8907e297d90f2ca1:000001f5f96018bc:00064fe08fa81fbf" }
    ]
  },
  {
    id: "fish-storyboard",
    category: "Storyboards",
    title: "Fish Concept Storyboard",
    description: "Pre-viz conceptual work for creative direction.",
    image: "https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776675525.367657000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::f5e4809fc4fbd7b9:000001f5f96018bc:00064fe0818c46ff",
    items: [
      { type: "image", url: "https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776675525.367657000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::f5e4809fc4fbd7b9:000001f5f96018bc:00064fe0818c46ff" }
    ]
  }
];

// --- Pages ---

function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof PORTFOLIO_DATA[0] | null>(null);

  const filters = ["All", "Organic", "Storyboards"];

  const mainProjects = PORTFOLIO_DATA.filter(p => p.category !== "Ads");
  
  const filteredProjects = activeFilter === "All" 
    ? mainProjects 
    : mainProjects.filter(p => p.category === activeFilter);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <>
      {/* 1. Hero Section */}
      <section 
        className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/mweb-assets/gemini/user_files/02700388-c71d-4074-b52b-2a21def853e8/2.jpg')`,
          backgroundPosition: 'center 20%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/80 to-transparent z-0" />
        
        <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm md:text-base font-semibold tracking-widest text-slate-400 uppercase mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-slate-500"></span>
              Hossam Shawaqfeh
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight leading-[1.05] text-white max-w-5xl">
              Real Results.<br />Real Strategy.
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl">
              I manage campaigns, content, and performance — <span className="font-medium text-white">not just posts.</span>
            </p>

            <div className="mt-14">
              <a href="#work" className="inline-flex items-center justify-center gap-3 bg-white text-[#070b14] px-8 py-4 rounded-full font-medium text-lg hover:bg-slate-200 hover:scale-105 transition-all duration-300">
                View My Work <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. What I Do */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <FadeIn className="mb-16">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">What I Do</h2>
          <p className="text-lg text-slate-400 font-light max-w-2xl">
            Bridging the gap between strategic intent and creative execution.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard>
            <Briefcase className="w-8 h-8 text-slate-300 mb-6" />
            <h3 className="text-xl font-medium text-white mb-3">Account Management</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Handling client relationships, ensuring goals are met, and keeping communication clear and consistent.</p>
          </GlassCard>
          
          <GlassCard>
            <FileText className="w-8 h-8 text-slate-300 mb-6" />
            <h3 className="text-xl font-medium text-white mb-3">Content Strategy</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Structuring compelling narratives and planning content calendars that align with brand objectives.</p>
          </GlassCard>

          <GlassCard>
            <Sparkles className="w-8 h-8 text-slate-300 mb-6" />
            <h3 className="text-xl font-medium text-white mb-3">Creative Coordination</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Guiding design and video teams to produce high-quality assets that fit the strategic vision.</p>
          </GlassCard>

          <GlassCard>
            <Target className="w-8 h-8 text-slate-300 mb-6" />
            <h3 className="text-xl font-medium text-white mb-3">Campaign Support</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Assisting in the deployment and monitoring of paid campaigns to maximize ROAS and conversions.</p>
          </GlassCard>

          <GlassCard>
            <CheckCircle2 className="w-8 h-8 text-slate-300 mb-6" />
            <h3 className="text-xl font-medium text-white mb-3">Quality Control</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Reviewing deliverables rigorously to maintain brand voice, accuracy, and premium standards.</p>
          </GlassCard>
        </div>
      </section>

      {/* 3. How I Work */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0f1c] border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <FadeIn className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-8 tracking-tight">How I Work</h2>
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
              I connect clients, teams, content, and execution. By sitting at the center of the process, I ensure that nothing gets lost in translation from the brief to the final publish.
            </p>
            <ul className="space-y-4">
              {[
                "Managing 10+ clients simultaneously",
                "Coordinating cross-functional teams",
                "Adapting content across industries",
                "Delivering under tight timelines",
                "Keeping workflow structured and consistent"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-300 text-lg font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn className="w-full lg:w-1/2" delay={0.2}>
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 border border-white/10 group">
               <img 
                 src="https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776792632.555197000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::b2b4b8ae4d7accd5:000001f5f96018bc:00064ffbc5ad228f" 
                 alt="Marketing Professional Strategy Session" 
                 className="w-full h-full object-cover object-[center_30%] opacity-90 transition-transform duration-700 group-hover:scale-105 filter contrast-[1.05]" 
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0f1c]/90 via-[#0a0f1c]/30 to-transparent pointer-events-none mix-blend-multiply" />
               <div className="absolute inset-0 bg-[#0a0f1c]/20 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Selected Work Section */}
      <section id="work" className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <FadeIn className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">Selected Work</h2>
            <p className="text-lg text-slate-400 font-light max-w-2xl">
              A curated look at organic strategy and pre-production visual concepts.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === filter 
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-slate-400 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
            
            {/* New redirecting Ads filter */}
            <Link 
              to="/campaigns"
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border bg-blue-600/10 text-blue-400 border-blue-500/30 hover:border-blue-400 hover:bg-blue-600/20 hover:text-white flex items-center gap-2"
            >
              Ads & Campaigns <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="text-xs font-medium text-white">{project.items.length} {project.items.length === 1 ? 'Item' : 'Items'}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-2">{project.category}</p>
                  <h3 className="text-2xl font-medium text-white mb-2 leading-tight">{project.title}</h3>
                  <p className="text-sm text-slate-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.description}</p>
                </div>

                {/* Hover CTA Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <span className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                     View Case Study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 5. Creative Concepts & AI Storyboards */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#05080f] border-t border-white/5 relative overflow-hidden">
        {/* Background Film strip pattern */}
        <div className="absolute inset-y-0 left-0 w-16 border-r border-white/5 flex flex-col items-center justify-around py-8 opacity-20 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-4 h-6 border border-white/20 rounded-sm" />
          ))}
        </div>
        <div className="absolute inset-y-0 right-0 w-16 border-l border-white/5 flex flex-col items-center justify-around py-8 opacity-20 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-4 h-6 border border-white/20 rounded-sm" />
          ))}
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
          <FadeIn className="w-full lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">Creative Concepts <br/>& AI Storyboards</h2>
            <p className="text-lg text-slate-300 font-light leading-relaxed mb-8">
              I utilize AI tools to visualize concepts before execution, ensuring the production team and the client are perfectly aligned on the creative direction from day one.
            </p>
          </FadeIn>
          
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.2}>
              {/* Storyboard 1 - HanDiva */}
              <div className="relative w-full mx-auto rounded-xl bg-[#eee] p-3 md:p-5 shadow-2xl -rotate-1 hover:rotate-0 transition-transform duration-500 text-black">
                
                {/* Header text */}
                <div className="flex justify-between items-center mb-3">
                  <div className="font-mono text-[10px] font-bold opacity-60 tracking-wider">PROJECT: HanDiva</div>
                  <div className="font-mono text-[10px] font-bold opacity-60 tracking-wider">SCN: 01</div>
                </div>

                {/* The drawing frame */}
                <div className="border-2 border-[#222] bg-white rounded-sm p-1.5 flex flex-col shadow-inner">
                  <div className="aspect-[16/9] w-full bg-[#fafafa] relative overflow-hidden flex items-center justify-center border border-[#222]">
                    
                    {/* Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                    
                    {/* IMAGE 1 */}
                    <img 
                      src="https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776675762.147550000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::8907e297d90f2ca1:000001f5f96018bc:00064fe08fa81fbf" 
                      alt="HanDiva Storyboard" 
                      className="absolute top-1/2 left-1/2 z-10 object-cover mix-blend-multiply opacity-90 w-[56.25%] h-[177.77%]"
                      style={{ transform: 'translate(-50%, -50%) rotate(-90deg)' }}
                    />
                  </div>

                  {/* Notes section below */}
                  <div className="py-2 border-t border-[#222] mt-3 flex justify-between items-end gap-2">
                    <div className="flex-1">
                      <p className="font-mono text-[10px] font-bold text-[#222] mb-1">ACTION:</p>
                      <div className="h-[1px] w-full bg-[#222]/30 mt-2"></div>
                      <div className="h-[1px] w-full bg-[#222]/30 mt-3"></div>
                    </div>
                  </div>
                </div>

                {/* Tape effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rotate-[3deg]"></div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              {/* Storyboard 2 - Fish Concept */}
              <div className="relative w-full mx-auto rounded-xl bg-[#eee] p-3 md:p-5 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 text-black mt-8 md:mt-0">
                
                {/* Header text */}
                <div className="flex justify-between items-center mb-3">
                  <div className="font-mono text-[10px] font-bold opacity-60 tracking-wider">PROJECT: Fish Concept</div>
                  <div className="font-mono text-[10px] font-bold opacity-60 tracking-wider">SCN: 02</div>
                </div>

                {/* The drawing frame */}
                <div className="border-2 border-[#222] bg-white rounded-sm p-1.5 flex flex-col shadow-inner">
                  <div className="aspect-[16/9] w-full bg-[#fafafa] relative overflow-hidden flex items-center justify-center border border-[#222]">
                    
                    {/* Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                    
                    {/* IMAGE 2 */}
                    <img 
                      src="https://aistudio.google.com/_/upload/48306713-81ca-4824-93d5-4e9b852e484d/attachment/1776675525.367657000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::f5e4809fc4fbd7b9:000001f5f96018bc:00064fe0818c46ff" 
                      alt="Fish Concept Storyboard" 
                      className="z-10 object-cover w-full h-full mix-blend-multiply opacity-90"
                    />
                  </div>

                  {/* Notes section below */}
                  <div className="py-2 border-t border-[#222] mt-3 flex justify-between items-end gap-2">
                    <div className="flex-1">
                      <p className="font-mono text-[10px] font-bold text-[#222] mb-1">ACTION:</p>
                      <div className="h-[1px] w-full bg-[#222]/30 mt-2"></div>
                      <div className="h-[1px] w-full bg-[#222]/30 mt-3"></div>
                    </div>
                  </div>
                </div>

                {/* Tape effect */}
                <div className="absolute -top-3 left-1/3 w-20 h-6 bg-white/50 border border-white/60 shadow-sm backdrop-blur-md -rotate-[4deg]"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. Recognition & Certifications */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0f1c] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">Recognition & Certifications</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <GlassCard className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-[#4285F4]" />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">Google Digital Marketing</h4>
                <p className="text-sm text-slate-400 mt-1">Professional Certification</p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <BarChart className="w-6 h-6 text-[#0668E1]" />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">Meta Marketing Analytics</h4>
                <p className="text-sm text-slate-400 mt-1">Professional Certification</p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">The King's Trust International</h4>
                <p className="text-sm text-slate-400 mt-1">Official Program & Certification</p>
              </div>
            </GlassCard>
          </div>

          <GlassCard className="max-w-3xl mb-12">
             <div className="flex items-center gap-4 mb-4">
                <Mic className="w-6 h-6 text-slate-300" />
                <h3 className="text-xl font-medium text-white">Public Speaking</h3>
             </div>
             <p className="text-white text-lg font-medium leading-relaxed mb-2">
               Took the stage as a speaker in an ITU-related event, sharing perspectives on digital transformation, youth, and marketing in real-world contexts.
             </p>
             <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
               Featured across 5+ news and media outlets.
             </p>
             <button onClick={() => {
                const element = document.getElementById('media-coverage');
                const offset = 100;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element?.getBoundingClientRect().top || 0;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
             }} className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
               View Coverage <ArrowRight className="w-4 h-4" />
             </button>
          </GlassCard>

          {/* Media Coverage */}
          <div className="max-w-7xl mx-auto" id="media-coverage">
            <h3 className="text-2xl font-medium text-white mb-2">Media Coverage</h3>
            <p className="text-slate-400 text-sm font-light mb-8">Covered by leading Jordanian media outlets.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <a href="https://alwakaai.com/article/640093" target="_blank" rel="noopener noreferrer" className="group block p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col h-full justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="w-4 h-4 text-[#4285F4]" />
                      <span className="text-xs font-semibold tracking-widest text-[#4285F4] uppercase">Alwakaai</span>
                    </div>
                    <h4 className="text-white text-sm font-medium group-hover:text-[#4285F4] transition-colors leading-relaxed">مشاركة متميزة لطالب في جامعة آل البيت مع الاتحاد الدولي للاتصالات</h4>
                  </div>
                  <div className="flex items-center text-slate-500 text-xs font-medium group-hover:text-slate-300 transition-colors">
                    Read Article <ArrowUpRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </a>

              <a href="https://www.addustour.com/articles/1489161" target="_blank" rel="noopener noreferrer" className="group block p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col h-full justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="w-4 h-4 text-[#0668E1]" />
                      <span className="text-xs font-semibold tracking-widest text-[#0668E1] uppercase">Addustour</span>
                    </div>
                    <h4 className="text-white text-sm font-medium group-hover:text-[#0668E1] transition-colors leading-relaxed">مشاركة متميزة لطالب في جامعة آل البيت مع الاتحاد الدولي للاتصالات</h4>
                  </div>
                  <div className="flex items-center text-slate-500 text-xs font-medium group-hover:text-slate-300 transition-colors">
                    Read Article <ArrowUpRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </a>

              <a href="https://www.assawsana.com/article/672414" target="_blank" rel="noopener noreferrer" className="group block p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col h-full justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="w-4 h-4 text-[#E63946]" />
                      <span className="text-xs font-semibold tracking-widest text-[#E63946] uppercase">Assawsana</span>
                    </div>
                    <h4 className="text-white text-sm font-medium group-hover:text-[#E63946] transition-colors leading-relaxed">حسام الشواقفة يمثل العرب دوليًا في مبادرات الاتصالات الرقمية</h4>
                  </div>
                  <div className="flex items-center text-slate-500 text-xs font-medium group-hover:text-slate-300 transition-colors">
                    Read Article <ArrowUpRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </a>

              <a href="https://www.petra.gov.jo/Include/InnerPage.jsp?ID=51813&lang=ar" target="_blank" rel="noopener noreferrer" className="group block p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col h-full justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">Petra</span>
                    </div>
                    <h4 className="text-white text-sm font-medium group-hover:text-[#D4AF37] transition-colors leading-relaxed">مشاركة متميزة لطالب في جامعة آل البيت مع الاتحاد الدولي للاتصالات</h4>
                  </div>
                  <div className="flex items-center text-slate-500 text-xs font-medium group-hover:text-slate-300 transition-colors">
                    Read Article <ArrowUpRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* 7. About Me */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-b border-white/5 text-center">
        <FadeIn className="max-w-4xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-8">The Journey</h2>
          <p className="text-2xl md:text-3xl leading-[1.6] font-light text-slate-300">
            I started in content writing, learning how to build a voice. Then I expanded into account management, team coordination, and campaign execution. Over time, I became responsible for connecting content, teams, and delivery — <span className="text-white font-normal">making sure work gets done efficiently, accurately, and beautifully.</span>
          </p>
        </FadeIn>
      </section>

      {/* 8. Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tight">Let's Work Together</h2>
          <p className="text-xl text-slate-400 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            If you need someone who can manage multiple accounts, coordinate teams, and keep content and campaigns moving seamlessly — let's connect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <a href="mailto:hossam.shawaqfeh0@gmail.com" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-[#070b14] px-8 py-4 rounded-full font-medium hover:bg-slate-200 transition-all shadow-lg hover:scale-105">
               <Mail className="w-5 h-5" /> 
               Email
             </a>
             <a href="https://wa.me/962779866110" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#111827] border border-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-all hover:scale-105">
               <MessageCircle className="w-5 h-5" /> 
               WhatsApp
             </a>
             <a href="https://www.linkedin.com/in/hossamshawaqfeh/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#111827] border border-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-all hover:scale-105">
               <Linkedin className="w-5 h-5" /> 
               LinkedIn
             </a>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-slate-600 border-t border-white/5">
        <p>© {new Date().getFullYear()} Hossam Shawaqfeh. Account Manager & Content Strategist.</p>
      </footer>

      {/* Modal / Popup Gallery */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0f1423] border border-white/10 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/5">
                <div>
                  <div className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-1">{selectedProject.category}</div>
                  <h3 className="text-2xl md:text-3xl font-medium text-white">{selectedProject.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto no-scrollbar flex-1 bg-[#070b14]">
                <p className="text-lg text-slate-300 font-light mb-8 max-w-3xl">{selectedProject.description}</p>
                
                <div className={`grid ${selectedProject.category === 'Storyboards' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-6`}>
                  {selectedProject.items.map((item, idx) => (
                    <div key={idx} className="relative rounded-xl overflow-hidden bg-white/5 border border-white/10">
                      {item.type === 'video' ? (
                        <div className="aspect-[4/5] relative bg-black flex items-center justify-center">
                          <video src={item.url} muted loop autoPlay playsInline className="w-full h-full object-cover opacity-80" />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <PlayCircle className="w-12 h-12 text-white/50" />
                          </div>
                        </div>
                      ) : (
                        <div className={`w-full relative group ${item.url.includes('8907e297d90f2ca1') ? 'flex justify-center py-12 bg-black/20' : ''}`}>
                          {item.url.includes('8907e297d90f2ca1') ? (
                            <img 
                              src={item.url} 
                              alt={`Gallery item ${idx + 1}`} 
                              className="max-h-[80vh] w-auto object-contain cursor-zoom-in"
                              style={{ transform: 'rotate(-90deg)' }}
                              onClick={() => window.open(item.url, '_blank')}
                            />
                          ) : (
                            <img 
                              src={item.url} 
                              alt={`Gallery item ${idx + 1}`} 
                              className="w-full h-auto object-contain cursor-zoom-in"
                              onClick={() => window.open(item.url, '_blank')}
                            />
                          )}
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium">Click to enlarge</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Campaigns() {
  const [selectedProject, setSelectedProject] = useState<typeof PORTFOLIO_DATA[0] | null>(null);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const adsProjects = PORTFOLIO_DATA.filter(p => p.category === "Ads");

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#070b14] flex flex-col relative pb-32">
      <div className="absolute top-0 left-0 right-0 h-[50vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#070b14] to-transparent z-0 pointer-events-none" />
      
      {/* Navbar / Top Bar */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-8 max-w-7xl mx-auto w-full">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full mt-8">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6">
            Ad Campaigns & Results
          </h1>
          <p className="text-xl text-slate-300 font-light max-w-3xl leading-relaxed mb-16">
            Real acquisition numbers, ROAS tracking, and performance-driven paid social strategies that convert.
          </p>
        </FadeIn>

        {/* Campaign Highlights (Moved from Home) */}
        <section className="mb-24">
          <FadeIn>
            <h2 className="text-xl font-semibold tracking-widest text-slate-500 uppercase mb-8">Performance Metrics</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            <AnimatedCounter value="840+" label="Conversions" />
            <AnimatedCounter value="61" label="Conversions" />
            <AnimatedCounter value="45" label="Conversions" />
            <AnimatedCounter value="150" label="Conversions" />
            <AnimatedCounter value="68" label="Conversions" />
          </div>
        </section>

        {/* Ads Case Studies Grid */}
        <section className="mt-20">
          <FadeIn className="mb-8">
            <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Campaign Case Studies</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {adsProjects.map((project, idx) => (
              <FadeIn key={project.id} delay={0.1 * idx}>
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer block rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-500"
                >
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-widest uppercase">
                          {project.category}
                        </span>
                        <span className="text-xs text-white/70 font-medium">
                          {project.items.length} Assets
                        </span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-medium text-white leading-tight">{project.title}</h3>
                    </div>

                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                      <span className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-slate-300 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>

      {/* Modal / Popup Gallery for Ads */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0f1423] border border-white/10 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/5">
                <div>
                  <div className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-1">{selectedProject.category} Case Study</div>
                  <h3 className="text-2xl md:text-3xl font-medium text-white">{selectedProject.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto no-scrollbar flex-1 bg-[#070b14]">
                <p className="text-lg text-slate-300 font-light mb-8 max-w-3xl">{selectedProject.description}</p>
                
                <div className={`grid ${selectedProject.category === 'Storyboards' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-6`}>
                  {selectedProject.items.map((item, idx) => (
                    <div key={idx} className="relative rounded-xl overflow-hidden bg-white/5 border border-white/10">
                      {item.type === 'video' ? (
                        <div className="aspect-[4/5] relative bg-black flex items-center justify-center">
                          <video src={item.url} muted loop autoPlay playsInline className="w-full h-full object-cover opacity-80" />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <PlayCircle className="w-12 h-12 text-white/50" />
                          </div>
                        </div>
                      ) : (
                        <div className={`w-full relative group ${item.url.includes('8907e297d90f2ca1') ? 'flex justify-center py-12 bg-black/20' : ''}`}>
                          {item.url.includes('8907e297d90f2ca1') ? (
                            <img 
                              src={item.url} 
                              alt={`Gallery item ${idx + 1}`} 
                              className="max-h-[80vh] w-auto object-contain cursor-zoom-in"
                              style={{ transform: 'rotate(-90deg)' }}
                              onClick={() => window.open(item.url, '_blank')}
                            />
                          ) : (
                            <img 
                              src={item.url} 
                              alt={`Gallery item ${idx + 1}`} 
                              className="w-full h-auto object-contain cursor-zoom-in"
                              onClick={() => window.open(item.url, '_blank')}
                            />
                          )}
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium">Click to enlarge</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#070b14] text-white font-sans selection:bg-white/20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaigns" element={<Campaigns />} />
        </Routes>
      </div>
    </Router>
  );
}
