import { Database } from 'lucide-react';
import {
  SiCss,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import googleImg from '../assets/companies/google.png';
import metaImg from '../assets/companies/meta.png';
import amazonImg from '../assets/companies/amazon.jfif';

import { useTranslation } from '../LanguageContext';

const Experience = () => {
  const { t } = useTranslation();

  const technos = [
    { name: 'HTML', Icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', Icon: SiCss, color: '#1572B6' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'React', Icon: SiReact, color: '#61DAFB' },
    { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Next JS', Icon: SiNextdotjs, color: '#000000' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'Node JS', Icon: SiNodedotjs, color: '#339933' },
    { name: 'Prisma', Icon: SiPrisma, color: '#2D3748' },
    { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
    { name: 'Linux', Icon: SiLinux, color: '#FCC624' },
    { name: 'SQL', Icon: Database, color: '#4479A1' },
  ];

  return (
    <section className="bg-slate-50 px-4 py-16 transition-colors duration-300 dark:bg-[#1e202a] sm:px-6 lg:px-10 lg:py-20" id="experience">
      <div className="mx-auto max-w-7xl">
        <h2 data-reveal className="mb-10 text-center text-2xl font-bold uppercase tracking-widest text-slate-900 transition-colors duration-300 dark:text-white sm:text-3xl lg:mb-16">{t('exp.title')} & {t('exp.subtitle')}</h2>

        <div className="flex flex-col justify-center gap-8 lg:flex-row lg:gap-16">
          <div className="w-full lg:w-1/3">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {technos.map(({ name, Icon, color }, index) => (
                <div key={name} data-reveal translate="no" style={{ '--reveal-delay': `${index * 35}ms` }} className="notranslate flex aspect-square flex-col items-center justify-center rounded-full border border-slate-200 bg-white p-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_#F97316] dark:border-gray-700 dark:bg-[#2a2d3a]">
                  <span className={`mb-2 flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12 ${name === 'Next JS' ? 'rounded-full bg-white p-1' : ''} ${name === 'Prisma' ? 'rounded-md bg-white p-1' : ''}`}>
                    <Icon aria-hidden="true" className="h-full w-full" style={{ color }} />
                  </span>
                  <span className="text-center text-[10px] text-slate-600 transition-colors duration-300 dark:text-gray-400 sm:text-xs">{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-5 lg:w-1/2">
            <div data-reveal className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg transition-colors duration-300 dark:border-gray-700 dark:bg-[#2a2d3a] sm:p-6">
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

            <div data-reveal style={{ '--reveal-delay': '90ms' }} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg transition-colors duration-300 dark:border-gray-700 dark:bg-[#2a2d3a] sm:p-6">
              <div className="mt-1 flex-shrink-0">
                <img src={metaImg} alt="Meta" className="h-8 w-8 object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 dark:text-white sm:text-xl">{t('exp.meta.title')}</h3>
                <p className="mb-3 text-sm text-slate-500 transition-colors duration-300 dark:text-gray-500">{t('exp.meta.date')}</p>
                <ul className="list-inside list-disc space-y-1 text-sm text-slate-600 transition-colors duration-300 dark:text-gray-300">
                  <li>{t('exp.meta.d1')}</li>
                  <li>{t('exp.meta.d2')}</li>
                  <li> {t('exp.meta.d3')}</li>
                  <li> {t('exp.meta.d4')}</li>
                </ul>
              </div>
            </div>

            <div data-reveal style={{ '--reveal-delay': '180ms' }} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg transition-colors duration-300 dark:border-gray-700 dark:bg-[#2a2d3a] sm:p-6">
              <div className="mt-1 flex-shrink-0">
                <img src={amazonImg} alt="Amazon" className="h-8 w-8 object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 dark:text-white sm:text-xl">{t('exp.amazon.title')}</h3>

                <p className="mb-3 text-sm text-slate-500 transition-colors duration-300 dark:text-gray-500"></p>
                
                <ul className="list-inside list-disc space-y-1 text-sm text-slate-600 transition-colors duration-300 dark:text-gray-300">
                  <li>{t('exp.amazon.d1')}</li>
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
