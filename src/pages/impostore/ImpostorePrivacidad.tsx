import PrivacyPolicyLayout from "../../components/PrivacyPolicyLayout";

export default function ImpostorePrivacidad() {
  return (
    <PrivacyPolicyLayout
      appName="Impostore App"
      appType="juego"
      iconPath="/images/impostore/foreground_impostore.png"
      returnRoute="/impostore"
      lastUpdated="25 de enero de 2026"
      privacyRoute="/impostore/privacidad"
      termsRoute="/impostore/terminos"
    />
  );
}
