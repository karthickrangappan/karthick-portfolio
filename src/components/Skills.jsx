"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Gauge,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function Skills() {
  const techStack = [
    "React.js",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Feathers.js",
    "Python",
    "SQLite",
    "Oracle SQL",
    "Firebase",
    "Git",
    "GitHub",
    "WordPress",
    "PHP",
    "XAMPP",
    "SEO",
    "Vite",
    "Framer Motion",
  ];

  const skillGroups = [
    {
      title: "Frontend Development",
      subtitle: "Modern responsive interfaces",
      icon: <Layout className="h-5 w-5" />,
      skills: [
        "HTML5",
        "CSS3",
        "React.js",
        "Next.js",
        "JavaScript",
        "Vite",
        "Tailwind CSS",
        "Responsive UI",
        
      ],
      iconBg:
        "bg-gradient-to-br from-violet-500 to-cyan-400",
      iconShadow:
        "shadow-[0_10px_30px_rgba(124,92,252,0.25)]",
    },

    {
      title: "Backend & APIs",
      subtitle: "Server-side logic & integration",
      icon: <Server className="h-5 w-5" />,
      skills: [
        "Python",
        "Node.js",
        "Feathers.js",
        "PHP",
        "WordPress",
      ],
      iconBg:
        "bg-gradient-to-br from-amber-400 to-pink-500",
      iconShadow:
        "shadow-[0_10px_30px_rgba(245,166,35,0.22)]",
    },

    {
      title: "Database & Web",
      subtitle: "Data management & web platforms",
      icon: <Database className="h-5 w-5" />,
      skills: [
        "SQLite",
        "Oracle SQL",
        "Firebase",
        "SEO",
        "XAMPP",
        "Database Management",
        
      ],
      iconBg:
        "bg-gradient-to-br from-cyan-400 to-violet-500",
      iconShadow:
        "shadow-[0_10px_30px_rgba(0,207,232,0.22)]",
    },

    {
      title: "Development Tools",
      subtitle: "Workflow & project development",
      icon: <Gauge className="h-5 w-5" />,
      skills: [
        "Git / GitHub",
        "VS Code",
        "npm",
        "Debugging",
        "Testing",
        "Deployment",
      ],
      iconBg:
        "bg-gradient-to-br from-pink-500 to-amber-400",
      iconShadow:
        "shadow-[0_10px_30px_rgba(255,77,141,0.20)]",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-white
        px-4
        py-20
        sm:px-6
        sm:py-24
        md:px-12
        md:py-28
        lg:px-24
        lg:py-32
        xl:px-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-[400px]
          w-[400px]
          rounded-full
          bg-violet-200/30
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
          h-[400px]
          w-[400px]
          rounded-full
          bg-cyan-200/25
          blur-[120px]
        "
      />

      {/* =====================================================
          SUBTLE GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.25]
          [background-image:linear-gradient(rgba(15,23,42,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.025)_1px,transparent_1px)]
          [background-size:50px_50px]
        "
      />

      {/* =====================================================
          TOP GRADIENT LINE
      ===================================================== */}

      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-violet-400/50
          to-transparent
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center sm:mb-16 md:mb-20"
        >
          {/* LABEL */}

          <div className="mb-4 flex justify-center">
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-violet-200
                bg-violet-50
                px-4
                py-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-violet-600
                sm:text-xs
              "
            >
              <Sparkles className="h-3.5 w-3.5" />

              What I Know
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              text-4xl
              font-black
              tracking-[-0.04em]
              text-slate-900
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              [font-family:Syne,sans-serif]
            "
          >
            My{" "}
            <span
              className="
                bg-gradient-to-r
                from-violet-500
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              Skills
            </span>
          </h2>

          {/* ACCENT */}

          <div
            className="
              mx-auto
              mt-5
              h-1
              w-20
              rounded-full
              bg-gradient-to-r
              from-violet-500
              to-cyan-400
            "
          />

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
              [font-family:'DM_Sans',sans-serif]
            "
          >
            Technologies and development practices I have learned
            and applied through real-world projects, internship
            experience, and continuous hands-on development.
          </p>
        </motion.div>

        {/* ===================================================
            SKILL CARDS
        =================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-80px",
          }}
          className="
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                p-6
                shadow-[0_12px_40px_rgba(15,23,42,0.055)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-slate-300
                hover:shadow-[0_25px_70px_rgba(15,23,42,0.11)]
                sm:p-7
              "
            >
              {/* CARD HOVER GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-violet-200/40
                  opacity-0
                  blur-3xl
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  TOP ROW
              ================================================= */}

              <div
                className="
                  relative
                  flex
                  items-center
                  justify-center
                "
              >
                {/* ICON */}

                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    text-white
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-3
                    ${group.iconBg}
                    ${group.iconShadow}
                  `}
                >
                  {group.icon}
                </div>

                {/* NUMBER */}

                <span
                  className="
                    text-[11px]
                    font-black
                    tracking-[0.15em]
                    text-slate-300
                    transition-colors
                    duration-300
                    group-hover:text-slate-400
                    [font-family:Syne,sans-serif]
                  "
                >
                  {group.number}
                </span>
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="relative mt-6">

                {/* LABEL */}

                <p
                  className="
                    flex
                    items-center
                    justify-center
                    mb-2
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-violet-500
                  "
                >
                  Expertise
                </p>

                {/* TITLE */}

                <h3
                  className="
                    text-xl
                    font-black
                    tracking-tight
                    text-slate-900
                    sm:text-[21px]
                    [font-family:Syne,sans-serif]
                  "
                >
                  {group.title}
                </h3>

                {/* SUBTITLE */}

                <p
                  className="
                    mt-2
                    text-xs
                    leading-5
                    text-slate-400
                    [font-family:'DM_Sans',sans-serif]
                  "
                >
                  {group.subtitle}
                </p>
              </div>

              {/* DIVIDER */}

              <div
                className="
                  my-6
                  h-px
                  w-full
                  bg-slate-100
                "
              />

              {/* =================================================
                  TECHNOLOGIES
              ================================================= */}

              <div className="relative">

                <p
                  className="
                    mb-3
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-slate-400
                  "
                >
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">

                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        cursor-default
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-3
                        py-2
                        text-[10px]
                        font-semibold
                        text-slate-600
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-violet-200
                        hover:bg-violet-50
                        hover:text-violet-600
                        [font-family:'DM_Sans',sans-serif]
                      "
                    >
                      {skill}
                    </span>
                  ))}

                </div>
              </div>

              {/* =================================================
                  BOTTOM GRADIENT
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  w-0
                  bg-gradient-to-r
                  from-violet-500
                  to-cyan-400
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />

              {/* CORNER DECORATION */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  right-0
                  h-24
                  w-24
                  rounded-tl-full
                  bg-gradient-to-br
                  from-violet-500
                  to-cyan-400
                  opacity-[0.035]
                "
              />

            </motion.div>
          ))}
        </motion.div>

        {/* ===================================================
            TECHNOLOGY HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-16
            flex
            items-end
            justify-between
            gap-4
            sm:mt-20
          "
        >
          <div>

            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-slate-400
              "
            >
              Technologies
            </p>

            <h3
              className="
                mt-1
                text-xl
                font-black
                text-slate-900
                [font-family:Syne,sans-serif]
              "
            >
              Tools I Work With
            </h3>

          </div>

          {/* STATUS */}

          <div
            className="
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-emerald-200
              bg-emerald-50
              px-3
              py-1.5
              sm:flex
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                animate-pulse
                rounded-full
                bg-emerald-500
              "
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-wider
                text-emerald-600
              "
            >
              Always Learning
            </span>
          </div>

        </motion.div>

        {/* ===================================================
            TECHNOLOGY MARQUEE
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            mt-5
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            py-4
            shadow-[0_8px_30px_rgba(15,23,42,.04)]
          "
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >

          <motion.div
            className="
              flex
              w-max
              items-center
            "
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              ease: "linear",
              duration: 28,
              repeat: Infinity,
            }}
          >
            {[...techStack, ...techStack].map(
              (tech, index) => (
                <div
                  key={`${tech}-${index}`}
                  className="
                    mr-3
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-2.5
                    transition-all
                    duration-300
                    hover:border-violet-200
                    hover:bg-violet-50
                    sm:mr-4
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-gradient-to-r
                      from-violet-500
                      to-cyan-400
                    "
                  />

                  <span
                    className="
                      whitespace-nowrap
                      text-[10px]
                      font-bold
                      text-slate-600
                      sm:text-xs
                      [font-family:'DM_Sans',sans-serif]
                    "
                  >
                    {tech}
                  </span>
                </div>
              )
            )}
          </motion.div>

        </motion.div>

        {/* ===================================================
            STATS
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-8
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-4
          "
        >

          {[
            ["18+", "Technologies"],
            ["4", "Core Areas"],
            ["Real-World", "Projects"],
            ["Always", "Learning"],
          ].map(([number, label]) => (

            <div
              key={label}
              className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-4
                py-5
                text-center
                shadow-[0_8px_25px_rgba(15,23,42,.04)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_15px_35px_rgba(15,23,42,.08)]
              "
            >

              <div
                className="
                  bg-gradient-to-r
                  from-violet-500
                  to-cyan-400
                  bg-clip-text
                  text-xl
                  font-black
                  text-transparent
                  [font-family:Syne,sans-serif]
                "
              >
                {number}
              </div>

              <p
                className="
                  mt-1
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-slate-400
                "
              >
                {label}
              </p>

            </div>

          ))}

        </motion.div>

        {/* ===================================================
            FINAL MESSAGE
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-8
            flex
            flex-col
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-violet-100
            bg-gradient-to-r
            from-violet-50
            via-white
            to-cyan-50
            px-5
            py-4
            text-center
            sm:flex-row
          "
        >

          <CheckCircle2
            className="
              h-5
              w-5
              flex-shrink-0
              text-violet-500
            "
          />

          <p
            className="
              text-xs
              font-medium
              text-slate-600
              sm:text-sm
              [font-family:'DM_Sans',sans-serif]
            "
          >
            Continuously learning,
            experimenting, and improving
            my development skills.
          </p>

        </motion.div>

      </div>
    </section>
  );
}