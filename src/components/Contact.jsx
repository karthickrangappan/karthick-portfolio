
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  MessageCircle,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./common/Icons";

const contactEmail = "karthickrangappan@gmail.com";
const whatsappNumber = "918825415354";

const gmailComposeUrl = (subject = "", body = "") => {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: contactEmail,
    ...(subject ? { su: subject } : {}),
    ...(body ? { body } : {}),
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
};

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
  hidden: { opacity: 0, y: 20 },
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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Open Gmail in a new tab without leaving the portfolio.
  const handleSubmit = (event) => {
    event.preventDefault();

    const subject =
      formData.subject.trim() ||
      `Portfolio contact from ${formData.name}`;

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");

    window.open(
      gmailComposeUrl(subject, body),
      "_blank",
      "noopener,noreferrer"
    );
  };

  const contactInfo = [
    {
      title: "Office Location",
      value: "Tamil Nadu, India",
      icon: <MapPin className="h-5 w-5" />,
      gradient: "linear-gradient(135deg, #7c5cfc, #00e5ff)",
      glow: "rgba(124,92,252,0.25)",
      link: null,
    },
    {
      title: "Direct Email",
      value: contactEmail,
      icon: <Mail className="h-5 w-5" />,
      gradient: "linear-gradient(135deg, #f5a623, #ff4d8d)",
      glow: "rgba(245,166,35,0.25)",
      link: gmailComposeUrl(),
      external: true,
    },
    {
      title: "GitHub",
      value: "github.com/karthickrangappan",
      icon: <GithubIcon className="h-5 w-5" />,
      gradient: "linear-gradient(135deg, #7c5cfc, #00e5ff)",
      glow: "rgba(124,92,252,0.25)",
      link: "https://github.com/karthickrangappan",
      external: true,
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/karthick-r-270318v",
      icon: <LinkedinIcon className="h-5 w-5" />,
      gradient: "linear-gradient(135deg, #0a66c2, #0077b5)",
      glow: "rgba(10,102,194,0.25)",
      link:
        "https://www.linkedin.com/in/karthick-r-270318v?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      external: true,
    },
    {
      title: "Phone",
      value: "+91 8825415354",
      icon: <Phone className="h-5 w-5" />,
      gradient: "linear-gradient(135deg, #00e5ff, #7c5cfc)",
      glow: "rgba(0,229,255,0.25)",
      link: "tel:+918825415354",
      external: false,
    },
    {
      title: "WhatsApp",
      value: "+91 8825415354",
      icon: <MessageCircle className="h-5 w-5" />,
      gradient: "linear-gradient(135deg, #25d366, #16a34a)",
      glow: "rgba(37,211,102,0.25)",
      link: `https://wa.me/${whatsappNumber}`,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 lg:py-24 xl:px-24"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 h-[350px] w-[350px] rounded-full blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(124,92,252,.12), transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-10 h-[350px] w-[350px] rounded-full blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,.10), transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,92,252,.5), rgba(0,229,255,.4), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center sm:mb-10 md:mb-12"
        >
          <div className="mb-3 flex justify-center sm:mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-600 sm:px-4 sm:py-2 sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              Let's Connect
            </span>
          </div>

          <h2
            className="text-3xl font-black tracking-[-0.03em] text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Get In{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg,#7c5cfc,#00e5ff)",
              }}
            >
              Touch
            </span>
          </h2>

          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full sm:mt-5 sm:w-20"
            style={{
              background: "linear-gradient(90deg,#7c5cfc,#00e5ff)",
            }}
          />

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-500 sm:mt-4 sm:text-sm md:text-base">
            Have a project in mind, an exciting idea, or simply want to
            connect? I'd love to hear from you and explore how we can build
            something meaningful together.
          </p>
        </motion.div>

        {/* Contact cards and form */}
        <div className="grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8 xl:gap-10">
          {/* Contact information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-1"
          >
            {contactInfo.map((info) => {
              const cardContent = (
                <>
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
                    style={{ background: info.gradient }}
                  />

                  <div className="relative flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      {/* Icon */}
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11 sm:rounded-2xl"
                        style={{
                          background: info.gradient,
                          boxShadow: `0 6px 20px ${info.glow}`,
                        }}
                      >
                        {info.icon}
                      </div>

                      {/* Contact details */}
                      <div className="min-w-0">
                        <p className="mb-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
                          {info.title}
                        </p>

                        <p
                          title={info.value}
                          className="truncate text-xs font-semibold text-slate-700 transition-colors duration-200 group-hover:text-violet-600 sm:text-sm"
                        >
                          {info.value}
                        </p>
                      </div>
                    </div>

                    {info.link && (
                      <ExternalLink
                        aria-hidden="true"
                        className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-colors group-hover:text-violet-500"
                      />
                    )}
                  </div>
                </>
              );

              return (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  className="min-w-0"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.external ? "_blank" : undefined}
                      rel={
                        info.external ? "noopener noreferrer" : undefined
                      }
                      aria-label={`Open ${info.title}: ${info.value}`}
                      className="group relative block min-h-[74px] w-full overflow-hidden rounded-xl border border-slate-200/90 bg-white p-3 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/60 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 sm:min-h-[80px] sm:rounded-2xl sm:p-3.5"
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <div className="relative min-h-[74px] overflow-hidden rounded-xl border border-slate-200/90 bg-white p-3 shadow-sm sm:min-h-[80px] sm:rounded-2xl sm:p-3.5">
                      {cardContent}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Compact contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 shadow-[0_15px_45px_rgba(15,23,42,.06)] sm:rounded-[2rem] sm:p-6 md:p-7 lg:p-8"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full blur-3xl"
              style={{ background: "rgba(124,92,252,.07)" }}
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full blur-3xl"
              style={{ background: "rgba(0,229,255,.06)" }}
            />

            <div className="relative z-10">
              {/* Centered mail icon and heading */}
              <div className="mb-4 text-center sm:mb-5">
                <div
                  className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl sm:h-11 sm:w-11"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(124,92,252,.12),rgba(0,229,255,.10))",
                    color: "#7c5cfc",
                  }}
                >
                  <Mail className="h-5 w-5" />
                </div>

                <h3
                  className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl md:text-3xl"
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

                <p className="mt-1.5 text-xs leading-relaxed text-slate-400 sm:text-sm">
                  Tell me about your project, and I'll get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {/* Name and email */}
                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:text-xs"
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
                      autoComplete="name"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:text-xs"
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
                      autoComplete="email"
                      placeholder="name@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:text-xs"
                  >
                    Subject{" "}
                    <span className="text-[10px] font-normal normal-case tracking-normal text-slate-400">
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
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:text-xs"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project, goals, or questions..."
                    className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs leading-relaxed text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2.5 rounded-xl px-5 py-3 text-xs font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98] sm:text-sm"
                  style={{
                    background: "linear-gradient(135deg,#7c5cfc,#6366f1)",
                    boxShadow: "0 10px 25px rgba(124,92,252,.22)",
                  }}
                >
                  Open Gmail to Send
                  <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <p className="text-center text-[11px] text-slate-400 sm:text-xs">
                  Gmail opens in a new tab with your message ready to send.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
