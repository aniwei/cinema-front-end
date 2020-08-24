import { useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { formatMessage } from 'umi-plugin-react/locale';
import classnames from 'classnames';
import { Link } from 'umi';
import { animated, useSpring, a } from 'react-spring';

import styles from './index.less';


export function useMeasure () {
  const ref = useRef();
  const [bounds, setBounds] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(() => new ResizeObserver(([entry]) => {
    setBounds(entry.contentRect)
  }))
  
  useEffect(() => {
    if (ref.current) {
      ro.observe(ref.current);
    }
    return () => ro.disconnect()
  }, [ro]);

  return [{ ref }, bounds];
}

export function usePrevious (value) {
  const ref = useRef()
  useEffect(() => void (ref.current = value), [value])
  return ref.current
}

export default function Menus (props) {
  const menuItems = [
    { path: '/', text: formatMessage({ id: 'menus.home' }) },
    { path: '/programme', text: formatMessage({ id: 'menus.programme' }) },
    // { path: '/topic', text: formatMessage({ id: 'menus.topic' }) },
    { path: '/news', text: formatMessage({ id: 'menus.news' }) },
    { path: '/about', text: formatMessage({ id: 'menus.about' }) }
  ];

  const { expanded, onMenuItemClick, className } = props;
  const previous = usePrevious(expanded);
  const [bind, { height: menuHeight }] = useMeasure();
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: 'translate3d( 20px, 0, 0)' },
    to: { 
      height: expanded ? menuHeight : 0, 
      opacity: expanded ? 1 : 0, 
      transform: `translate3d(${expanded ? 0 : 20}px,0,0)` }
    });

  return <animated.div className={classnames(styles.nav_menus, className)} style={{ height: expanded && previous === expanded ? 'auto' : height, opacity }}>
    <a.div {...bind}  style={{ transform, display: 'inherit' }}>
      {
        menuItems.map(item => {
          return <MenuItem key={item.path} {...item} onClick={(e) => onMenuItemClick(item, e)} />
        })
      }
    </a.div>
  </animated.div>
}


function MenuItem (props) {
  return <div className={styles.menu_item} onClick={props.onClick}>
    <Link className={styles.menu_link} to={props.path}>{props.text}</Link>
  </div>
}