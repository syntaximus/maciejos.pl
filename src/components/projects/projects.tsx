import ProjectCard from './project-card';
import type { IProjectCard } from './project-card';
import './projects.css';

const Projects = () => {
  const cards: IProjectCard[] = [
    {
      name: 'Portfolio maciejos.pl',
      pictures: [{ path: '/maciejos/code.png', width: 2578, height: 1401 }],
      summary: `Jest to aktualnie wyświetlana strona. Do budowy tej aplikacji SPA wykorzystałem React 18 i Bootstrap 5.
      Aplikacja jest skonteneryzowana za pomocą dockerowych obrazów node.js oraz nginx i jest orkiestrowana przez Kubernetes.`,
      technologies: ['Kubernetes', 'React', 'Bootstrap', 'Typescript'],
      href: 'https://maciejos.pl/',
      githubHref: 'https://github.com/syntaximus/maciejos.pl',
    },
    {
      name: 'Pan Rachunek',
      pictures: [
        { path: '/pan-rachunek/dashboard.png', width: 3840, height: 2160 },
        { path: '/pan-rachunek/unit-price.png', width: 3840, height: 2160 },
        { path: '/pan-rachunek/yearly-report.png', width: 3840, height: 2160 },
        { path: '/pan-rachunek/summary-config.png', width: 3840, height: 2160 },
        { path: '/pan-rachunek/summary.png', width: 3840, height: 2160 },
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
      <h4 className='text-highlight-color'>Projekty</h4>
      <ul className='project-group'>{cardsElements}</ul>
    </div>
  );
};

export default Projects;
