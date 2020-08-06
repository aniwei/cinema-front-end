import { formatMessage } from 'umi-plugin-react/locale';
import styles from './index.less';
import Loading from '../../components/Loading';

export default function Message (props) {
  return (
    <section className={`${styles.message} ${styles['section']}`}>
      <div className={styles['section-inner']}>
        <div className={styles.title}>
          <h3>{formatMessage({ id: 'home.message.title' })}</h3>
          <h5>{formatMessage({ id: 'home.message.title.desc' })}</h5>
        </div>
        <div className={styles.content}>
          <ul className={styles['message-list']}>
            <li>
              <a className={styles['message-item-link']} href="">
                <div className={styles['message-item-hd']}>
                  <div className={styles['message-item-date']}>07-01</div>
                  <h3 className={styles['message-item-tit']}>恋爱．电影馆修缮工程通知</h3>
                </div>
              </a>
            </li>

            <li>
              <a className={styles['message-item-link']} href="">
                <div className={styles['message-item-hd']}>
                  <div className={styles['message-item-date']}>06-06</div>
                  <h3 className={styles['message-item-tit']}>网站维护安排</h3>
                </div>
              </a>
            </li>

            <li>
              <a className={styles['message-item-link']} href="">
                <div className={styles['message-item-hd']}>
                  <div className={styles['message-item-date']}>06-06</div>
                  <h3 className={styles['message-item-tit']}>‘FASHION IS AN ATTITUDE’ - 时装电影专题展 六月型格降臨戀愛‧電影館</h3>
                </div>
              </a>
            </li>

            <li>
              <a className={styles['message-item-link']} href="">
                <div className={styles['message-item-hd']}>
                  <div className={styles['message-item-date']}>06-06</div>
                  <h3 className={styles['message-item-tit']}>‘FASHION IS AN ATTITUDE’ - 时装电影专题展 六月型格降臨戀愛‧電影館</h3>
                </div>
              </a>
            </li>

            <li>
              <a className={styles['message-item-link']} href="">
                <div className={styles['message-item-hd']}>
                  <div className={styles['message-item-date']}>06-06</div>
                  <h3 className={styles['message-item-tit']}>‘FASHION IS AN ATTITUDE’ - 时装电影专题展 六月型格降臨戀愛‧電影館</h3>
                </div>
              </a>
            </li>
          </ul>
          <Loading />
        </div>
      </div>
    </section>
  );
}