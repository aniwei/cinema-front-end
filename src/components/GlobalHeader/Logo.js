import styles from './index.less';

import logo from '../../assets/common/logo.png';

export default function Logo () {
  return (
    <div className={styles.logo}>
      <img src={logo} className={styles.logo_image} />
    </div>
  );
}