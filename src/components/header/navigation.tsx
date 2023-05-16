import { Container } from 'react-bootstrap';

const Navigation = () => {
  const navigationIndicator = <span className='navigation-line' />;

  return (
    <Container>
      <ul className='navigation-list'>
        <li>
          <a className='text-decoration-none text-navigation' data-to-scrollspy-id='about' href='#about'>
            {navigationIndicator}O mnie
          </a>
        </li>
        <li>
          <a className='text-decoration-none text-navigation' data-to-scrollspy-id='experience' href='#experience'>
            {navigationIndicator}
            Doświadczenie
          </a>
        </li>
        <li>
          <a className='text-decoration-none text-navigation' data-to-scrollspy-id='skills' href='#skills'>
            {navigationIndicator}
            Technologie
          </a>
        </li>
        <li>
          <a className='text-decoration-none text-navigation' data-to-scrollspy-id='projects' href='#projects'>
            {navigationIndicator}
            Projekty
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default Navigation;
