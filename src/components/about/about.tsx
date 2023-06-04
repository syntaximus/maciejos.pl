import { Trans, useTranslation } from 'react-i18next';
import './about.css';

export interface IAboutProps {
  cinematicMode: boolean;
}

const About = (props: IAboutProps) => {
  useTranslation();
  return (
    <div id='about' className='about'>
      <h3 className={'text-highlight-color' + (!props.cinematicMode ? ' section-header' : '')}>
        <Trans i18nKey='about.section'>O mnie</Trans>
      </h3>
      <p className='text-justify'>
        <Trans
          i18nKey='about.first-paragraph'
          components={[
            <span className='text-nowrap' />,
            <a target='_blank' rel='noopener noreferrer' href='https://ww2.mini.pw.edu.pl/' />, // eslint-disable-line jsx-a11y/anchor-has-content
          ]}
        >
          Od najmłodszych lat interesuję się technologiami. Dzięki zacięciu matematycznemu{' '}
          <span className='text-nowrap'>i informatycznemu</span>, ukończyłem informatykę{' '}
          <span className='text-nowrap'>na wydziale</span>{' '}
          <a target='_blank' rel='noopener noreferrer' href='https://ww2.mini.pw.edu.pl/'>
            Matematyki <span className='text-nowrap'>i Nauk</span> Informacyjnych Politechniki Warszawskiej
          </a>
          . Programowanie to moja pasja <span className='text-nowrap'>i implementacja</span> nowych, ciekawych rozwiązań
          daje mi dużo satysfakcji.
        </Trans>
      </p>
      <p className='text-justify'>
        <Trans i18nKey='about.second-paragraph' components={[<span className='text-nowrap' />]}>
          Zawodowo zajmuję się tworzeniem aplikacji webowych <span className='text-nowrap'>w środowisku</span> .NET
          zarówno <span className='text-nowrap'>od strony</span> backendowej,{' '}
          <span className='text-nowrap'>jak i frontendowej</span>. Zrealizowałem wiele projektów,{' '}
          <span className='text-nowrap'>z których</span> korzystają setki tysięcy ludzi. Skupiam się{' '}
          <span className='text-nowrap'>na optymalizacji</span> procesów{' '}
          <span className='text-nowrap'>i tworzeniu</span> wydajnego kodu. Cyberbezpieczeństwo to mój konik{' '}
          <span className='text-nowrap'>i dbam</span> o zachowanie wysokich standardów{' '}
          <span className='text-nowrap'>w tej</span> dziedzinie w swoich rozwiązaniach.
        </Trans>
      </p>
      <p className='text-justify'>
        <Trans
          i18nKey='about.third-paragraph'
          components={[
            <a target='_blank' rel='noopener noreferrer' href='https://kubernetes.io/' />, // eslint-disable-line jsx-a11y/anchor-has-content
            <a href='/#projects' />, // eslint-disable-line jsx-a11y/anchor-has-content
          ]}
        >
          W swoich projektach stawiam na konteneryzację i administruję własnym klastrem{' '}
          <a target='_blank' rel='noopener noreferrer' href='https://kubernetes.io/'>
            Kubernetes
          </a>
          . Obecnie zajmuję się tworzeniem serwisu webowego, umożliwiającego kontrolowanie wydatków - aplikację{' '}
          <a className='text-nowrap' href='/#projects'>
            Pan Rachunek
          </a>
          .
        </Trans>
      </p>
      <p className='text-justify'>
        <Trans i18nKey='about.fourth-paragraph' components={[<span className='text-nowrap' />]}>
          Gdy nie ma mnie przy komputerze najczęściej zajmuję się swoim hobby jakim jest triathlon,{' '}
          <span className='text-nowrap'>a dokładniej</span> trening na pełen dystans Ironmana.
        </Trans>
      </p>
    </div>
  );
};

export default About;
