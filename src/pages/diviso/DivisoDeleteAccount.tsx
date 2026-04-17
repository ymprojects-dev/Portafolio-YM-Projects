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
        "Historial de gastos, tickets y divisiones creados.",
        "Preferencias de usuario y configuraciones.",
        "Historial de transacciones y deudas liquidadas."
      ]}
      appPurpose="dividir tus gastos y cuentas"
    />
  );
}
