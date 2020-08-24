import { useMemo, useRef } from 'react';
import classnames from 'classnames';

import Swiper from 'react-id-swiper';


import Message from './Message';
import Programme from './Programme';

import styles from './index.less';
import { Link } from 'umi';


export default function () {
  const params = {
    autoplay: 3000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    }
  }

  const ref = useRef(null);

  return (
    <div className={styles.home}>
      <div className={styles.home_poster}>
        <Swiper {...params} ref={ref}>
          <div className={styles.album}>
            <Link to="/poster/love-letter">
              <img src="https://cinematheque.oss-cn-hongkong.aliyuncs.com/album/september.jpg" />
            </Link>
          </div>
          <div className={styles.album}>
            <img src="https://cinematheque.oss-cn-hongkong.aliyuncs.com/album/schedule.png" />
          </div>
        </Swiper>
      </div>
     
      <Programme />
      <Message />
    </div>
  );
}