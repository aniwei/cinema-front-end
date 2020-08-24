import { useState, useCallback, useMemo, useEffect } from 'react';
import { formatMessage, getLocale } from 'umi-plugin-locale';
import { Link } from 'umi';
import Swiper from 'react-id-swiper';
import classnames from 'classnames';
import styles from './index.less';  

const news = {
  title: {
    zh_MO: '我們致電影的情書 戀愛・電影館 9 月在浪漫的光影中出發',
    en_US: 'Our Love Letter to the Cinema Cinematheque·Passion – Starting Your September in Romantic Light and Shadows'
  },
  brief: {
    zh_MO: '戀愛・電影館與觀眾闊別兩個月後，光影大門即將於九月重開，讓我們在銀幕下再次 相聚。',
    en_US: 'After two months of hiatus, Cinematheque·Passion will reopen its gate of light and shadows in September. Let us gather in front of the big screen all over again.'
  }
}


export default function () {
  const locale = getLocale();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.news}>
      <h1 className={styles.title}>{formatMessage({ id: 'news.title' })}</h1>
      <div className={styles.news_item}>
        <div className={styles.news_date}>08-20</div>
        <h3 className={styles.news_title}>
          <Link className={styles.news_link} to="/news/2020-08-20">
            {news.title[locale]}
          </Link>
        </h3>
      </div>
    </div>
  );
}