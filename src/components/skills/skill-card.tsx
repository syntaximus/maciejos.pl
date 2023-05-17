import { Col, Row } from 'react-bootstrap';
import './skills.css';

export interface ISkillCard {
  name: string;
  level: number;
  imgElement: JSX.Element;
}

export interface ISkillCardProps {
  skillCard: ISkillCard;
  accentColor: string;
}

const SkillCard = (props: ISkillCardProps) => {
  const generateSkillLevel = (level: number, accentColor: string) => {
    const skillLevel = [];
    const maxLevel = 10;
    const currentLevelWidth = 0.5 * level + 'rem';
    const remainingLevelTillMaxWidth = 0.5 * (maxLevel - level) + 'rem';
    skillLevel.push(
      <div
        key={0}
        style={{
          display: 'inline-block',
          width: currentLevelWidth,
          height: '1.25rem',
          background: accentColor,
        }}
      />
    );
    skillLevel.push(
      <div
        key={1}
        style={{
          display: 'inline-block',
          width: remainingLevelTillMaxWidth,
          height: '1.25rem',
          background: accentColor,
          opacity: 0.25,
        }}
      />
    );
    return skillLevel;
  };

  const getSkillLevelDescription = (level: number) => {
    if (level <= 2) {
      return 'Początkujący';
    }
    if (level > 2 && level < 6) {
      return 'Doświadczony';
    }
    if (level >= 6 && level < 9) {
      return 'Zaawansowany';
    }
    return 'Specjalista';
  };
  return (
    <Row className='p-2'>
      <Col className='my-auto' xs='auto'>
        <span>{props.skillCard.imgElement}</span>
      </Col>
      <Col className='my-auto'>
        <span className='fw-bold'>{props.skillCard.name}</span>
      </Col>
      <Col className='my-auto d-none d-sm-block'>
        <span>{getSkillLevelDescription(props.skillCard.level)}</span>
      </Col>
      <Col className='my-auto' xs='auto'>
        {generateSkillLevel(props.skillCard.level, props.accentColor)}
      </Col>
    </Row>
  );
};

export default SkillCard;
