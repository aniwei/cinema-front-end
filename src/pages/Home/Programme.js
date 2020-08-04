import { formatMessage } from 'umi-plugin-react/locale';
import styles from './index.less';

export default function Programme (props) {
  return (
    <section className={styles.programme}>
      <div className={styles.title}>
        <h3>
          <span className={styles.films}>{formatMessage({ id: 'home.programme.title' })}</span>
          <span  className={styles.line}>/</span>
          <span  className={styles.special}>{formatMessage({ id: 'home.programme.title' })}</span>
        </h3>
        <h5>{formatMessage({ id: 'home.programme.title.desc' })}</h5>
      </div>
      <div className={styles.content}>

      </div>
    </section>
  )
}