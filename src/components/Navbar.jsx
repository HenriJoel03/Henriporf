import { Hexagon, Sun, Moon, Globe, Diamond } from 'lucide-react';
import { useTranslation } from '../LanguageContext';

const Navbar = ({ theme, toggleTheme }) => {
  const { language, setLanguage, t } = useTranslation();

  const languageOptions = [
    { key: 'fr', label: 'Français' },
    { key: 'en', label: 'English' },
    { key: 'de', label: 'Deutsch' },
    { key: 'es', label: 'Español' },
    { key: 'zh-pinyin', label: 'Pinyin' },
  ];

  return (
    <header className="fixed top-0 z-[60] w-full border-b border-slate-200/80 bg-slate-900/95 backdrop-blur-xl shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(249,115,22,0.45)]">
      <nav className="navbar mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-10">
        <div className="flex-1 min-w-0">
          <a href="#home" className="flex min-w-0 items-center gap-2 text-lg font-bold text-[#F97316] transition-all duration-300 hover:text-[#ffb067] sm:text-xl">
            <Diamond className="text-white drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]" size={20} />
            <span className="truncate">Henri Joel</span>
            <Diamond className="text-[#F97316] drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]" size={20} />
          </a>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 text-sm font-semibold text-slate-300">
            <li><a href="#home" className="rounded-full px-3 transition-all duration-300 hover:bg-transparent hover:text-[#F97316] hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.7)]">{t('nav.home')}</a></li>
            <li><a href="#about" className="rounded-full px-3 transition-all duration-300 hover:bg-transparent hover:text-[#F97316] hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.7)]">{t('nav.about')}</a></li>
            <li><a href="#experience" className="rounded-full px-3 transition-all duration-300 hover:bg-transparent hover:text-[#F97316] hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.7)]">{t('nav.experience')}</a></li>
            <li><a href="#projects" className="rounded-full px-3 transition-all duration-300 hover:bg-transparent hover:text-[#F97316] hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.7)]">{t('nav.projects')}</a></li>
          </ul>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-slate-300 transition-all duration-300 hover:text-[#F97316] hover:bg-transparent hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.9)]">
              <Globe size={20} />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] mt-3 w-36 rounded-box border border-slate-200 bg-white p-2 shadow dark:border-gray-700 dark:bg-[#2a2d3a]">
              {languageOptions.map((option) => (
                <li key={option.key}>
                  <button
                    onClick={() => setLanguage(option.key)}
                    className={language === option.key ? 'font-bold text-[#F97316]' : 'text-slate-700 dark:text-gray-200'}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle text-slate-300 transition-all duration-300 hover:text-[#F97316] hover:bg-transparent hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.9)]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-slate-300 transition-all duration-300 hover:text-[#F97316] hover:bg-transparent hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.9)]">
              <Globe size={18} />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] mt-3 w-36 rounded-box border border-slate-200 bg-white p-2 shadow dark:border-gray-700 dark:bg-[#2a2d3a]">
              {languageOptions.map((option) => (
                <li key={option.key}>
                  <button
                    onClick={() => setLanguage(option.key)}
                    className={language === option.key ? 'font-bold text-[#F97316]' : 'text-slate-700 dark:text-gray-200'}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle text-slate-300 transition-all duration-300 hover:text-[#F97316] hover:bg-transparent hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.9)]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-square text-slate-300 transition-all duration-300 hover:text-[#F97316] hover:bg-transparent hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.9)]">
              <Hexagon size={18} />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] mt-3 w-44 rounded-box border border-slate-200 bg-white p-2 shadow dark:border-gray-700 dark:bg-[#2a2d3a]">
              <li><a href="#home" onClick={() => document.activeElement?.blur?.()}>{t('nav.home')}</a></li>
              <li><a href="#about" onClick={() => document.activeElement?.blur?.()}>{t('nav.about')}</a></li>
              <li><a href="#experience" onClick={() => document.activeElement?.blur?.()}>{t('nav.experience')}</a></li>
              <li><a href="#projects" onClick={() => document.activeElement?.blur?.()}>{t('nav.projects')}</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
