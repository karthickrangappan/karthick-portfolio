
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Eye,
  ExternalLink,
  X,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { GithubIcon } from "./common/Icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const FILTERS = ["All", "Website", "UI/UX"];

const PROJECTS = [
  {
    title: "E-Commerce Dry Fruits",
    category: "Website",
    img: "../projects img/projects (3).png",
    link: "https://dry-fruits-rho.vercel.app/",
    source: "https://github.com/karthickrangappan/Dry-Fruits",
    tags: ["React", "Tailwind", "Firebase"],
    accentColor: "#7c5cfc",
    description: "An e-commerce website for browsing dry fruit products.",
  },
  {
    title: "Shopping Platform",
    category: "UI/UX",
    img: "../projects img/projects (2).png",
    link: "https://bicycle-shop-beta.vercel.app/",
    source: "https://github.com/karthickrangappan/Bicycle-Shop",
    tags: ["Vite", "Commerce.js", "Stripe"],
    accentColor: "#00b8d4",
    description:
      "A shopping platform focused on product presentation and user experience.",
  },
  {
    title: "E-Commerce Sports",
    category: "Website",
    img: "../projects img/projects (1).png",
    link: "https://sports-gamma-rouge.vercel.app/",
    source: "https://github.com/karthickrangappan/Sports",
    tags: ["React", "Redux", "Node.js"],
    accentColor: "#f5a623",
    description:
      "A sports e-commerce project with a modern shopping interface.",
  },
  {
    title: "Fast Food",
    category: "Website",
    img: "../projects img/projects (4).png",
    link: "https://feane-fast-food.vercel.app/",
    source: "https://github.com/karthickrangappan/Feane-fast-food",
    tags: ["React", "API", "Auth"],
    accentColor: "#ff4d8d",
    description: "A responsive restaurant website with a modern interface.",
  },
  {
    title: "Dress Shop",
    category: "Website",
    img: "../projects img/projects (5).png",
    link: "https://dress-shop-main.vercel.app/",
    source: "https://github.com/karthickrangappan/Dress-shop-main",
    tags: ["React", "E-Commerce", "Tailwind"],
    accentColor: "#ec4899",
    description:
      "A fashion shopping website with a modern clothing-store design.",
  },
];

