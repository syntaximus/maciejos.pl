import { Row, Col, Container } from 'react-bootstrap';
import './header.css';
import Hero from './hero';
import Navigation from './navigation';
import Socials from './socials';

const Header = () => {
  var elem = 'Header';
  return (
    <header className='sticky-top'>
      <div className='header d-flex flex-column justify-content-sm-between'>
        <div>
          <Hero />
          <div className='d-none d-lg-block'>
            <Navigation />
          </div>
        </div>
        <div>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
