import PrivacyPolicyLayout from "../../components/PrivacyPolicyLayout";

export default function DivisoPrivacidad() {
  return (
    <PrivacyPolicyLayout
      appName="Diviso App"
      companyName="YM Projects"
      contactEmail="ym.projects.compose@gmail.com"
      iconPath="/images/diviso/foregroud_diviso.png"
      returnRoute="/diviso"
      lastUpdated="11 de abril de 2026"
      privacyRoute="/diviso/privacidad"
      termsRoute="/diviso/terminos"
      deleteAccountRoute="/diviso/delete-account"
    />
  );
}
