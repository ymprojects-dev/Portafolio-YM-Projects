import { Link } from "react-router-dom";

export interface AppNavLink {
  id: string;
  label: string;
  href: string;
  isInternal?: boolean;
}

interface AppNavbarProps {
  appName: string;
  logoSrc: string;
  primaryColor: string;
  downloadUrl?: string; 
  navLinks: AppNavLink[];
  activeLinkId?: string;
}

export default function AppNavbar({ appName, logoSrc, primaryColor, downloadUrl, navLinks, activeLinkId = "inicio" }: AppNavbarProps) {
  return (
    <nav className="absolute top-0 w-full z-50">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoSrc} alt={`Logo de ${appName}`} className="w-10 h-10 object-contain" />
          <span className="text-2xl font-black text-slate-900 tracking-tighter">{appName.replace(' App', '')}</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
          {navLinks.map((link) => {
            const isActive = link.id === activeLinkId;
            return (
              <a 
                key={link.id} 
                className={`pb-1 transition-colors`}
                style={isActive ? { color: primaryColor, borderBottom: `2px solid ${primaryColor}` } : { color: '#475569' }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = primaryColor; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#475569'; }}
                href={link.href}
              >
                {link.label}
              </a>
            );
          })}
        </div>
        {downloadUrl && (
          <a href={downloadUrl} target="_blank" rel="noopener noreferrer" 
             className="text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:scale-105 active:scale-95 duration-200 transition-all"
             style={{ backgroundColor: primaryColor }}
          >
            Descargar
          </a>
        )}
      </div>
    </nav>
  );
}
