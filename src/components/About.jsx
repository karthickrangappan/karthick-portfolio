import { motion } from "framer-motion";
import {
  User,
  Mail,
  MapPin,
  Briefcase,
  Calendar,
  Smartphone,
} from "lucide-react";

export function About() {
  const aboutData = {
    name: "Karthick R",
    title: "Full Stack Developer",
    description:
      "A creative and detail-oriented Full Stack Developer with a strong focus on building premium user experiences. I bridge the gap between complex logic and beautiful design, ensuring every pixel serves a purpose.",
    image: "/profile2.png",
    details: [
      {
        label: "Birthday",
        value: "Dec 27, 2003",
        icon: <Calendar className="h-4 w-4" />,
      },
      {
        label: "Age",
        value: "22 Years",
        icon: <User className="h-4 w-4" />,
      },
      {
        label: "City",
        value: "Chennai, India",
        icon: <MapPin className="h-4 w-4" />,
      },
      {
        label: "Degree",
        value: "BE CSE",
        icon: <Briefcase className="h-4 w-4" />,
      },
      {
        label: "Mail",
        value: "karthickrangappan@gmail.com",
        icon: <Mail className="h-4 w-4" />,
      },
      {
        label: "Phone",
        value: "+91 8825415354",
        icon: <Smartphone className="h-4 w-4" />,
      },
    ],
  };

  const { name, title, description, image, details } = aboutData;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-28 lg:px-24 lg:py-32 xl:px-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-100/60 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-cyan-100/50 blur-[100px]" />

      {/* Top line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <div className="mb-10 flex flex-col items-center sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-600 sm:text-xs">
              Who I am
            </span>

            <h2
              className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              About{" "}
              <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
          </motion.div>

          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
        </div>

        {/* MAIN CONTENT */}
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12 lg:gap-16">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center md:col-span-5"
          >
            <div className="group relative">

              {/* Glow */}
              <div className="absolute -inset-8 rounded-full bg-violet-200/40 opacity-60 blur-3xl transition-all duration-700 group-hover:opacity-90" />

              {/* Top decoration */}
              <div className="absolute -right-4 -top-4 z-20 h-20 w-20 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-400/20 blur-sm" />

              {/* Bottom decoration */}
              <div className="absolute -bottom-4 -left-4 z-20 h-20 w-20 rounded-full bg-gradient-to-br from-pink-400/20 to-amber-300/20 blur-sm" />

              {/* Image container */}
              <div className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-white bg-white shadow-[0_25px_70px_rgba(15,23,42,.12)]">

                <img
                  src={image}
                  alt={name}
                  className="h-[360px] w-[300px] object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[430px] sm:w-[350px] lg:h-[500px] lg:w-[400px]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-violet-500/10 opacity-60" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-5 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-2xl border border-white bg-white px-4 py-2.5 text-xs font-bold text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,.12)]"
              >
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.7)]" />
                Available for Work
              </motion.div>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,.06)] sm:p-8 md:p-10">

              {/* Card glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-100/70 blur-3xl" />

              <div className="relative">

                {/* INTRO */}
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-violet-500">
                  Full Stack Developer
                </span>

                <h3
                  className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Hello, I'm{" "}
                  <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                    {name}
                  </span>
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                  {description}
                </p>

                {/* DIVIDER */}
                <div className="my-7 h-px bg-gradient-to-r from-violet-100 via-slate-100 to-transparent" />

                {/* DETAILS */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  {details.map((item, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50/50"
                    >

                      {/* ICON */}
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white text-violet-500 shadow-sm ring-1 ring-slate-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-violet-50">
                        {item.icon}
                      </div>

                      <div className="min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                          {item.label}
                        </p>

                        <p className="mt-0.5 break-words text-xs font-semibold text-slate-700 sm:text-sm">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}

                </div>

                {/* BUTTONS */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                  <a
                    href="/Karthick_R.pdf"
                    download
                    className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-violet-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-200 sm:px-8 sm:text-sm"
                  >
                    Download CV
                    <span className="transition-transform duration-300 group-hover:translate-y-1">
                      ↓
                    </span>
                  </a>

                  <a
                    href="#contact"
                    className="group flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-xs font-bold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 sm:px-8 sm:text-sm"
                  >
                    Get in Touch
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>

                </div>

              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-violet-500 via-cyan-400 to-transparent" />

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}