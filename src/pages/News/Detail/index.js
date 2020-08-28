import { useState, useCallback, useEffect } from 'react';
import { connect } from 'dva';
import { getLocale,  formatMessage } from 'umi-plugin-react/locale';
import moment from 'moment';
import styles from './index.less';  

export default connect(({ news }) => {
  return { ...news }
})(function (props) {
  const { match, news } = props;
  const { newsId } = match.params;
  let newsData;

  news.some(n => {
    if (n.objectId === newsId) {
      newsData = n;
      return true;
    }
  });

  const [newsDetail, setNews] = useState(newsData)
  const locale = getLocale();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (newsDetail === undefined) {
      const { dispatch } = props;

      const getSingleNews = async () => {
        const news = await dispatch({
          type: 'news/single',
          payload: {
            newsId
          }
        });
  
        if (news) {
          setNews(news);
        }
      }

      getSingleNews();
    }
  }, [newsDetail, newsId, props]);

  return (
    <div className={styles.news_detail}>
      <div className={styles.detail}>
        {
          newsDetail ? <>
            <h1 className={styles.detail_title}>
              {newsDetail.title[locale]}
            </h1>

            <div className={styles.detail_desc}>
              {formatMessage({ id: 'news.title.pubilsh' })} {moment(new Date(newsDetail.publishedAt.iso)).format('YYYY-MM-DD HH:mm:ss')}
            </div>

            <div className={styles.detail_content} dangerouslySetInnerHTML={{ __html: newsDetail.content[locale] }}>
            </div>
          </> : <div className={styles.loading}>...Loading</div>
        }

        
      </div>
    </div>
  );
})