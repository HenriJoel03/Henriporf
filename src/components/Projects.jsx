import { Code } from 'lucide-react';
import proj1 from '../assets/projects/1.png';
import proj2 from '../assets/projects/2.png';
import proj3 from '../assets/projects/3.png';
import proj4 from '../assets/projects/4.png';
import proj5 from '../assets/projects/5.png';
import proj6 from '../assets/projects/6.png';
import { useTranslation } from '../LanguageContext';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('proj.p1.title'),
      desc: t('proj.p1.desc'),
      img: proj1,
      tags: ['React', 'Tailwind', 'Node.js'],
    },
    {
      id: 2,
      title: t('proj.p2.title'),
      desc: t('proj.p2.desc'),
      img: proj2,
      tags: ['Next.js', 'TypeScript', 'Prisma'],
    },
    {
      id: 3,
      title: t('proj.p3.title'),
      desc: t('proj.p3.desc'),
      img: proj3,
      tags: ['React', 'CSS', 'Framer Motion'],
    },
    {
      id: 4,
      title: t('proj.p4.title'),
      desc: t('proj.p4.desc'),
      img: proj4,
      tags: ['React', 'Socket.io', 'Express'],
    },
    {
      id: 5,
      title: t('proj.p5.title'),
      desc: t('proj.p5.desc'),
      img: proj5,
      tags: ['Vue.js', 'PostgreSQL', 'Tailwind'],
    },
    {
      id: 6,
      title: t('proj.p6.title'),
      desc: t('proj.p6.desc'),
      img: proj6,
      tags: ['Python', 'React', 'FastAPI'],
    },
  ];

  return (
    <section className="bg-slate-50 px-4 py-16 transition-colors duration-300 dark:bg-[#1e202a] sm:px-6 lg:px-10 lg:py-20" id="projects">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center text-2xl font-bold uppercase tracking-widest text-slate-900 transition-colors duration-300 dark:text-white sm:text-3xl lg:mb-16">{t('proj.title')}</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_#F97316] dark:border-gray-700 dark:bg-[#2a2d3a]">
              <div className="h-48 overflow-hidden sm:h-52">
                <img src={project.img} alt={project.title} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-grow flex-col p-4 sm:p-5">
                <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-300 dark:text-white">{project.title}</h3>
                <p className="mb-4 flex-grow text-sm text-slate-600 transition-colors duration-300 dark:text-gray-400">{project.desc}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-[#ff9d4a]/10 px-2 py-1 text-[10px] font-semibold text-[#ff9d4a] transition-colors duration-300 dark:bg-[#ff9d4a]/20 sm:text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 rounded-lg bg-[#ff9d4a] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e88a38]">
                    {t('proj.demo')} <span className="ml-1">↗</span>
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors hover:bg-slate-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                    <Code size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
