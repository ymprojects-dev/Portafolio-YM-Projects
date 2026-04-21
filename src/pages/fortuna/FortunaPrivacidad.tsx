import PrivacyPolicyLayout from "../../components/PrivacyPolicyLayout";

export default function FortunaPrivacidad() {
  return (
    <PrivacyPolicyLayout
      appName="Fortuna App"
      companyName="YM Projects"
      contactEmail="ym.projects.compose@gmail.com"
      iconPath="/images/fortuna/logo_fortuna.png"
      returnRoute="/fortuna"
      lastUpdated="11 de abril de 2026"
      privacyRoute="/fortuna/privacidad"
      termsRoute="/fortuna/terminos"
    />
  );
}
