import { formatMessage } from 'umi-plugin-react/locale';
import styles from './index.less';
import Loading from '../../components/Loading';

export default function Message (props) {
  return (
    <section className={styles.message}>
      <div className={styles.title}>
        <h3>{formatMessage({ id: 'home.message.title' })}</h3>
        <h5>{formatMessage({ id: 'home.message.title.desc' })}</h5>
      </div>
      <div className={styles.content}>
        <Loading />
      </div>
    </section>
  );
}