import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, Monitor, PenTool, Server, X } from 'lucide-react';
import { useTranslation } from '../LanguageContext';

const albumPhotos = Object.entries(import.meta.glob('../assets/album/*.{png,jpg,jpeg,jfif,webp}', {
  eager: true,
  import: 'default',
}))
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath, 'fr', { numeric: true }))
  .map(([path, src]) => ({
    src,
    alt: `Photo de l’album : ${path.split('/').pop().replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ')}`,
  }));

const About = () => {
  const { t } = useTranslation();
  const [activePhoto, setActivePhoto] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalTriggerRef = useRef(null);

  const changePhoto = (direction) => {
    setSlideDirection(direction);
    setActivePhoto((current) => (current + direction + albumPhotos.length) % albumPhotos.length);
  };

  useEffect(() => {
    if (albumPhotos.length < 2 || isHovered || isFocused || isModalOpen) return undefined;

    const intervalId = window.setInterval(() => changePhoto(1), 4000);
    return () => window.clearInterval(intervalId);
  }, [isFocused, isHovered, isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const modalTrigger = modalTriggerRef.current;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      } else if (event.key === 'ArrowRight') {
        changePhoto(1);
      } else if (event.key === 'ArrowLeft') {
        changePhoto(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (modalTrigger?.isConnected) modalTrigger.focus();
    };
  }, [isModalOpen]);

  return (
    <section className="bg-slate-50 px-4 py-16 transition-colors duration-300 dark:bg-[#1e202a] sm:px-6 lg:px-10 lg:py-20" id="about">
      <div className="mx-auto max-w-7xl">
        <h2 data-reveal className="mb-10 text-center text-2xl font-bold uppercase tracking-widest text-slate-900 transition-colors duration-300 dark:text-white sm:text-3xl lg:mb-16">{t('about.title')}</h2>

        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="flex w-full justify-center lg:w-1/3">
            <div
              data-reveal="scale"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onFocusCapture={() => setIsFocused(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false);
              }}
              className="relative h-72 w-full max-w-xs overflow-hidden rounded-2xl shadow-2xl sm:h-80 sm:max-w-sm lg:h-96 lg:w-80"
            >
              <button
                type="button"
                onClick={() => changePhoto(1)}
                aria-label="Photo suivante"
                className="group absolute inset-0 h-full w-full cursor-pointer"
              >
                <img
                  key={albumPhotos[activePhoto].src}
                  src={albumPhotos[activePhoto].src}
                  alt={albumPhotos[activePhoto].alt}
                  className={`photo-swap h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${slideDirection > 0 ? 'photo-swap-next' : 'photo-swap-previous'}`}
                />
              </button>
              <button
                type="button"
                onClick={() => changePhoto(-1)}
                aria-label="Photo précédente"
                className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white transition-colors hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => changePhoto(1)}
                aria-label="Photo suivante"
                className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white transition-colors hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                ref={modalTriggerRef}
                onClick={() => setIsModalOpen(true)}
                aria-label="Agrandir les photos de l’album"
                className="absolute bottom-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Expand size={17} aria-hidden="true" />
              </button>
              <span aria-live={isHovered || isFocused ? 'polite' : 'off'} className="sr-only">
                {activePhoto + 1} / {albumPhotos.length}
              </span>
            </div>
          </div>

          {isModalOpen && (
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Galerie photos"
              onClick={(event) => {
                if (event.target === event.currentTarget) setIsModalOpen(false);
              }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
            >
              <button
                type="button"
                autoFocus
                onClick={() => setIsModalOpen(false)}
                aria-label="Fermer la galerie"
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6 sm:top-6"
              >
                <X size={24} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => changePhoto(-1)}
                aria-label="Photo précédente"
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-6"
              >
                <ChevronLeft size={24} aria-hidden="true" />
              </button>
              <img
                key={albumPhotos[activePhoto].src}
                src={albumPhotos[activePhoto].src}
                alt={albumPhotos[activePhoto].alt}
                className="photo-swap max-h-[85vh] max-w-[85vw] rounded-xl object-contain shadow-2xl"
              />
              <button
                type="button"
                onClick={() => changePhoto(1)}
                aria-label="Photo suivante"
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6"
              >
                <ChevronRight size={24} aria-hidden="true" />
              </button>
              <span aria-live="polite" className="absolute bottom-4 text-sm text-white sm:bottom-6">
                {activePhoto + 1} / {albumPhotos.length}
              </span>
            </div>
          )}

          <div className="flex w-full flex-col gap-5 lg:w-1/2">
            <div data-reveal style={{ '--reveal-delay': '70ms' }} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 dark:border-gray-700 dark:bg-[#2a2d3a] sm:p-6">
              <div className="rounded-lg bg-[#F97316]/10 p-3 text-[#F97316]">
                <Monitor size={28} />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-slate-900 transition-colors duration-300 dark:text-white sm:text-xl">{t('about.front.title')}</h3>
                <p className="text-sm text-slate-600 transition-colors duration-300 dark:text-gray-400">{t('about.front.desc')}</p>
              </div>
            </div>

            <div data-reveal style={{ '--reveal-delay': '140ms' }} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 dark:border-gray-700 dark:bg-[#2a2d3a] sm:p-6">
              <div className="rounded-lg bg-[#F97316]/10 p-3 text-[#F97316]">
                <Server size={28} />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-slate-900 transition-colors duration-300 dark:text-white sm:text-xl">{t('about.back.title')}</h3>
                <p className="text-sm text-slate-600 transition-colors duration-300 dark:text-gray-400">{t('about.back.desc')}</p>
              </div>
            </div>

            <div data-reveal style={{ '--reveal-delay': '210ms' }} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 dark:border-gray-700 dark:bg-[#2a2d3a] sm:p-6">
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
