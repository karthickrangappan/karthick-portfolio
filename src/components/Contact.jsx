import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./common/Icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  /* =========================================================
     FORM CHANGE
  ========================================================= */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* =========================================================
     FORM SUBMIT
  ========================================================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }

    setTimeout(() => {
      setStatus("");
    }, 4000);
  };

  /* =========================================================
     WHATSAPP ICON
  ========================================================= */
  const WhatsAppIcon = () => (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 sm:h-7 sm:w-7 fill-white"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2a9.937 9.937 0 0 0-8.497 15.16L2 22l4.992-1.47A10.003 10.003 0 1 0 12.004 2zm0 18.265a8.263 8.263 0 0 1-4.214-1.153l-.302-.18-2.963.873.885-2.886-.197-.313A8.265 8.265 0 1 1 12.004 20.265z" />
    </svg>
  );

  /* =========================================================
     CONTACT DATA
  ========================================================= */
  const contactInfo = [
    {
      title: "Office Location",
      value: "Tamil Nadu, India",
      icon: <MapPin className="h-4 sm:h-5 w-4 sm:w-5" />,
      gradient: "linear-gradient(135deg, #7c5cfc, #00e5ff)",
      glow: "rgba(124,92,252,0.25)",
    },
    {
      title: "Direct Email",
      value: "karthickrangappan@gmail.com",
      icon: <Mail className="h-4 sm:h-5 w-4 sm:w-5" />,
      gradient: "linear-gradient(135deg, #f5a623, #ff4d8d)",
      glow: "rgba(245,166,35,0.25)",
      link: "mailto:karthickrangappan@gmail.com",
    },
    {
      title: "GitHub",
      value: "github.com/karthickrangappan",
      icon: <GithubIcon className="h-4 sm:h-5 w-4 sm:w-5" />,
      gradient: "linear-gradient(135deg, #7c5cfc, #00e5ff)",
      glow: "rgba(124,92,252,0.25)",
      link: "https://github.com/karthickrangappan",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/karthick-r-270318v",
      icon: <LinkedinIcon className="h-4 sm:h-5 w-4 sm:w-5" />,
      gradient: "linear-gradient(135deg, #0a66c2, #0077b5)",
      glow: "rgba(10,102,194,0.25)",
      link: "https://www.linkedin.com/in/karthick-r-270318v?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      title: "Phone & WhatsApp",
      value: "+91 8825415354",
      icon: <Phone className="h-4 sm:h-5 w-4 sm:w-5" />,
      gradient: "linear-gradient(135deg, #00e5ff, #7c5cfc)",
      glow: "rgba(0,229,255,0.25)",
      link: "tel:+918825415354",
    },
  ];

  return (
    <>
      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}
      <section
        id="contact"
        className="relative overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16 lg:py-28 xl:px-24"
      >
        {/* BACKGROUND GLOWS */}
        <div
          className="pointer-events-none absolute -left-48 top-20 h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full blur-[100px] sm:blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(124,92,252,.12), transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -right-48 bottom-10 h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full blur-[100px] sm:blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,229,255,.10), transparent 70%)",
          }}
        />

        {/* TOP DIVIDER LINE */}
        <div
          className="absolute left-0 right-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(124,92,252,.5), rgba(0,229,255,.4), transparent)",
          }}
        />

        {/* MAIN CONTAINER */}
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center sm:mb-14 md:mb-16"
          >
            {/* BADGE */}
            <div className="mb-3 sm:mb-4 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
                <Sparkles className="h-3 sm:h-3.5 w-3 sm:w-3.5" />
                Let's Connect
              </span>
            </div>

            {/* TITLE */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-slate-900"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Get In{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg,#7c5cfc,#00e5ff)",
                }}
              >
                Touch
              </span>
            </h2>

            {/* TITLE ACCENT LINE */}
            <div
              className="mx-auto mt-4 sm:mt-5 h-1 w-16 sm:w-20 rounded-full"
              style={{
                background: "linear-gradient(90deg,#7c5cfc,#00e5ff)",
              }}
            />

            {/* SUBTITLE */}
            <p
              className="mx-auto mt-3 sm:mt-5 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-slate-500"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Have a project in mind, an exciting idea, or simply want to
              connect? I'd love to hear from you and explore how we can build
              something meaningful together.
            </p>
          </motion.div>

          {/* MAIN GRID */}
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 xl:gap-14 items-start">
            {/* LEFT COLUMN: INFO CARDS & WHATSAPP BANNER */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* CONTACT INFO SUB-GRID: 1 col on mobile, 2 col on tablet, 1 col on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-violet-300/60"
                  >
                    {/* CARD HOVER GLOW */}
                    <div
                      className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-400 group-hover:opacity-40"
                      style={{ background: info.gradient }}
                    />

                    <div className="relative flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                        {/* ICON */}
                        <div
                          className="flex h-11 w-11 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-xl sm:rounded-2xl text-white shadow-md transition-transform duration-300 group-hover:scale-105"
                          style={{
                            background: info.gradient,
                            boxShadow: `0 6px 20px ${info.glow}`,
                          }}
                        >
                          {info.icon}
                        </div>

                        {/* TEXT */}
                        <div className="min-w-0">
                          <p className="mb-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                            {info.title}
                          </p>
                          {info.link ? (
                            <a
                              href={info.link}
                              target={
                                info.link.startsWith("mailto:") ||
                                info.link.startsWith("tel:")
                                  ? undefined
                                  : "_blank"
                              }
                              rel={
                                info.link.startsWith("mailto:") ||
                                info.link.startsWith("tel:")
                                  ? undefined
                                  : "noopener noreferrer"
                              }
                              title={info.value}
                              className="block truncate text-xs sm:text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-violet-600"
                              style={{ fontFamily: "DM Sans, sans-serif" }}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p
                              title={info.value}
                              className="truncate text-xs sm:text-sm font-semibold text-slate-700"
                              style={{ fontFamily: "DM Sans, sans-serif" }}
                            >
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* EXTERNAL LINK ICON */}
                      {info.link && (
                        <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 text-slate-300 transition-colors group-hover:text-violet-500" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WHATSAPP CTA BOX */}
              <motion.div
                variants={itemVariants}
                className="group relative mt-4 sm:mt-5 overflow-hidden rounded-2xl sm:rounded-[2rem] border border-slate-700/60 p-5 sm:p-7 md:p-8"
                style={{
                  background:
                    "linear-gradient(145deg, #0f172a 0%, #172033 55%, #111827 100%)",
                  boxShadow: "0 20px 60px rgba(15,23,42,.15)",
                }}
              >
                {/* AMBIENT GLOWS */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-25 blur-3xl transition-all duration-700 group-hover:opacity-45"
                  style={{
                    background:
                      "radial-gradient(circle, #22c55e, transparent 70%)",
                  }}
                />
                <div
                  className="pointer-events-none absolute -bottom-20 -left-16 h-36 w-36 rounded-full opacity-20 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, #7c5cfc, transparent 70%)",
                  }}
                />

                {/* SUBTLE GRID */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* CONTENT */}
                <div className="relative z-10">
                  {/* TOP ROW */}
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className="flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-xl sm:rounded-2xl transition-all duration-400 group-hover:scale-105"
                      style={{
                        background:
                          "linear-gradient(135deg, #25D366, #16a34a)",
                        boxShadow: "0 10px 25px rgba(37,211,102,.25)",
                      }}
                    >
                      <WhatsAppIcon />
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 sm:px-3 py-1 sm:py-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.8)] animate-pulse" />
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-300">
                        Available
                      </span>
                    </div>
                  </div>

                  {/* HEADING */}
                  <div className="mt-4 sm:mt-5">
                    <h4
                      className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      Need a quick chat?
                    </h4>
                    <p
                      className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-slate-400"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      Have a quick question or want to discuss an idea? Let's connect directly on WhatsApp.
                    </p>
                  </div>

                  {/* DIVIDER */}
                  <div className="my-4 sm:my-5 h-px w-full bg-gradient-to-r from-emerald-400/30 via-slate-600/30 to-transparent" />

                  {/* BOTTOM INFO & ACTION */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-white/5 text-slate-300">
                        <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                          Direct Message
                        </p>
                        <p className="text-xs font-semibold text-slate-200">
                          Usually replies quickly
                        </p>
                      </div>
                    </div>

                    <a
                      href="https://wa.me/918825415354"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/chat inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                      style={{
                        background:
                          "linear-gradient(135deg, #25D366, #16a34a)",
                        boxShadow: "0 8px 20px rgba(37,211,102,.2)",
                      }}
                    >
                      <span>Start a conversation</span>
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover/chat:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] border border-slate-200/90 bg-white p-5 sm:p-7 md:p-9 lg:p-10 shadow-[0_20px_60px_rgba(15,23,42,.06)]"
            >
              {/* SUBTLE CORNER GLOWS */}
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full blur-3xl"
                style={{ background: "rgba(124,92,252,.07)" }}
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full blur-3xl"
                style={{ background: "rgba(0,229,255,.06)" }}
              />

              <div className="relative z-10">
                {/* FORM HEADER */}
                <div className="mb-6 sm:mb-8">
                  <div
                    className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg,rgba(124,92,252,.12),rgba(0,229,255,.10))",
                      color: "#7c5cfc",
                    }}
                  >
                    <Mail className="h-5 w-5" />
                  </div>

                  <h3
                    className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-900"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    Send me a{" "}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg,#7c5cfc,#00e5ff)",
                      }}
                    >
                      message
                    </span>
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                    Tell me a little about your project and I'll get back to you shortly.
                  </p>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* NAME + EMAIL */}
                  <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                    {/* NAME */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] text-slate-500"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] text-slate-500"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="name@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                      />
                    </div>
                  </div>

                  {/* SUBJECT */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="block text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] text-slate-500"
                    >
                      Subject
                      <span className="ml-1 text-[10px] font-normal normal-case tracking-normal text-slate-400">
                        (Optional)
                      </span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] text-slate-500"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project, goals, or questions..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm leading-relaxed text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                    />
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group flex w-full items-center justify-center gap-2.5 rounded-xl px-5 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-98 disabled:cursor-not-allowed disabled:opacity-60"
                    style={{
                      background: "linear-gradient(135deg,#7c5cfc,#6366f1)",
                      boxShadow: "0 10px 25px rgba(124,92,252,.22)",
                    }}
                  >
                    {status === "loading"
                      ? "Sending..."
                      : status === "success"
                      ? "Message Sent!"
                      : "Send Message"}

                    {status === "loading" && (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    )}

                    {status === "" && (
                      <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}

                    {status === "success" && <CheckCircle2 className="h-4 w-4" />}
                  </button>

                  {/* FEEDBACK NOTICES */}
                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center gap-2 text-center text-xs font-semibold text-emerald-500"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      Thanks for reaching out! I'll get back to you soon.
                    </motion.p>
                  )}

                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-xs font-semibold text-red-500"
                    >
                      Failed to send message. Please try again or reach out on WhatsApp.
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REDUCED MOTION */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}