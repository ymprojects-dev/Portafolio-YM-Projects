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
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Políticas de Privacidad</h1>
        <div className="prose max-w-none text-slate-600 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <p className="mb-8 font-medium">
            La presente Política de Privacidad establece los términos en que {appName}, desarrollada por {companyName}, usa y protege la información que es proporcionada por sus usuarios al momento de utilizar la aplicación móvil. Esta compañía y su desarrollador están altamente comprometidos con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">1. Información que es recogida</h3>
          <p className="mb-4">Nuestra aplicación podrá recoger, tratar o almacenar la siguiente información:</p>
          <ul className="list-[square] pl-6 space-y-4 mb-4">
            <li><span className="underline">Información de Identificación Personal:</span> Nombre y dirección de correo electrónico proporcionada voluntariamente por el usuario para registros o soporte técnico.</li>
            <li><span className="underline">Identificadores de Dispositivo:</span> Recopilamos el ID de publicidad de Google (AD_ID) para personalizar la experiencia publicitaria y realizar análisis internos.</li>
            <li><span className="underline">Datos de Uso:</span> Información sobre cómo interactúa con la aplicación, frecuencia de uso y preferencias de {appType}.</li>
            <li><span className="underline">Información Demográfica:</span> Datos como la ubicación aproximada (nivel de red) para optimizar la entrega de contenido y anuncios.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">2. Uso de la información recogida</h3>
          <p className="mb-4">{appName} emplea la información con el fin de proporcionar el mejor servicio posible y mejorar la experiencia de usuario. Particularmente para:</p>
          <ul className="list-[square] pl-6 space-y-4 mb-4">
            <li><span className="underline">Mantener un registro interno de usuarios</span> y mejorar nuestros productos de software.</li>
            <li><span className="underline">Publicidad Personalizada:</span> Utilizar el ID de publicidad para mostrar anuncios que sean relevantes para el usuario a través de la red de Google AdMob.</li>
            <li><span className="underline">Analíticas:</span> Utilizar herramientas como Firebase para entender el rendimiento de la aplicación, detectar errores técnicos y mejorar la estabilidad del sistema.</li>
            <li><span className="underline">Comunicaciones:</span> Es posible que se envíen correos electrónicos periódicamente con actualizaciones {appType === 'juego' ? 'del' : 'de la'} {appType}, nuevas funcionalidades o información publicitaria que consideremos relevante. Usted puede cancelar estas comunicaciones en cualquier momento.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">3. Divulgación de datos a terceros (Proveedores de Servicios)</h3>
          <p className="mb-4">Para el correcto funcionamiento de la aplicación, compartimos datos limitados con los siguientes proveedores certificados:</p>
          <ul className="list-[square] pl-6 space-y-4 mb-4">
            <li><span className="underline">Google AdMob:</span> Para la gestión y publicación de anuncios. AdMob puede utilizar los datos recopilados para personalizar la publicidad que usted ve.</li>
            <li><span className="underline">Firebase (Google):</span> Para el análisis de datos, monitoreo de errores (Crashlytics) y configuración remota de la aplicación.</li>
            <li><span className="underline">Autoridades Legales:</span> Esta compañía no venderá ni distribuirá su información personal sin su consentimiento, salvo que sea requerido por un juez mediante una orden judicial específica.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">4. Tecnologías de Almacenamiento y Seguimiento</h3>
          <p className="mb-4">Aunque comúnmente se les denomina "Cookies" en entornos web, en nuestra aplicación móvil utilizamos identificadores de publicidad y almacenamiento local en el dispositivo para:</p>
          <ul className="list-[square] pl-6 space-y-4 mb-4">
            <li><span className="underline">Reconocer al usuario individualmente</span> y recordar sus preferencias en {appType === 'juego' ? 'el' : 'la'} {appType}.</li>
            <li><span className="underline">Analizar el tráfico y la frecuencia de uso</span> con fines estadísticos. Usted puede gestionar sus preferencias de privacidad y rastreo de anuncios directamente desde los ajustes de su dispositivo Android o a través del panel de consentimiento (CMP) proporcionado dentro de la aplicación.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">5. Derechos de los usuarios (GDPR y Privacidad Global)</h3>
          <p className="mb-4">Si usted es residente del Espacio Económico Europeo (EEE), cuenta con derechos específicos protegidos por el GDPR:</p>
          <ul className="list-square pl-6 space-y-4 mb-4">
            <li><span className="underline">Derecho de Acceso y Rectificación:</span> Puede solicitar conocer qué datos tenemos de usted y corregirlos.</li>
            <li><span className="underline">Derecho de Revocación:</span> Puede retirar su consentimiento para el procesamiento de anuncios personalizados en cualquier momento.</li>
            <li><span className="underline">Derecho de Eliminación:</span> Puede solicitar que eliminemos su registro de usuario y datos asociados. Para ejercer cualquier derecho, puede contactarnos a través del correo electrónico: {contactEmail}.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">6. Seguridad de la Información</h3>
          <p className="mb-4">Estamos profundamente comprometidos con la seguridad de su información. Implementamos las medidas técnicas y organizativas necesarias, como el uso de servidores seguros y actualizaciones constantes de software, para evitar accesos no autorizados y garantizar que su información esté protegida en todo momento.</p>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">7. Enlaces a Terceros</h3>
          <p className="mb-4">{appName} puede contener enlaces a otros sitios web o aplicaciones que puedan ser de su interés. Una vez que usted haga clic en estos enlaces y abandone nuestra aplicación, no tenemos control sobre el sitio al que es redirigido y, por lo tanto, no somos responsables de los términos o la protección de sus datos en esos sitios terceros.</p>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">8. Privacidad de Menores</h3>
          <p className="mb-4">Nuestra aplicación es apta para diversas edades, pero no recopilamos intencionadamente datos personales de niños menores de 13 años. Si usted es padre o tutor y descubre que su hijo nos ha proporcionado datos personales, por favor contáctenos para proceder con su eliminación inmediata.</p>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">9. Cambios en la Política de Privacidad</h3>
          <p className="mb-4">{appName} se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento. Le recomendamos revisar continuamente este documento dentro de la aplicación o en nuestro sitio oficial para asegurarse de que está de acuerdo con los términos vigentes.</p>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-slate-500">Última actualización: {lastUpdated}.</p>
        </div>
      </div>
    </div>
  );
}
