import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { About, Contact, Header, Education, Experience, Projects, Skills } from '.';

const Layout = () => (
  <Container>
    <Row>
      <Col xs={12} sm={6}>
        <Header />
      </Col>
      <Col xs={12} sm={6}>
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </Col>
    </Row>
  </Container>
);

export default Layout;
