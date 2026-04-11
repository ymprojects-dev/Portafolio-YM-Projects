/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  Smartphone,
  Palette,
  Zap,
  Lightbulb,
  Mail,
  MapPin,
  ArrowRight,
  Play,
  Zap as ZapIcon
} from "lucide-react";

const Github = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.5 5.2 5.2 0 0 0-.1-3.4s-1.1-.35-3.5 1.29a12.8 12.8 0 0 0-7 0C6.1 2.35 5 2.7 5 2.7a5.2 5.2 0 0 0-.1 3.4A5.2 5.2 0 0 0 3.6 9.64c0 5.22 3 6.42 6 6.76-.7.63-1 1.6-1 3.24v4"></path><path d="M4 19c-2-1-2-1-4-1"></path></svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const PROJECTS = [
  {
    id: "impostore",
    title: "Impostore",
    category: "Juego de Fiesta / Social",
    description: "Un juego social de fiesta para jugar en grupo, donde todos reciben una palabra secreta... excepto el impostor. Los jugadores discuten, investigan e intentan descubrir quién no conoce la palabra.",
    tags: ["Offline", "Fiesta", "Multijugador", "Kotlin", "Jetpack Compose"],
    image: "/images/impostore/logo_impostore.png",
    banner: "/images/impostore/banner_impostore.png",
    isFeatured: true,
    links: { play: "https://play.google.com/store/apps/details?id=com.ymprojects.impostore", details: "/impostore" }
  },
  {
    id: "diviso",
    title: "Diviso - Dividir Gastos",
    category: "Finanzas / Utilidad",
    description: "Una aplicación móvil para dividir gastos de juntadas, viajes y salidas de forma simple. Registra consumos, reparte lo que pagó cada persona y calcula automáticamente cuánto debe cada uno.",
    tags: ["Gastos", "Cuentas", "Grupos", "RolJuntadas"],
    image: "/images/diviso/logo_diviso.png",
    banner: "/images/diviso/banner_diviso.png",
    links: { play: "https://play.google.com/store/apps/details?id=com.ymprojects.dadospersonalizados", details: "/dados" }
  },
  {
    id: "sbarra",
    title: "Sbarra - Buscá tu barra",
    category: "Fitness / Utilidad",
    description: "Una aplicación móvil para encontrar barras de calistenia en Argentina. Explora ubicaciones cercanas, mira detalles, fotos, comentarios y guarda tus favoritas.",
    tags: ["Mapas", "Calistenia", "Argentina", "Comunidad"],
    image: "/images/sbarra/logo_barras_finder.png",
    banner: "/images/sbarra/banner_barrasfinder.png",
    links: { play: "https://play.google.com/store/apps/details?id=com.ymprojects.barrascalisteniapoint", details: "/sbarra" }
  },
  {
    id: "dados",
    title: "Dados Personalizados",
    category: "Herramientas / Entretenimiento",
    description: "Una aplicación de dados personalizable que permite elegir el número de dados y caras, ideal para juegos de mesa y juegos de rol.",
    tags: ["Dados", "Personalización", "Juegos de Mesa", "Rol"],
    image: "/images/fortuna/logo_fortuna.png",
    banner: "/images/fortuna/banner_fortuna.png",
    links: { play: "https://play.google.com/store/apps/details?id=com.ymprojects.dadospersonalizados", details: "/fortuna" }
  }
];

const EXPERTISE = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Desarrollador Android",
    description: "Experto en Kotlin, Jetpack Compose y arquitecturas modernas MVVM para apps nativas."
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Diseño UI/UX",
    description: "Creación de sistemas de diseño visualmente atractivos y accesibles para todos los usuarios."
  },
  {
    icon: <ZapIcon className="w-6 h-6" />,
    title: "Rendimiento",
    description: "Perfilado, detección de pérdidas de memoria y optimización de fotogramas para aplicaciones muy fluidas."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Visión de Producto",
    description: "Análisis de datos de usuarios y tendencias para crear características que realmente resuelven problemas."
  }
];

