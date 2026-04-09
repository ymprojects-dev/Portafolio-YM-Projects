import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Impostore() {
  const [players, setPlayers] = useState(["Mati", "Pedro", "Lu", "Agus", "Vale"]);
  const [playerName, setPlayerName] = useState("");

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
  }, []);

  return (
    <div className="bg-[#f2f5f6] text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900 min-h-screen overflow-x-hidden">
      {/* Top Navigation Bar */}
      <nav className="absolute top-0 w-full z-50">
        <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/impostore/foreground_impostore.png" alt="Logo" className="w-10 h-10 object-contain" />
            <span className="text-2xl font-black text-slate-900 tracking-tighter">Impostore</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
            <a className="text-[#2A94D5] border-b-2 border-[#2A94D5] pb-1" href="#inicio">Inicio</a>
            <a className="text-slate-600 hover:text-[#2A94D5] transition-colors" href="#como-jugar">Como jugar</a>
            <a className="text-slate-600 hover:text-[#2A94D5] transition-colors" href="#funciones">Funciones</a>
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.ymprojects.impostore&pli=1" target="_blank" rel="noopener noreferrer" className="bg-[#2A94D5] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:scale-105 active:scale-95 duration-200 transition-all">
            Descargar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fefefe 0%, #e6f4fc 100%)' }} id="inicio">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="relative z-10 text-center lg:text-left pt-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c6e6fa] text-[#2A94D5] text-sm font-bold mb-8">
              <span className="material-symbols-outlined text-[16px]">celebration</span>
              El mejor juego de deducción social
            </div>
            <h1 className="text-6xl md:text-[5rem] font-black text-[#27272a] leading-[1.1] tracking-tight mb-6">
              Impostore
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-[#2A94D5] mb-6 leading-snug max-w-[500px] mx-auto lg:mx-0">
              Descubrí al impostor entre tus amigos en este juego social de palabras.
            </p>
            <p className="text-base md:text-lg text-slate-500 max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0">
              Un emocionante juego social para jugar en persona con amigos o familia. Engaña, deduce e investiga tu camino a la victoria.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.ymprojects.impostore&pli=1" target="_blank" rel="noopener noreferrer" className="bg-[#2A94D5] text-white px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[20px]">download</span>
                Descargar en Google Play
              </a>
              <a href="#como-jugar" className="bg-[#e4e8eb] text-slate-800 px-8 py-4 rounded-full font-bold text-base hover:bg-[#d6dcde] transition-colors">
                ¿Cómo jugar?
              </a>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
             <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_60px_-15px_rgba(42,148,213,0.3)] w-full max-w-[480px] aspect-square flex items-center justify-center">
               <img src="/images/impostore/logo_impostore.png" alt="Impostore logomark" className="w-full h-full object-contain" />
             </div>
          </div>
        </div>
      </section>

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-sky-200 text-sky-800 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Paso 3</span>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">3. Elegí las categorías</h3>
                <p className="text-sm text-slate-500 max-w-sm">
                  Seleccioná una o varias categorías para definir de dónde saldrán las palabras de la ronda.
                </p>
              </div>
              
              <div className="flex gap-4">
                 <div className="relative flex-1 aspect-video rounded-2xl overflow-hidden group">
                   <img src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=500&q=80" alt="Animales" className="w-full h-full object-cover rounded-2xl" />
                   <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                     <span className="text-white font-bold text-lg">Animales</span>
                   </div>
                   <div className="absolute top-3 right-3 bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-[14px]">check</span>
                   </div>
                 </div>
                 <div className="relative flex-1 aspect-video rounded-2xl overflow-hidden group">
                   <img src="https://images.unsplash.com/photo-1563805042-7684c8e9e5cb?w=500&q=80" alt="Comida" className="w-full h-full object-cover rounded-2xl" />
                   <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                     <span className="text-white font-bold text-lg">Comida</span>
                   </div>
                 </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               {/* UI Graphic on the left */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 md:order-1 order-2">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-slate-700 font-semibold text-sm">Impostores</span>
                  <div className="flex items-center gap-4 bg-slate-100 rounded-full px-2 py-1">
                     <button className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 text-lg font-bold">-</button>
                     <span className="font-bold text-slate-800 text-sm">2</span>
                     <button className="w-6 h-6 rounded-full bg-[#2A94D5] text-white flex items-center justify-center text-lg font-bold">+</button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-slate-700 font-semibold text-sm">Pista para el Impostor</p>
                    <p className="text-slate-400 text-xs mt-0.5">Ayuda al Impostor a no estar tan perdido</p>
                  </div>
                  <div className="w-10 h-6 bg-[#2A94D5] rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                  </div>
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

               <div className="flex flex-col md:flex-row gap-6 justify-center w-full max-w-3xl">
                 <div className="bg-[#2A94D5] text-white rounded-3xl p-8 flex-1 aspect-[3/4] flex flex-col items-center justify-center shadow-lg transform -rotate-3 transition-transform hover:rotate-0">
                    <span className="material-symbols-outlined text-5xl mb-4">touch_app</span>
                    <h4 className="font-bold text-xl mb-1">Jugador 1</h4>
                    <p className="text-sky-200 text-xs">Toca para revelar</p>
                 </div>
                 <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 flex-1 aspect-[3/4] flex flex-col items-center justify-center shadow-xl z-10 transition-transform hover:-translate-y-2">
                    <span className="material-symbols-outlined text-[#2A94D5] text-5xl mb-4">park</span>
                    <h4 className="font-extrabold text-[#2A94D5] text-3xl mb-1">Árbol</h4>
                    <p className="text-slate-400 text-xs">Tú eres Inocente</p>
                 </div>
                 <div className="bg-white border-2 border-red-200 rounded-3xl p-8 flex-1 aspect-[3/4] flex flex-col items-center justify-center shadow-lg transform rotate-3 transition-transform hover:rotate-0 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 rounded-bl-full -z-10"></div>
                    <span className="material-symbols-outlined text-red-600 text-5xl mb-4">theater_comedy</span>
                    <h4 className="font-extrabold text-red-600 text-2xl mb-1">Impostor</h4>
                    <p className="text-red-400 text-xs">¡No te descubran!</p>
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

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
                  <div className="bg-slate-200/50 rounded-3xl p-6 flex flex-col gap-4">
                     <div className="flex items-start gap-3">
                       <div className="w-8 h-8 rounded-full bg-[#2A94D5] text-white flex items-center justify-center text-xs font-bold shrink-0">M</div>
                       <div className="bg-white px-4 py-2 rounded-2xl rounded-tl-sm text-sm text-slate-700 shadow-sm">
                         ¿Tiene hojas?
                       </div>
                     </div>
                     <div className="flex items-start gap-3 flex-row-reverse">
                       <div className="w-8 h-8 rounded-full bg-[#2A94D5] text-white flex items-center justify-center text-xs font-bold shrink-0">A</div>
                       <div className="bg-[#2A94D5] text-white px-4 py-2 rounded-2xl rounded-tr-sm text-sm shadow-sm">
                         Sí, puede ser.
                       </div>
                     </div>
                     <div className="flex items-start gap-3">
                       <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold shrink-0">Z</div>
                       <div className="bg-white px-4 py-2 rounded-2xl rounded-tl-sm text-sm text-slate-700 shadow-sm border border-red-100">
                         Esa es mi respuesta... Juan, ¿estás seguro?
                       </div>
                     </div>
                  </div>
                  <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-md border border-slate-100 relative">
                     <div className="absolute top-4 left-0 right-0 text-center text-[10px] font-bold text-slate-400 tracking-wider">RESULTADOS</div>
                     <div className="flex flex-col items-center mb-8 mt-4">
                       <div className="flex items-center gap-2 mb-2">
                         <span className="material-symbols-outlined text-[#2A94D5] text-lg">search</span>
                         <span className="text-slate-500 text-sm font-semibold">Palabra:</span>
                         <span className="text-[#2A94D5] font-bold text-lg">Árbol</span>
                       </div>
                     </div>
                     <div className="border-t border-slate-100 w-full pt-6 flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-3">
                           <span className="material-symbols-outlined">person</span>
                        </div>
                        <h4 className="font-bold text-red-600 text-lg">Juan era el Impostor</h4>
                        <p className="text-slate-400 text-xs">¡Fue descubierto!</p>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6" id="galeria">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight mb-12">Así se ve Impostore</h2>
          
          <div className="flex flex-wrap justify-center gap-6 overflow-hidden pb-8 px-4">
             {/* Mockups of screens side by side */}
             <div className="w-48 h-96 bg-[#212121] rounded-[32px] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-slate-800">
               <div className="w-full h-full bg-gradient-to-b from-purple-700 to-pink-600 rounded-[24px] flex flex-col items-center justify-center relative overflow-hidden">
                 <div className="text-white font-bold text-xl">soñar de noche</div>
                 <div className="text-purple-200 text-xs mt-2">Dificultad: Fácil</div>
               </div>
             </div>
             
             <div className="w-48 h-96 bg-[#212121] rounded-[32px] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-slate-800">
               <div className="w-full h-full bg-gradient-to-b from-sky-400 to-blue-600 rounded-[24px] flex flex-col items-center justify-center relative">
                 <div className="w-8 h-8 rounded-full bg-white opacity-20 absolute top-12 left-8"></div>
                 <div className="w-4 h-4 rounded-full bg-white opacity-40 absolute bottom-32 right-12"></div>
                 <span className="material-symbols-outlined text-white text-4xl mb-4">visibility</span>
                 <div className="w-16 h-1 bg-white/30 rounded-full mt-4"></div>
               </div>
             </div>
             
             <div className="w-48 h-96 bg-white rounded-[32px] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-slate-200">
               <div className="w-full h-full bg-gradient-to-b from-sky-100 to-white rounded-[24px] flex flex-col items-center relative overflow-hidden">
                 <div className="text-sky-500 font-light text-5xl mt-12 mb-2">07</div>
                 <h1 className="text-sky-900 font-bold mb-4">Impostore</h1>
                 <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,100 C30,40 70,80 100,20 L100,100 Z" fill="#e0f2fe" />
                 </svg>
               </div>
             </div>
             
             <div className="w-48 h-96 bg-[#111111] rounded-[32px] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-slate-800">
               <div className="w-full h-full bg-[#0cb0b8] rounded-[24px] flex flex-col items-center justify-center relative overflow-hidden">
                 <svg className="w-full h-full opacity-30 absolute" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,50 L0,100 Z" fill="#ffffff" />
                 </svg>
                 <div className="flex gap-2 mb-4 absolute bottom-6">
                   <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-white"></div></div>
                   <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-white"></div></div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="bg-[#2A94D5] py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            ¿Listo para descubrir al<br />impostor?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Descargá Impostore ahora y convertí cualquier reunión en una partida inolvidable.
          </p>
          <a href="https://play.google.com/store/apps/details?id=com.ymprojects.impostore&pli=1" target="_blank" rel="noopener noreferrer" className="inline-flex bg-white text-[#2A94D5] px-8 py-4 rounded-full font-bold text-sm items-center justify-center gap-2 shadow-xl hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[20px]">download</span>
            Descargar en Google Play
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#f2f5f6] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-bold text-slate-700 text-sm mb-1">Impostore</span>
              <p>© 2026 Impostore. El juego de fiesta social.</p>
            </div>
            <div className="flex gap-6 font-medium">
              <a href="#" className="hover:text-slate-800 transition-colors">Privacidad</a>
              <a href="#" className="hover:text-slate-800 transition-colors">Términos</a>
              <a href="#" className="hover:text-slate-800 transition-colors">Soporte</a>
              <a href="#" className="hover:text-slate-800 transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
