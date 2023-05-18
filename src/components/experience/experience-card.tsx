import { Badge, Col, Row } from 'react-bootstrap';
import './experience.css';

export interface IExperienceCard {
  duration: string;
  summary: string;
  technologies: string[];
  postion: string;
  previousPositions?: string[];
  location: string;
  href: string;
}

const ExperienceCard = (props: IExperienceCard) => {
  var badges = [];
  for (let ind = 0; ind < props.technologies.length; ind++) {
    badges.push(
      <Badge key={ind} className='me-3' pill>
        {props.technologies[ind]}
      </Badge>
    );
  }
  return (
    <div className='experience-card'>
      <Row>
        <Col sm={12} md={3} lg={4} xxl={3}>
          <div className='experience-card-duration'>{props.duration}</div>
        </Col>
        <Col xs={12} md={9} lg={8} xxl={9}>
          <p className='experience-card-position m-0'>
            <a
              className=' text-decoration-none text-head-color'
              target='_blank'
              rel='noopener noreferrer'
              href={props.href}
            >
              <span className='experience-card-pseudo-block' />
              {props.postion} | {props.location}
            </a>
          </p>
          {props.previousPositions?.map((value, index) => (
            <p className='experience-card-previous-position m-0' key={index}>
              {value}
            </p>
          ))}
          <p className='text-sm mt-3'>{props.summary}</p>
          <p>{badges}</p>
        </Col>
      </Row>
    </div>
  );
};

export default ExperienceCard;
