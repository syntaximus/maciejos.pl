import { Row, Col } from 'react-bootstrap';
import SkillCard from './skill-card';
import type { ISkillCard } from './skill-card';
import './skills.css';
import {
  CSharp,
  JavaScript,
  Python,
  Css,
  TypeScript,
  ReactIcon,
  Angular,
  Bootstrap,
  DotNet,
  MsSqlServer,
  Kubernetes,
  Docker,
  Nginx,
  Iis,
} from '../../assets/logos/skills';
import { Trans, useTranslation } from 'react-i18next';

export interface ISkillsProps {
  cinematicMode: boolean;
}

const Skills = (props: ISkillsProps) => {
  useTranslation();
  const skillImageWidth = '2.5rem';
  const skillImageHeight = '2.5rem';
  const languages: ISkillCard[] = [
    {
      name: 'C#',
      level: 10,
      imgElement: <CSharp style={{ width: skillImageWidth, height: skillImageHeight }} />,
    },
    {
      name: 'SQL',
      level: 8,
      imgElement: <MsSqlServer style={{ width: skillImageWidth, height: skillImageHeight }} />,
    },
    {
      name: 'TypeScript',
      level: 6,
      imgElement: <TypeScript style={{ width: skillImageWidth, height: skillImageHeight }} />,
    },
    {
      name: 'JavaScript',
      level: 6,
      imgElement: <JavaScript style={{ width: skillImageWidth, height: skillImageHeight }} />,
    },
    {
      name: 'CSS',
      level: 5,
      imgElement: <Css style={{ width: skillImageWidth, height: skillImageHeight }} />,
    },
    {
      name: 'Python',
      level: 4,
      imgElement: <Python style={{ width: skillImageWidth, height: skillImageHeight }} />,
    },
  ];
  const frontendSkills: ISkillCard[] = [
    {
      name: 'React',
      level: 6,
      imgElement: <ReactIcon style={{ width: skillImageWidth, height: skillImageHeight }} />,
    },
    {
      name: 'Angular',
      level: 4,
      imgElement: <Angular style={{ width: skillImageWidth, height: skillImageHeight }} />,
    },
    {
      name: 'Bootstrap',
      level: 6,
      imgElement: <Bootstrap style={{ width: skillImageWidth, height: skillImageHeight }} />,
    },
  ];
  const backendSkills: ISkillCard[] = [
    {
      name: '.NET',
      level: 9,
      imgElement: <DotNet style={{ width: skillImageWidth, height: skillImageHeight }} />,
    },
    {
      name: 'MS SQL Server',
      level: 8,
      imgElement: <MsSqlServer style={{ width: skillImageWidth, height: skillImageHeight }} />,
    },
  ];
  const infrastructureSkills: ISkillCard[] = [
    {
      name: 'Kubernetes',
      level: 5,
      imgElement: <Kubernetes style={{ width: skillImageWidth, height: skillImageHeight }} />,
    },
    {
      name: 'Docker',
      level: 5,
      imgElement: <Docker style={{ width: skillImageWidth, height: skillImageHeight }} />,
    },
    {
      name: 'IIS',
      level: 4,
      imgElement: <Iis style={{ width: skillImageWidth, height: skillImageHeight }} />,
    },
    {
      name: 'Nginx',
      level: 2,
      imgElement: <Nginx style={{ width: skillImageWidth, height: skillImageHeight }} />,
    },
  ];
  const others: string[] = [
    'PowerShell',
    'ASP.NET',
    'WCF',
    'WPF',
    'Dapper',
    'EF',
    'SSIS',
    'MySQL',
    'PostgreSQL',
    'RabbitMQ',
    'MongoDB',
    'NServiceBus',
    'Ext.js',
    'jQuery',
    'Node.js',
    'PWA',
    'Yarn',
    'Visual Studio',
    'VS Code',
    'Git',
    'Jenkins',
    'Gzipper',
    'Burp Suite',
    'ILSpy',
    'Selenium',
    'Postman',
    'Power BI',
    'SharePoint',
    'Kibana',
    'Grafana',
    'Prometheus',
    'Wireshark',
    'Azure',
    'IdentityServer',
    'Tensorflow',
    'Xamarin',
  ];

  return (
    <div id='skills' className='skills'>
      <h3 className={'text-highlight-color' + (!props.cinematicMode ? ' section-header' : '')}>
        <Trans i18nKey='skills.section'>Technologie</Trans>
      </h3>
      <div className='my-3 skills-card'>
        <h4 className='text-highlight-color text-xl'>
          <Trans i18nKey='skills.languages'>Języki</Trans>
        </h4>
        <Row>
          {languages.map((value, index) => (
            <Col key={index} xs={12}>
              <SkillCard key={index} skillCard={value} accentColor='#f0db4f' />
            </Col>
          ))}
        </Row>
      </div>
      <div className='my-3 skills-card'>
        <h4 className='text-highlight-color text-xl'>
          <Trans i18nKey='skills.backend'>Backend</Trans>
        </h4>
        <Row>
          {backendSkills.map((value, index) => (
            <Col key={index} xs={12}>
              <SkillCard skillCard={value} accentColor='#0072c6' />
            </Col>
          ))}
        </Row>
      </div>
      <div className='my-3 skills-card'>
        <h4 className='text-highlight-color text-xl'>
          <Trans i18nKey='skills.frontend'>Frontend</Trans>
        </h4>
        <Row>
          {frontendSkills.map((value, index) => (
            <Col key={index} xs={12}>
              <SkillCard skillCard={value} accentColor='#E23237' />
            </Col>
          ))}
        </Row>
      </div>
      <div className='my-3 skills-card'>
        <h4 className='text-highlight-color text-xl'>
          <Trans i18nKey='skills.devops'>DevOps</Trans>
        </h4>
        <Row>
          {infrastructureSkills.map((value, index) => (
            <Col key={index} xs={12}>
              <SkillCard skillCard={value} accentColor='#019639' />
            </Col>
          ))}
        </Row>
      </div>
      <div className='my-3 skills-card'>
        <h4 className='text-highlight-color text-xl'>
          <Trans i18nKey='skills.other'>Inne</Trans>
        </h4>
        <p>
          <Trans i18nKey='skills.other-description'>
            Posiadam również doświadczenie z następującymi technologiami i narzędziami:
          </Trans>
        </p>
        <Row>
          {others.map((value, index) => (
            <Col key={index} xs={6} sm={4} lg={6} xxl={4}>
              <div className='list-item'>
                <span className='pe-2'>•</span> {value}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Skills;
