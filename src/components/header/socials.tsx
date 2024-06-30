import { Col, Container, Row } from 'react-bootstrap';
import { Github, Linkedin, Facebook, Strava } from '../../assets/icons';

const Socials = () => (
  <Container>
    <Row className='mt-3'>
      <Col xs='auto' className='px-2'>
        <a
          aria-label='Linkedin'
          className='text-highlight-on-hover-color'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/maciejos/'
        >
          <Linkedin style={{ width: 30, height: 30 }} />
        </a>
      </Col>
      <Col xs='auto' className='px-2'>
        <a
          aria-label='Github'
          className='text-highlight-on-hover-color'
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/syntaximus'
        >
          <Github style={{ width: 30, height: 30 }} />
        </a>
      </Col>
      <Col xs='auto' className='px-2'>
        <a
          aria-label='Facebook'
          className='text-highlight-on-hover-color'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.facebook.com/maciejjos'
        >
          <Facebook style={{ width: 30, height: 30 }} />
        </a>
      </Col>
      <Col xs='auto' className='px-2'>
        <a
          aria-label='Strava'
          className='text-highlight-on-hover-color'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.strava.com/athletes/17025919'
        >
          <Strava style={{ width: 30, height: 30 }} />
        </a>
      </Col>
    </Row>
  </Container>
);

export default Socials;
