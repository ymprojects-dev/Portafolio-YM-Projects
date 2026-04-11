import TermsAndConditionsLayout from "../../components/TermsAndConditionsLayout";

export default function DivisoTerminos() {
  return (
    <TermsAndConditionsLayout
      appName="Diviso"
      appType="aplicación"
      appDescription="es una herramienta para calcular y organizar cuentas compartidas entre amigos. Puedes utilizarla para registrar gastos, escanear recibos mediante IA y llevar un seguimiento de quién debe dinero."
      hasAds={true}
      hasPhysicalRisks={false}
      developerName="YM Projects"
      contactEmail="ym.projects.compose@gmail.com"
      iconPath="/images/diviso/logo_diviso.png"
      returnRoute="/diviso"
      lastUpdated="11 de abril de 2026"
    />
  );
}
