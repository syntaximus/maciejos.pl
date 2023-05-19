import ExperienceCard from './experience-card';
import type { IExperienceCard } from './experience-card';
import './experience.css';

const Experience = () => {
  const cards: IExperienceCard[] = [
    {
      duration: '2022 - obecnie',
      location: 'Pan Rachunek',
      postion: 'Twórca',
      summary: (
        <span>
          Zaprojektowałem i zaimplementowałem wielowarstwowy system do zbierania danych związanych z wydatkami
          użytkowników. Aplikacja wykorzystuje uczenie maszynowe do rozpoznawania produktów ze zdjęć paragonów. W
          architekturze rozwiązania wykorzystałem serwer uwierzytelniający zgodny z OAuth 2.0 -{' '}
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
          W LUX MED wraz z zespołem zrealizowałem wiele projektów związanych z diagnostyką obrazową z których
          korzystacją pacjenci, lekarze i pracownicy placówek medycznych w całej Polsce. Oprócz tworzenia kodu
          aplikacyjnego, pełniłem również rolę programisty SQL i dbałem o tworzenie wydajnego kodu SQL w rozwiązaniach.
          Przeprowadziłem wiele migracji systemów - zarówno tych od strony danych, jak i technologicznych.
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
      <h4 className='text-highlight-color'>Doświadczenie</h4>
      <ul className='experience-group'>{cardsElements}</ul>
    </div>
  );
};

export default Experience;
