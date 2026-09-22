import { Hexagon, Send, Code, Briefcase, Diamond } from 'lucide-react';
import { useTranslation } from '../LanguageContext';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="hover:shadow-[0_0_50px_#F97316] bg-slate-900 dark:bg-slate-900 py-10 text-center border-t border-slate-200 dark:border-gray-800 transition-colors duration-300">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white font-bold text-xl transition-colors duration-300">
          <Diamond className="text-slate-900 dark:text-[#F97316] transition-colors duration-300" size={28} />
          <span className="text-[#F97316] ">Henri Joel</span>
        </div>
        <p className="text-slate-500 dark:text-gray-500 text-sm mb-6 transition-colors duration-300">
          {t('footer.copy')}
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-slate-400 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            <Send size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            <Code size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            <Briefcase size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
