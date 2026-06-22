import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ExternalLink, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./common/Icons";

export function Projects() {
  const [active, setActive] = useState("All");
  const [quickView, setQuickView] = useState(null);

  const filters = ["All", "Website", "UI/UX"];

  const projects = [
    {
      title: "E-Commerce Dry Fruits",
      category: "Website",
      img: "../projects img/projects (3).png",
      link: "https://dry-fruits-rho.vercel.app/",
      source: "https://github.com/karthickrangappan/Dry-Fruits",
      tags: ["React", "Tailwind", "Firebase"],
      accentColor: "#7c5cfc"
    },
    {
      title: "Shopping Platform",
      category: "Website",
      img: "../projects img/projects (2).png",
      link: "https://bicycle-shop-beta.vercel.app/",
      source: "https://github.com/karthickrangappan/Bicycle-Shop",
      tags: ["Vite", "Commerce.js", "Stripe"],
      accentColor: "#00e5ff"
    },
    {
      title: "E-Commerce Sports",
      category: "Website",
      img: "../projects img/projects (1).png",
      link: "https://sports-gamma-rouge.vercel.app/",
      source: "https://github.com/karthickrangappan/Sports",
      tags: ["React", "Redux", "Node.js"],
      accentColor: "#f5a623"
    },
    {
      title: "Fast Food",
      category: "Website",
      img: "../projects img/projects (4).png",
      link: "https://feane-fast-food.vercel.app/",
      source: "https://github.com/karthickrangappan/Feane-fast-food",
      tags: ["React", "API", "Auth"],
      accentColor: "#ff4d8d"
    },
    {
      title: "Dress Shop",
      category: "Website",
      img: "../projects img/projects (5).png",
      link: "https://dress-shop-main.vercel.app/",
      source: "https://github.com/karthickrangappan/Dress-shop-main",
      tags: ["React", "E-Commerce", "Tailwind"],
      accentColor: "#ec4899"
    },
  ];

  const filteredProjects = active === "All" ? projects : projects.filter((p) => p.category === active);

  useEffect(() => {
    if (quickView) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [quickView]);

  return (
    <section id="projects" className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="divider-gradient mb-20"></div>
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">My work</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gradient mt-2 mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                Featured Work
              </h2>
              <p className="text-xs sm:text-sm md:text-base" style={{ color: '#475569', fontFamily: 'DM Sans, sans-serif' }}>
                Digital solutions built with precision and passion.
              </p>
            </motion.div>
          </div>

          {/* FILTER */}
          <div className="flex flex-nowrap justify-start lg:justify-end gap-2 p-1.5 rounded-full w-full lg:w-auto overflow-x-auto" style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', WebkitOverflowScrolling: 'touch' }}>
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`relative px-6 py-2.5 text-sm font-bold transition-colors duration-300 whitespace-nowrap rounded-full ${active === item ? "" : "hover:bg-slate-50 hover:text-slate-900"}`}
                style={{
                  color: active === item ? '#fff' : '#64748b',
                  fontFamily: 'DM Sans, sans-serif',
                  WebkitTapHighlightColor: 'transparent'
                }}
              >
                {active === item && (
                  <motion.div
                    layoutId="active-filter"
                    className="absolute inset-0 rounded-full z-0"
                    style={{
                      background: 'linear-gradient(135deg, #7c5cfc, #00e5ff)',
                      boxShadow: '0 4px 15px rgba(124,92,252,0.3)'
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </button>
            ))}
          </div>
        </div>

        {/* PROJECT GRID */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-10 justify-items-center">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)' }}
                transition={{ duration: 0.4 }}
                className="group relative w-full max-w-[340px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[460px] h-[340px] sm:h-[320px] md:h-[360px] lg:h-[380px] xl:h-[400px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden cursor-pointer"
                style={{ border: '1px solid #e2e8f0' }}
              >
                {/* Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(to top, rgba(7,8,15,0.97) 0%, rgba(7,8,15,0.6) 50%, rgba(7,8,15,0.2) 100%)', opacity: 0.85 }}></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(to top, rgba(7,8,15,0.97) 0%, rgba(7,8,15,0.6) 50%, rgba(7,8,15,0.2) 100%)' }}></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at bottom, ${project.accentColor}30, transparent 70%)` }}></div>

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}></div>

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-bold px-3 py-1 rounded-lg"
                        style={{ background: `${project.accentColor}20`, color: project.accentColor, border: `1px solid ${project.accentColor}40` }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{project.title}</h3>
                  <p className="text-xs sm:text-sm mb-6 line-clamp-2 max-w-md" style={{ color: 'rgba(236,238,245,0.55)', fontFamily: 'DM Sans, sans-serif' }}>
                    Innovative {project.category.toLowerCase()} solution built for seamless user interactions and high performance.
                  </p>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm hover:scale-105 transition-all"
                      style={{ background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}bb)`, boxShadow: `0 4px 20px ${project.accentColor}40` }}
                    >
                      Live Preview <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => setQuickView(project)}
                      className="p-2.5 rounded-xl text-white transition-all hover:scale-110"
                      style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* QUICK VIEW MODAL */}
      <AnimatePresence>
        {quickView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-y-auto"
          >
            <div className="fixed inset-0 backdrop-blur-xl" style={{ background: 'rgba(255,255,255,0.8)' }} onClick={() => setQuickView(null)}></div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative max-w-6xl w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden z-10"
              style={{ background: '#ffffff', border: '1px solid rgba(124,92,252,0.25)', boxShadow: '0 40px 100px rgba(0,0,0,0.15), 0 0 60px rgba(124,92,252,0.15)' }}
            >
              <button
                onClick={() => setQuickView(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-xl flex items-center justify-center z-20 transition-all hover:scale-110"
                style={{ background: 'rgba(255,77,141,0.15)', border: '1px solid rgba(255,77,141,0.3)', color: '#ff4d8d' }}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid lg:grid-cols-2">
                <div className="p-6 flex items-center justify-center min-h-[380px]" style={{ background: '#f8fafc' }}>
                  <img
                    src={quickView.img}
                    alt={quickView.title}
                    className="w-full h-auto object-contain rounded-2xl"
                    style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
                  />
                </div>

            <div className="p-8 md:p-10 xl:p-14 flex flex-col justify-center">
                  <span className="tag-pill inline-block w-fit mb-4">{quickView.category}</span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black text-slate-900 mb-4 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {quickView.title}
                  </h3>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-8" style={{ color: '#475569', fontFamily: 'DM Sans, sans-serif' }}>
                    Detailed view of the project architecture and implementation. Built with modern web standards and optimized for performance and accessibility.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href={quickView.link} target="_blank" rel="noopener noreferrer"
                      className="btn-primary flex-1 min-w-[180px] flex items-center justify-center gap-2 text-white py-4 rounded-2xl font-bold">
                      Visit Project <ExternalLink className="w-4 h-4" />
                    </a>
                    <a href={quickView.source} target="_blank" rel="noopener noreferrer"
                      className="btn-secondary flex-1 min-w-[180px] flex items-center justify-center gap-2 py-4 rounded-2xl font-bold"
                      style={{ color: '#edeff3', border: '1px solid rgba(15,23,42,0.08)' }}>
                      Source Code <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
