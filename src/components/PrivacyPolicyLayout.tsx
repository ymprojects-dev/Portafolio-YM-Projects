import { useEffect } from "react";
import { Link } from "react-router-dom";

interface PrivacyPolicyProps {
  appName: string;
  appType?: "aplicación" | "juego";
  companyName?: string;
  iconPath: string;
  returnRoute: string;
  lastUpdated: string;
  contactEmail?: string;
}

export default function PrivacyPolicyLayout({
  appName,
  appType = "aplicación",
  companyName = "YM Projects",
  iconPath,
  returnRoute,
  lastUpdated,
  contactEmail = "ym.projects.dev+soporte@gmail.com",
}: PrivacyPolicyProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Políticas de Privacidad - ${appName.replace(' App', '')}`;
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
            <img src={iconPath} alt={`Logo de ${appName}`} className="w-8 h-8 object-contain" />
            <span className="text-xl font-black text-slate-900 tracking-tighter">{appName.replace(' App', '')}</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 font-medium text-sm text-slate-600">
            <Link to={returnRoute} className="hover:text-[#2A94D5] transition-colors">Volver a {appName.replace(' App', '')}</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Política de Privacidad</h1>
        <div className="prose max-w-none text-slate-600 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <p className="mb-8 font-medium">
            La presente Política de Privacidad describe cómo {appName} (desarrollada por {companyName}) recopila, utiliza y protege la información de los usuarios. Nuestro objetivo es ser transparentes sobre los datos que procesamos y explicar cómo se utilizan dentro de {appType === 'juego' ? 'el juego' : 'la aplicación'}.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">1. Información que recopilamos</h3>
          <p className="mb-4">Nuestra aplicación puede recopilar y procesar los siguientes datos:</p>
          <ul className="list-[square] pl-6 space-y-4 mb-4">
            <li><span className="underline">Identificadores del dispositivo:</span> Recopilamos el ID de publicidad de Android (Advertising ID / AD_ID) para la gestión y personalización de anuncios.</li>
            <li><span className="underline">Información técnica y de red:</span> Datos generales sobre el dispositivo (modelo, versión del sistema operativo) y la conexión de red, necesarios para el funcionamiento y análisis técnico.</li>
            <li><span className="underline">Ubicación aproximada:</span> Únicamente a nivel de red, y solo cuando resulte necesaria para la prestación de anuncios o servicios asociados, según la configuración del dispositivo y los servicios de terceros utilizados.</li>
            <li><span className="underline">Datos de uso:</span> Información estadística sobre cómo se interactúa con la aplicación para identificar áreas de mejora.</li>
            <li><span className="underline">Información de contacto:</span> Solo en caso de que el usuario se comunique voluntariamente con nosotros (por ejemplo, por correo electrónico) para solicitar soporte.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">2. Uso de la información</h3>
          <p className="mb-4">Los datos recopilados se utilizan exclusivamente para los siguientes fines:</p>
          <ul className="list-[square] pl-6 space-y-4 mb-4">
            <li><span className="underline">Funcionamiento y optimización:</span> Garantizar el rendimiento de la aplicación, detectar errores técnicos y aplicar mejoras.</li>
            <li><span className="underline">Publicidad:</span> Mostrar anuncios relevantes a través de nuestras plataformas de mediación publicitaria.</li>
            <li><span className="underline">Soporte:</span> Responder a consultas o problemas técnicos reportados por el usuario.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">3. Proveedores de servicios y terceros</h3>
          <p className="mb-4">Para operar y monetizar la aplicación de manera gratuita, integramos servicios de terceros que pueden procesar cierta información bajo sus propias políticas:</p>
          <ul className="list-[square] pl-6 space-y-4 mb-4">
            <li><span className="underline">Appodeal y redes publicitarias asociadas:</span> Utilizamos Appodeal como plataforma principal de mediación publicitaria, la cual trabaja con múltiples redes de anuncios. Appodeal y sus socios pueden recopilar la dirección IP, el ID de publicidad (AD_ID), la ubicación aproximada y datos técnicos del dispositivo para mostrar anuncios personalizados y medir su rendimiento. Puede consultar los detalles en la política de privacidad de Appodeal: <a href="https://appodeal.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#2A94D5] hover:underline">https://appodeal.com/privacy-policy/</a>.</li>
            <li><span className="underline">Firebase (Google):</span> Utilizamos estas herramientas para el análisis general de uso, el monitoreo de errores (Crashlytics) y la configuración remota.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">4. Tecnologías de seguimiento y almacenamiento local</h3>
          <p className="mb-4">La aplicación utiliza identificadores de publicidad y almacenamiento local en el dispositivo para recordar preferencias del usuario, analizar el rendimiento general y gestionar la frecuencia y relevancia de los anuncios mostrados. Estas tecnologías se utilizan dentro del contexto de la aplicación para recordar preferencias, analizar el rendimiento y gestionar la entrega de anuncios.</p>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">5. Control y derechos del usuario</h3>
          <p className="mb-4">Los usuarios tienen derecho a controlar su información de la siguiente manera:</p>
          <ul className="list-[square] pl-6 space-y-4 mb-4">
            <li><span className="underline">Exclusión de anuncios personalizados:</span> Puede desactivar la personalización de anuncios y restablecer el ID de publicidad en cualquier momento desde los ajustes de privacidad de su dispositivo Android.</li>
            <li><span className="underline">Panel de consentimiento:</span> Dependiendo de su región, la aplicación puede incluir un panel de consentimiento (CMP) que le permite aceptar o rechazar el procesamiento de datos con fines publicitarios.</li>
            <li><span className="underline">Derechos y eliminación (Privacy Global y GDPR):</span> Si proporcionó información de contacto para soporte o aplica alguna normativa como GDPR, tiene derecho al acceso, rectificación o eliminación de esos datos. Para ejercerlos, contáctenos en: {contactEmail}.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">6. Seguridad de los datos</h3>
          <p className="mb-4">Adoptamos medidas técnicas y organizativas razonables para proteger la información procesada por la aplicación frente a accesos, alteraciones, divulgaciones o destrucción no autorizadas.</p>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">7. Enlaces externos</h3>
          <p className="mb-4">La aplicación, especialmente a través de los anuncios publicitarios, puede contener enlaces a sitios web o servicios de terceros. No somos responsables de las prácticas de privacidad ni del contenido de dichos sitios. Le recomendamos leer sus políticas externas en caso de visitarlos o interactuar con ellos.</p>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">8. Privacidad infantil</h3>
          <p className="mb-4">No recopilamos intencionalmente información de menores de 13 años. Si usted es tutor legal y detecta que se nos ha proporcionado información de un menor, contáctenos para proceder con su eliminación inmediata.</p>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">9. Modificaciones a la Política de Privacidad</h3>
          <p className="mb-4">Nos reservamos el derecho de actualizar esta Política de Privacidad para reflejar cambios en nuestras prácticas o requisitos legales. Le sugerimos revisar este documento periódicamente dentro de la aplicación o en nuestro sitio oficial para mantenerse informado sobre las condiciones vigentes.</p>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-slate-500">Última actualización: {lastUpdated}.</p>
        </div>
      </div>
    </div>
  );
}
