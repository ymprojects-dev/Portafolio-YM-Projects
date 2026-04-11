import { useEffect } from "react";
import AppNavbar from "../../components/app/AppNavbar";
import AppHero from "../../components/app/AppHero";
import AppGallery from "../../components/app/AppGallery";
import AppCTA from "../../components/app/AppCTA";
import AppFooter from "../../components/app/AppFooter";

export default function Sbarra() {
  const PRIMARY_COLOR = "#7C293D";

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sbarra";
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "/images/sbarra/foreground_sbarra.png";
    }
  }, []);

  return (
    <div className={`bg-[#f2f5f6] text-slate-800 font-sans min-h-screen overflow-x-hidden`} style={{ '--primary-color': PRIMARY_COLOR } as React.CSSProperties}>

      <AppNavbar
        appName="Sbarra"
        logoSrc="/images/sbarra/foreground_sbarra.png"
        primaryColor={PRIMARY_COLOR}
        downloadUrl="https://play.google.com/store/apps/details?id=com.ymprojects.barrascalisteniapoint"
        navLinks={[
          { id: 'inicio', label: 'Inicio', href: '#inicio', isInternal: true },
          { id: 'galeria', label: 'Cómo se ve', href: '#galeria', isInternal: true },
        ]}
      />

      <AppHero
        appName="Sbarra"
        badgeIcon="location_on"
        badgeText="+1.000 barras en Argentina y Chile"
        subtitle="Encuentra barras de calistenia cerca de ti."
        description="Explora diferentes ubicaciones y descubre nuevas oportunidades para realizar ejercicio al aire libre. Mira fotos, comentarios y cómo llegar."
        primaryColor={PRIMARY_COLOR}
        logoSrc="/images/sbarra/foreground_sbarra.png"
        logoBgColor="#ffffff"
        gradientStart="#fefefe"
        gradientEnd="#fceef1"
        secondaryActionText=""
        downloadUrl="https://play.google.com/store/apps/details?id=com.ymprojects.barrascalisteniapoint"
      />

      <AppGallery
        appName="Sbarra"
        screenshots={[]}
      />

      <AppCTA
        title={<>¿Listo para mejorar<br />tu entrenamiento?</>}
        description="Descarga Sbarra y encuentra el lugar ideal para tu próxima rutina de calistenia."
        primaryColor={PRIMARY_COLOR}
        downloadUrl="https://play.google.com/store/apps/details?id=com.ymprojects.barrascalisteniapoint"
      />

      <AppFooter
        appName="Sbarra"
        tagline="Tu buscador de barras de calistenia."
        privacyRoute="/sbarra/privacidad"
        termsRoute="/sbarra/terminos"
        deleteAccountRoute="/sbarra/delete-account"
      />
    </div>
  );
}
