import { MessageSquare } from 'lucide-react';
import profileImg from '../assets/img.jpg';
import { useTranslation } from '../LanguageContext';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div id="home" className="hero min-h-[70vh] bg-transparent text-slate-900 dark:text-white px-10 transition-colors duration-300">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full max-w-7xl">
        <div className="relative">
          {/* Blob image container */}
          <div className="w-80 h-80 lg:w-[450px] lg:h-[450px] overflow-hidden blob-shape border-4 border-[#F97316] relative">
            <img 
              src={profileImg} 
              alt="Lucdev" 
              className="object-cover w-full h-full scale-110 translate-y-4"
            />
          </div>
        </div>
        
        <div className="max-w-2xl mt-10 lg:mt-0">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span dangerouslySetInnerHTML={{ __html: t('hero.greeting') }} /> <span className="text-[#F97316]">Henri Joel</span>
          </h1>
          <p className="py-6 text-slate-600 dark:text-gray-300 text-lg transition-colors duration-300" dangerouslySetInnerHTML={{ __html: t('hero.desc') }}>
          </p>
          <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jhmichee@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-[#F97316] hover:bg-black hover:border-black hover:text-[#F97316] text-black border-none rounded-lg px-8 hover:shadow-[0_0_15px_white] flex gap-2">
            <MessageSquare size={18} />
            {t('hero.contact')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
