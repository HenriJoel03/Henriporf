import { Hexagon, Sun, Moon, Globe, Diamond } from 'lucide-react';
import { useTranslation } from '../LanguageContext';

const Navbar = ({ theme, toggleTheme }) => {
  const { language, setLanguage, t } = useTranslation();

  return (
    <div className="navbar bg-transparent pt-6 pb-6 px-10 transition-colors duration-300">
      <div className="flex-1">
        <span className="normal-case text-xl font-bold flex gap-2 items-center text-slate-900 dark:text-[#F97316]">
          <Diamond className="text-slate-900 dark:text-white" size={24} />
          Henri Joel
          <Diamond className="text-slate-900 dark:text-[#F97316]" size={24} />
        </span>
      </div>
      <div className="flex-none hidden lg:flex items-center gap-4">
        <ul className="menu menu-horizontal px-1 gap-6 text-sm font-semibold text-slate-600 dark:text-gray-300">
          <li><a href="#home" className="hover:text-slate-900 dark:hover:text-[#F97316] hover:bg-transparent">{t('nav.home')}</a></li>
          <li><a href="#about" className="hover:text-slate-900 dark:hover:text-[#F97316] hover:bg-transparent">{t('nav.about')}</a></li>
          <li><a href="#experience" className="hover:text-slate-900 dark:hover:text-[#F97316] hover:bg-transparent">{t('nav.experience')}</a></li>
          <li><a href="#projects" className="hover:text-slate-900 dark:hover:text-[#F97316] hover:bg-transparent">{t('nav.projects')}</a></li>
        </ul>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-[#F97316] transition-colors cursor-pointer">
            <Globe size={20} />
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white dark:bg-[#2a2d3a] rounded-box w-32 border border-slate-200 dark:border-gray-700">
            <li><button onClick={() => setLanguage('fr')} className={language === 'fr' ? 'font-bold' : ''}>Français</button></li>
            <li><button onClick={() => setLanguage('en')} className={language === 'en' ? 'font-bold' : ''}>English</button></li>
            <li><button onClick={() => setLanguage('de')} className={language === 'de' ? 'font-bold' : ''}>Deutsch</button></li>
            <li><button onClick={() => setLanguage('es')} className={language === 'es' ? 'font-bold' : ''}>Español</button></li>
            <li><button onClick={() => setLanguage('zh-pinyin')} className={language === 'zh-pinyin' ? 'font-bold' : ''}>Pinyin</button></li>
          </ul>
        </div>
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-[#F97316] transition-colors">
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
