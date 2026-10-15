import { Monitor, Server, PenTool } from 'lucide-react';
import profileImg from '../assets/img2.jpg';
import { useTranslation } from '../LanguageContext';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-slate-50 px-4 py-16 transition-colors duration-300 dark:bg-[#1e202a] sm:px-6 lg:px-10 lg:py-20" id="about">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center text-2xl font-bold uppercase tracking-widest text-slate-900 transition-colors duration-300 dark:text-white sm:text-3xl lg:mb-16">{t('about.title')}</h2>

        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="flex w-full justify-center lg:w-1/3">
            <div className="relative h-72 w-full max-w-xs overflow-hidden rounded-2xl shadow-2xl sm:h-80 sm:max-w-sm lg:h-96 lg:w-80">
              <img
                src={profileImg}
                alt="Henri About"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 dark:bg-black/20"></div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-5 lg:w-1/2">
            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 dark:border-gray-700 dark:bg-[#2a2d3a] sm:p-6">
              <div className="rounded-lg bg-[#F97316]/10 p-3 text-[#F97316]">
                <Monitor size={28} />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-slate-900 transition-colors duration-300 dark:text-white sm:text-xl">{t('about.front.title')}</h3>
                <p className="text-sm text-slate-600 transition-colors duration-300 dark:text-gray-400">{t('about.front.desc')}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 dark:border-gray-700 dark:bg-[#2a2d3a] sm:p-6">
              <div className="rounded-lg bg-[#F97316]/10 p-3 text-[#F97316]">
                <Server size={28} />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-slate-900 transition-colors duration-300 dark:text-white sm:text-xl">{t('about.back.title')}</h3>
                <p className="text-sm text-slate-600 transition-colors duration-300 dark:text-gray-400">{t('about.back.desc')}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 dark:border-gray-700 dark:bg-[#2a2d3a] sm:p-6">
              <div className="rounded-lg bg-[#F97316]/10 p-3 text-[#F97316]">
                <PenTool size={28} />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-slate-900 transition-colors duration-300 dark:text-white sm:text-xl">{t('about.ui.title')}</h3>
                <p className="text-sm text-slate-600 transition-colors duration-300 dark:text-gray-400">{t('about.ui.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
