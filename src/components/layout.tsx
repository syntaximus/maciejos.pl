import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { About, Contact, Header, Education, Experience, Projects, Skills } from '.';

const Layout = () => (
  <Container>
    <Row>
      <Col md={12} lg={6}>
        <Header />
      </Col>
      <Col md={12} lg={6}>
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
