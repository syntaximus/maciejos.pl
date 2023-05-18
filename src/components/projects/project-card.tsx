import { useEffect, useRef, useState } from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import { Gallery, Item } from 'react-photoswipe-gallery';
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
  const picturesColumRef = useRef<any>(null);
  var badges = [];
  for (let ind = 0; ind < props.technologies.length; ind++) {
    badges.push(
      <Badge key={ind} className='me-3' pill>
        {props.technologies[ind]}
      </Badge>
    );
  }

  useEffect(() => {
    if (picturesColumRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        setMaxPicturesColumnHeight(picturesColumRef.current.clientHeight);
      });
      resizeObserver.observe(picturesColumRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <div className='project-card'>
      <Row>
        <Col sm={12} md={3} lg={4} xxl={3} style={{ maxHeight: maxPicturesColumnHeight, overflow: 'hidden' }}>
          <Gallery>
            {props.photos.map((value, index) => (
              <Item key={index} original={value} thumbnail={value} width='1920' height='1080'>
                {({ ref, open }) => (
                  <img
                    ref={ref as React.LegacyRef<HTMLImageElement>}
                    alt={'project picture ' + index}
                    onClick={open}
                    src={value}
                    className='project-card-picture'
                  />
                )}
              </Item>
            ))}
          </Gallery>
        </Col>
        <Col xs={12} md={9} lg={8} xxl={9} className='h-100' ref={picturesColumRef}>
          <p className='project-card-title m-0'>
            <a
              className='text-decoration-none text-head-color'
              target='_blank'
              rel='noopener noreferrer'
              href={props.href}
            >
              <span className='project-card-pseudo-block' />
              {props.name}
            </a>
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
    </div>
  );
};

export default ProjectCard;
