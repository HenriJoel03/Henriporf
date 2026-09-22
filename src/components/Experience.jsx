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
    <section className="bg-slate-50 px-4 py-16 transition-colors duration-300 dark:bg-[#1e202a] sm:px-6 lg:px-10 lg:py-20" id="experience">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center text-2xl font-bold uppercase tracking-widest text-slate-900 transition-colors duration-300 dark:text-white sm:text-3xl lg:mb-16">{t('exp.title')}</h2>

        <div className="flex flex-col justify-center gap-8 lg:flex-row lg:gap-16">
          <div className="w-full lg:w-1/3">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {technos.map((tech) => (
                <div key={tech.name} className="flex aspect-square flex-col items-center justify-center rounded-full border border-slate-200 bg-white p-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_#F97316] dark:border-gray-700 dark:bg-[#2a2d3a]">
                  <img src={tech.img} alt={tech.name} className="mb-2 h-10 w-10 object-contain sm:h-12 sm:w-12" />
                  <span className="text-center text-[10px] text-slate-600 transition-colors duration-300 dark:text-gray-400 sm:text-xs">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-5 lg:w-1/2">
            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg transition-colors duration-300 dark:border-gray-700 dark:bg-[#2a2d3a] sm:p-6">
              <div className="mt-1 flex-shrink-0">
                <img src={googleImg} alt="Google" className="h-8 w-8 object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 dark:text-white sm:text-xl">{t('exp.google.title')}</h3>
                <p className="mb-3 text-sm text-slate-500 transition-colors duration-300 dark:text-gray-500">{t('exp.google.date')}</p>
                <ul className="list-inside list-disc space-y-1 text-sm text-slate-600 transition-colors duration-300 dark:text-gray-300">
                  <li>{t('exp.google.d1')}</li>
                  <li>{t('exp.google.d2')}</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg transition-colors duration-300 dark:border-gray-700 dark:bg-[#2a2d3a] sm:p-6">
              <div className="mt-1 flex-shrink-0">
                <img src={metaImg} alt="Meta" className="h-8 w-8 object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 dark:text-white sm:text-xl">{t('exp.meta.title')}</h3>
                <p className="mb-3 text-sm text-slate-500 transition-colors duration-300 dark:text-gray-500">{t('exp.meta.date')}</p>
                <ul className="list-inside list-disc space-y-1 text-sm text-slate-600 transition-colors duration-300 dark:text-gray-300">
                  <li>{t('exp.meta.d1')}</li>
                  <li>{t('exp.meta.d2')}</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg transition-colors duration-300 dark:border-gray-700 dark:bg-[#2a2d3a] sm:p-6">
              <div className="mt-1 flex-shrink-0">
                <img src={amazonImg} alt="Amazon" className="h-8 w-8 object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 dark:text-white sm:text-xl">{t('exp.amazon.title')}</h3>
                <p className="mb-3 text-sm text-slate-500 transition-colors duration-300 dark:text-gray-500">{t('exp.amazon.date')}</p>
                <ul className="list-inside list-disc space-y-1 text-sm text-slate-600 transition-colors duration-300 dark:text-gray-300">
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
