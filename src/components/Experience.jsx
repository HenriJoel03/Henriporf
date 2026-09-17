import htmlImg from '../assets/techno/html.png';
import cssImg from '../assets/techno/css.png';
import jsImg from '../assets/techno/js.png';
import reactImg from '../assets/techno/react.png';
import tailwindImg from '../assets/techno/tailwind.png';
import nextImg from '../assets/techno/next-js.webp';
import tsImg from '../assets/techno/typescript.svg';
import nodeImg from '../assets/techno/node-js.png';
import prismaImg from '../assets/techno/prisma.webp';

import googleImg from '../assets/companies/google.png';
import metaImg from '../assets/companies/meta.webp';
import amazonImg from '../assets/companies/amazon.png';

import { useTranslation } from '../LanguageContext';

const Experience = () => {
  const { t } = useTranslation();

  const technos = [
    { name: 'HTML', img: htmlImg },
    { name: 'CSS', img: cssImg },
    { name: 'JavaScript', img: jsImg },
    { name: 'React', img: reactImg },
    { name: 'Tailwind', img: tailwindImg },
    { name: 'Next JS', img: nextImg },
    { name: 'TypeScript', img: tsImg },
    { name: 'Node JS', img: nodeImg },
    { name: 'Prisma', img: prismaImg },
  ];

  return (
    <section className="py-20 px-10 bg-slate-50 dark:bg-[#1e202a] transition-colors duration-300" id="experience">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 tracking-widest text-slate-900 dark:text-white uppercase transition-colors duration-300">{t('exp.title')}</h2>
        
        <div className="flex flex-col lg:flex-row gap-16 justify-center">
          {/* Tech grid */}
          <div className="w-full lg:w-1/3">
            <div className="grid grid-cols-3 gap-6">
              {technos.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center justify-center p-4 bg-white dark:bg-[#2a2d3a] rounded-full aspect-square border border-slate-200 dark:border-gray-700 shadow-md hover:scale-110 transition-all duration-300">
                  <img src={tech.img} alt={tech.name} className="w-10 h-10 object-contain mb-2" />
                  <span className="text-xs text-slate-600 dark:text-gray-400 transition-colors duration-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience list */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Google */}
            <div className="bg-white dark:bg-[#2a2d3a] p-6 rounded-2xl flex gap-6 shadow-lg border border-slate-200 dark:border-gray-700 transition-colors duration-300">
              <div className="flex-shrink-0 mt-1">
                <img src={googleImg} alt="Google" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300">{t('exp.google.title')}</h3>
                <p className="text-sm text-slate-500 dark:text-gray-500 mb-3 transition-colors duration-300">{t('exp.google.date')}</p>
                <ul className="list-disc list-inside text-sm text-slate-600 dark:text-gray-300 space-y-1 transition-colors duration-300">
                  <li>{t('exp.google.d1')}</li>
                  <li>{t('exp.google.d2')}</li>
                </ul>
              </div>
            </div>

            {/* Meta */}
            <div className="bg-white dark:bg-[#2a2d3a] p-6 rounded-2xl flex gap-6 shadow-lg border border-slate-200 dark:border-gray-700 transition-colors duration-300">
              <div className="flex-shrink-0 mt-1">
                <img src={metaImg} alt="Meta" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300">{t('exp.meta.title')}</h3>
                <p className="text-sm text-slate-500 dark:text-gray-500 mb-3 transition-colors duration-300">{t('exp.meta.date')}</p>
                <ul className="list-disc list-inside text-sm text-slate-600 dark:text-gray-300 space-y-1 transition-colors duration-300">
                  <li>{t('exp.meta.d1')}</li>
                  <li>{t('exp.meta.d2')}</li>
                </ul>
              </div>
            </div>

            {/* Amazon */}
            <div className="bg-white dark:bg-[#2a2d3a] p-6 rounded-2xl flex gap-6 shadow-lg border border-slate-200 dark:border-gray-700 transition-colors duration-300">
              <div className="flex-shrink-0 mt-1">
                <img src={amazonImg} alt="Amazon" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300">{t('exp.amazon.title')}</h3>
                <p className="text-sm text-slate-500 dark:text-gray-500 mb-3 transition-colors duration-300">{t('exp.amazon.date')}</p>
                <ul className="list-disc list-inside text-sm text-slate-600 dark:text-gray-300 space-y-1 transition-colors duration-300">
                  <li>{t('exp.amazon.d1')}</li>
                  <li>{t('exp.amazon.d2')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
