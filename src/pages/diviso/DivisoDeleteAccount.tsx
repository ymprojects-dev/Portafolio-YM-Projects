import DeleteAccountLayout from "../../components/DeleteAccountLayout";

export default function DivisoDeleteAccount() {
  return (
    <DeleteAccountLayout
      appName="Diviso"
      appLogoUrl="/images/diviso/foregroud_diviso.png"
      backLinkUrl="/diviso"
      backLinkText="Volver a Diviso"
      primaryHoverClass="hover:text-[#2A94D5]"
      dataTypesList={[
        "Información de la cuenta (nombre, correo electrónico, contraseña).",
        "Historial de gastos, grupos y participantes creados.",
        "Preferencias de usuario y configuraciones."
      ]}
      appPurpose="simplificar tus juntadas"
      privacyRoute="/diviso/privacidad"
      termsRoute="/diviso/terminos"
      deleteAccountRoute="/diviso/delete-account"
    />
  );
}
