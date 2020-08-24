import { formatMessage, getLocale } from 'umi-plugin-react/locale';
import { Link } from 'umi';
import styles from './index.less';

const news = {
  title: {
    zh_MO: '08/20 我們致電影的情書 戀愛・電影館 9 月在浪漫的光影中出發',
    en_US: '08/20 Our Love Letter to the Cinema Cinematheque·Passion – Starting Your September in Romantic Light and Shadows'
  },
  brief: {
    zh_MO: '戀愛・電影館與觀眾闊別兩個月後，光影大門即將於九月重開，讓我們在銀幕下再次 相聚。',
    en_US: 'After two months of hiatus, Cinematheque·Passion will reopen its gate of light and shadows in September. Let us gather in front of the big screen all over again.'
  }
}

export default function Message (props) {
  const locale = getLocale();

  return (
    <section className={styles.message}>

      <h3 className={styles.message_title}>{formatMessage({ id: 'home.message.title'})}</h3>
      
      <div className={styles.message_content}>
        <div className={styles.news_item}>
          <Link className={styles.news_link} to="/news/2020-08-20">
            <h4 className={styles.news_title}>{news.title[locale]}</h4>
            <div className={styles.news_brief}>
              <p>{news.brief[locale]}</p>
            </div>
          </Link>
        </div>
      </div>

      

    </section>
  );
}