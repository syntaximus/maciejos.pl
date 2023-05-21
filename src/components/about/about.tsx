import './about.css';

export interface IAboutProps {
  cinematicMode: boolean;
}

const About = (props: IAboutProps) => (
  <div id='about' className='about'>
    <h4 className={'text-highlight-color' + (!props.cinematicMode ? ' section-header' : '')}>O mnie</h4>
    <p>
      Od małego interesuję się technologiami. Dzięki zacięciu matematycznemu i informatycznemu ukończyłem informatykę na
      wydziale{' '}
      <a target='_blank' rel='noopener noreferrer' href='https://ww2.mini.pw.edu.pl/'>
        Matematyki i Nauk Informacyjnych Politechniki Warszawskiej
      </a>
      . Programowanie to moja pasja i implementacja nowych, ciekawych rozwiązań daje mi dużo satysfakcji.
    </p>
    <p>
      Zawodowo zajmuję się tworzeniem aplikacji webowych w środowisku .NET zarówno od strony backendowej, jak i
      frontendowej. Zrealizowałem wiele projektów z których korzystają setki tysięcy ludzi. Skupiam się na optymalizacji
      procesów i tworzeniu wydajnego kodu. Cyberbezpieczeństwo to mój konik i dbam o zachowanie wysokich standardów w
      tej dziedzinie w swoich rozwiązaniach.
    </p>
    <p>
      W swoich projektach stawiam na konteneryzację. Administruję własnym klastrem{' '}
      <a target='_blank' rel='noopener noreferrer' href='https://kubernetes.io/'>
        Kubernetes
      </a>{' '}
      z którego udostępniam aplikacje do internetu. Obecnie zajmuję się tworzeniem serwisu webowego umożliwiającego
      kontrolowanie wydatków - aplikację{' '}
      <a style={{ whiteSpace: 'nowrap' }} href='/#projects'>
        Pan Rachunek
      </a>
      . Gdy nie ma mnie przy komputerze najczęściej zajmuję się swoim hobby jakim jest triathlon, a konkretniej trening
      na pełen dystans Ironmana.
    </p>
  </div>
);

export default About;
