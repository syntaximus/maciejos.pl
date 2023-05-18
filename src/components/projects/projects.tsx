import ProjectCard from './project-card';
import type { IProjectCard } from './project-card';
import './projects.css';

const Projects = () => {
  const panRachunekDashboardPhoto = require('../../assets/pictures/pan-rachunek-dashboard.png');
  const panRachunekPriceForUnitPhoto = require('../../assets/pictures/pan-rachunek-unit-price.png');
  const panRachunekReportPhoto = require('../../assets/pictures/pan-rachunek-yearly-report.png');
  const panRachunekSummaryConfigPhoto = require('../../assets/pictures/pan-rachunek-summary-config.png');
  const panRachunekSummaryPhoto = require('../../assets/pictures/pan-rachunek-summary.png');

  const cards: IProjectCard[] = [
    {
      name: 'Portfolio maciejos.pl',
      photos: [],
      summary: `Jest to aktualnie wyświetlana strona. Do budowy tej aplikacji SPA wykorzystałem React 18 i Bootstrap 5.
      Aplikacja jest skonteneryzowana za pomocą dockerowych obrazów node.js oraz nginx i jest orkiestrowana przez Kubernetes.`,
      technologies: ['Kubernetes', 'React', 'Bootstrap', 'Typescript'],
      href: 'https://maciejos.pl/',
      githubHref: 'https://github.com/syntaximus/maciejos.pl',
    },
    {
      name: 'Pan Rachunek',
      photos: [
        panRachunekDashboardPhoto,
        panRachunekReportPhoto,
        panRachunekPriceForUnitPhoto,
        panRachunekSummaryConfigPhoto,
        panRachunekSummaryPhoto,
      ],
      summary: `Pan Rachunek to wielowarstwowy system do zbierania danych związanych z wydatkami. Dzięki wgranym rachunkom użytkownicy mogą sprawdzać 
      wiele różnych klas statystyk takich jak miesięczną ilość wydanych pieniędzy na rozrywkę, zmianę trendu ceny jednostkowej produktu, czy ilość
      litrów kupionej wody w danym roku. Aplikacja wykorzystuje uczenie maszynowe do odpowiedniego kategoryzowania elementów paragonu wczytanego ze zdjęcia.
      Użytkownicy mogą wprowadzać operacje cykliczne, odpowiednio grupować dane wydatki, a także udostępniać swoje podsumowania wydatków innym. Zintegrowałem system 
      raportowy z mechanizmem Power BI embedded, dzięki czemu raporty i statystyki są bardziej responsywne i umożliwiają wiele sposobów filtrowania potrzebnych danych. 
      W aplikacji wprowadziłem zabezpieczenia takie jak uwierzytelnienie dwuskładnikowe (2FA) czy integracja warstwy frontendowej i backendowej z serwerem 
      uwierzytelniającym IdentityServer. 
      `,
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
      <h3>Projekty</h3>
      <ul className='project-group'>{cardsElements}</ul>
    </div>
  );
};

export default Projects;
