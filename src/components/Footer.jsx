import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./common/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-10 md:py-16 relative overflow-hidden">
      <div className="divider-gradient mb-8 sm:mb-12"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="grid md:grid-cols-3 items-center gap-8 sm:gap-10 lg:gap-12 text-center md:text-left">

          <div className="space-y-4">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-black text-white text-base sm:text-lg"
                style={{ background: 'linear-gradient(135deg, #7c5cfc, #00e5ff)', boxShadow: '0 0 20px rgba(124,92,252,0.4)' }}>
                K
              </div>
              <span className="font-black text-base sm:text-lg md:text-xl text-gradient" style={{ fontFamily: 'Syne, sans-serif' }}>Karthick R</span>
            </div>
            <p className="text-[10px] sm:text-xs md:text-sm leading-relaxed max-w-xs mx-auto md:mx-0" style={{ color: '#475569', fontFamily: 'DM Sans, sans-serif' }}>
              Passionate Full Stack Developer dedicated to creating immersive and performant digital experiences.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:gap-5">
            <div className="flex items-center gap-3">
              {[
                { icon: <GithubIcon className="w-4 h-4" />, href: "https://github.com/karthickrangappan" },
                { icon: <LinkedinIcon className="w-4 h-4" />, href: "https://www.linkedin.com/in/karthick-r-270318v?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                { icon: <Mail className="w-4 h-4" />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=karthickrangappan%40gmail.com" }
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                  style={{ background: 'rgba(124,92,252,0.1)', border: '1px solid rgba(124,92,252,0.2)', color: '#a78bfa' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(124,92,252,0.25)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(124,92,252,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(124,92,252,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <p className="text-[10px] sm:text-xs flex items-center gap-1.5" style={{ color: '#94a3b8', fontFamily: 'DM Sans, sans-serif' }}>
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in India
            </p>
          </div>

          <div className="md:text-right space-y-2">
            <p className="font-medium text-[10px] sm:text-xs md:text-sm" style={{ color: '#475569', fontFamily: 'DM Sans, sans-serif' }}>&copy; {currentYear} Karthick Rangappan</p>
            <p className="inline-block text-[9px] sm:text-[10px] md:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl"
              style={{ background: 'rgba(124,92,252,0.1)', border: '1px solid rgba(124,92,252,0.15)', color: '#a78bfa', letterSpacing: '0.05em', fontFamily: 'DM Sans, sans-serif' }}>
              Built with React 19 & Tailwind 4
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
