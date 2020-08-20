import { useState, useCallback, useMemo } from 'react';
import { Link } from 'umi';
import Swiper from 'react-id-swiper';
import classnames from 'classnames';
import styles from './index.less';  


export default function () {

  return (
    <div className={styles.news}>
      <div className={styles.news_item}>
        <h3 className={styles.news_title}>
          <Link className={styles.news_link} to="/news/2020-08-20">
            我們致電影的情書<br />
            戀愛・電影館 9 月在浪漫的光影中出發
          </Link>
        </h3>
      </div>
    </div>
  );
}