import { Container } from 'react-bootstrap';

const Language = () => {
  var currentLanguage = 'PL';
  return (
    <Container>
      <span className={currentLanguage === 'PL' ? 'selected-language' : ''}>POL</span> /{' '}
      <span className={currentLanguage === 'EN' ? 'selected-language' : ''}>ENG</span>
    </Container>
  );
};

export default Language;
