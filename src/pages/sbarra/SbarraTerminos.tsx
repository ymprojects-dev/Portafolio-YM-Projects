import TermsAndConditionsLayout from "../../components/TermsAndConditionsLayout";

export default function SbarraTerminos() {
  return (
    <TermsAndConditionsLayout
      appName="Sbarra"
      appType="aplicación"
      appDescription="es una aplicación de productividad y organización de rutinas. Puedes utilizarla para planificar tus tareas, hábitos diarios y mantener un control sobre tu tiempo."
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
