import './about.css';

export interface IAboutProps {
  cinematicMode: boolean;
}

const About = (props: IAboutProps) => (
  <div id='about' className='about'>
    <h4 className={'text-highlight-color' + (!props.cinematicMode ? ' section-header' : '')}>O mnie</h4>
    <p className='text-justify'>
      Od najmłodszych lat interesuję się technologiami. Dzięki zacięciu matematycznemu{' '}
      <span className='text-nowrap'>i informatycznemu</span>, ukończyłem informatykę na wydziale{' '}
      <a target='_blank' rel='noopener noreferrer' href='https://ww2.mini.pw.edu.pl/'>
        Matematyki <span className='text-nowrap'>i Nauk</span> Informacyjnych Politechniki Warszawskiej
      </a>
      . Programowanie to moja pasja <span className='text-nowrap'>i implementacja</span> nowych, ciekawych rozwiązań
      daje mi dużo satysfakcji.
    </p>
    <p className='text-justify'>
      Zawodowo zajmuję się tworzeniem aplikacji webowych w środowisku .NET zarówno{' '}
      <span className='text-nowrap'>od strony</span> backendowej,{' '}
      <span className='text-nowrap'>jak i frontendowej</span>. Zrealizowałem wiele projektów, z których korzystają setki
      tysięcy ludzi. Skupiam się na optymalizacji procesów <span className='text-nowrap'>i tworzeniu</span> wydajnego
      kodu. Cyberbezpieczeństwo to mój konik <span className='text-nowrap'>i dbam</span> o zachowanie wysokich
      standardów w tej dziedzinie w swoich rozwiązaniach.
    </p>
    <p className='text-justify'>
      W swoich projektach stawiam na konteneryzację i administruję własnym klastrem{' '}
      <a target='_blank' rel='noopener noreferrer' href='https://kubernetes.io/'>
        Kubernetes
      </a>
      . Obecnie zajmuję się tworzeniem serwisu webowego, umożliwiającego kontrolowanie wydatków - aplikację{' '}
      <a className='text-nowrap' href='/#projects'>
        Pan Rachunek
      </a>
      .
    </p>
    <p className='text-justify'>
      Gdy nie ma mnie przy komputerze najczęściej zajmuję się swoim hobby jakim jest triathlon,{' '}
      <span className='text-nowrap'>a dokładniej</span> trening na pełen dystans Ironmana.
    </p>
  </div>
);

export default About;
