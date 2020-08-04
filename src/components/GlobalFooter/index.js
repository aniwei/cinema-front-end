import { Link } from 'umi';
import styles from './index.less';

export default function () {
  return (
    <footer className={styles.footer}>
      <div className={styles.units}>
        <div className={styles.unit}></div>
        <div className={styles.unit}></div>
        <div className={styles.unit}></div>
      </div>
      <div className={styles.right}>戀愛・電影館 Cinematheque・Passion © 2017</div>
    </footer>
  );
}