// Same fade-up animation style as the Skills page.
const projectCardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Projects() {
  const [active, setActive] = useState("All");
  const [quickView, setQuickView] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const resumeTimer = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusedElement = useRef(null);
  const previousOverflow = useRef("");

  const isVisible = useRef(false);
  const isTabVisible = useRef(
    typeof document !== "undefined" ? !document.hidden : true
  );
  const isHovered = useRef(false);
  const manuallyPaused = useRef(false);

  const prefersReducedMotion = useReducedMotion();

  const filteredProjects = useMemo(
    () =>
      active === "All"
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === active),
    [active]
  );

  const hasMultipleCards = filteredProjects.length > 1;

  const clearResumeTimer = () => {
    if (resumeTimer.current !== null) {
      clearTimeout(resumeTimer.current);
      resumeTimer.current = null;
    }
  };

  const syncAutoplay = () => {
    const swiper = swiperRef.current;

    if (!swiper || swiper.destroyed || !swiper.autoplay) return;

    const shouldPlay =
      hasMultipleCards &&
      isVisible.current &&
      isTabVisible.current &&
      !isHovered.current &&
      !manuallyPaused.current &&
      !quickView &&
      !prefersReducedMotion &&
      !resumeTimer.current;

    if (shouldPlay) {
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }
  };

  // Reset the carousel after changing categories.
  useEffect(() => {
    clearResumeTimer();

    const swiper = swiperRef.current;

    if (!swiper || swiper.destroyed) return;

    swiper.autoplay?.stop();

    if (swiper.params.loop && hasMultipleCards) {
      swiper.slideToLoop(0, 0);
    } else {
      swiper.slideTo(0, 0);
    }

    syncAutoplay();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, hasMultipleCards]);

  useEffect(() => {
    syncAutoplay();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quickView, prefersReducedMotion]);

  // Pause autoplay when the section leaves the viewport.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
        syncAutoplay();
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pause autoplay when the browser tab is hidden.
  useEffect(() => {
    const handleVisibilityChange = () => {
      isTabVisible.current = !document.hidden;
      syncAutoplay();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () =>
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Close Quick View with Escape.
  useEffect(() => {
    if (!quickView) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setQuickView(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () =>
      document.removeEventListener("keydown", handleKeyDown);
  }, [quickView]);

  // Manage modal scrolling and restore keyboard focus.
  useEffect(() => {
    if (quickView) {
      previousFocusedElement.current = document.activeElement;
      previousOverflow.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      requestAnimationFrame(() => closeButtonRef.current?.focus());
    } else {
      document.body.style.overflow = previousOverflow.current;
      previousFocusedElement.current?.focus?.();
      previousFocusedElement.current = null;
    }

    return () => {
      document.body.style.overflow = previousOverflow.current;
    };
  }, [quickView]);

  useEffect(() => {
    return () => {
      clearResumeTimer();
      swiperRef.current?.autoplay?.stop();
      swiperRef.current = null;
    };
  }, []);

  // Previous and Next navigation.
  const navigateProjects = (direction) => {
    const swiper = swiperRef.current;

    if (!swiper || swiper.destroyed || !hasMultipleCards) return;

    clearResumeTimer();
    swiper.autoplay?.stop();

    if (direction === "prev") {
      swiper.slidePrev(500);
    } else {
      swiper.slideNext(500);
    }

    resumeTimer.current = setTimeout(() => {
      resumeTimer.current = null;
      syncAutoplay();
    }, 1200);
  };

  const toggleAutoplay = () => {
    clearResumeTimer();

    manuallyPaused.current = !manuallyPaused.current;
    setIsPlaying(!manuallyPaused.current);

    syncAutoplay();
  };

  const handleMouseEnter = () => {
    isHovered.current = true;
    syncAutoplay();
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    syncAutoplay();
  };

  const openQuickView = (project) => setQuickView(project);
  const closeQuickView = () => setQuickView(null);

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24"
      >
        {/* Background decorations */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-20 h-[350px] w-[350px] rounded-full blur-[90px] sm:h-[450px] sm:w-[450px]"
          style={{
            background:
              "radial-gradient(circle, rgba(124,92,252,.10), transparent 70%)",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 bottom-20 h-[350px] w-[350px] rounded-full blur-[90px] sm:h-[450px] sm:w-[450px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,184,212,.08), transparent 70%)",
          }}
        />

        {/* Heading and filters */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
          <div className="mb-8 flex flex-col gap-5 sm:mb-10 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="section-label">My Work</span>

              <h2
                className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Featured{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #7c5cfc, #00b8d4)",
                  }}
                >
                  Work
                </span>
              </h2>

              <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-500 sm:mt-3 sm:text-sm md:text-base">
                Digital solutions built with precision, passion, and modern
                engineering.
              </p>
            </motion.div>

            {/* Category filters */}
            <div
              className="flex w-full self-start rounded-full border border-slate-200 bg-white p-1 shadow-sm sm:w-auto sm:p-1.5 lg:self-auto"
              role="group"
              aria-label="Filter projects by category"
            >
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  aria-pressed={active === filter}
                  className={`flex-1 whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-bold transition-colors duration-200 sm:flex-initial sm:px-6 sm:text-sm ${
                    active === filter
                      ? "bg-violet-600 text-white shadow-md"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Single-card project carousel */}
        <div className="relative mx-auto w-full max-w-5xl overflow-hidden px-4 sm:px-6">
          <Swiper
            key={active}
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              syncAutoplay();
            }}
            slidesPerView={1}
            centeredSlides={false}
            loop={hasMultipleCards}
            rewind={false}
            grabCursor={hasMultipleCards}
            autoplay={
              hasMultipleCards && !prefersReducedMotion
                ? {
                    delay: 2200,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                  }
                : false
            }
            speed={500}
            spaceBetween={0}
            allowTouchMove={hasMultipleCards}
            watchOverflow
            className="!w-full"
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide
                key={project.title}
                className="!h-auto !w-full"
              >
                {/* Scroll reveal animation applied to each project card */}
                <motion.article
                  custom={index}
                  variants={projectCardVariants}
                  initial={prefersReducedMotion ? false : "hidden"}
                  whileInView="visible"
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  className="project-card group relative mx-auto aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:aspect-[16/8] sm:rounded-3xl"
                  style={{ "--accent": project.accentColor }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Website screenshot */}
                  <img
                    src={project.img}
                    alt={`${project.title} website preview`}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    decoding="async"
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />

                  {/* Bottom gradient */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-3/5 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent"
                  />

                  {/* Category and Quick View */}
                  <div className="absolute left-3 right-3 top-3 z-10 flex items-center justify-between sm:left-5 sm:right-5 sm:top-5">
                    <span className="rounded-full border border-white/25 bg-slate-900/80 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-md sm:text-[10px]">
                      {project.category}
                    </span>

                    <button
                      type="button"
                      onClick={() => openQuickView(project)}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/25 bg-slate-900/80 text-white backdrop-blur-md transition-colors hover:bg-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-10 sm:w-10"
                      aria-label={`View details for ${project.title}`}
                    >
                      <Eye size={18} />
                    </button>
                  </div>

                  {/* Project details */}
                  <div className="absolute inset-x-0 bottom-0 z-[2] p-3 sm:p-5 md:p-6">
                    <div className="mb-1.5 flex flex-wrap gap-1 sm:mb-2 sm:gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border px-1.5 py-0.5 text-[8px] font-bold text-white sm:px-2 sm:py-1 sm:text-[10px]"
                          style={{
                            background: `${project.accentColor}b3`,
                            borderColor: project.accentColor,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="mb-1 text-base font-black leading-tight text-white sm:mb-2 sm:text-xl md:text-2xl [font-family:Syne,sans-serif]">
                      {project.title}
                    </h3>

                    <p className="mb-2 line-clamp-2 max-w-xl text-[10px] leading-relaxed text-white/90 sm:mb-3 sm:text-xs md:text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-8 items-center justify-center gap-1 rounded-lg px-3 py-1.5 text-[10px] font-extrabold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:min-h-10 sm:gap-1.5 sm:rounded-xl sm:px-4 sm:py-2 sm:text-xs"
                        style={{ background: project.accentColor }}
                      >
                        Live Preview
                        <ArrowUpRight size={14} />
                      </a>

                      <button
                        type="button"
                        onClick={() => openQuickView(project)}
                        className="inline-flex min-h-8 items-center justify-center gap-1.5 rounded-lg border border-white/40 bg-slate-900/40 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:min-h-10 sm:rounded-xl sm:px-4 sm:py-2 sm:text-xs"
                        aria-label={`More details about ${project.title}`}
                      >
                        <Eye size={14} />
                        Details
                      </button>
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Carousel controls */}
        {hasMultipleCards && (
          <div className="relative z-10 mt-5 flex flex-wrap items-center justify-center gap-3 pb-3 sm:mt-6 sm:gap-4">
            <button
              type="button"
              onClick={() => navigateProjects("prev")}
              aria-label="Previous project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-200 bg-white text-violet-700 shadow-sm transition-colors hover:bg-violet-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={toggleAutoplay}
              aria-pressed={!isPlaying}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-bold text-slate-600 transition-colors hover:bg-slate-100 sm:text-xs"
            >
              {isPlaying ? "Pause motion" : "Resume motion"}
            </button>

            <span className="hidden text-[10px] font-bold tracking-[0.15em] text-slate-400 sm:inline sm:text-xs">
              EXPLORE PROJECTS
            </span>

            <button
              type="button"
              onClick={() => navigateProjects("next")}
              aria-label="Next project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-200 bg-white text-violet-700 shadow-sm transition-colors hover:bg-violet-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        )}
      </section>

      {/* Quick View modal */}
      <AnimatePresence>
        {quickView && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-[100] flex min-h-full items-center justify-center overflow-y-auto p-3 sm:p-6"
          >
            <button
              type="button"
              className="fixed inset-0 cursor-default bg-slate-950/70 backdrop-blur-sm"
              onClick={closeQuickView}
              aria-label="Close project details"
              tabIndex={-1}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, scale: 0.98, y: 10 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
              className="relative z-10 my-auto max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl sm:rounded-[28px]"
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeQuickView}
                className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-700 shadow-md transition-colors hover:bg-rose-50 hover:text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 sm:right-5 sm:top-5"
                aria-label="Close modal"
              >
                <X size={19} />
              </button>

              <div className="grid lg:grid-cols-2">
                <div className="flex min-h-[200px] items-center justify-center bg-slate-50 p-4 sm:min-h-[280px] sm:p-6 lg:min-h-[440px] lg:p-8">
                  <img
                    src={quickView.img}
                    alt={`${quickView.title} website preview`}
                    loading="eager"
                    decoding="async"
                    className="max-h-[220px] w-full rounded-xl object-contain sm:max-h-[320px] lg:max-h-[420px]"
                  />
                </div>

                <div className="flex flex-col justify-center p-5 sm:p-8 md:p-10">
                  <span
                    className="mb-3 inline-block w-fit rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      color: quickView.accentColor,
                      background: `${quickView.accentColor}15`,
                      border: `1px solid ${quickView.accentColor}30`,
                    }}
                  >
                    {quickView.category}
                  </span>

                  <h3
                    id="project-modal-title"
                    className="mb-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {quickView.title}
                  </h3>

                  <p className="mb-5 text-sm leading-relaxed text-slate-500 sm:text-base">
                    {quickView.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {quickView.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg px-3 py-1.5 text-xs font-bold"
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

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={quickView.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                      style={{
                        background:
                          "linear-gradient(135deg,#7c5cfc,#00b8d4)",
                      }}
                    >
                      Visit Project
                      <ExternalLink size={15} />
                    </a>

                    <a
                      href={quickView.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-violet-300 hover:text-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                    >
                      Source Code
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
