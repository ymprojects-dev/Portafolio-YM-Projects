import { useEffect } from "react";
import { Link } from "react-router-dom";

import AppFooter from "./app/AppFooter";

export interface DeleteAccountLayoutProps {
  appName: string;
  appLogoUrl: string;
  backLinkUrl: string;
  backLinkText: string;
  primaryHoverClass: string;
  dataTypesList: string[];
  appPurpose: string;
  tagline?: string;
  homeRoute?: string;
  privacyRoute?: string;
  termsRoute?: string;
  deleteAccountRoute?: string;
}

export default function DeleteAccountLayout({
  appName,
  appLogoUrl,
  backLinkUrl,
  backLinkText,
  primaryHoverClass,
  dataTypesList,
  appPurpose,
  tagline = "Eliminar Cuenta",
  homeRoute,
  privacyRoute,
  termsRoute,
  deleteAccountRoute,
}: DeleteAccountLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Privacidad y Eliminación de Datos - ${appName}`;
  }, [appName]);

  return (
    <div className="bg-[#f2f5f6] text-slate-800 font-sans min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-slate-200">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
          <Link to={backLinkUrl} className="flex items-center gap-3">
            <img src={appLogoUrl} alt={`${appName} Logo`} className="w-8 h-8 object-contain" />
            <span className="text-xl font-black text-slate-900 tracking-tighter">{appName}</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 font-medium text-sm text-slate-600">
            <Link to={backLinkUrl} className={`${primaryHoverClass} transition-colors`}>{backLinkText}</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Privacidad y Eliminación de Datos</h1>
        <div className="prose max-w-none text-slate-600 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <p className="mb-8 font-medium">
            En <strong>{appName}</strong> (una aplicación de <strong>YM Projects</strong>), valoramos tu privacidad y queremos que tengas control total sobre tus datos. A continuación, te proporcionamos información importante sobre cómo gestionamos tus datos y cómo puedes solicitar la eliminación de tu cuenta si así lo deseas.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">1. Eliminación de Cuenta</h3>
          <p className="mb-4">Si deseas eliminar tu cuenta de {appName}, sigue estos pasos simples:</p>
          <ul className="list-[square] pl-6 space-y-4 mb-4">
            <li>Inicia sesión en tu cuenta de {appName}.</li>
            <li>Accede a la configuración de tu perfil.</li>
            <li>Busca la opción "Eliminar Cuenta" y haz clic en ella.</li>
            <li>Confirma tu decisión y sigue las instrucciones adicionales para completar el proceso.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">2. Retención de Datos</h3>
          <p className="mb-4">
            Entendemos la importancia de mantener tus datos seguros y privados. Conservamos tus datos durante el tiempo que utilices la aplicación y durante un período adicional de 30 días después de la eliminación de la cuenta. Durante este tiempo, tus datos seguirán siendo confidenciales y no se utilizarán para ningún propósito distinto al necesario para cumplir con nuestras obligaciones legales o de seguridad, y mejorar nuestros servicios.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">3. Tipos de Datos que se eliminan</h3>
          <p className="mb-4">Los tipos de datos que conservamos y que serán eliminados al borrar la cuenta incluyen:</p>
          <ul className="list-[square] pl-6 space-y-4 mb-4">
            {dataTypesList.map((dt, i) => <li key={i}>{dt}</li>)}
          </ul>

          <div className="mt-8 pt-8 border-t border-slate-100">
            <p className="mb-4">
              Queremos que tengas la tranquilidad de que tus datos están en buenas manos. Si tienes alguna pregunta o necesitas ayuda con la eliminación de tu cuenta o la gestión de tus datos, no dudes en contactarnos a través de nuestro correo electrónico de soporte: <a href="mailto:ym.projects.dev@gmail.com" className={`font-semibold text-slate-800 ${primaryHoverClass}`}>ym.projects.compose@gmail.com</a>
            </p>
            <p className="font-medium">
              Gracias por confiar en {appName} para {appPurpose}. Tu privacidad es nuestra prioridad.
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-slate-500">Última actualización: 11 de abril de 2026.</p>
        </div>
      </div>
      <AppFooter
        appName={appName}
        tagline={tagline}
        homeRoute={homeRoute || backLinkUrl}
        privacyRoute={privacyRoute}
        termsRoute={termsRoute}
        deleteAccountRoute={deleteAccountRoute}
      />
    </div>
  );
}
