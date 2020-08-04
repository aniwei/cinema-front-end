import { useState } from 'react';
import classnames from 'classnames';
import { Link } from 'umi';
import { formatMessage } from 'umi-plugin-react/locale';
import { getUrlProperty } from 'shared/locationParser';

import styles from './index.less';

function MenuItem (props) {
  const { className, path, text, onClick } = props;

  return (
    <div className={className}>
      <Link 
        to={path} 
        className={styles.link} 
        onClick={onClick}
      >{text}</Link>
    </div>
  );
}

export default function Menus () {
  const [active, setActive] = useState(getUrlProperty('pathname'));

  const menus = [
    { path: '/', text: formatMessage({ id: `menus.home` }) },
    { path: '/programme', text: formatMessage({ id: `menus.programme` }) },
    { path: '/special', text: formatMessage({ id: `menus.special` }) },
    { path: '/news', text: formatMessage({ id: `menus.news` }) },
    { path: '/about', text: formatMessage({ id: `menus.about` }) }
  ];

  const onChange = (menu) => {
    setActive(menu.path);
  }
  
  return (
    <nav className={styles.menus}>
      {
        menus.map(menu => {
          const classes = classnames( { 
            [styles.menu_item_active]: active === menu.path 
          }, styles.menu_item);

          return <MenuItem 
            key={menu.path}
            onClick={(e) => onChange(menu, e)}
            className={classes} 
            {...menu} 
          />
        })
      }
    </nav>
  ); 
}