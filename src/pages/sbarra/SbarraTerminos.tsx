import TermsAndConditionsLayout from "../../components/TermsAndConditionsLayout";

export default function SbarraTerminos() {
  return (
    <TermsAndConditionsLayout
      appName="Sbarra"
      appType="aplicación"
      appDescription="es una aplicación móvil que te permite encontrar fácilmente barras de calistenia cerca de ti. Puedes utilizarla para explorar ubicaciones, ver fotos y detalles, y descubrir nuevos lugares para entrenar de manera gratuita en espacios públicos."
      hasAds={false}
      hasPhysicalRisks={false}
      developerName="YM Projects"
      contactEmail="ym.projects.compose@gmail.com"
      iconPath="/images/sbarra/foreground_sbarra.png"
      returnRoute="/sbarra"
      lastUpdated="11 de abril de 2026"
    />
  );
}
