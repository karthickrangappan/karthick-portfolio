import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  CheckCircle2,
  CalendarDays,
  Building2,
} from "lucide-react";

export function Experience() {
  const education = [
    {
      title: "B.E Computer Science Engineering",
      institution: "Shreenivasa Engineering College, Dharmapuri",
      period: "2021 – 2025",
      result: "CGPA: 7.83",
    },
    {
      title: "HSC (Class 12)",
      institution: "Government Higher Secondary School, Krishnagiri",
      period: "2021",
      result: "Percentage: 82.6%",
    },
    {
      title: "SSLC (Class 10)",
      institution: "Government High School, Krishnagiri",
      period: "2019",
      result: "Percentage: 71.8%",
    },
  ];

  const experience = [
    {
      title: "React Developer Intern",
      company: "Qtechx Solution, Tirupattur",
      period: "Oct 2025 – Mar 2026",
      description:
        "Developed and maintained e-commerce web applications using React.js and Tailwind CSS. Integrated Firebase for authentication and real-time database operations.",
      skills: ["React 19", "Tailwind CSS", "Firebase"],
      accent: "violet",
    },
    {
      title: "Python Full Stack Intern",
      company: "QSpiders, Chennai",
      period: "Feb 2025 – Oct 2025",
      description:
        "Gained hands-on experience in Python, SQL, and frontend technologies. Built responsive UI and worked on backend integration and full-stack workflows.",
      skills: ["Python", "SQL", "Frontend"],
      accent: "cyan",
    },
    {
      title: "Web Development Intern",
      company: "AMSOL IT PVT LTD, Chennai - Tiruvallur High Road",
      period: "July 2026 – Current",
      description:
        "Developed responsive web applications using WordPress, PHP, React, and Next.js. Worked on UI/UX implementation, Tailwind CSS conversion, reusable components, navigation, page integration, and the Startup Founders Directory project.",
      skills: ["XAMPP", "WordPress", "PHP", "Next.js", "Feather.js"],
      accent: "blue",
    },

  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-28 lg:px-24 xl:px-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-100/60 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-cyan-100/50 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-12 flex flex-col items-center text-center sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-600 sm:text-xs">
              My Journey
            </span>

            <h2
              className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Journey &{" "}
              <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
          </motion.div>

          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />

          <p className="mt-5 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm md:text-base">
            A timeline of my academic milestones and professional experience.
          </p>
        </div>

        {/* TWO COLUMNS */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">

          {/* EDUCATION */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-lg shadow-violet-200">
                <GraduationCap className="h-5 w-5" />
              </div>

              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-violet-500">
                  Academic Background
                </span>
                <h3
                  className="text-xl font-black text-slate-900 sm:text-2xl"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Education
                </h3>
              </div>
            </div>

            <div className="relative space-y-5 pl-6">
              <div className="absolute bottom-4 left-[5px] top-4 w-px bg-gradient-to-b from-violet-400 to-transparent" />

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -left-[27px] top-6 z-10 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-violet-500 shadow-[0_0_0_3px_rgba(124,92,252,.12)] transition-transform group-hover:scale-125" />

                  <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,.05)] transition-all duration-500 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_20px_50px_rgba(15,23,42,.09)] sm:p-6">

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h4
                          className="text-sm font-black leading-snug text-slate-900 sm:text-base md:text-lg"
                          style={{ fontFamily: "Syne, sans-serif" }}
                        >
                          {edu.title}
                        </h4>

                        <div className="mt-2 flex gap-2 text-xs leading-5 text-slate-500 sm:text-sm">
                          <Building2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-violet-400" />
                          {edu.institution}
                        </div>
                      </div>

                      <span className="flex w-fit items-center gap-1.5 rounded-xl border border-violet-100 bg-violet-50 px-3 py-1.5 text-[10px] font-bold text-violet-600">
                        <CalendarDays className="h-3 w-3" />
                        {edu.period}
                      </span>
                    </div>

                    <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-600">
                      <CheckCircle2 className="h-4 w-4" />
                      {edu.result}
                    </div>

                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-amber-400 text-white shadow-lg shadow-pink-100">
                <Briefcase className="h-5 w-5" />
              </div>

              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-pink-500">
                  Professional Background
                </span>
                <h3
                  className="text-xl font-black text-slate-900 sm:text-2xl"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Work Experience
                </h3>
              </div>
            </div>

            <div className="relative space-y-5 pl-6">
              <div className="absolute bottom-4 left-[5px] top-4 w-px bg-gradient-to-b from-pink-400 to-transparent" />

              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -left-[27px] top-6 z-10 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-pink-500 shadow-[0_0_0_3px_rgba(255,77,141,.12)] transition-transform group-hover:scale-125" />

                  <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,.05)] transition-all duration-500 hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_20px_50px_rgba(15,23,42,.09)] sm:p-6">

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h4
                          className="text-sm font-black leading-snug text-slate-900 sm:text-base md:text-lg"
                          style={{ fontFamily: "Syne, sans-serif" }}
                        >
                          {exp.title}
                        </h4>

                        <div className="mt-2 flex items-center gap-2 text-xs text-slate-500 sm:text-sm">
                          <Building2 className="h-3.5 w-3.5 text-pink-400" />
                          {exp.company}
                        </div>
                      </div>

                      <span className="flex w-fit items-center gap-1.5 rounded-xl border border-pink-100 bg-pink-50 px-3 py-1.5 text-[10px] font-bold text-pink-600">
                        <CalendarDays className="h-3 w-3" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="mt-5 text-xs leading-6 text-slate-500 sm:text-sm">
                      {exp.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-bold text-slate-600 transition-all hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-pink-500 to-amber-400 transition-all duration-500 group-hover:w-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}