import React from 'react';

const projects = [
  {
    title: "PulseINT",
    description: "A live sentiment analysis platform tracking public trends across Pakistan using LLM-powered scraping pipelines.",
    tags: ["FastAPI", "Next.js", "LLM", "Scraping"],
    link: "#"
  },
  {
    title: "Humint",
    description: "Social media intelligence tool that aggregates public data through structured LLM outputs and external APIs.",
    tags: ["AI Intelligence", "RAG", "API Integration"],
    link: "#"
  },
  {
    title: "Smart Animated Tutor",
    description: "Gold Medalist Thesis: A 3D AI tutor for kids using Generative AI and Speech Recognition.",
    tags: ["Three.js", "GenAI", "Python"],
    link: "https://fyp-2-git-main-hashirs-projects-a6498d88.vercel.app/"
  }
];

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        <div className="h-[1px] flex-grow bg-white/10"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="group bg-[#112240] p-8 rounded-xl border border-transparent hover:border-primary/50 transition-all hover:-translate-y-2">
            <div className="flex justify-between items-start mb-6">
              <div className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-light mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-slate text-sm mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono text-primary/80 uppercase tracking-widest bg-primary/5 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}