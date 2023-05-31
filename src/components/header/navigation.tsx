import { Container } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';

const Navigation = () => {
  useTranslation();
  const navigationIndicator = <span className='navigation-line' />;

  return (
    <Container>
      <ul className='navigation-list mt-5'>
        <li>
          <a className='text-navigation' data-to-scrollspy-id='about' href='#about'>
            {navigationIndicator}
            <Trans i18nKey='header.navigation.about-me'>O mnie</Trans>
          </a>
        </li>
        <li>
          <a className='text-navigation' data-to-scrollspy-id='experience' href='#experience'>
            {navigationIndicator}
            <Trans i18nKey='header.navigation.experience'>Doświadczenie</Trans>
          </a>
        </li>
        <li>
          <a className='text-navigation' data-to-scrollspy-id='skills' href='#skills'>
            {navigationIndicator}
            <Trans i18nKey='header.navigation.skills'>Technologie</Trans>
          </a>
        </li>
        <li>
          <a className='text-navigation' data-to-scrollspy-id='projects' href='#projects'>
            {navigationIndicator}
            <Trans i18nKey='header.navigation.projects'>Projekty</Trans>
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default Navigation;
