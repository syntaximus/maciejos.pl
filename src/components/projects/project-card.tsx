import { Badge, Col, Row } from 'react-bootstrap';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { GithubCircle } from '../../assets/icons/github-circle';
import './projects.css';

export interface IProjectCard {
  pictures: IProjectCardPicture[];
  name: string;
  summary: JSX.Element;
  technologies: string[];
  href: string;
  githubHref?: string;
}

export interface IProjectCardPicture {
  path: string;
  width: number;
  height: number;
}

const ProjectCard = (props: IProjectCard) => {
  var badges = [];

  for (let ind = 0; ind < props.technologies.length; ind++) {
    badges.push(
      <Badge key={ind} className='me-2' pill>
        {props.technologies[ind]}
      </Badge>
    );
  }

  return (
    <div className='project-card'>
      <Row>
        <Col
          className='pt-1'
          xs={{ order: 2, span: 12 }}
          md={{ order: 1, span: 3 }}
          lg={{ order: 1, span: 4 }}
          xxl={{ order: 1, span: 3 }}
          style={{ maxHeight: '365px', overflow: 'hidden' }}
        >
          <Gallery>
            {props.pictures.map((value, index) => (
              <Item
                key={index}
                original={'/static/pictures/original' + value.path}
                thumbnail={'/static/pictures/thumbnail' + value.path}
                width={value.width}
                height={value.height}
              >
                {({ ref, open }) => (
                  <img
                    ref={ref as React.LegacyRef<HTMLImageElement>}
                    alt={'project picture ' + index}
                    onClick={open}
                    src={'/static/pictures/thumbnail' + value.path}
                    className='project-card-picture'
                  />
                )}
              </Item>
            ))}
          </Gallery>
        </Col>
        <Col
          className='pt-1'
          xs={{ order: 1, span: 12 }}
          md={{ order: 2, span: 9 }}
          lg={{ order: 2, span: 8 }}
          xxl={{ order: 2, span: 9 }}
        >
          <p className='project-card-title'>
            <a target='_blank' rel='noopener noreferrer' href={props.href}>
              <span className='project-card-pseudo-block d-none d-lg-block' />
              {props.name}
            </a>
            {props.githubHref && (
              <a
                className='ms-3 project-card-github-icon  text-highlight-on-hover-color '
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
