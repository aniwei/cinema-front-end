
import styles from './index.less';

import logo from '../../assets/common/logo.png';

import Menus from './Menus';
import Socials from './Socials';
import Langs from './Langs';
import MenusButton from './MenusButton';


export default function (props) {
  

  return (
    <header className={styles.header}>
      <section className={styles.topbar}>
        <Langs />
        <div className={styles.logo}>
          <img src={logo} className={styles.logo} />
        </div>
        <Socials />
      </section>

      <Menus {...props} />
      <MenusButton  />
    </header>
  );
}