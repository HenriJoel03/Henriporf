import { Monitor, Server, PenTool } from 'lucide-react';
import profileImg from '../assets/img2.jpg';
import { useTranslation } from '../LanguageContext';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-10 bg-slate-50 dark:bg-[#1e202a] transition-colors duration-300" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 tracking-widest text-slate-900 dark:text-white uppercase transition-colors duration-300">{t('about.title')}</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Left image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="rounded-2xl overflow-hidden w-64 h-80 lg:w-80 lg:h-96 shadow-2xl relative">
              <img 
                src={profileImg} 
                alt="Lucdev About" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 dark:bg-opacity-20"></div>
            </div>
          </div>
          
          {/* Right cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Frontend Card */}
            <div className="bg-white dark:bg-[#2a2d3a] p-6 rounded-2xl flex gap-6 items-center shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-gray-700">
              <div className="text-[#ff9d4a] bg-[#ff9d4a]/10 p-3 rounded-lg">
                <Monitor size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300">{t('about.front.title')}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm transition-colors duration-300">{t('about.front.desc')}</p>
              </div>
            </div>
            
            {/* Backend Card */}
            <div className="bg-white dark:bg-[#2a2d3a] p-6 rounded-2xl flex gap-6 items-center shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-gray-700">
              <div className="text-[#ff9d4a] bg-[#ff9d4a]/10 p-3 rounded-lg">
                <Server size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300">{t('about.back.title')}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm transition-colors duration-300">{t('about.back.desc')}</p>
              </div>
            </div>
            
            {/* UI/UX Card */}
            <div className="bg-white dark:bg-[#2a2d3a] p-6 rounded-2xl flex gap-6 items-center shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-gray-700">
              <div className="text-[#ff9d4a] bg-[#ff9d4a]/10 p-3 rounded-lg">
                <PenTool size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300">{t('about.ui.title')}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm transition-colors duration-300">{t('about.ui.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
