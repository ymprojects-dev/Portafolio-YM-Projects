interface AppGalleryProps {
  appName: string;
  screenshots: string[]; // Paths to the screenshots
}

export default function AppGallery({ appName, screenshots }: AppGalleryProps) {
  return (
    <section className="py-16 px-6" id="galeria">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight mb-12">
          Así se ve {appName.replace(' App', '')}
        </h2>

        <div className="w-full [mask-image:linear-gradient(to_right,transparent_0%,black_32px,black_calc(100%-32px),transparent_100%)]">
          <div className="flex overflow-x-auto gap-6 pb-8 pt-4 px-8 snap-x [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full">
            {screenshots.length > 0 ? (
              screenshots.map((imgSrc, i) => (
                <div key={i} className="w-48 h-96 bg-[#212121] rounded-[32px] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-slate-800 shrink-0 snap-center transition-transform duration-300 hover:-translate-y-2">
                  <img
                    src={imgSrc}
                    alt={`Captura ${i + 1} de ${appName}`}
                    className="w-full h-full object-cover rounded-[24px]"
                  />
                </div>
              ))
            ) : (
              // Empty placeholders
              [...Array(6)].map((_, i) => (
                <div key={i} className="w-48 h-96 bg-slate-200 animate-pulse rounded-[32px] p-2 shadow-sm border border-slate-300 shrink-0 snap-center">
                  <div className="w-full h-full bg-slate-300 rounded-[24px]"></div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
