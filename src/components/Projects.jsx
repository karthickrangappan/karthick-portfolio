import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ExternalLink, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./common/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export function Projects() {
  const [active, setActive] = useState("All");
  const [quickView, setQuickView] = useState(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const filters = ["All", "Website", "UI/UX"];

  /* =========================================================
     PROJECT DATA
  ========================================================= */
  const projects = [
    {
      title: "E-Commerce Dry Fruits",
      category: "Website",
      img: "../projects img/projects (3).png",
      link: "https://dry-fruits-rho.vercel.app/",
      source: "https://github.com/karthickrangappan/Dry-Fruits",
      tags: ["React", "Tailwind", "Firebase"],
      accentColor: "#7c5cfc",
    },
    {
      title: "Shopping Platform",
      category: "UI/UX",
      img: "../projects img/projects (2).png",
      link: "https://bicycle-shop-beta.vercel.app/",
      source: "https://github.com/karthickrangappan/Bicycle-Shop",
      tags: ["Vite", "Commerce.js", "Stripe"],
      accentColor: "#00e5ff",
    },
    {
      title: "E-Commerce Sports",
      category: "Website",
      img: "../projects img/projects (1).png",
      link: "https://sports-gamma-rouge.vercel.app/",
      source: "https://github.com/karthickrangappan/Sports",
      tags: ["React", "Redux", "Node.js"],
      accentColor: "#f5a623",
    },
    {
      title: "Fast Food",
      category: "Website",
      img: "../projects img/projects (4).png",
      link: "https://feane-fast-food.vercel.app/",
      source: "https://github.com/karthickrangappan/Feane-fast-food",
      tags: ["React", "API", "Auth"],
      accentColor: "#ff4d8d",
    },
    {
      title: "Dress Shop",
      category: "Website",
      img: "../projects img/projects (5).png",
      link: "https://dress-shop-main.vercel.app/",
      source: "https://github.com/karthickrangappan/Dress-shop-main",
      tags: ["React", "E-Commerce", "Tailwind"],
      accentColor: "#ec4899",
    },
  ];

  /* =========================================================
     FILTER LOGIC
  ========================================================= */
  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  const hasMultipleCards = filteredProjects.length > 1;

  const infiniteProjects = hasMultipleCards
    ? [
        ...filteredProjects,
        ...filteredProjects,
        ...filteredProjects,
        ...filteredProjects,
      ]
    : filteredProjects;

  /* Lock body scroll when modal is open */
  useEffect(() => {
    document.body.style.overflow = quickView ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [quickView]);

  /* Handle filter change */
  useEffect(() => {
    if (!swiperInstance) return;

    if (swiperInstance.autoplay) {
      swiperInstance.autoplay.stop();
    }

    if (!hasMultipleCards) {
      swiperInstance.slideTo(0, 0);
    }
  }, [active, hasMultipleCards, swiperInstance]);

  const handleMouseEnter = () => {
    if (hasMultipleCards && swiperInstance?.autoplay) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (hasMultipleCards && swiperInstance?.autoplay) {
      swiperInstance.autoplay.start();
    }
  };

  const handleFilterChange = (filter) => {
    if (swiperInstance?.autoplay) {
      swiperInstance.autoplay.stop();
    }
    setActive(filter);
  };

  return (
    <>
      {/* =====================================================
          PROJECTS SECTION
      ===================================================== */}
      <section
        id="projects"
        className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28"
      >
        {/* BACKGROUND GLOWS */}
        <div
          className="pointer-events-none absolute -left-40 top-20 h-[350px] sm:h-[450px] w-[350px] sm:w-[450px] rounded-full blur-[100px] sm:blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(124,92,252,.12), transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -right-40 bottom-20 h-[350px] sm:h-[450px] w-[350px] sm:w-[450px] rounded-full blur-[100px] sm:blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,229,255,.10), transparent 70%)",
          }}
        />

        {/* CONTAINER */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
          {/* HEADER */}
          <div className="mb-10 sm:mb-12 lg:mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            {/* TITLE */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">My Work</span>
              <h2
                className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Featured{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #7c5cfc, #00e5ff)",
                  }}
                >
                  Work
                </span>
              </h2>
              <p
                className="mt-2.5 sm:mt-4 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-slate-500"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Digital solutions built with precision, passion, and modern engineering.
              </p>
            </motion.div>

            {/* FILTERS */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex w-full sm:w-auto self-start lg:self-auto rounded-full border border-slate-200 bg-white p-1 sm:p-1.5 shadow-sm"
            >
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleFilterChange(item)}
                  className="relative flex-1 sm:flex-initial text-center whitespace-nowrap rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold transition-all duration-300"
                  style={{
                    color: active === item ? "#ffffff" : "#64748b",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  {active === item && (
                    <motion.div
                      layoutId="project-filter"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "linear-gradient(135deg,#7c5cfc,#00e5ff)",
                        boxShadow: "0 4px 15px rgba(124,92,252,.3)",
                      }}
                    />
                  )}
                  <span className="relative z-10">{item}</span>
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* FULL WIDTH SLIDER */}
        <div
          className={`project-free-wrapper ${
            !hasMultipleCards ? "single-project" : ""
          }`}
        >
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
            }}
            autoplay={
              hasMultipleCards
                ? {
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                    stopOnLastSlide: false,
                  }
                : false
            }
            speed={hasMultipleCards ? 5000 : 0}
            loop={hasMultipleCards}
            loopAdditionalSlides={
              hasMultipleCards ? filteredProjects.length * 2 : 0
            }
            slidesPerView="auto"
            centeredSlides={!hasMultipleCards}
            spaceBetween={hasMultipleCards ? 20 : 0}
            breakpoints={{
              640: {
                spaceBetween: hasMultipleCards ? 24 : 0,
              },
              1024: {
                spaceBetween: hasMultipleCards ? 30 : 0,
              },
            }}
            allowTouchMove={hasMultipleCards}
            grabCursor={hasMultipleCards}
            watchOverflow={!hasMultipleCards}
            className="project-free-swiper"
          >
            {infiniteProjects.map((project, index) => (
              <SwiperSlide
                key={`${project.title}-${index}`}
                className={`project-free-slide ${
                  !hasMultipleCards ? "single-project-slide" : ""
                }`}
              >
                <div
                  className="project-free-card"
                  style={{ "--accent": project.accentColor }}
                  onMouseEnter={hasMultipleCards ? handleMouseEnter : undefined}
                  onMouseLeave={hasMultipleCards ? handleMouseLeave : undefined}
                >
                  {/* PROJECT IMAGE */}
                  <img
                    src={project.img}
                    alt={project.title}
                    className="project-free-image"
                    draggable="false"
                  />

                  {/* OVERLAY */}
                  <div className="project-free-overlay" />

                  {/* COLOR GLOW */}
                  <div className="project-free-glow" />

                  {/* TOP BAR */}
                  <div className="project-free-top">
                    <span className="project-free-category">
                      {project.category}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuickView(project)}
                      className="project-free-eye"
                      aria-label={`View ${project.title}`}
                    >
                      <Eye size={18} />
                    </button>
                  </div>

                  {/* BOTTOM CONTENT */}
                  <div className="project-free-content">
                    {/* TAGS */}
                    <div className="project-free-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    {/* TITLE */}
                    <h3>{project.title}</h3>

                    {/* DESCRIPTION */}
                    <p>
                      Innovative {project.category.toLowerCase()} solution built
                      for seamless user interactions and high performance.
                    </p>

                    {/* ACTIONS */}
                    <div className="project-free-actions">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-free-live"
                        style={{ background: project.accentColor }}
                      >
                        Live Preview
                        <ArrowUpRight size={15} />
                      </a>

                      <button
                        type="button"
                        onClick={() => setQuickView(project)}
                        className="project-free-quick"
                        aria-label={`Quick view ${project.title}`}
                      >
                        <Eye size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* =====================================================
          QUICK VIEW MODAL (RESPONSIVE)
      ===================================================== */}
      <AnimatePresence>
        {quickView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex min-h-full items-center justify-center overflow-y-auto p-3 sm:p-6 md:p-8"
          >
            {/* BACKDROP */}
            <div
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
              onClick={() => setQuickView(null)}
            />

            {/* MODAL CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 my-auto w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-[28px] bg-white shadow-2xl"
            >
              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setQuickView(null)}
                className="absolute right-3.5 top-3.5 sm:right-5 sm:top-5 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white/90 backdrop-blur shadow-md transition-all duration-300 hover:scale-110 active:scale-95 text-rose-500 hover:bg-rose-50"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="grid lg:grid-cols-2">
                {/* MODAL IMAGE */}
                <div className="flex min-h-[190px] sm:min-h-[260px] lg:min-h-[440px] items-center justify-center bg-slate-50 p-4 sm:p-6 lg:p-8">
                  <img
                    src={quickView.img}
                    alt={quickView.title}
                    className="max-h-[220px] sm:max-h-[320px] lg:max-h-[420px] w-full rounded-xl sm:rounded-2xl object-contain shadow-lg"
                  />
                </div>

                {/* MODAL CONTENT */}
                <div className="flex flex-col justify-center p-5 sm:p-8 md:p-10 lg:p-12">
                  <span
                    className="mb-3 inline-block w-fit rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider"
                    style={{
                      color: quickView.accentColor,
                      background: `${quickView.accentColor}15`,
                      border: `1px solid ${quickView.accentColor}30`,
                    }}
                  >
                    {quickView.category}
                  </span>

                  <h3
                    className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-black leading-tight text-slate-900"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {quickView.title}
                  </h3>

                  <p
                    className="mb-5 sm:mb-6 text-xs sm:text-sm md:text-base leading-relaxed text-slate-500"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Detailed view of the project architecture and implementation. Built with modern web standards and optimized for performance, responsiveness, and seamless accessibility across all screen sizes.
                  </p>

                  {/* TAGS */}
                  <div className="mb-6 sm:mb-8 flex flex-wrap gap-1.5 sm:gap-2">
                    {quickView.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-bold"
                        style={{
                          color: quickView.accentColor,
                          background: `${quickView.accentColor}12`,
                          border: `1px solid ${quickView.accentColor}25`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
                    <a
                      href={quickView.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl sm:rounded-2xl px-5 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                      style={{
                        background:
                          "linear-gradient(135deg,#7c5cfc,#00b8d4)",
                        boxShadow: "0 8px 25px rgba(124,92,252,.25)",
                      }}
                    >
                      <span>Visit Project</span>
                      <ExternalLink size={15} />
                    </a>

                    <a
                      href={quickView.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-slate-200 bg-white px-5 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-600 active:scale-95"
                    >
                      <span>Source Code</span>
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          ENHANCED RESPONSIVE CSS
      ===================================================== */}
      <style>{`
        .project-free-wrapper {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 10px 0 35px;
        }

        .project-free-wrapper.single-project {
          display: flex;
          justify-content: center;
          padding-left: 16px;
          padding-right: 16px;
        }

        .project-free-swiper {
          width: 100%;
          padding: 20px 0 30px !important;
          overflow: visible !important;
        }

        .single-project .project-free-swiper {
          width: 100%;
          max-width: 540px;
          margin: 0 auto;
        }

        /* Slide sizing across viewports */
        .project-free-slide {
          width: 520px !important;
          height: auto !important;
          flex-shrink: 0;
          align-self: flex-start;
        }

        .single-project-slide {
          width: 100% !important;
          max-width: 540px !important;
          margin: 0 auto !important;
        }

        @media (min-width: 1600px) {
          .project-free-slide {
            width: 580px !important;
          }
        }

        @media (max-width: 1200px) {
          .project-free-slide {
            width: 460px !important;
          }
        }

        @media (max-width: 768px) {
          .project-free-slide {
            width: 380px !important;
          }
        }

        @media (max-width: 480px) {
          .project-free-slide {
            width: min(320px, calc(100vw - 36px)) !important;
          }
        }

        /* Card Styles */
        .project-free-card {
          position: relative;
          width: 100%;
          height: auto;
          overflow: hidden;
          border-radius: 24px;
          background: #f8fafc;
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 16px 45px rgba(15, 23, 42, 0.12);
          isolation: isolate;
          cursor: grab;
          user-select: none;
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
        }

        @media (min-width: 640px) {
          .project-free-card {
            border-radius: 28px;
          }
        }

        .single-project .project-free-card {
          cursor: default;
        }

        .project-free-card:active {
          cursor: grabbing;
        }

        .single-project .project-free-card:active {
          cursor: default;
        }

        /* Card image */
        .project-free-image {
          position: relative;
          display: block;
          width: 100%;
          height: auto;
          max-width: 100%;
          object-fit: contain;
          object-position: center;
          background: #f8fafc;
          pointer-events: none;
          user-select: none;
          -webkit-user-drag: none;
          transform: scale(1);
          filter: brightness(1);
          transition: transform 0.6s ease, filter 0.5s ease;
        }

        /* Desktop Hover: reveal effect */
        @media (hover: hover) and (min-width: 769px) {
          .project-free-card:hover {
            transform: translateY(-6px);
            border-color: var(--accent);
            box-shadow: 0 25px 60px rgba(15, 23, 42, 0.2);
          }

          .project-free-card:hover .project-free-image {
            transform: scale(1.02);
            filter: brightness(0.5) contrast(1.05) saturate(1.08);
          }

          .project-free-overlay {
            position: absolute;
            inset: 0;
            z-index: 1;
            opacity: 0;
            background: linear-gradient(
              to top,
              rgba(2, 6, 23, 0.98) 0%,
              rgba(2, 6, 23, 0.88) 38%,
              rgba(2, 6, 23, 0.45) 70%,
              rgba(2, 6, 23, 0.02) 100%
            );
            transition: opacity 0.4s ease;
            pointer-events: none;
          }

          .project-free-card:hover .project-free-overlay {
            opacity: 1;
          }

          .project-free-glow {
            position: absolute;
            left: -20%;
            right: -20%;
            bottom: -30%;
            height: 60%;
            z-index: 2;
            opacity: 0;
            background: radial-gradient(ellipse, var(--accent), transparent 70%);
            filter: blur(50px);
            pointer-events: none;
            transition: opacity 0.45s ease;
          }

          .project-free-card:hover .project-free-glow {
            opacity: 0.25;
          }

          .project-free-top {
            position: absolute;
            top: 20px;
            left: 20px;
            right: 20px;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: space-between;
            opacity: 0;
            transform: translateY(-10px);
            transition: opacity 0.35s ease, transform 0.35s ease;
          }

          .project-free-card:hover .project-free-top {
            opacity: 1;
            transform: translateY(0);
          }

          .project-free-content {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 8;
            padding: 22px 26px 24px;
            opacity: 0;
            transform: translateY(18px);
            pointer-events: none;
            transition: opacity 0.4s ease, transform 0.4s ease;
          }

          .project-free-card:hover .project-free-content {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }
        }

        /* Mobile & Touch Devices: Persistent Elegant Overlay & Direct Actions */
        @media (max-width: 768px), (hover: none) {
          .project-free-card {
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.1);
          }

          .project-free-overlay {
            position: absolute;
            inset: 0;
            z-index: 1;
            opacity: 1;
            background: linear-gradient(
              to top,
              rgba(2, 6, 23, 0.96) 0%,
              rgba(2, 6, 23, 0.85) 45%,
              rgba(2, 6, 23, 0.35) 75%,
              rgba(2, 6, 23, 0.05) 100%
            );
            pointer-events: none;
          }

          .project-free-glow {
            display: none;
          }

          .project-free-top {
            position: absolute;
            top: 12px;
            left: 14px;
            right: 14px;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: space-between;
            opacity: 1;
            transform: none;
          }

          .project-free-content {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 8;
            padding: 14px 16px 16px;
            opacity: 1;
            transform: none;
            pointer-events: auto;
          }

          .project-free-content p {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            font-size: 10px !important;
            line-height: 1.4 !important;
            margin-bottom: 10px !important;
          }
        }

        /* Category pill */
        .project-free-category {
          padding: 6px 12px;
          border-radius: 999px;
          color: white;
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        /* Eye button */
        .project-free-eye {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 11px;
          color: white;
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .project-free-eye:hover {
          transform: scale(1.08);
          background: var(--accent);
        }

        /* Content elements */
        .project-free-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-bottom: 7px;
        }

        .project-free-tags span {
          padding: 3px 8px;
          border-radius: 6px;
          color: var(--accent);
          background: color-mix(in srgb, var(--accent) 15%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
          font-size: 8.5px;
          font-weight: 700;
        }

        .project-free-content h3 {
          margin: 0 0 5px;
          color: white;
          font-family: "Syne", sans-serif;
          font-size: 21px;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        @media (max-width: 480px) {
          .project-free-content h3 {
            font-size: 17px;
          }
        }

        .project-free-content p {
          margin: 0 0 12px;
          max-width: 500px;
          color: rgba(226, 232, 240, 0.85);
          font-family: "DM Sans", sans-serif;
          font-size: 11px;
          line-height: 1.45;
        }

        .project-free-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .project-free-live {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 8px 14px;
          min-height: 36px;
          border-radius: 10px;
          color: white;
          font-size: 11px;
          font-weight: 800;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .project-free-live:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
        }

        .project-free-quick {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 10px;
          color: white;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.25);
          cursor: pointer;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .project-free-quick:hover {
          transform: scale(1.08);
          background: rgba(255, 255, 255, 0.24);
        }

        @media (prefers-reduced-motion: reduce) {
          .project-free-swiper .swiper-wrapper {
            transition-duration: 0s !important;
          }
          .project-free-card,
          .project-free-image,
          .project-free-overlay,
          .project-free-content,
          .project-free-top {
            transition-duration: 0s !important;
          }
        }
      `}</style>
    </>
  );
}