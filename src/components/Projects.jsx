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
    <section className="py-20 px-10 bg-slate-50 dark:bg-[#1e202a] transition-colors duration-300" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 tracking-widest text-slate-900 dark:text-white uppercase transition-colors duration-300">{t('proj.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-[#2a2d3a] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-gray-700 flex flex-col hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">{project.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 flex-grow transition-colors duration-300">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-2 py-1 bg-[#ff9d4a]/10 dark:bg-[#ff9d4a]/20 text-[#ff9d4a] rounded-md transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 bg-[#ff9d4a] hover:bg-[#e88a38] text-white py-2 rounded-lg text-sm font-semibold transition-colors">
                    {t('proj.demo')} <span className="ml-1">↗</span>
                  </button>
                  <button className="bg-slate-100 hover:bg-slate-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-slate-900 dark:text-white p-2 rounded-lg transition-colors flex items-center justify-center w-10">
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
