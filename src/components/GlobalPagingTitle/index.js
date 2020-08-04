import { Link } from 'umi';
import styles from './index.less';

export default function () {
  return (
    <section className={styles.paging}>
      <h2 className={styles.title}>节目</h2>
      <div className={styles.breadcrum}>
        <span>恋爱·电影馆</span> / <span>节目</span>
      </div>
    </section>
  );
}