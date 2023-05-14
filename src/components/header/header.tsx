import { Row, Col, Container } from 'react-bootstrap';
import './header.css';
import Hero from './hero';
import Navigation from './navigation';
import Socials from './socials';

const Header = () => {
  var elem = 'Header';
  return (
    <header>
      <Container className='header d-flex flex-column justify-content-sm-between'>
        <Row>
          <Col>
            <Hero />
            <div className='d-none d-lg-block'>
              <Navigation />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Socials />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
