import { MessageSquare } from 'lucide-react';
import profileImg from '../assets/img.jpg';
import { useTranslation } from '../LanguageContext';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="bg-transparent px-4 py-12 text-slate-900 transition-colors duration-300 dark:text-white sm:px-6 lg:px-10 lg:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 lg:flex-row-reverse lg:gap-12">
        <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-[500px]">
          <div className="blob-shape relative h-72 w-full overflow-hidden border-4 border-[#F97316] shadow-[0_0_50px_rgba(249,115,22,0.18)] sm:h-80 lg:h-[450px] lg:w-[450px]">
            <img
              src={profileImg}
              alt="Henri"
              className="h-full w-full scale-[1.08] object-cover object-center"
            />
          </div>
        </div>

        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            <span dangerouslySetInnerHTML={{ __html: t('hero.greeting') }} /> <span className="text-[#F97316]">Henri Joel</span>
          </h1>
          <p
            className="py-6 text-base text-slate-600 transition-colors duration-300 dark:text-gray-300 sm:text-lg"
            dangerouslySetInnerHTML={{ __html: t('hero.desc') }}
          />
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jhmichee@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn flex gap-2 rounded-lg border-none bg-[#F97316] px-6 text-sm font-semibold text-black hover:border-black hover:bg-slate-900 hover:text-[#F97316] hover:shadow-[0_0_20px_#F97316] sm:px-8"
            >
              <MessageSquare size={18} />
              {t('hero.contact')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
