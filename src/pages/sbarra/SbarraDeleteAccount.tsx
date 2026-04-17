import DeleteAccountLayout from "../../components/DeleteAccountLayout";

export default function SbarraDeleteAccount() {
  return (
    <DeleteAccountLayout
      appName="Sbarra"
      appLogoUrl="/images/sbarra/foreground_sbarra.png"
      backLinkUrl="/sbarra"
      backLinkText="Volver a Sbarra"
      primaryHoverClass="hover:text-[#2A94D5]"
      dataTypesList={[
        "Información de la cuenta (nombre, correo electrónico, contraseña).",
        "Historial de rutinas y tareas creadas.",
        "Preferencias de usuario y configuraciones."
      ]}
      appPurpose="organizar tu rutina diaria"
    />
  );
}
