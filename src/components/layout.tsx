import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import ScrollSpy from 'react-ui-scrollspy';
import { About, Footer, Header, Education, Experience, Projects, Skills } from '.';

const Layout = () => (
  <Container>
    <Row>
      <Col md={12} lg={6}>
        <Header />
      </Col>
      <Col md={12} lg={6}>
        <ScrollSpy scrollThrottle={10} updateHistoryStack={false} offsetTop={0} offsetBottom={20}>
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Footer />
        </ScrollSpy>
      </Col>
    </Row>
  </Container>
);

export default Layout;
