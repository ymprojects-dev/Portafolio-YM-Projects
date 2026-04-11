import { useEffect, useState } from "react";
import AppNavbar from "../../components/app/AppNavbar";
import AppHero from "../../components/app/AppHero";
import AppGallery from "../../components/app/AppGallery";
import AppCTA from "../../components/app/AppCTA";
import AppFooter from "../../components/app/AppFooter";

export default function Impostore() {
  const [players, setPlayers] = useState(["Mati", "Pedro", "Lu", "Agus", "Vale"]);
  const [playerName, setPlayerName] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["animales", "gastronomia", "famosos", "deportes", "tecnologia"]);
  const [impostorCount, setImpostorCount] = useState(1);
  const [pistaEnabled, setPistaEnabled] = useState(true);

  const toggleCategory = (id: string) => {
    setSelectedCategories(prev =>
      prev.includes(id)
        ? prev.filter(c => c !== id)
        : [...prev, id]
    );
  };

  const handleAddPlayer = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmedName = playerName.trim();
    if (trimmedName && !players.includes(trimmedName)) {
      setPlayers([...players, trimmedName]);
      setPlayerName("");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Impostore";
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "/images/impostore/foreground_impostore.png";
    }
  }, []);

  return (
    <div className="bg-[#f2f5f6] text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900 min-h-screen overflow-x-hidden">
      <AppNavbar 
        appName="Impostore"
        logoSrc="/images/impostore/foreground_impostore.png"
        primaryColor="#2A94D5"
        downloadUrl="https://play.google.com/store/apps/details?id=com.ymprojects.impostore&pli=1"
        navLinks={[
          { id: 'inicio', label: 'Inicio', href: '#inicio', isInternal: true },
          { id: 'como-jugar', label: 'Como jugar', href: '#como-jugar', isInternal: true },
          { id: 'galeria', label: 'Cómo se ve', href: '#galeria', isInternal: true },
        ]}
      />

      <AppHero 
        appName="Impostore"
        badgeIcon="celebration"
        badgeText="El mejor juego de deducción social"
        subtitle="Descubrí al impostor entre tus amigos en este juego social de palabras."
        description="Un emocionante juego social para jugar en persona con amigos o familia. Engaña, deduce e investiga tu camino a la victoria."
        primaryColor="#2A94D5"
        logoSrc="/images/impostore/logo_impostore.png"
        logoBgColor="white"
        downloadUrl="https://play.google.com/store/apps/details?id=com.ymprojects.impostore&pli=1"
        gradientStart="#fefefe"
        gradientEnd="#e6f4fc"
      />

      {/* How to Play Section */}
      <section className="py-20 px-6 relative" id="como-jugar">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-3">¿Cómo se juega?</h2>
            <p className="text-slate-500 text-lg">Aprendé a jugar en menos de un minuto.</p>
          </div>

          <div className="flex flex-col gap-24 relative">

            {/* Step 1 */}
            <div className="flex flex-col gap-8">
              <div>
                <span className="inline-block px-3 py-1 bg-sky-200 text-sky-800 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Paso 1</span>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">1. Elegí el modo de juego</h3>
                <p className="text-sm text-slate-500 max-w-xl">
                  Definí cómo se va a jugar la partida y elegí la experiencia que mejor se adapte a tu grupo.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                {/* Clásico */}
                <div className="group aspect-[4/5] sm:aspect-square w-full [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Face */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] [backface-visibility:hidden]">
                      <img src="/images/impostore/modes/mode_classic.png" alt="Clásico" className="w-16 h-16 object-contain mb-4" />
                      <span className="font-bold text-slate-800 text-sm">Clásico</span>
                    </div>
                    {/* Back Face */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#f2f9fd] rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] border border-sky-100">
                      <span className="font-bold text-[#2A94D5] text-sm mb-3">Clásico</span>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">Los impostores conocen su rol y deben engañar al resto sin ser descubiertos.</p>
                    </div>
                  </div>
                </div>

                {/* El Perdido */}
                <div className="group aspect-[4/5] sm:aspect-square w-full [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Face */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] [backface-visibility:hidden]">
                      <img src="/images/impostore/modes/mode_lost.png" alt="El Perdido" className="w-16 h-16 object-contain mb-4" />
                      <span className="font-bold text-slate-800 text-sm">El Perdido</span>
                    </div>
                    {/* Back Face */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#f2f9fd] rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] border border-sky-100">
                      <span className="font-bold text-[#2A94D5] text-sm mb-2">El Perdido</span>
                      <p className="text-[11px] text-slate-600 leading-tight font-medium">Los impostores reciben otra palabra dentro de la misma categoría. El objetivo es descubrir quién no comparte la misma palabra.</p>
                    </div>
                  </div>
                </div>

                {/* Aleatorio */}
                <div className="group aspect-[4/5] sm:aspect-square w-full [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Face */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] [backface-visibility:hidden]">
                      <img src="/images/impostore/modes/mode_random.png" alt="Aleatorio" className="w-16 h-16 object-contain mb-4" />
                      <span className="font-bold text-slate-800 text-sm">Aleatorio</span>
                    </div>
                    {/* Back Face */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#f2f9fd] rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] border border-sky-100">
                      <span className="font-bold text-[#2A94D5] text-sm mb-2">Aleatorio</span>
                      <p className="text-[11px] text-slate-600 leading-tight font-medium">La cantidad de impostores se define al azar en cada partida. Puede haber uno, varios, todos o ninguno.</p>
                    </div>
                  </div>
                </div>

                {/* Entre nosotros */}
                <div className="group aspect-[4/5] sm:aspect-square w-full [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Face */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] [backface-visibility:hidden]">
                      <img src="/images/impostore/modes/mode_among_us.png" alt="Entre Nosotros" className="w-16 h-16 object-contain mb-4" />
                      <span className="font-bold text-slate-800 text-sm text-center px-1">Entre Nosotros</span>
                    </div>
                    {/* Back Face */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#f2f9fd] rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] border border-sky-100">
                      <span className="font-bold text-[#2A94D5] text-[13px] mb-2 leading-tight">Entre Nosotros</span>
                      <p className="text-[11px] text-slate-600 leading-tight font-medium">La palabra es el nombre de un jugador. Todos reciben el mismo nombre... menos el impostor.</p>
                    </div>
                  </div>
                </div>

                {/* Personalizado */}
                <div className="group aspect-[4/5] sm:aspect-square w-full [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Face */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] [backface-visibility:hidden]">
                      <img src="/images/impostore/modes/mode_custom.png" alt="Personalizado" className="w-16 h-16 object-contain mb-4" />
                      <span className="font-bold text-slate-800 text-sm">Personalizado</span>
                    </div>
                    {/* Back Face */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#f2f9fd] rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] border border-sky-100">
                      <span className="font-bold text-[#2A94D5] text-sm mb-2">Personalizado</span>
                      <p className="text-[11px] text-slate-600 leading-tight font-medium">Vos mandás: elegís la palabra y asignás al impostor. Perfecto para partidas temáticas o internas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* UI Graphic on the left */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 md:order-1 order-2">
                <form onSubmit={handleAddPlayer} className="flex gap-2">
                  <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="Nombre del jugador"
                    className="bg-slate-100 rounded-lg flex-1 px-4 py-3 flex items-center text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A94D5] transition-all"
                  />
                  <button type="submit" className="bg-[#2A94D5] text-white px-5 py-3 rounded-lg text-sm font-bold shadow-sm hover:bg-[#207db8] transition-colors">
                    Agregar
                  </button>
                </form>
                <div className="flex overflow-x-auto gap-2 mt-4 pb-2 snap-x flex-nowrap [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full">
                  {players.map((player, index) => (
                    <div key={index} className="bg-sky-100 text-[#2A94D5] text-xs pl-3 pr-2.5 py-1.5 rounded-md font-bold flex items-center gap-1.5 shrink-0 snap-start">
                      {player}
                      <button
                        onClick={() => setPlayers(players.filter(p => p !== player))}
                        className="opacity-50 hover:opacity-100 transition-opacity flex items-center justify-center p-0.5 rounded-full hover:bg-sky-200/50"
                        title="Eliminar"
                      >
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:order-2 order-1 md:pl-8">
                <span className="inline-block px-3 py-1 bg-sky-200 text-sky-800 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Paso 2</span>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">2. Armá el grupo</h3>
                <p className="text-sm text-slate-500 max-w-sm">
                  Agregá los nombres de los jugadores y prepará la partida en segundos.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-6 w-full overflow-hidden">
              <div>
                <span className="inline-block px-3 py-1 bg-sky-200 text-sky-800 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Paso 3</span>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">3. Elegí las categorías</h3>
                <p className="text-sm text-slate-500 max-w-xl">
                  Seleccioná una o varias categorías para definir de dónde saldrán las palabras de la ronda.
                </p>
              </div>

              <div className="w-full [mask-image:linear-gradient(to_right,transparent_0%,black_32px,black_calc(100%-32px),transparent_100%)] md:-mx-4 lg:mx-0">
                <div className="flex overflow-x-auto gap-4 pb-6 snap-x pt-1 px-6 md:px-8 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full">
                  {[
                    { id: 'animales', name: 'Animales', image: '/images/impostore/categories/c_animales.png' },
                    { id: 'deportes', name: 'Deportes', image: '/images/impostore/categories/c_deportes.png' },
                    { id: 'entretenimiento', name: 'Entretenimiento', image: '/images/impostore/categories/c_entretenimiento.png' },
                    { id: 'famosos', name: 'Famosos', image: '/images/impostore/categories/c_famosos.png' },
                    { id: 'gastronomia', name: 'Gastronomía', image: '/images/impostore/categories/c_gastronomia.png' },
                    { id: 'historia', name: 'Historia', image: '/images/impostore/categories/c_historia.png' },
                    { id: 'marca', name: 'Marcas', image: '/images/impostore/categories/c_marca.png' },
                    { id: 'mundo', name: 'Mundo', image: '/images/impostore/categories/c_mundo.png' },
                    { id: 'naturaleza', name: 'Naturaleza', image: '/images/impostore/categories/c_naturaleza.png' },
                    { id: 'objetos', name: 'Objetos', image: '/images/impostore/categories/c_objetos.png' },
                    { id: 'tecnologia', name: 'Tecnología', image: '/images/impostore/categories/c_tecnologia.png' },
                    { id: 'trabajos', name: 'Trabajos', image: '/images/impostore/categories/c_trabajos.png' },
                    { id: 'transporte', name: 'Transporte', image: '/images/impostore/categories/c_transporte.png' },
                  ].map((cat) => {
                    const isSelected = selectedCategories.includes(cat.id);
                    return (
                      <div
                        key={cat.id}
                        onClick={() => toggleCategory(cat.id)}
                        className={`relative w-32 md:w-40 aspect-square rounded-2xl overflow-hidden group shrink-0 snap-start shadow-sm transition-all hover:-translate-y-1 cursor-pointer border-2 ${isSelected ? 'bg-sky-100 border-[#2A94D5]' : 'bg-slate-100 border-transparent hover:border-slate-200'}`}
                      >
                        <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-[#2A94D5] w-6 h-6 rounded-full flex items-center justify-center text-white shadow-md z-10 border-2 border-white">
                            <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* UI Graphic on the left */}
              <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 md:order-1 order-2 flex flex-col gap-8">
                {/* Row 1: Impostores */}
                <div className="flex justify-between items-center">
                  <div className="flex items-start gap-4">
                    <img src="/images/impostore/icons/impostores_icono.png" alt="Impostores" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                    <div>
                      <h4 className="text-[#111111] font-bold text-base md:text-lg leading-tight mb-0.5">Impostores</h4>
                      <p className="text-slate-500 text-xs md:text-sm font-medium">Cantidad recomendada: 1</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 md:gap-4 pr-1">
                    <button
                      onClick={() => setImpostorCount(Math.max(0, impostorCount - 1))}
                      className="w-8 h-8 flex items-center justify-center text-slate-800 text-2xl font-medium hover:text-slate-500 transition-colors"
                    >&minus;</button>
                    <span className="font-bold text-[#e63b2e] text-lg md:text-xl min-w-[1.25rem] text-center">{impostorCount}</span>
                    <button
                      onClick={() => setImpostorCount(Math.min(9, impostorCount + 1))}
                      className="w-8 h-8 flex items-center justify-center text-slate-800 text-2xl font-medium hover:text-slate-500 transition-colors"
                    >+</button>
                  </div>
                </div>

                {/* Row 2: Pista del impostor */}
                <div className="flex justify-between items-center">
                  <div className="flex items-start gap-4">
                    <img src="/images/impostore/icons/pista_icono.png" alt="Pista" className="w-8 h-8 md:w-10 md:h-10 object-contain pt-0.5" />
                    <div className="max-w-[280px]">
                      <h4 className="text-[#111111] font-bold text-base md:text-lg leading-tight mb-1">Pista del impostor</h4>
                      <p className="text-slate-500 text-xs md:text-sm font-medium">Dales una pista a los impostores para ayudarlos a pasar desapercibidos.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setPistaEnabled(!pistaEnabled)}
                    className={`shrink-0 w-[46px] h-7 rounded-full relative transition-colors duration-200 ease-in-out cursor-pointer ${pistaEnabled ? 'bg-[#e63b2e]' : 'bg-slate-300'}`}
                  >
                    <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out shadow-sm ${pistaEnabled ? 'translate-x-[18px]' : 'translate-x-0'}`}></div>
                  </button>
                </div>
              </div>

              <div className="md:order-2 order-1 md:pl-8">
                <span className="inline-block px-3 py-1 bg-sky-200 text-sky-800 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Paso 4</span>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">4. Configurá la partida</h3>
                <p className="text-sm text-slate-500 max-w-sm">
                  Ajustá la cantidad de impostores y activá opciones extra para cambiar la dificultad de la ronda.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center mt-8">
              <span className="inline-block px-3 py-1 bg-sky-200 text-sky-800 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Paso 5</span>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">5. Revelá los roles en secreto</h3>
              <p className="text-sm text-slate-500 max-w-lg mb-10">
                Cada jugador mira su turno en su smartphone para memorizar la palabra... o si es el impostor.
              </p>

              <div className="flex flex-col md:flex-row gap-6 justify-center w-full max-w-4xl">
                {/* Card 1: Mati (Innocent) */}
                <div className="group flex-1 aspect-[3/4] w-full [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl">
                    {/* Front Face (Hidden) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle,_#2A94D5,_#1A72AF)] rounded-3xl overflow-hidden [backface-visibility:hidden]">
                      <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                        <img src="/images/impostore/icons/icono_logo.png" alt="Logo" className="w-[90%] object-contain" />
                      </div>
                      <h4 className="font-bold text-white text-3xl mb-auto mt-12 relative z-10">Mati</h4>
                      <img src="/images/impostore/icons/icon_press.png" alt="Press" className="w-20 h-20 md:w-24 md:h-24 relative z-10 brightness-0 invert" />
                      <p className="text-white text-sm md:text-base mt-auto mb-12 relative z-10 font-medium px-6 md:px-8">Mantené apretado para revelar la palabra</p>
                    </div>
                    {/* Back Face (Revealed) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle,_#C2DFF5,_#8CC7ED)] rounded-3xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                        <img src="/images/impostore/icons/icono_eye.png" alt="Eye" className="w-full scale-125 object-contain" />
                      </div>
                      <h4 className="font-bold text-[#2e4053] text-4xl mt-12 md:mt-16 mb-auto relative z-10">Mati</h4>
                      <div className="relative z-10 flex flex-col items-center mb-auto">
                        <p className="text-[#2e4053] text-lg font-medium mb-1">La palabra es:</p>
                        <p className="text-[#2A94D5] text-3xl md:text-4xl font-black tracking-wide">ÁRBOL</p>
                      </div>
                      <p className="text-[#2e4053] text-sm md:text-base mt-auto mb-12 md:mb-16 relative z-10 font-medium px-6 md:px-8">No reveles tu rol a los otros jugadores.</p>
                    </div>
                  </div>
                </div>

                {/* Card 2: Pedro (Impostor) */}
                <div className="group flex-1 aspect-[3/4] w-full [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl">
                    {/* Front Face (Hidden) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle,_#2A94D5,_#1A72AF)] rounded-3xl overflow-hidden [backface-visibility:hidden]">
                      <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                        <img src="/images/impostore/icons/icono_logo.png" alt="Logo" className="w-[90%] object-contain" />
                      </div>
                      <h4 className="font-bold text-white text-3xl mb-auto mt-12 relative z-10">Pedro</h4>
                      <img src="/images/impostore/icons/icon_press.png" alt="Press" className="w-20 h-20 md:w-24 md:h-24 relative z-10 brightness-0 invert" />
                      <p className="text-white text-sm md:text-base mt-auto mb-12 relative z-10 font-medium px-6 md:px-8">Mantené apretado para revelar la palabra</p>
                    </div>
                    {/* Back Face (Revealed) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle,_#FAD1CC,_#F37A70)] rounded-3xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                        <img src="/images/impostore/icons/impostores_icono.png" alt="Impostor" className="w-full scale-125 object-contain brightness-0" />
                      </div>
                      <h4 className="font-bold text-[#2e4053] text-4xl mt-12 md:mt-16 mb-auto relative z-10">Pedro</h4>
                      <div className="relative z-10 flex flex-col items-center mb-auto">
                        <p className="text-[#2e4053] text-lg font-medium mb-1">Sos el:</p>
                        <p className="text-[#d32f2f] text-3xl md:text-4xl font-black tracking-wide mb-3">IMPOSTOR</p>
                        <p className="text-[#2e4053] text-lg font-medium">Pista: <span className="text-[#d32f2f] font-bold">NATURALEZA</span></p>
                      </div>
                      <p className="text-[#2e4053] text-sm md:text-base mt-auto mb-12 md:mb-16 relative z-10 font-medium px-6 md:px-8 leading-tight">No reveles la palabra a los otros jugadores.</p>
                    </div>
                  </div>
                </div>

                {/* Card 3: Fausti (Innocent) */}
                <div className="group flex-1 aspect-[3/4] w-full [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl">
                    {/* Front Face (Hidden) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle,_#2A94D5,_#1A72AF)] rounded-3xl overflow-hidden [backface-visibility:hidden]">
                      <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                        <img src="/images/impostore/icons/icono_logo.png" alt="Logo" className="w-[90%] object-contain" />
                      </div>
                      <h4 className="font-bold text-white text-3xl mb-auto mt-12 relative z-10">Fausti</h4>
                      <img src="/images/impostore/icons/icon_press.png" alt="Press" className="w-20 h-20 md:w-24 md:h-24 relative z-10 brightness-0 invert" />
                      <p className="text-white text-sm md:text-base mt-auto mb-12 relative z-10 font-medium px-6 md:px-8">Mantené apretado para revelar la palabra</p>
                    </div>
                    {/* Back Face (Revealed) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle,_#C2DFF5,_#8CC7ED)] rounded-3xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                        <img src="/images/impostore/icons/icono_eye.png" alt="Eye" className="w-full scale-125 object-contain" />
                      </div>
                      <h4 className="font-bold text-[#2e4053] text-4xl mt-12 md:mt-16 mb-auto relative z-10">Fausti</h4>
                      <div className="relative z-10 flex flex-col items-center mb-auto">
                        <p className="text-[#2e4053] text-lg font-medium mb-1">La palabra es:</p>
                        <p className="text-[#2A94D5] text-3xl md:text-4xl font-black tracking-wide">ÁRBOL</p>
                      </div>
                      <p className="text-[#2e4053] text-sm md:text-base mt-auto mb-12 md:mb-16 relative z-10 font-medium px-6 md:px-8">No reveles tu rol a los otros jugadores.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex flex-col items-center text-center mt-12 mb-10">
              <span className="inline-block px-3 py-1 bg-sky-200 text-sky-800 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Paso 6</span>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">6. Discutan y descubran al impostor</h3>
              <p className="text-sm text-slate-500 max-w-lg mb-10">
                Hagan preguntas, respondan con cuidado y descubran quién está improvisando sin saber la palabra.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                <div className="bg-sky-50/50 rounded-[2rem] p-6 lg:p-8 flex flex-col gap-4 shadow-inner border border-slate-100">
                  {/* Participant M */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#2A94D5] text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-sm">M</div>
                    <div className="bg-white px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm text-slate-700 shadow-sm border border-sky-100">
                      “Yo diría: tronco.”
                    </div>
                  </div>
                  {/* Participant Y */}
                  <div className="flex items-start gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-sm">Y</div>
                    <div className="bg-[#2A94D5] text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm shadow-sm">
                      “La mía: hojas.”
                    </div>
                  </div>
                  {/* Participant A */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-sm">A</div>
                    <div className="bg-white px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm text-slate-700 shadow-sm border border-sky-100">
                      “La mía: sombra.”
                    </div>
                  </div>
                  {/* Participant P (Impostor) */}
                  <div className="flex items-start gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-[#e34234] text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-sm ring-2 ring-red-100 ring-offset-1">P</div>
                    <div className="bg-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm text-[#e34234] font-medium shadow-sm border border-red-200">
                      “Piensenlá, hongo.”
                    </div>
                  </div>
                  {/* Participant V */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#2A94D5] text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-sm">V</div>
                    <div className="bg-[#2A94D5] text-white px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm shadow-sm">
                      “Y yo: raíz.”
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 h-[100%]">
                  <div className="text-[11px] font-bold text-slate-500 tracking-widest uppercase mb-4">RESULTADOS</div>

                  <div className="flex items-center gap-3 mb-8">
                    <span className="material-symbols-outlined text-[#2A94D5] text-[28px] font-light">search</span>
                    <h3 className="text-[#2A94D5] font-medium text-[22px] tracking-tight">La palabra era Árbol</h3>
                  </div>

                  <div className="w-[95%] h-[1px] bg-slate-200 mb-8"></div>

                  <div className="flex items-center gap-4">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#e34234] flex items-center justify-center shadow-sm shrink-0">
                      <img src="/images/impostore/icons/impostores_icono.png" alt="Impostor" className="w-[30px] h-[30px] object-contain brightness-0 invert" />
                    </div>
                    <h3 className="font-semibold text-[#e34234] text-[22px] tracking-tight whitespace-nowrap">Pedro era el impostor</h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <AppGallery 
        appName="Impostore"
        screenshots={[
          "/images/impostore/screenshots/Screenshot_20260409_002000.png",
          "/images/impostore/screenshots/Screenshot_20260409_002036.png",
          "/images/impostore/screenshots/Screenshot_20260409_002056.png",
          "/images/impostore/screenshots/Screenshot_20260409_002124.png",
          "/images/impostore/screenshots/Screenshot_20260409_002202.png",
          "/images/impostore/screenshots/Screenshot_20260409_002225.png",
          "/images/impostore/screenshots/Screenshot_20260409_002638.png",
          "/images/impostore/screenshots/Screenshot_20260409_002644.png",
        ]}
      />

      <AppCTA 
        title={<>¿Listo para descubrir al<br/>impostor?</>}
        description="Descargá Impostore ahora y convertí cualquier reunión en una partida inolvidable."
        downloadUrl="https://play.google.com/store/apps/details?id=com.ymprojects.impostore&pli=1"
        primaryColor="#2A94D5"
      />

      <AppFooter 
        appName="Impostore"
        tagline="El juego de fiesta social."
        privacyRoute="/impostore/privacidad"
        termsRoute="/impostore/terminos"
      />
    </div>
  );
}
