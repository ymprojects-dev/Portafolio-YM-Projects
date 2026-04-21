import { Link } from "react-router-dom";

interface AppFooterProps {
  appName: string;
  tagline: string;
  homeRoute?: string;
  privacyRoute?: string;
  termsRoute?: string;
  deleteAccountRoute?: string;
}

export default function AppFooter({
  appName,
  tagline,
  homeRoute,
  privacyRoute,
  termsRoute,
  deleteAccountRoute
}: AppFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#f2f5f6] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-slate-700 text-sm mb-1">{appName.replace(' App', '')}</span>
            <p>© {currentYear} {appName.replace(' App', '')}. {tagline}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 font-medium">
            {homeRoute && (
              <Link to={homeRoute} className="hover:text-slate-800 transition-colors">Inicio</Link>
            )}
            {privacyRoute && (
              <Link to={privacyRoute} className="hover:text-slate-800 transition-colors">Privacidad</Link>
            )}
            {termsRoute && (
              <Link to={termsRoute} className="hover:text-slate-800 transition-colors">Términos</Link>
            )}
            {deleteAccountRoute && (
              <Link to={deleteAccountRoute} className="hover:text-slate-800 transition-colors">Eliminar Cuenta</Link>
            )}
            <a href="mailto:ym.projects.compose@gmail.com" className="hover:text-slate-800 transition-colors">Soporte y Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
