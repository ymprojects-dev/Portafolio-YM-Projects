import TermsAndConditionsLayout from "../../components/TermsAndConditionsLayout";

export default function FortunaTerminos() {
  return (
    <TermsAndConditionsLayout
      appName="Fortuna"
      appType="aplicación"
      appDescription="es una herramienta de azar para lanzar dados de forma rápida y personalizada. Puedes utilizarla para facilitar partidas de juegos de mesa, rol, y otras actividades que necesiten azar."
      hasAds={true}
      hasPhysicalRisks={false}
      developerName="YM Projects"
      contactEmail="ym.projects.compose@gmail.com"
      iconPath="/images/fortuna/logo_fortuna.png"
      returnRoute="/fortuna"
      lastUpdated="11 de abril de 2026"
      privacyRoute="/fortuna/privacidad"
      termsRoute="/fortuna/terminos"
    />
  );
}
