import { useMemo, useEffect, useRef } from 'react';
import { connect } from 'dva';
import classnames from 'classnames';

import Swiper from 'react-id-swiper';


import Message from './Message';
import Programme from './Programme';

import styles from './index.less';
import { Link } from 'umi';


export default connect(({ configs }) => {
  return {
    ...configs
  }
})(function (props) {
  const { dispatch, config } = props;
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

  useEffect(() => {
    const asyncConfig = async () => {
      await dispatch({
        type: 'configs/configs',
        payload: {
          type: 'home'
        }
      });
    }

    if (!config.home) {
      asyncConfig();
    }
  }, [config.home]);

  const ref = useRef(null);

  return (
    <div className={styles.home}>
      <div className={styles.home_poster}>
        {
          config.home && <Swiper {...params} ref={ref}>
            <div className={styles.album}>
              <Link to="/poster/concept">
                <img src={config.home.data.announcement.image} />
              </Link>
            </div>

            {
              (Array.isArray(config.home.data.schedule) ? 
                config.home.data.schedule : 
                [config.home.data.schedule]).map((schedule, index) => {
                  return <div className={styles.album} key={index}>
                    <img src={schedule.url} />
                  </div>
                })
            }
            
          </Swiper>
        }
        
      </div>
     
      <Programme />
      <Message />
    </div>
  );
})