const PROCESS = [
  { step: "01", title: "Descubrimiento", desc: "Entendiendo tu meta y usuarios." },
  { step: "02", title: "Arquitectura", desc: "Planificación técnica y estructura." },
  { step: "03", title: "Desarrollo", desc: "Programación ágil iterativa y tests." },
  { step: "04", title: "Lanzamiento", desc: "Publicación en la Play Store y soporte." }
];

export default function Home() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    document.title = "YM Projects";
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "/images/foreground_logo_ym_projects_web.ico";
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-nav py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/images/foreground_logo_ym_projects.png" alt="YM Projects Logo" className="w-8 h-8 object-contain" />
            <span className="text-2xl font-bold tracking-tight text-on-surface">YM Projects</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[
              { id: "about", label: "Sobre Mí" },
              { id: "apps", label: "Proyectos" },
              { id: "skills", label: "Habilidades" },
              { id: "process", label: "Proceso" }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="premium-gradient text-white px-6 py-2.5 rounded-full text-sm font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20"
          >
            Contacto
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase bg-primary/10 text-primary rounded-full">
                  Arquitecto de Apps Móviles
                </span>
                <h1 className="text-5xl lg:text-8xl font-extrabold leading-[1.1] text-on-surface">
                  YM Projects
                </h1>
                <p className="mt-6 text-xl lg:text-2xl text-on-surface-variant font-medium max-w-xl">
                  Aplicaciones diseñadas con claridad, propósito y máximo rendimiento.
                </p>
              </div>
              <p className="text-on-surface-variant leading-relaxed max-w-lg">
                Especializado en soluciones nativas Android de alto desempeño y diseños UI/UX personalizados. Transformo ideas complejas en experiencias fluidas que los usuarios aman sentir.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#apps" className="premium-gradient text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform flex items-center gap-2">
                  Ver Aplicaciones <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#contact" className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-2xl font-bold hover:bg-surface-container-high transition-colors">
                  Contactame
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/5 rounded-full blur-3xl"></div>
              <div className="bg-white p-4 rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ambient-shadow">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000"
                  alt="App Mockup"
                  className="rounded-[2.5rem] w-full aspect-[9/16] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] border border-surface-container-high">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-bold text-sm">Fláidez Total</span>
                </div>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Optimizado para animaciones fluidas a 120fps y cargas sin tiempos de espera.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-surface-container-low py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:sticky lg:top-32 w-full lg:w-1/3">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Sobre YM Projects</h2>
                <div className="w-12 h-1 bg-primary rounded-full"></div>
              </div>
              <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Diseño Limpio", desc: "Creo en el poder de la simplificación. Elimino el exceso visual para que la funcionalidad clave respire." },
                  { title: "El Rendimiento Primero", desc: "Hago que usar la app se sienta increíble, enfocándome en interfaces ágiles y memoria ultra-eficiente." },
                  { title: "UX Orientado al Usuario", desc: "Me enfoco en el 'Por qué'. Cada micro-interacción está planeada para hacer más fáciles las metas del usuario." },
                  { title: "Software de Alta Calidad", desc: "Programado con lenguajes nativos de gran estabilidad y arquitecturas móviles modernas altamente escalables." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-10 rounded-3xl ambient-shadow"
                  >
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section id="apps" className="py-24 lg:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">Proyectos Destacados</h2>
              <p className="text-on-surface-variant text-lg">Una selección de mis mejores aplicaciones, desarrolladas con alta prioridad al diseño.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
              {PROJECTS.map((project, i) => (
                <motion.div
                  key={project.id}
                  onClick={() => { window.scrollTo(0, 0); navigate(project.links.details); }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[2rem] border border-outline-variant/10 group ambient-shadow flex flex-col relative cursor-pointer hover:shadow-2xl transition-all"
                >
                  <div className="relative">
                    <div className="aspect-[2/1] relative overflow-hidden bg-surface-container-low rounded-t-[2rem]">
                      <img
                        src={project.banner}
                        alt={`${project.title} banner`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      {project.isFeatured && (
                        <div className="absolute top-6 left-6 z-20">
                          <span className="bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                            App Destacada
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute -bottom-10 right-8 w-24 h-24 bg-white rounded-[1.5rem] shadow-xl border border-outline-variant/10 z-10 transition-transform group-hover:-translate-y-1">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-[1.5rem]"
                      />
                    </div>
                  </div>
                  <div className="p-8 pt-4 flex-1 flex flex-col">
                    <span className="text-on-surface-variant font-bold tracking-widest uppercase text-[10px] mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-on-surface-variant mb-6 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-surface-container-low rounded-full text-[9px] font-bold text-on-surface-variant uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 relative z-20">
                      <a href={project.links.play} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex-1 bg-primary text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:opacity-90 transition-opacity text-center flex items-center justify-center">Google Play</a>
                      <Link to={project.links.details} onClick={(e) => { e.stopPropagation(); window.scrollTo(0, 0); }} className="flex-1 border border-outline-variant px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-surface-container-low transition-colors text-center flex items-center justify-center">Detalles</Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="skills" className="bg-surface py-24 lg:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">Mí Experiencia</h2>
              <p className="text-on-surface-variant text-lg max-w-md">Creando el puente perfecto entre un diseño centrado en humanos y arquitectura sólida.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {EXPERTISE.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 bg-white rounded-3xl border border-outline-variant/10 hover:border-primary/20 transition-all ambient-shadow"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                    <div className="text-primary group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 lg:py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Etapas del Desarrollo</h2>
            <p className="text-on-surface-variant">Así llevo tus ideas paso a paso hasta llegar directo a la mano de los usuarios.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-outline-variant/30 -z-10"></div>
            {PROCESS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-xl transition-all border-4 border-surface ring-1 ring-outline-variant/20">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-xs text-on-surface-variant px-4">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 lg:py-32 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 lg:p-20 ambient-shadow border border-outline-variant/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-extrabold mb-6 leading-tight">Trabajemos juntos.</h2>
                <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                  ¿Tienes una aplicación móvil en mente u ocupas mi perfil especializado? Siempre estoy dispuesto a analizar buenas ideas y nuevos proyectos.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">ym.projects.dev@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">Global / Remoto (Argentina)</span>
                  </div>
                </div>
              </div>
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const subject = encodeURIComponent(`Contacto desde Portfolio - ${formData.name || 'Nuevo'}`);
                const body = encodeURIComponent(`${formData.message}\n\n---\nEnviado por: ${formData.name || 'Anónimo'} (${formData.email || 'Sin correo'})`);

                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

                if (isMobile) {
                  window.location.href = `mailto:ym.projects.dev@gmail.com?subject=${subject}&body=${body}`;
                } else {
                  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=ym.projects.dev@gmail.com&su=${subject}&body=${body}`, '_blank');
                }
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Nombre</label>
                    <input
                      className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-2xl px-5 py-4 transition-all outline-none"
                      placeholder="Juan Pérez"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Correo Electrónico</label>
                    <input
                      className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-2xl px-5 py-4 transition-all outline-none"
                      placeholder="juan@ejemplo.com"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Mensaje</label>
                  <textarea
                    className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-2xl px-5 py-4 transition-all outline-none resize-none"
                    placeholder="Escribe brevemente acerca de tu proyecto..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="w-full premium-gradient text-white font-bold py-5 rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.01] transition-transform">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-outline-variant/10 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="text-2xl font-bold text-on-surface">YM Projects</div>
            <p className="text-[10px] font-semibold tracking-widest uppercase text-on-surface-variant">
              © 2026 YM Projects. Diseñado artesanalmente para cada cliente.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://github.com/ymprojects-dev" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
              <Github className="w-4 h-4" /> Github
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="https://play.google.com/store/apps/dev?id=8925538644696216986" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2">
              <Play className="w-4 h-4" /> Google Play
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
