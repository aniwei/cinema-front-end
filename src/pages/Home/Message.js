import { formatMessage } from 'umi-plugin-react/locale';
import { Link } from 'umi';
import styles from './index.less';

export default function Message (props) {
  return (
    <section className={styles.message}>

      <h3 className={styles.message_title}>最新消息</h3>
      
      <div className={styles.message_content}>
        <div className={styles.news_item}>
          <h4 className={styles.news_title}>08/20 我們致電影的情書 戀愛・電影館 9 月在浪漫的光影中出發</h4>
          <div className={styles.news_brief}>
            <p>
              戀愛・電影館與觀眾闊別兩個月後，光影大門即將於九月重開，讓我們在銀幕下再次 相聚。
              <Link className={styles.news_link} to="/news/2020-08-20">[了解詳情]</Link>
            </p>
          </div>
        </div>
      </div>

      

    </section>
  );
}