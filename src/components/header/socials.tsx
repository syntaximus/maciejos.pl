import { Col, Container, Row } from 'react-bootstrap';
import { Github, Linkedin, Facebook } from '../../assets/icons';

const Socials = () => (
  <Container className='socials'>
    <Row>
      <Col xs='auto' className='px-2'>
        <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/syntaximus/'>
          <Linkedin style={{ width: 30, height: 30, color: 'var(--app-text-main-color)' }} />
        </a>
      </Col>
      <Col xs='auto' className='px-2'>
        <a target='_blank' rel='noopener noreferrer' href='https://github.com/syntaximus'>
          <Github style={{ width: 30, height: 30, color: 'var(--app-text-main-color)' }} />
        </a>
      </Col>
      <Col xs='auto' className='px-2'>
        <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/maciejjos'>
          <Facebook style={{ width: 30, height: 30, color: 'var(--app-text-main-color)' }} />
        </a>
      </Col>
    </Row>
  </Container>
);

export default Socials;
