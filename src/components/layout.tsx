import { Container, Form, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import ScrollSpy from 'react-ui-scrollspy';
import { About, Footer, Header, Experience, Projects, Skills } from '.';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Layout = () => {
  const [cinematicMode, setCinematicMode] = useState(false);
  const [pauseAnimation, setPauseAnimation] = useState(false);
  const [perspectiveMarginTop, setPerspectiveMarginTop] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handler = (event: WheelEvent) => {
      const marginIncrement = 50;
      const delta = Math.sign(event.deltaY);
      if (cinematicMode) {
        setPauseAnimation(true);
        if (delta < 0) {
          setPerspectiveMarginTop((prev) => prev + marginIncrement);
        } else {
          setPerspectiveMarginTop((prev) => prev - marginIncrement);
        }
      }
    };
    window.addEventListener('wheel', handler);
    return () => window.removeEventListener('wheel', handler);
  }, [cinematicMode]);

  const getCrawlClassName = () => {
    var className = '';
    if (cinematicMode) {
      className += 'perspective-crawl';
    }
    if (pauseAnimation) {
      className += ' perspective-animation-paused';
    }
    return className;
  };

  return (
    <Container>
      {cinematicMode && (
        <>
          <Form.Check
            type='switch'
            id='perspective-switch-main'
            label={t('header.perspective-view')}
            className='sticky-top'
            checked={cinematicMode}
            onChange={() => {
              document.body.style.overflow = cinematicMode ? '' : 'hidden';
              document.body.style.height = cinematicMode ? '' : '100%';
              document.body.style.width = cinematicMode ? '' : '100%';
              setCinematicMode((prev) => !prev);
              setPerspectiveMarginTop(0);
              setPauseAnimation(false);
            }}
          />
          <div className='perspective-view-fade' />
        </>
      )}
      <div className={cinematicMode ? 'perspective-view' : ''}>
        <div style={cinematicMode ? { marginTop: perspectiveMarginTop } : {}} className={getCrawlClassName()}>
          <Row>
            <Col md={12} lg={cinematicMode ? 12 : 6}>
              <Header setCinematicMode={setCinematicMode} cinematicMode={cinematicMode} />
            </Col>
            <Col md={12} lg={cinematicMode ? 12 : 6}>
              <ScrollSpy scrollThrottle={10} updateHistoryStack={false} offsetTop={0} offsetBottom={20}>
                <About cinematicMode={cinematicMode} />
                <Experience cinematicMode={cinematicMode} />
                <Skills cinematicMode={cinematicMode} />
                <Projects cinematicMode={cinematicMode} />
                <Footer />
              </ScrollSpy>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};
export default Layout;
