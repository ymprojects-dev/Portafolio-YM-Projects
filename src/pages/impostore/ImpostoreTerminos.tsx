import TermsAndConditionsLayout from "../../components/TermsAndConditionsLayout";

export default function ImpostoreTerminos() {
  return (
    <TermsAndConditionsLayout
      appName="Impostore App"
      appType="juego"
      appDescription="es un juego social de palabras y deducción. Puedes utilizarla para facilitar partidas de juego grupales con amigos o familiares."
      hasAds={true}
      hasPhysicalRisks={true}
      developerName="Matías Adrian Yelicich"
      contactEmail="ym.projects.dev+soporte@gmail.com"
      iconPath="/images/impostore/foreground_impostore.png"
      returnRoute="/impostore"
      lastUpdated="25 de enero de 2026"
    />
  );
}
