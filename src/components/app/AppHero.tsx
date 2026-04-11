interface AppHeroProps {
  appName: string;
  badgeIcon?: string;
  badgeText: string;
  title?: string;
  subtitle: string;
  description: string;
  primaryColor: string;
  primaryActionText?: string;
  secondaryActionText?: string;
  downloadUrl?: string;
  secondaryActionHref?: string;
  logoSrc: string;
  logoBgColor?: string;
  gradientStart?: string;
  gradientEnd?: string;
}

export default function AppHero({
  appName,
  badgeIcon = "celebration",
  badgeText,
  title,
  subtitle,
  description,
  primaryColor,
  primaryActionText = "Descargar en Google Play",
  secondaryActionText = "¿Cómo jugar?",
  downloadUrl,
  secondaryActionHref = "#como-jugar",
  logoSrc,
  logoBgColor = "white",
  gradientStart = "#fefefe",
  gradientEnd = "#e6f4fc"
}: AppHeroProps) {
  // Use hex transparency: 20 -> ~12% opacity
  const badgeBgColor = `${primaryColor}20`;

  return (
    <section className="pt-40 pb-20 px-6 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%)` }} id="inicio">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
        <div className="relative z-10 text-center lg:text-left pt-6">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-8"
            style={{ backgroundColor: badgeBgColor, color: primaryColor }}
          >
            <span className="material-symbols-outlined text-[16px]">{badgeIcon}</span>
            {badgeText}
          </div>
          <h1 className="text-6xl md:text-[5rem] font-black text-[#27272a] leading-[1.1] tracking-tight mb-6">
            {title || appName.replace(' App', '')}
          </h1>
          <p className="text-2xl md:text-3xl font-bold mb-6 leading-snug max-w-[500px] mx-auto lg:mx-0" style={{ color: primaryColor }}>
            {subtitle}
          </p>
          <p className="text-base md:text-lg text-slate-500 max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            {downloadUrl && (
              <a href={downloadUrl} target="_blank" rel="noopener noreferrer" 
                 className="text-white px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform"
                 style={{ backgroundColor: primaryColor }}
              >
                <span className="material-symbols-outlined text-[20px]">download</span>
                {primaryActionText}
              </a>
            )}
            {secondaryActionText && secondaryActionHref && (
              <a href={secondaryActionHref} className="bg-[#e4e8eb] text-slate-800 px-8 py-4 rounded-full font-bold text-base hover:bg-[#d6dcde] transition-colors">
                {secondaryActionText}
              </a>
            )}
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div 
            className="rounded-[2.5rem] p-10 w-full max-w-[480px] aspect-square flex items-center justify-center"
            style={{ backgroundColor: logoBgColor, boxShadow: `0 20px 60px -15px ${primaryColor}4D` }}
          >
            <img src={logoSrc} alt={`${appName} logo`} className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
