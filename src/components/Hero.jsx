import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./common/Icons";
import { Mail } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section id="home" className="bg-white min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 lg:px-24 xl:px-32 overflow-hidden relative">
      {/* Decorative top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(124,92,252,0.5), rgba(0,229,255,0.3), transparent)' }}></div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

        {/* LEFT - IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center order-2 md:order-1"
        >
          <div className="relative group">
            {/* Outer glow rings */}
            <div className="absolute -inset-8 rounded-full opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(124,92,252,0.4), transparent)', filter: 'blur(30px)', animation: 'blob 6s infinite' }}></div>
            <div className="absolute -inset-4 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.4), transparent)', filter: 'blur(20px)', animation: 'blob 8s infinite 2s' }}></div>

            {/* Rotating border ring */}
            <div className="absolute inset-0 rounded-full p-1" style={{
              background: 'conic-gradient(from 0deg, #7c5cfc, #00e5ff, #7c5cfc)',
              animation: 'spin 8s linear infinite',
              borderRadius: '50%',
              padding: '3px'
            }}>
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-full"
              style={{
                padding: '3px',
                background: 'conic-gradient(from 0deg, #7c5cfc, #00e5ff, #7c5cfc)',
                boxShadow: '0 0 60px rgba(124,92,252,0.4), 0 0 120px rgba(0,229,255,0.15)'
              }}
            >
              <div className="rounded-full overflow-hidden p-[3px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <img
                  src="/profile1.png"
                  alt="Karthick R"
                  className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover rounded-full border-4 border-white shadow-[0_30px_80px_rgba(124,92,252,0.22)] group-hover:scale-105 transition-transform duration-700"
                  style={{ filter: 'brightness(1.08) contrast(1.12) saturate(1.12)' }}
                />
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            className="absolute -right-4 top-8 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-2xl text-[9px] sm:text-[10px] lg:text-[11px] font-bold flex items-center gap-1 sm:gap-1.5"
              style={{ background: '#ffffff', border: '1px solid rgba(0,229,255,0.3)', color: '#00bcd4', boxShadow: '0 4px 20px rgba(0,229,255,0.15)' }}
            >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Work
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
            className="absolute -left-6 bottom-10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-2xl text-[9px] sm:text-[10px] lg:text-[11px] font-bold"
              style={{ background: '#ffffff', border: '1px solid rgba(124,92,252,0.3)', color: '#7c5cfc', boxShadow: '0 4px 20px rgba(124,92,252,0.15)' }}
            >
              ⚡ Full Stack Developer
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT - CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left order-1 md:order-2"
        >
          <motion.div variants={itemVariants}>
            <span className="section-label text-black" style={{ color: 'black' }}>Full Stack Developer</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-black tracking-tight mb-4 mt-3 leading-[0.95] text-blue-600"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            I'm{" "}
            <span className="text-gradient">Karthick</span>
            <br />
            <span className="text-gradient">Rangappan</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="divider-gradient mb-6 max-w-xs md:ml-0 mx-auto"></motion.div>

          <motion.p variants={itemVariants} className="text-xs sm:text-sm md:text-base max-w-xl leading-relaxed mb-8 sm:mb-10 mx-auto md:mx-0" style={{ color: '#475569', fontFamily: 'DM Sans, sans-serif' }}>
            A passionate Full Stack Developer dedicated to crafting{" "}
            <span style={{ color: '#a78bfa' }}>high-performance</span>,{" "}
            <span style={{ color: '#00e5ff' }}>visually stunning</span>, and user-centric web experiences that make a real impact.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mb-8 sm:mb-10">
            <a href="#contact" className="btn-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-center text-xs sm:text-sm md:text-base">
              Start a Project →
            </a>
            <a
              href="/Karthick_R.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-center text-xs sm:text-sm md:text-base cursor-pointer transition-all duration-200 hover:scale-105"
            >
              View Resume ↗
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 mb-8">
            {[
              { num: "6", label: "Months Exp." },
              { num: "10+", label: "Projects" },
              { num: "100%", label: "Dedication" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="font-black text-lg sm:text-xl md:text-2xl" style={{ fontFamily: 'Syne, sans-serif', background: 'linear-gradient(135deg, #7c5cfc, #00e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.num}</div>
                <div className="text-xs font-medium" style={{ color: '#64748b', letterSpacing: '0.1em' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div variants={itemVariants} className="flex justify-center md:justify-start gap-3">
            {[
              { Icon: GithubIcon, href: "https://github.com/karthickrangappan" },
              { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/karthick-r-270318v?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
              { Icon: Mail, href: "mailto:karthickrangappan@gmail.com" }
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(124,92,252,0.1)', border: '1px solid rgba(124,92,252,0.2)', color: '#a78bfa' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(124,92,252,0.25)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(124,92,252,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(124,92,252,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs section-label">scroll down</span>
        <div className="w-px h-8 animate-bounce" style={{ background: 'linear-gradient(to bottom, rgba(124,92,252,0.8), transparent)' }}></div>
      </motion.div> */}
    </section>
  );
}
