import { useEffect } from "react";
import AppNavbar from "../../components/app/AppNavbar";
import AppHero from "../../components/app/AppHero";
import AppGallery from "../../components/app/AppGallery";
import AppCTA from "../../components/app/AppCTA";
import AppFooter from "../../components/app/AppFooter";
import { APP_LINKS } from "../../constants";

export default function Diviso() {
  const PRIMARY_COLOR = "#2A94D5"; // Color de marca principal
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Diviso - Dividir Gastos";
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "/images/diviso/foregroud_diviso.png";
    }
  }, []);

  return (
    <div className={`bg-[#f2f5f6] text-slate-800 font-sans min-h-screen overflow-x-hidden`} style={{ '--primary-color': PRIMARY_COLOR } as React.CSSProperties}>
      
      <AppNavbar 
        appName="Diviso"
        logoSrc="/images/diviso/foregroud_diviso.png"
        primaryColor={PRIMARY_COLOR}
        downloadUrl={APP_LINKS.DIVISO} // Ajustado (esperando confirmación del link final)
        navLinks={[
          { id: 'inicio', label: 'Inicio', href: '#inicio', isInternal: true },
          { id: 'galeria', label: 'Cómo se ve', href: '#galeria', isInternal: true },
        ]}
      />

      <AppHero 
        appName="Diviso"
        badgeIcon="payments"
        badgeText="Cuentas claras, amigos contentos"
        subtitle="División de cuentas rápida, clara y sin vueltas."
        description="Registra gastos, escanea tickets con IA y asigna quién consumió cada producto para saber exactamente cuánto debe pagar cada persona."
        primaryColor={PRIMARY_COLOR}
        logoSrc="/images/diviso/foregroud_diviso.png"
        logoBgColor="#ffffff"
        gradientStart="#fefefe"
        gradientEnd="#e6f6f0"
        secondaryActionText=""
        downloadUrl={APP_LINKS.DIVISO}
      />

      <AppGallery 
        appName="Diviso"
        screenshots={[]}
      />

      <AppCTA 
        title={<>¿Cuentas claras,<br/>juntadas perfectas?</>}
        description="Organiza tus cenas, salidas o viajes con amigos compartiendo resúmenes por WhatsApp al instante."
        primaryColor={PRIMARY_COLOR}
        downloadUrl={APP_LINKS.DIVISO}
      />

      <AppFooter 
        appName="Diviso"
        tagline="Dividir Gastos"
        privacyRoute="/diviso/privacidad"
        termsRoute="/diviso/terminos"
      />
    </div>
  );
}
