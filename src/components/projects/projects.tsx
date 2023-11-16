import { Trans, useTranslation } from 'react-i18next';
import ProjectCard from './project-card';
import type { IProjectCard } from './project-card';
import './projects.css';

export interface IProjectsProps {
  cinematicMode: boolean;
}

const Projects = (props: IProjectsProps) => {
  const { t } = useTranslation();
  const cards: IProjectCard[] = [
    {
      name: t('projects.portfolio.name'),
      pictures: [{ path: '/maciejos/code.png', width: 2578, height: 1401, thumbnailWidth: 140, thumbnailHeight: 80 }],
      summary: (
        <span>
          <Trans
            i18nKey='projects.portfolio.description'
            components={[
              <a // eslint-disable-line jsx-a11y/anchor-has-content
                className='project-card-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://hub.docker.com/_/node'
              />,
              <a // eslint-disable-line jsx-a11y/anchor-has-content
                className='project-card-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://hub.docker.com/_/nginx'
              />,
            ]}
          >
            Jest to aktualnie wyświetlana strona. Do budowy tej aplikacji SPA wykorzystałem React 18 i Bootstrap 5.
            Aplikacja jest skonteneryzowana za pomocą dockerowych obrazów{' '}
            <a
              className='project-card-link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://hub.docker.com/_/node'
            >
              node.js
            </a>{' '}
            oraz{' '}
            <a
              className='project-card-link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://hub.docker.com/_/nginx'
            >
              nginx
            </a>{' '}
            i jest orkiestrowana przez Kubernetes.
          </Trans>
        </span>
      ),
      technologies: ['Kubernetes', 'React', 'Bootstrap', 'Typescript'],
      href: 'https://maciejos.pl/',
      githubHref: 'https://github.com/syntaximus/maciejos.pl',
    },
    {
      name: t('projects.pan-rachunek.name'),
      pictures: [
        { path: '/pan-rachunek/dashboard.png', width: 3840, height: 2160, thumbnailWidth: 140, thumbnailHeight: 83 },
        { path: '/pan-rachunek/unit-price.png', width: 3840, height: 2160, thumbnailWidth: 140, thumbnailHeight: 83 },
        {
          path: '/pan-rachunek/yearly-report.png',
          width: 3840,
          height: 2160,
          thumbnailWidth: 140,
          thumbnailHeight: 83,
        },
        {
          path: '/pan-rachunek/scrappers-summary.png',
          width: 2560,
          height: 1440,
          thumbnailWidth: 140,
          thumbnailHeight: 83,
        },
        {
          path: '/pan-rachunek/summary-config.png',
          width: 3840,
          height: 2160,
          thumbnailWidth: 140,
          thumbnailHeight: 83,
        },
        { path: '/pan-rachunek/summary.png', width: 3840, height: 2160, thumbnailWidth: 140, thumbnailHeight: 83 },
      ],
      summary: (
        <span>
          <Trans
            i18nKey='projects.pan-rachunek.description'
            components={[
              <span className='text-nowrap' />,
              <a // eslint-disable-line jsx-a11y/anchor-has-content
                className='project-card-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://powerbi.microsoft.com/en-us/power-bi-embedded/'
              />,
              <a // eslint-disable-line jsx-a11y/anchor-has-content
                className='project-card-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://duendesoftware.com/products/identityserver'
              />,
            ]}
          >
            Pan Rachunek to wielowarstwowy system do zbierania danych związanych z wydatkami. Dzięki wgranym rachunkom
            użytkownicy mogą sprawdzać wiele różnych klas statystyk takich jak miesięczną ilość wydanych pieniędzy na
            transport, zmianę trendu ceny jednostkowej produktu, czy ilość litrów kupionej wody w danym roku. Aplikacja
            wykorzystuje uczenie maszynowe do odpowiedniego kategoryzowania elementów paragonu wczytanego ze zdjęcia.
            Użytkownicy mogą wprowadzać operacje cykliczne, odpowiednio grupować dane wydatki,{' '}
            <span className='text-nowrap'>a także</span> udostępniać swoje podsumowania wydatków innym. System raportowy
            został zintegrowany z mechanizmem{' '}
            <a
              className='project-card-link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://powerbi.microsoft.com/en-us/power-bi-embedded/'
            >
              Power BI embedded
            </a>
            , dzięki czemu raporty i statystyki są bardziej responsywne i umożliwiają wiele sposobów filtrowania
            potrzebnych danych. W aplikacji wprowadziłem zabezpieczenia takie jak uwierzytelnienie dwuskładnikowe (2FA)
            czy integracja warstwy frontendowej <span className='text-nowrap'>i backendowej</span> z serwerem
            uwierzytelniającym{' '}
            <a
              className='project-card-link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://duendesoftware.com/products/identityserver'
            >
              IdentityServer
            </a>
            .
          </Trans>
        </span>
      ),
      technologies: [
        'Kubernetes',
        'Docker',
        'Azure',
        '.NET 8.0',
        'ASP.NET',
        'SQL',
        'MongoDB',
        'RabbitMQ',
        'React',
        'PWA',
        'Bootstrap',
        'Typescript',
        'C#',
        'IdentityServer',
        'Power BI Embedded',
        'TensorFlow',
      ],
      href: 'https://pan-rachunek.pl/',
    },
  ];

  const cardsElements = [];

  for (let ind = 0; ind < cards.length; ind++) {
    cardsElements.push(
      <li key={ind} className='mb-4'>
        <ProjectCard {...cards[ind]} key={ind} />
      </li>
    );
  }
  return (
    <div id='projects' className='projects'>
      <h3 className={'text-highlight-color' + (!props.cinematicMode ? ' section-header' : '')}>
        <Trans i18nKey='projects.section'>Projekty</Trans>
      </h3>
      <ul className='project-group'>{cardsElements}</ul>
    </div>
  );
};

export default Projects;
