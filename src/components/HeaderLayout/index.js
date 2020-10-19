import { useState, useCallback } from 'react';
import Language from '../Language';




import Menus from './Menus';

import styles from './index.less';


import logo from '../../assets/common/logo.png';

function MenuIconLine () {
  return (
    <span className={styles.menu_icon_line}></span>
  )
}

function MenuButton (props) {
  return (
    <div className={styles.menu_button} {...props}>
      <MenuIconLine />
      <MenuIconLine />
      <MenuIconLine />
    </div>
  )
}

function Logo () {
  return (
    <div className={styles.logo}>
      <img src={logo} className={styles.logo_image} />
    </div>
  );
}

function NavBar (props) {
  const [expanded, setExpanded] = useState(false);
  const onMenuButtonClick = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  const onMenuItemClick = useCallback(() => {
    setExpanded(false);
  }, []);
  

  return (
    <nav className={styles.nav}>
      
      <div className={styles.nav_bar}>
        <Logo />

        <Menus expanded className={styles.nav_menus_primary} onMenuItemClick={() => {}} />
        <Language {...props}  className={styles.langs_primary} />
        <MenuButton onClick={onMenuButtonClick} />
      </div>

      <div className={styles.nav_panel}>
        <Menus 
          expanded={expanded} 
          onMenuItemClick={onMenuItemClick}
        />

        {expanded && <Language { ...props} />}
      </div>
    </nav>
  )
}

export default function (props) {
  return (
    <header className={styles.header}>
      <NavBar {...props} />
    </header>
  )
}