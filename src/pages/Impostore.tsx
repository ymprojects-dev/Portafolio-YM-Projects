import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Impostore() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f5f7f8] text-[#2c2f30] font-sans selection:bg-[#5ebbff] selection:text-[#003653]">
      <style dangerouslySetInnerHTML={{__html: `
        .impostore-glass-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
        .impostore-primary-gradient { background: linear-gradient(135deg, #006191 0%, #5ebbff 100%); }
        .impostore-premium-shadow { box-shadow: 0 12px 32px rgba(0, 97, 145, 0.08); }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
      `}} />
      
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm dark:shadow-none">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <Link to="/">
            <span className="text-2xl font-black text-sky-700 dark:text-sky-400 tracking-tighter">Impostore</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 font-bold tracking-tight">
            <a className="text-sky-700 dark:text-sky-300 border-b-2 border-sky-600 dark:border-sky-400 pb-1" href="#home">Inicio</a>
            <a className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors" href="#how-it-works">Cómo Jugar</a>
            <a className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors" href="#features">Características</a>
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.ymprojects.impostore" target="_blank" rel="noopener noreferrer" className="bg-[#006191] text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 active:scale-95 duration-200 transition-all shadow-md">
            Descargar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden" id="home">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#b4d4ff] text-[#00497f] text-sm font-bold mb-6">
              <span className="material-symbols-outlined text-sm">celebration</span>
              El mejor juego de deducción social
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#2c2f30] leading-tight tracking-tighter mb-6">
              Impostore
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-[#006191] mb-6">
              Todos saben la palabra secreta... menos el impostor.
            </p>
            <p className="text-lg text-[#595c5d] max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
              Un emocionante juego social para jugar en persona con amigos o familia. Engaña, deduce e investiga tu camino a la victoria.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.ymprojects.impostore" target="_blank" rel="noopener noreferrer" className="impostore-primary-gradient text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 impostore-premium-shadow hover:scale-105 transition-transform active:scale-95">
                <span className="material-symbols-outlined">download</span>
                Instalar en Google Play
              </a>
              <a href="#how-it-works" className="bg-[#dfe3e4] text-[#2c2f30] px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-300 transition-colors active:scale-95">
                Ver cómo funciona
              </a>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="absolute -z-10 w-[120%] h-[120%] bg-[#5ebbff]/20 blur-[100px] rounded-full"></div>
            <div className="relative w-full max-w-[340px] md:max-w-[400px]">
              <div className="rounded-[3rem] p-3 bg-[#2c2f30] shadow-2xl overflow-hidden border-8 border-[#2c2f30]">
                <img alt="Impostore app home screen" className="w-full rounded-[2.5rem]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUSpxvcLB4F9cPAR5cYZCLLKM5Wf2ZFpfp4Li91HA6cfAMXzyuyQlA6dVm41d7qVK3zdKzScCexIJsILibx7ry7KslW8o3ZrjPpvGYQ14e1TSZr5f_eqUxv11tbwmafLSI3eb2WnfMS9oWceqxbH5ngRWdNQ1G2WsySZOUI3n_JcTwOyWrsCTclAqb8cQ35zjasC4SEy0ppzElERnKVR2U0gFR1BxB1GT-2QLEqMCtxgwcsJqfJL5U0LcJVQwFWmDxPiE_xZyC0Q" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -right-10 top-1/4 impostore-glass-card p-4 rounded-lg impostore-premium-shadow animate-bounce hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#b7131a] flex items-center justify-center text-white">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>person_alert</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#595c5d] uppercase tracking-widest">Sospechoso</p>
                    <p className="text-sm font-extrabold text-[#2c2f30]">¡El Jugador 4 es SUS!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-[#eef1f2] px-6" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#2c2f30] tracking-tighter mb-4">Cómo Jugar</h2>
            <p className="text-[#595c5d] max-w-2xl mx-auto text-lg">Cinco simples pasos para vivir el caos. Sin reglas aburridas, listo en segundos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg impostore-premium-shadow flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#006191]/10 text-[#006191] flex items-center justify-center font-black text-xl mb-6">1</div>
              <div className="w-full h-40 bg-slate-100 rounded-lg mb-6 overflow-hidden">
                <img alt="Category Selection" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjspG4RwbzKd0j6t-NodPIxVcjHpyYu369hem2L3H5eyWkLiRcODG9_foLM3NZvCgP4MqFZQ7G8eimJbzVKY32xa6YOiRGqZRLqNeLW4irgtTJRpA581iHRVzCYZ2WKJ4GFpQlfCtvjfHsDfeq6jfn01wC11FFgDeSxf12UAJS6GHwz-TcKxusAnwiUjhp4INNotRgriBsWNmblsK6ubxjEMWSMdIf0rdSLh3c23BeosDhXhbpHEZ9iRqjA118DLLulP1bB_7gFw" />
              </div>
              <h3 className="font-bold text-[#2c2f30] mb-2">Elige las Categorías</h3>
              <p className="text-sm text-[#595c5d]">Selecciona entre más de 20 temáticas distintas.</p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg impostore-premium-shadow flex flex-col items-center text-center mt-4 md:mt-8">
              <div className="w-12 h-12 rounded-full bg-[#006191]/10 text-[#006191] flex items-center justify-center font-black text-xl mb-6">2</div>
              <div className="w-full h-40 bg-[#e5e9ea] flex items-center justify-center rounded-lg mb-6">
                <span className="material-symbols-outlined text-[#006191] text-5xl">groups</span>
              </div>
              <h3 className="font-bold text-[#2c2f30] mb-2">Indica Quién Juega</h3>
              <p className="text-sm text-[#595c5d]">Coloca los puntajes y di cuántos impostores hay.</p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg impostore-premium-shadow flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#006191]/10 text-[#006191] flex items-center justify-center font-black text-xl mb-6">3</div>
              <div className="w-full h-40 bg-slate-100 rounded-lg mb-6 overflow-hidden">
                <img alt="Reveal Cards" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB11VCNm2CkFOZp2WhNKzWMCujBquKsa-6MHAr3BIauBw3SznGFRPuLpMRFx_Wj3U7X4y7oJjwgHLcW3lg49WHHYwSLt97p6QwSCXTfER0ZFsNw6IopTAGJd8Je0jwO3oQweZ5dahuATvfBK3yjD7h0CJliFxEZ48VGMEb5i5NU6lmQT0WJH3zs5pyyYljMkjm5nqF3rvI8AZvqcan3FiFOoLUx4rz97JkrWNHiBmduBeEI3CnuwkacsMf0xwoRqAUIx6tH9x_rhw" />
              </div>
              <h3 className="font-bold text-[#2c2f30] mb-2">Revelen las Tarjetas</h3>
              <p className="text-sm text-[#595c5d]">Pasen el formato para ver la palabra... u ocultarse.</p>
            </div>
            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg impostore-premium-shadow flex flex-col items-center text-center mt-4 md:mt-8">
              <div className="w-12 h-12 rounded-full bg-[#006191]/10 text-[#006191] flex items-center justify-center font-black text-xl mb-6">4</div>
              <div className="w-full h-40 bg-[#e5e9ea] flex items-center justify-center rounded-lg mb-6">
                <span className="material-symbols-outlined text-[#006191] text-5xl">forum</span>
              </div>
              <h3 className="font-bold text-[#2c2f30] mb-2">Pregunten y Discutan</h3>
              <p className="text-sm text-[#595c5d]">Interroguen y eviten dar respuestas obvias.</p>
            </div>
            {/* Step 5 */}
            <div className="bg-white p-6 rounded-lg impostore-premium-shadow flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#006191]/10 text-[#006191] flex items-center justify-center font-black text-xl mb-6">5</div>
              <div className="w-full h-40 bg-slate-100 rounded-lg mb-6 overflow-hidden">
                <img alt="Reveal Result" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN8sx2zW0O5Ti6Ekvp2PI65VazR8--yZMuI5nDjyGYQCL6MnuYmfQfiFWTsaSxbUF8FkgPvmH6rfJDiVEGWMAiSvwXGllcvywqF4rfqiPHCJ9wa86vyj8uNHgeflWT3mYOb5c9MkY9eIhDv1-9TS5PcTp3QzItYtynpMMBwhGXjonSwcvmbd1XJqNFWfgsZpErysLvsIT7gM-tc73v90EssqANkWB9PQ_yWZr9JbU9nGluVOWM59GB8YSqdBygo8yZNE3GJKxoIw" />
              </div>
              <h3 className="font-bold text-[#2c2f30] mb-2">Votación</h3>
              <p className="text-sm text-[#595c5d]">Acusen a alguien y verifiquen si fue desenmascarado o escapó.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 px-6" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#2c2f30] tracking-tighter mb-4">Diseñado para Divertir</h2>
              <p className="text-[#595c5d] text-lg leading-relaxed">Sin conexiones obligadas ni manuales, optimizado puramente en las interacciones.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-[#e5e9ea] mx-12 mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="md:col-span-2 bg-[#eef1f2] p-10 rounded-lg flex flex-col justify-between min-h-[320px]">
              <div className="flex justify-between items-start">
                <div className="max-w-sm">
                  <h3 className="text-3xl font-extrabold text-[#2c2f30] mb-4">Escenarios Ilimitados</h3>
                  <p className="text-[#595c5d]">Miles y miles de palabras ocultas significa que no habrá dos partidas iguales.</p>
                </div>
                <div className="w-16 h-16 rounded-xl bg-[#006191] text-white flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-4xl">style</span>
                </div>
              </div>
              <div className="flex gap-4 mt-8 overflow-hidden">
                <span className="px-4 py-2 rounded-sm bg-[#b4d4ff] text-[#00497f] text-sm font-bold">Cine Popular</span>
                <span className="px-4 py-2 rounded-sm bg-[#b4d4ff] text-[#00497f] text-sm font-bold">Naturaleza</span>
                <span className="px-4 py-2 rounded-sm bg-[#b4d4ff] text-[#00497f] text-sm font-bold">Conceptos Rebuscados</span>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="bg-[#ff9288] p-10 rounded-lg text-[#3a0002] flex flex-col justify-between min-h-[320px]">
              <div className="w-16 h-16 rounded-xl bg-[#b7131a] text-white flex items-center justify-center shadow-lg mb-6">
                <span className="material-symbols-outlined text-4xl">security</span>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold mb-4">Modo Secreto Seguro</h3>
                <p className="opacity-80">Su exclusivo sistema de visibilidad evita que otros puedan mirar el rol furtivamente.</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="bg-[#005ea0] p-10 rounded-lg text-white flex flex-col justify-between min-h-[320px]">
              <div className="w-16 h-16 rounded-xl bg-[#b4d4ff] text-[#00497f] flex items-center justify-center shadow-lg mb-6">
                <span className="material-symbols-outlined text-4xl">wifi_off</span>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold mb-4">Juegan Donde Sea</h3>
                <p className="opacity-80">No requiere internet. Pueden utilizarlo en campamentos, bares o vuelos de avión sin Wi-Fi.</p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="md:col-span-2 bg-[#d9dddf] p-10 rounded-lg flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <h3 className="text-3xl font-extrabold text-[#2c2f30] mb-4">Dificultad Variable</h3>
                <p className="text-[#595c5d]">Cambien la cantidad de agentes dobles y cronómetros como grupo según su experiencia.</p>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-full max-w-[200px] aspect-square bg-[#ffffff] rounded-xl flex flex-col items-center justify-center gap-2 impostore-premium-shadow">
                  <span className="material-symbols-outlined text-[#006191] text-5xl">person_add</span>
                  <span className="font-black text-4xl text-[#2c2f30]">3x</span>
                  <span className="text-xs uppercase font-bold text-[#595c5d]">Impostores</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why People Love It */}
      <section className="py-24 bg-[#f5f7f8] px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 bg-[#eef1f2] rounded-lg impostore-premium-shadow transform rotate-1">
                <span className="material-symbols-outlined text-[#006191] mb-4">favorite</span>
                <h4 className="font-bold text-[#2c2f30] mb-2">Reunión Familiar</h4>
                <p className="text-sm text-[#595c5d]">Mejor que cualquier juego tradicional para fines de semana.</p>
              </div>
              <div className="p-8 bg-white rounded-lg impostore-premium-shadow transform -rotate-2 mt-8">
                <span className="material-symbols-outlined text-[#b7131a] mb-4">local_fire_department</span>
                <h4 className="font-bold text-[#2c2f30] mb-2">Romper el Hielo</h4>
                <p className="text-sm text-[#595c5d]">Gritos y acusaciones desde la primera pregunta.</p>
              </div>
              <div className="p-8 bg-white rounded-lg impostore-premium-shadow transform -rotate-1">
                <span className="material-symbols-outlined text-[#005ea0] mb-4">psychology</span>
                <h4 className="font-bold text-[#2c2f30] mb-2">Puro Cerebro</h4>
                <p className="text-sm text-[#595c5d]">Mejora habilidades sociales y de comunicación cruzada.</p>
              </div>
              <div className="p-8 bg-[#eef1f2] rounded-lg impostore-premium-shadow transform rotate-2 mt-8">
                <span className="material-symbols-outlined text-[#2c2f30] mb-4">sentiment_very_satisfied</span>
                <h4 className="font-bold text-[#2c2f30] mb-2">Muchas Risas</h4>
                <p className="text-sm text-[#595c5d]">Las excusas delatadas son lo más memorable del juego.</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#2c2f30] tracking-tighter mb-6">Por qué la gente adora Impostore</h2>
            <p className="text-lg text-[#595c5d] leading-relaxed mb-8">No es solo otro juego en tu móvil —es interactuar de verdad cara a cara sin tener que mirar la pántalla constantemente.</p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-4 border-[#f5f7f8] bg-slate-300"></div>
                <div className="w-12 h-12 rounded-full border-4 border-[#f5f7f8] bg-slate-400"></div>
                <div className="w-12 h-12 rounded-full border-4 border-[#f5f7f8] bg-slate-500"></div>
              </div>
              <div>
                <p className="font-bold text-[#2c2f30]">Únase a la Experiencia</p>
                <p className="text-sm text-[#595c5d]">Llevando el ocio social a una comunidad global.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-24 px-6 overflow-hidden relative">
        <div className="max-w-5xl mx-auto bg-[#2c2f30] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden impostore-premium-shadow">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#006191]/20 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#b7131a]/10 blur-[120px] rounded-full -ml-48 -mb-48 pointer-events-none"></div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#f5f7f8] mb-8 tracking-tighter relative z-10 leading-[1.1]">
            ¿Listos para desenmascarar<br className="hidden md:block" /> a los traidores?
          </h2>
          <p className="text-[#d0d5d7] text-lg md:text-xl mb-12 max-w-xl mx-auto relative z-10 font-medium">
            ¡Descarga Impostore gratis y arma un ambiente de tensión en tu próxima previa social!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
            <a href="https://play.google.com/store/apps/details?id=com.ymprojects.impostore" target="_blank" rel="noopener noreferrer" className="impostore-primary-gradient text-white px-10 py-5 rounded-full font-bold text-xl flex items-center gap-3 impostore-premium-shadow hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined">download</span>
              Obtener en Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <Link to="/">
                <span className="text-3xl font-black text-sky-700 tracking-tighter">YM Projects</span>
              </Link>
              <p className="text-slate-500 text-sm font-medium max-w-xs text-center md:text-left">
                Creando aplicaciones nativas y soluciones precisas enfocadas a mejorar el vínculo personal.
              </p>
              <p className="text-slate-400 text-xs mt-2">© 2026 YM Projects. Todos los derechos reservados.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 font-bold text-sm tracking-tight text-slate-600">
              <Link to="/" className="hover:text-[#006191] transition-colors">Portafolio</Link>
              <a href="mailto:hola@ymprojects.dev" className="hover:text-[#006191] transition-colors">Contacto</a>
              <a href="#" className="hover:text-[#006191] transition-colors">Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
