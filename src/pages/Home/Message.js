import { useEffect, useState } from 'react';
import { formatMessage, getLocale } from 'umi-plugin-react/locale';
import { Link } from 'umi';
import { connect } from 'dva';
import moment from 'moment';
import styles from './index.less';

export default connect(({ news }) => {
  return {
    ...news
  }
})(function Message (props) {
  const [isLoading, setLoading] = useState(true);
  const locale = getLocale();
  const { news } = props;

  useEffect(() => {
    const { dispatch } = props;
    const getNews = async () => {
      setLoading(true);

      await dispatch({
        type: 'news/news',
        payload: {
          limit: 5
        }
      });

      setLoading(false);
    }

    getNews();
  }, [news.length, props]);

  return (
    <section className={styles.message}>
      <div className={styles.message_context}>
        <h3 className={styles.message_title}>{formatMessage({ id: 'home.message.title'})}</h3>
        
        <div className={styles.message_content}>
          {
            isLoading ? <div className={styles.loading}>
              Loading...
            </div> : news.slice(0, 5).map(n => {
              return (
                <div className={styles.news_item} key={n.objectId}>
                  <Link className={styles.news_link} to={`/news/${n.objectId}`}>
                    <h4 className={styles.news_title}>{moment(new Date(n.publishedAt.iso)).format('MM/DD')} {n.title[locale]}</h4>
                    <div className={styles.news_brief} dangerouslySetInnerHTML={{ __html: n.content[locale].slice(0, 80) + '...' }}>
                      
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div>   
      </div>

      <Link className={styles.message_button} to="/news">
        {formatMessage({ id: 'home.message.more' })}
      </Link>
    </section>
  );
})

