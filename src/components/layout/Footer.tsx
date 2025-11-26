export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="text-slate-600 font-medium">LABU2060 Learning Portfolio</p>
            <p className="text-slate-500 text-sm">Fall 2025-2026</p>
          </div>
          <p className="text-slate-400 text-sm">
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
