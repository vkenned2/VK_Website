"use client";

import { useParams, useRouter } from "next/navigation";
import { PROJECTS_DATA } from "@/data/projectsData";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useEffect } from "react";
import PatchedWorkflowImage from "@/components/PatchedWorkflowImage";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  // Find project data matching the slug
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  // Redirect to home if project is not found
  useEffect(() => {
    if (!project) {
      router.push("/");
    }
  }, [project, router]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    );
  }

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main className="relative bg-[#121212] text-white min-h-screen w-full font-sans pb-32">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.06),transparent_70%)]" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(180,69,255,0.04),transparent_70%)]" />
      </div>

      {/* Floating Header */}
      <header className="sticky top-0 z-50 w-full glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-wider hover:opacity-85 transition-opacity">
            VISHAL KENNEDY
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-xs tracking-wider uppercase text-[#86868b] hover:text-white transition-colors duration-300 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Tag & Year */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#86868b] font-semibold">
              {project.category}
            </span>
            <span className="text-[#86868b]">•</span>
            <span className="text-xs uppercase tracking-[0.3em] text-[#86868b] font-semibold">
              {project.year}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6 leading-tight"
          >
            {project.title}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[#86868b] font-light max-w-3xl leading-relaxed mb-8"
          >
            {project.tagline}
          </motion.p>

          {/* CTA Button */}
          {project.cta && (
            <motion.div variants={itemVariants} className="mb-16">
              <a
                href={project.cta.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold text-sm rounded-full hover:bg-neutral-200 transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-100"
              >
                {project.cta.text}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          )}

          {/* Layout Grid (Overview & Metadata Card) */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 border-t border-white/5 pt-16"
          >
            {/* Left Main Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-[#86868b] font-semibold mb-6">
                  Project Overview
                </h2>
                <p className="text-[#86868b] text-base md:text-lg font-light leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* My Role & Stack */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[#86868b] font-semibold mb-4">
                    My Role
                  </h3>
                  <p className="text-[#86868b] text-sm md:text-base font-light leading-relaxed">
                    {project.role}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[#86868b] font-semibold mb-4">
                    Tools / Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] tracking-wider font-light text-white/80 bg-white/5 px-2.5 py-1 rounded-full border border-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidecard: Meta details */}
            <div className="lg:col-span-1">
              <div className="glass-card rounded-2xl p-8 sticky top-24">
                <h3 className="text-sm font-semibold tracking-wider text-white mb-8 border-b border-white/5 pb-4">
                  Project Details
                </h3>
                <div className="space-y-6">
                  {project.meta.map((metaItem) => (
                    <div key={metaItem.label}>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#86868b] font-semibold block mb-1">
                        {metaItem.label}
                      </span>
                      <span className="text-sm text-white/90 font-light leading-relaxed block">
                        {metaItem.value}
                      </span>
                    </div>
                  ))}

                  {/* Context */}
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#86868b] font-semibold block mb-1">
                      Context
                    </span>
                    <span className="text-sm text-white/90 font-light leading-relaxed block">
                      {project.context}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            variants={itemVariants}
            className="mt-32 border-t border-white/5 pt-20"
          >
            <h2 className="text-center text-xs uppercase tracking-[0.3em] text-[#86868b] font-semibold mb-4">
              Implementation Roadmap
            </h2>
            <h3 className="text-center text-3xl md:text-4xl font-light tracking-tight text-white mb-16">
              Development <span className="font-semibold">Process.</span>
            </h3>

            <div className="max-w-3xl mx-auto space-y-6">
              {project.process.map((step, index) => (
                <div
                  key={index}
                  className="group flex gap-6 p-6 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm transition-colors duration-300 group-hover:border-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-grow pt-2">
                    <p className="text-[#86868b] group-hover:text-white/90 text-sm md:text-base font-light leading-relaxed transition-colors duration-300">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Solution Section */}
          {(project.challenges || project.solution || project.outcome) && (
            <motion.div
              variants={itemVariants}
              className="mt-32 border-t border-white/5 pt-20"
            >
              <h2 className="text-center text-xs uppercase tracking-[0.3em] text-[#86868b] font-semibold mb-4">
                Case Study Analysis
              </h2>
              <h3 className="text-center text-3xl md:text-4xl font-light tracking-tight text-white mb-16">
                Challenges & <span className="font-semibold">Outcomes.</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {project.challenges && (
                  <div className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#86868b] font-semibold block mb-4">
                      The Challenge
                    </span>
                    <p className="text-sm text-[#86868b] font-light leading-relaxed flex-grow">
                      {project.challenges}
                    </p>
                  </div>
                )}
                {project.solution && (
                  <div className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#86868b] font-semibold block mb-4">
                      The Solution
                    </span>
                    <p className="text-sm text-[#86868b] font-light leading-relaxed flex-grow">
                      {project.solution}
                    </p>
                  </div>
                )}
                {project.outcome && (
                  <div className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#86868b] font-semibold block mb-4">
                      The Outcome
                    </span>
                    <p className="text-sm text-[#86868b] font-light leading-relaxed flex-grow">
                      {project.outcome}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Sample Image References */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="mt-32 border-t border-white/5 pt-20"
            >
              <h2 className="text-center text-xs uppercase tracking-[0.3em] text-[#86868b] font-semibold mb-4">
                Visual References
              </h2>
              <h3 className="text-center text-3xl md:text-4xl font-light tracking-tight text-white mb-16">
                Sample Image <span className="font-semibold">References.</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {project.galleryImages.map((imgSrc, idx) => (
                  <div 
                    key={idx} 
                    className="glass-card rounded-2xl overflow-hidden bg-white/5 border border-white/5 shadow-2xl p-3 hover:border-white/10 hover:scale-[1.02] transition-all duration-500"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imgSrc}
                      alt={`${project.title} Reference ${idx + 1}`}
                      className="w-full h-auto object-cover rounded-xl aspect-[16/10]"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Workflow Showcase Image */}
          {project.workflowImage && (
            <motion.div
              variants={itemVariants}
              className="mt-32 border-t border-white/5 pt-20 flex flex-col items-center"
            >
              <h2 className="text-xs uppercase tracking-[0.3em] text-[#86868b] font-semibold mb-12">
                Workflow Visualisation
              </h2>
              <div className="w-full max-w-4xl rounded-2xl overflow-hidden bg-white/5 border border-white/5 shadow-2xl p-4 flex justify-center items-center">
                <PatchedWorkflowImage
                  src={project.workflowImage}
                  alt={`${project.title} Workflow`}
                  className="w-full h-auto max-h-[600px] object-contain rounded-xl"
                />
              </div>
            </motion.div>
          )}

          {/* Bottom Action Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-32 pt-20 border-t border-white/5 text-center flex flex-col items-center justify-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#86868b] font-semibold mb-6">
              Next Project Case Study
            </span>
            {(() => {
              const currentIndex = PROJECTS_DATA.findIndex((p) => p.slug === slug);
              const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;
              const nextProject = PROJECTS_DATA[nextIndex];
              return (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group text-2xl md:text-4xl font-extralight tracking-tight text-white hover:text-white/80 transition-all duration-300"
                >
                  <span className="font-semibold block md:inline">{nextProject.title}</span>
                  <ArrowUpRight className="inline-block w-6 h-6 ml-2 -translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1.5 transition-transform duration-300" />
                </Link>
              );
            })()}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
