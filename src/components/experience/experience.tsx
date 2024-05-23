import { Trans, useTranslation } from 'react-i18next';
import ExperienceCard from './experience-card';
import type { IExperienceCard } from './experience-card';
import './experience.css';

export interface IExperienceProps {
  cinematicMode: boolean;
}

const Experience = (props: IExperienceProps) => {
  const { t } = useTranslation();
  const cards: IExperienceCard[] = [
    {
      duration: t('experience.wk.duration'),
      location: t('experience.wk.location'),
      postion: t('experience.wk.position'),
      summary: (
        <span>
          <Trans i18nKey='experience.wk.description' components={[<span className='text-nowrap' />]} />
        </span>
      ),
      technologies: ['.NET 4.8', 'ASP.NET', 'SQL', 'Angular', 'TypeScript', 'WCF', 'C#', 'IIS', 'TeamCity'],
      href: 'https://www.wolterskluwer.com/pl-pl',
    },
    {
      duration: t('experience.pan-rachunek.duration'),
      location: t('experience.pan-rachunek.location'),
      postion: t('experience.pan-rachunek.position'),
      summary: (
        <span>
          <Trans
            i18nKey='experience.pan-rachunek.description'
            components={[
              <span className='text-nowrap' />,
              <a // eslint-disable-line jsx-a11y/anchor-has-content
                className='experience-card-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://duendesoftware.com/products/identityserver'
              />,
            ]}
          >
            Zaprojektowałem i zaimplementowałem wielowarstwowy system <span className='text-nowrap'>do zbierania</span>{' '}
            danych związanych z wydatkami użytkowników. Aplikacja wykorzystuje uczenie maszynowe w celu rozpoznawania
            produktów <span className='text-nowrap'>ze zdjęć</span> paragonów.{' '}
            <span className='text-nowrap'>W architekturze</span> rozwiązania wykorzystałem serwer uwierzytelniający
            zgodny z OAuth 2.0 -{' '}
            <a
              className='experience-card-link'
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
    {
      duration: t('experience.luxmed.duration'),
      location: t('experience.luxmed.location'),
      postion: t('experience.luxmed.position'),
      previousPositions: [t('experience.luxmed.previous-position')],
      summary: (
        <span>
          <Trans i18nKey='experience.luxmed.description' components={[<span className='text-nowrap' />]}>
            W LUX MED wraz z zespołem zrealizowałem wiele projektów związanych z diagnostyką obrazową,{' '}
            <span className='text-nowrap'>z których</span>
            korzystają pacjenci, lekarze <span className='text-nowrap'>i pracownicy</span> placówek medycznych{' '}
            <span className='text-nowrap'>w całej</span>
            Polsce. Oprócz tworzenia kodu aplikacyjnego, pełniłem również rolę programisty SQL{' '}
            <span className='text-nowrap'>i dbałem</span> o tworzenie wydajnego kodu SQL w rozwiązaniach.
            Przeprowadziłem wiele migracji systemów - zarówno tych od strony danych, jak i technologicznych.
          </Trans>
        </span>
      ),
      technologies: [
        '.NET 4.8',
        '.NET 6.0',
        'ASP.NET',
        'SQL',
        'SSIS',
        'Ext.js',
        'JavaScript',
        'WCF',
        'C#',
        'Angular',
        'NServiceBus',
        'IIS',
        'Jenkins',
      ],
      href: 'https://www.luxmed.pl/',
    },
    {
      duration: t('experience.datapolis.duration'),
      location: t('experience.datapolis.location'),
      postion: t('experience.datapolis.position'),
      summary: (
        <span>
          <Trans i18nKey='experience.datapolis.description'>
            W Datapolis zaznajomiłem się z SharePoint Framework, który jest wykorzystywany przez firmowy produkt służący
            do zarządzania procesami biznesowymi różnych organizacji. Udało mi się zoptymalizować proces wdrożeniowy tej
            aplikacji, przyspieszając kilkunastokrotnie instalację u klientów.
          </Trans>
        </span>
      ),
      technologies: ['SharePoint', '.NET', 'C#', 'WPF'],
      href: 'https://www.datapolis.com/',
    },
  ];

  const cardsElements = [];

  for (let ind = 0; ind < cards.length; ind++) {
    cardsElements.push(
      <li key={ind} className='mb-4'>
        <ExperienceCard {...cards[ind]} key={ind} />
      </li>
    );
  }
  return (
    <div id='experience' className='experience'>
      <h3 className={'text-highlight-color' + (!props.cinematicMode ? ' section-header' : '')}>
        <Trans i18nKey='experience.section'>Doświadczenie</Trans>
      </h3>
      <ul className='experience-group'>{cardsElements}</ul>
    </div>
  );
};

export default Experience;
