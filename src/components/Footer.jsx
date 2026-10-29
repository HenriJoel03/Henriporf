import { Diamond } from 'lucide-react';
import { FaLinkedin, FaPhone } from 'react-icons/fa';
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiTryhackme,
  SiWhatsapp,
} from 'react-icons/si';
import { useTranslation } from '../LanguageContext';

const Footer = () => {
  const { t } = useTranslation();
  const socialLinks = [
    { label: 'Facebook', Icon: SiFacebook , href:'https://www.facebook.com/profile.php?id=100052435359827'},
    { label: 'LinkedIn', Icon: FaLinkedin },
    { label: 'GitHub', Icon: SiGithub, href: 'https://github.com/HenriJoel03' },
    { label: 'WhatsApp', Icon: SiWhatsapp, href: 'https://wa.me/22891359155' },
    { label: 'Téléphone', Icon: FaPhone, href: 'tel:+22891359155' },
    { label: 'Instagram', Icon: SiInstagram, href: 'https://www.instagram.com/jhmichee.o3.2026/' },
    { label: 'TryHackMe', Icon: SiTryhackme, href: 'https://tryhackme.com/p/hackHenri' },
  ];

  return (
    <footer className="hover:shadow-[0_0_50px_#F97316] bg-slate-900 dark:bg-slate-900 py-10 text-center border-t border-slate-200 dark:border-gray-800 transition-colors duration-300">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white font-bold text-xl transition-colors duration-300">
          <Diamond className="text-slate-900 dark:text-[#F97316] transition-colors duration-300" size={28} />
          <span className="text-[#F97316] ">Henri Joel</span>
        </div>
        <p className="text-slate-500 dark:text-gray-500 text-sm mb-6 transition-colors duration-300">
          {t('footer.copy')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map(({ label, Icon, href }) => (
            href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                title={label}
                className="text-slate-400 transition-colors hover:text-orange-500 dark:text-gray-400 dark:hover:text-white"
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            ) : (
              <span
                key={label}
                aria-label={`${label} : lien à ajouter`}
                title={`${label} : lien à ajouter`}
                className="cursor-not-allowed text-slate-500 dark:text-gray-600"
              >
                <Icon size={20} aria-hidden="true" />
              </span>
            )
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
