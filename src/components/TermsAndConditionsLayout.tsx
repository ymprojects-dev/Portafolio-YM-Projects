import { useEffect } from "react";
import { Link } from "react-router-dom";

export interface TermsAndConditionsProps {
  appName: string;
  appType?: "aplicación" | "juego";
  appDescription: string;
  hasAds?: boolean;
  hasPhysicalRisks?: boolean;
  developerName?: string;
  contactEmail?: string;
  iconPath: string;
  returnRoute: string;
  lastUpdated: string;
}

export default function TermsAndConditionsLayout({
  appName,
  appType = "aplicación",
  appDescription,
  hasAds = false,
  hasPhysicalRisks = false,
  developerName = "YM Projects",
  contactEmail = "ym.projects.compose@gmail.com",
  iconPath,
  returnRoute,
  lastUpdated,
}: TermsAndConditionsProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Términos y condiciones - ${appName.replace(' App', '')}`;
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = iconPath;
    }
  }, [appName, iconPath]);

  return (
    <div className="bg-[#f2f5f6] text-slate-800 font-sans min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-slate-200">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
          <Link to={returnRoute} className="flex items-center gap-3">
            <img src={iconPath} alt="Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-black text-slate-900 tracking-tighter">{appName.replace(' App', '')}</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 font-medium text-sm text-slate-600">
            <Link to={returnRoute} className="hover:text-[#2A94D5] transition-colors">Volver a {appName.replace(' App', '')}</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Términos y Condiciones</h1>
        <div className="prose max-w-none text-slate-600 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">Aceptación de Términos:</h3>
          <p className="mb-8 font-medium">
            Al descargar, instalar y utilizar la aplicación {appName}, aceptas los siguientes términos y condiciones de uso. Si no estás de acuerdo con estos términos, por favor, no utilices la aplicación.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">1. Uso de la Aplicación:</h3>
          <ul className="list-[square] pl-6 space-y-4 mb-4">
            <li>{appName} {appDescription}</li>
            <li>Te comprometes a utilizar la aplicación de manera legal y ética, sin infringir derechos de terceros.</li>
            {hasAds && (
              <li>El usuario acepta que la aplicación incluye contenido publicitario. Los anuncios son necesarios para mantener la gratuidad del servicio.</li>
            )}
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">2. Cuentas de Usuario:</h3>
          <ul className="list-[square] pl-6 space-y-4 mb-4">
            <li>Algunas funciones de la aplicación pueden requerir la creación de una cuenta de usuario.</li>
            <li>Eres responsable de mantener la confidencialidad de tu información de inicio de sesión y de las actividades realizadas en tu cuenta.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">3. Privacidad:</h3>
          <ul className="list-[square] pl-6 space-y-4 mb-4">
            <li>Tu privacidad es importante para nosotros. Consulta nuestra "Política de Privacidad" para obtener información sobre cómo recopilamos, utilizamos y protegemos tus datos personales.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">4. Actualizaciones y Cambios:</h3>
          <ul className="list-[square] pl-6 space-y-4 mb-4">
            <li>Nos reservamos el derecho de actualizar, modificar o cambiar la aplicación y estos términos en cualquier momento sin previo aviso.</li>
            <li>Es tu responsabilidad mantenerse informado sobre las actualizaciones y cambios.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">5. Limitación de Responsabilidad:</h3>
          <ul className="list-[square] pl-6 space-y-4 mb-4">
            <li>La aplicación se proporciona "tal cual" y no garantizamos su disponibilidad continua ni su funcionamiento sin errores.</li>
            <li>No seremos responsables de ningún daño directo o indirecto causado por el uso de la aplicación.</li>
            {hasPhysicalRisks && (
              <li>No nos hacemos responsables por daños físicos al dispositivo móvil (caídas, roturas) ocurridos durante el transcurso de {appType === 'juego' ? 'la partida o juego' : 'uso de la aplicación'}.</li>
            )}
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">6. Propiedad Intelectual:</h3>
          <ul className="list-[square] pl-6 space-y-4 mb-4">
            <li>Todos los derechos de propiedad intelectual relacionados con la aplicación, incluidos los derechos de autor y las marcas registradas, son propiedad de {developerName}.</li>
            <li>Queda estrictamente prohibido descompilar, realizar ingeniería inversa o intentar copiar el código fuente de la aplicación.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">7. Terminación:</h3>
          <ul className="list-[square] pl-6 space-y-4 mb-4">
            <li>Podemos terminar o suspender tu acceso a la aplicación en caso de incumplimiento de estos términos.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">8. Ley Aplicable:</h3>
          <ul className="list-[square] pl-6 space-y-4 mb-4">
            <li>Estos términos se rigen por las leyes de Argentina y cualquier disputa se resolverá en los tribunales del mismo.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">9. Contacto:</h3>
          <p className="mb-4 pl-6">
            Para cualquier pregunta o comentario sobre estos términos o sobre la aplicación, contáctanos en {contactEmail}
          </p>

          <p className="mb-8 mt-12 border-t border-slate-200 pt-8 font-medium">
            Al utilizar la aplicación {appName}, aceptas y te comprometes a cumplir estos términos y condiciones. Te recomendamos que los revises periódicamente para estar al tanto de las actualizaciones.
          </p>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-slate-500">Última actualización: {lastUpdated}.</p>
        </div>
      </div>
    </div>
  );
}
