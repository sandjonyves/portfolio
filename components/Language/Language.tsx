// REACT COMPONENT
import { useEffect, useState, useCallback } from 'react';

// CUSTOMIZED COMPONENT
import Typography from '../Typography/Typography';

// PLUGIN
import i18n from '@/app/i18n';

// ASSETS
import FR from '@/public/assets/languages/FR.svg';
import EN from '@/public/assets/languages/EN.svg';

// STYLE
import './language.css';

interface LanguageProps {
  style?: React.CSSProperties;
  text?: boolean;
  page?: string;
  languageRef?: React.RefObject<HTMLDivElement>;
}

// Component in charge of changing the language of the site
const Language: React.FC<LanguageProps> = ({ style, text = true, page = 'default', languageRef }) => {
  const [language, setLanguage] = useState<string>(i18n.language || 'en');

  const onOptionChangeHandler = useCallback((lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  }, []);

  useEffect(() => {
    if (page === 'default') {
      onOptionChangeHandler(language);
    }
  }, [page, language, onOptionChangeHandler]);

  return (
    <div className="lan-back" style={style} id="language" ref={languageRef}>
      {['fr', 'en'].map((lang) => (
        <div
          key={lang}
          onClick={() => onOptionChangeHandler(lang)}
          style={{ border: language === lang ? '1px solid #990000' : 'none', display: 'flex', alignItems: 'center' }}
        >
          <img src={lang === 'fr' ? FR : EN} alt={lang === 'fr' ? 'French' : 'English'} loading="lazy" />
          {page !== 'default' || text ? (
            <Typography text={lang === 'fr' ? <>Fran&ccedil;ais</> : <>English</>} className="ms-3" />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Language;
