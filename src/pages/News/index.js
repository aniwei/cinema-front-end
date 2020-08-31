import { useState, useCallback, useMemo, useEffect } from 'react';
import { formatMessage, getLocale } from 'umi-plugin-locale';
import moment from 'moment';
import { Link } from 'umi';
import { connect } from 'dva';
import styles from './index.less';  

export default connect(({ news }) => {
  return {
    ...news
  }
})(function (props) {
  const locale = getLocale();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { news } = props;

  useEffect(() => {
    const { dispatch } = props;
    const getNews = async () => {

      await dispatch({
        type: 'news/news',
        payload: {
          limit: 20
        }
      });
    }

    getNews();
  }, [news.length]);

  return (
    <div className={styles.news}>
      <h1 className={styles.title}>{formatMessage({ id: 'news.title' })}</h1>
      {
        news.map(n => {
          return (
            <div className={styles.news_item} key={n.objectId}>
              <div className={styles.news_date}>{moment(new Date(n.publishedAt.iso)).format(`MM-DD`)}</div>
              <h3 className={styles.news_title}>
                <Link className={styles.news_link} to={`/news/${n.objectId}`}>
                  {n.title[locale]}
                </Link>
              </h3>
            </div>
          )
        })
      }
    </div>
  );
})