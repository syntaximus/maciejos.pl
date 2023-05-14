const Navigation = () => (
  <div className='navigation'>
    <ul>
      <li>
        <a data-to-scrollspy-id='about' href='#about'>
          About
        </a>
      </li>
      <li>
        <a data-to-scrollspy-id='education' href='#education'>
          Education
        </a>
      </li>
      <li>
        <a data-to-scrollspy-id='experience' href='#experience'>
          Experience
        </a>
      </li>
      <li>
        <a data-to-scrollspy-id='projects' href='#projects'>
          Projects
        </a>
      </li>
      <li>
        <a data-to-scrollspy-id='skills' href='#skills'>
          Skills
        </a>
      </li>
    </ul>
  </div>
);

export default Navigation;
