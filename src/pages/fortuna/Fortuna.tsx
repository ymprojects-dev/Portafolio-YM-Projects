import { useEffect } from "react";
import AppNavbar from "../../components/app/AppNavbar";
import AppHero from "../../components/app/AppHero";
import AppGallery from "../../components/app/AppGallery";
import AppCTA from "../../components/app/AppCTA";
import AppFooter from "../../components/app/AppFooter";
import { APP_LINKS } from "../../constants";

export default function Fortuna() {
  const PRIMARY_COLOR = "#2A94D5"; // Color de marca principal

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Fortuna - Dados Personalizados";
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "/images/fortuna/foreground_fortuna.png";
    }
  }, []);

  return (
    <div className={`bg-[#f2f5f6] text-slate-800 font-sans min-h-screen overflow-x-hidden`} style={{ '--primary-color': PRIMARY_COLOR } as React.CSSProperties}>

      <AppNavbar
        appName="Fortuna"
        logoSrc="/images/fortuna/foreground_fortuna.png"
        primaryColor={PRIMARY_COLOR}
        downloadUrl={APP_LINKS.FORTUNA}
        navLinks={[
          { id: 'inicio', label: 'Inicio', href: '#inicio', isInternal: true },
          { id: 'galeria', label: 'Cómo se ve', href: '#galeria', isInternal: true },
        ]}
      />

      <AppHero
        appName="Fortuna"
        badgeIcon="casino"
        badgeText="La app definitiva para lanzar dados"
        subtitle="Elige cantidad de dados y caras máximas."
        description="Ya sea para juegos de mesa, partidas de rol, desafíos con amigos o situaciones donde necesites azar, Fortuna te da una experiencia cómoda, clara y divertida."
        primaryColor={PRIMARY_COLOR}
        logoSrc="/images/fortuna/logo_fortuna.png"
        logoBgColor={PRIMARY_COLOR}
        gradientStart="#fefefe"
        gradientEnd="#e6f6f0"
        secondaryActionText=""
        downloadUrl={APP_LINKS.FORTUNA}
      />

      <AppGallery
        appName="Fortuna"
        screenshots={[]}
      />

      <AppCTA
        title={<>¿Listo para tirar<br />los dados?</>}
        description="Personaliza tus lanzamientos, obtén resultados al instante y disfruta de una forma práctica y moderna de tirar los dados."
        primaryColor={PRIMARY_COLOR}
        downloadUrl={APP_LINKS.FORTUNA}
      />

      <AppFooter
        appName="Fortuna"
        tagline="Tus dados, tus reglas."
        privacyRoute="/fortuna/privacidad"
        termsRoute="/fortuna/terminos"
      />
    </div>
  );
}
