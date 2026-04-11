interface AppCTAProps {
  title: React.ReactNode;
  description: string;
  downloadUrl?: string;
  primaryColor: string;
  downloadText?: string;
}

export default function AppCTA({
  title,
  description,
  downloadUrl,
  primaryColor,
  downloadText = "Descargar en Google Play"
}: AppCTAProps) {
  return (
    <section className="py-24 px-6 text-center" style={{ backgroundColor: primaryColor }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          {title}
        </h2>
        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        {downloadUrl && (
          <a href={downloadUrl} target="_blank" rel="noopener noreferrer" 
             className="inline-flex bg-white px-8 py-4 rounded-full font-bold text-sm items-center justify-center gap-2 shadow-xl hover:scale-105 transition-transform"
             style={{ color: primaryColor }}
          >
            <span className="material-symbols-outlined text-[20px]">download</span>
            {downloadText}
          </a>
        )}
      </div>
    </section>
  );
}
