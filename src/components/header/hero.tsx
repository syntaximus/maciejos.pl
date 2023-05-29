import { Col, Container, Row } from 'react-bootstrap';
import { Mail, Phone } from '../../assets/icons';

const Hero = () => (
  <Container>
    <Row>
      <Col lg={11} xl={10} xxl={8}>
        <h1 className='fw-bold text-xxl mb-3'>
          <a className='text-highlight-color' href='/'>
            Maciej Jakubiak
          </a>
        </h1>
        <h3 className='mb-3 text-xl'>Programista .NET</h3>
        <p className='mb-4'>Projektuję, implementuję i wdrażam rozwiązania webowe ułatwiające ludziom życie.</p>
        <p className='mb-2'>
          <a className='text-highlight-on-hover-color text-sm' href='mailto:mjakubiak@maciejos.pl'>
            <Mail style={{ marginRight: 8, width: 24, height: 24 }} /> mjakubiak@maciejos.pl
          </a>
        </p>
        <p className='mb-5'>
          <a className='text-highlight-on-hover-color text-sm' href='tel:+48 507-640-540'>
            <Phone style={{ marginRight: 8, width: 24, height: 24 }} /> +48 507-640-540
          </a>
        </p>
      </Col>
    </Row>
  </Container>
);

export default Hero;
