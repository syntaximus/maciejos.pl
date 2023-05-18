import { useEffect, useRef, useState } from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import { GithubCircle } from '../../assets/icons/github-circle';
import './projects.css';

export interface IProjectCard {
  photos: any[];
  name: string;
  summary: string;
  technologies: string[];
  href: string;
  githubHref?: string;
}

const ProjectCard = (props: IProjectCard) => {
  const [maxPicturesColumnHeight, setMaxPicturesColumnHeight] = useState<number | undefined>(undefined);
  const ref = useRef<any>(null);
  var badges = [];
  for (let ind = 0; ind < props.technologies.length; ind++) {
    badges.push(
      <Badge key={ind} className='me-3' pill>
        {props.technologies[ind]}
      </Badge>
    );
  }

  useEffect(() => {
    if (ref.current) {
      const resizeObserver = new ResizeObserver(() => {
        setMaxPicturesColumnHeight(ref.current.clientHeight);
      });
      resizeObserver.observe(ref.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <div className='project-card'>
      <a className=' text-decoration-none text-head-color' target='_blank' rel='noopener noreferrer' href={props.href}>
        <Row>
          <Col sm={12} md={3} lg={4} xxl={3} style={{ maxHeight: maxPicturesColumnHeight, overflow: 'hidden' }}>
            {props.photos.map((value, index) => (
              <img key={index} alt={'project picture ' + index} src={value} className='project-card-picture' />
            ))}
          </Col>
          <Col xs={12} md={9} lg={8} xxl={9} className='h-100' ref={ref}>
            <p className='project-card-position m-0'>
              {props.name}
              {props.githubHref && (
                <a
                  className='ms-3 project-card-github-icon'
                  target='_blank'
                  rel='noopener noreferrer'
                  href={props.githubHref}
                >
                  <GithubCircle style={{ width: '1.25rem', height: '1.25rem' }} />
                </a>
              )}
            </p>
            <p className='text-sm mt-3'>{props.summary}</p>
            <p>{badges}</p>
          </Col>
        </Row>
      </a>
    </div>
  );
};

export default ProjectCard;
