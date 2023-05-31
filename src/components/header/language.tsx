import { Container } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';

const Language = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const currentLanguage = i18n.resolvedLanguage;
  return (
    <Container>
      <span
        className={currentLanguage === 'pl' ? 'language-button selected-language' : 'language-button'}
        onClick={() => changeLanguage('pl')}
      >
        Pol
      </span>
      <span className='language-separator'> / </span>
      <span
        className={currentLanguage === 'en' ? 'language-button selected-language' : 'language-button'}
        onClick={() => changeLanguage('en')}
      >
        Eng
      </span>
    </Container>
  );
};

export default Language;
