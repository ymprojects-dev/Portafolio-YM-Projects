import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function SbarraPrivacidad() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacidad y Eliminación de Datos - Sbarra";
  }, []);

  return (
    <div className="bg-[#f2f5f6] text-slate-800 font-sans min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-slate-200">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
          <Link to="/sbarra" className="flex items-center gap-3">
            <img src="/images/sbarra/foreground_sbarra.png" alt="Sbarra Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-black text-slate-900 tracking-tighter">Sbarra</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 font-medium text-sm text-slate-600">
            <Link to="/sbarra" className="hover:text-[#2A94D5] transition-colors">Volver a Sbarra</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Privacidad y Eliminación de Datos</h1>
        <div className="prose max-w-none text-slate-600 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <p className="mb-8 font-medium">
            En <strong>Sbarra</strong> (una aplicación de <strong>YM Projects</strong>), valoramos tu privacidad y queremos que tengas control total sobre tus datos. A continuación, te proporcionamos información importante sobre cómo gestionamos tus datos y cómo puedes solicitar la eliminación de tu cuenta si así lo deseas.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8">1. Eliminación de Cuenta</h3>
          <p className="mb-4">Si deseas eliminar tu cuenta de Sbarra, sigue estos pasos simples:</p>
          <ul className="list-[square] pl-6 space-y-4 mb-4">
            <li>Inicia sesión en tu cuenta de Sbarra.</li>
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
            <li>Información de la cuenta (nombre, correo electrónico, contraseña).</li>
            <li>Historial de rutinas y tareas creadas.</li>
            <li>Preferencias de usuario y configuraciones.</li>
          </ul>

          <div className="mt-8 pt-8 border-t border-slate-100">
            <p className="mb-4">
              Queremos que tengas la tranquilidad de que tus datos están en buenas manos. Si tienes alguna pregunta o necesitas ayuda con la eliminación de tu cuenta o la gestión de tus datos, no dudes en contactarnos a través de nuestro correo electrónico de soporte: <a href="mailto:ym.projects.dev@gmail.com" className="font-semibold text-slate-800 hover:text-[#2A94D5]">ym.projects.compose@gmail.com</a>
            </p>
            <p className="font-medium">
              Gracias por confiar en Sbarra para organizar tu rutina diaria. Tu privacidad es nuestra prioridad.
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-slate-500">Última actualización: 11 de abril de 2026.</p>
        </div>
      </div>
    </div>
  );
}
