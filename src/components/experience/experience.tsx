import ExperienceCard from './experience-card';
import type { IExperienceCard } from './experience-card';
import './experience.css';

export interface IExperienceProps {
  cinematicMode: boolean;
}

const Experience = (props: IExperienceProps) => {
  const cards: IExperienceCard[] = [
    {
      duration: '2022 - obecnie',
      location: 'Pan Rachunek',
      postion: 'Twórca',
      summary: (
        <span>
          Zaprojektowałem i zaimplementowałem wielowarstwowy system <span className='text-nowrap'>do zbierania</span>{' '}
          danych związanych z wydatkami użytkowników. Aplikacja wykorzystuje uczenie maszynowe w celu rozpoznawania
          produktów <span className='text-nowrap'>ze zdjęć</span> paragonów.{' '}
          <span className='text-nowrap'>W architekturze</span> rozwiązania wykorzystałem serwer uwierzytelniający zgodny
          z OAuth 2.0 -{' '}
          <a
            className='experience-card-link'
            target='_blank'
            rel='noopener noreferrer'
            href='https://duendesoftware.com/products/identityserver'
          >
            IdentityServer
          </a>
          .
        </span>
      ),
      technologies: [
        'Kubernetes',
        'Docker',
        'Azure',
        '.NET 7.0',
        'ASP.NET',
        'SQL',
        'React',
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
      duration: '2017 - wrz 2022',
      location: 'LUX MED',
      postion: 'Starszy programista .NET',
      previousPositions: ['Programista .NET'],
      summary: (
        <span>
          W LUX MED wraz z zespołem zrealizowałem wiele projektów związanych z diagnostyką obrazową,{' '}
          <span className='text-nowrap'>z których</span>
          korzystają pacjenci, lekarze <span className='text-nowrap'>i pracownicy</span> placówek medycznych{' '}
          <span className='text-nowrap'>w całej</span>
          Polsce. Oprócz tworzenia kodu aplikacyjnego, pełniłem również rolę programisty SQL{' '}
          <span className='text-nowrap'>i dbałem</span> o tworzenie wydajnego kodu SQL w rozwiązaniach. Przeprowadziłem
          wiele migracji systemów - zarówno tych od strony danych, jak i technologicznych.
        </span>
      ),
      technologies: [
        '.NET 4.8',
        '.NET 6.0',
        'ASP.NET',
        'SQL',
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
      duration: 'cze — wrz 2015',
      location: 'Datapolis',
      postion: 'Młodszy programista',
      summary: (
        <span>
          W Datapolis zaznajomiłem się z SharePoint Framework, który jest wykorzystywany przez firmowy produkt służący
          do zarządzania procesami biznesowymi różnych organizacji. Udało mi się zoptymalizować proces wdrożeniowy tej
          aplikacji, przyspieszając kilkunastokrotnie instalację u klientów.
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
      <h4 className={'text-highlight-color' + (!props.cinematicMode ? ' section-header' : '')}>Doświadczenie</h4>
      <ul className='experience-group'>{cardsElements}</ul>
    </div>
  );
};

export default Experience;
