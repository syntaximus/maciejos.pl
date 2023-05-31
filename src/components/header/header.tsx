import type { Dispatch, SetStateAction } from 'react';
import './header.css';
import Hero from './hero';
import Navigation from './navigation';
import Socials from './socials';
import { Form } from 'react-bootstrap';
import Language from './language';
import { useTranslation } from 'react-i18next';

export interface IHeaderProps {
  setCinematicMode: Dispatch<SetStateAction<boolean>>;
  cinematicMode: boolean;
}

const Header = (props: IHeaderProps) => {
  const { t } = useTranslation();
  return (
    <header className='sticky-top'>
      <div className='header d-flex flex-column justify-content-sm-between'>
        <div>
          <div className='language-panel'>
            <Language />
          </div>
          <Hero />
          {!props.cinematicMode && (
            <>
              <div className='d-none d-lg-block'>
                <Navigation />
              </div>
            </>
          )}
        </div>
        <div>
          <Socials />
          {!props.cinematicMode && (
            <Form.Check
              className='pb-2 perspective-switch'
              type='switch'
              id='perspective-switch'
              label={t('header.perspective-view')}
              checked={props.cinematicMode}
              onChange={() => {
                document.body.style.overflow = props.cinematicMode ? '' : 'hidden';
                document.body.style.height = props.cinematicMode ? '' : '100%';
                document.body.style.width = props.cinematicMode ? '' : '100%';
                props.setCinematicMode((prev) => !prev);
              }}
            />
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
