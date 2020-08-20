

import Swiper from 'react-id-swiper';
import classnames from 'classnames';
import styles from './index.less';  

function Film (props) {
  const { title, en, type, actors, className, poster, length } = props;

  return (
    <div className={classnames(styles.film, className)}>
      <div className={styles.poster}>
        <img src={poster} />
      </div>

      <div className={styles.content}>
        <div className={styles.files}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.info}>{en}</p>
          <p className={styles.info}>{actors.join(' / ')}</p>
          <p className={styles.info}>{type.join(' / ')}</p>
          <p className={styles.info}>{length}</p>
        </div>
      </div>
    </div>
  )
}

function Films () {
  const swiperOptions = {
    pagination: {
      el: `.${styles.pagination}`,
    }
  }

  return (
    <div className={styles.hot}>
      <div className={styles.hot_content}>
        <Swiper {...swiperOptions}>
          <div className={styles.swiper_film}>
            <div className={styles.inner}>
              <div className={styles.background} style={{ background: 'url(https://img9.doubanio.com/view/photo/l/public/p2560889037.webp) no-repeat center top' }}></div>
              <Film 
                className={styles.foreground}
                title="雨中樂飛揚"
                en="Singing in the Rain"
                actors={['吉恩·凯利', '唐纳德·奥康纳', '黛比·雷诺斯', '简·哈根', '米勒德·米切尔']}
                type={['喜劇', '愛情', '歌舞']}
                length="103分钟"
                poster="https://img9.doubanio.com/view/photo/l/public/p2560889037.webp"
              />
            </div>
          </div>
          <div className={styles.swiper_film}>
            <div className={styles.inner}>
              <div className={styles.background} style={{ background: 'url(https://img9.doubanio.com/view/photo/l/public/p2560889037.webp) no-repeat center top' }}></div>
              <Film 
                className={styles.foreground}
                title="雨中樂飛揚"
                en="Singing in the Rain"
                actors={['吉恩·凯利', '唐纳德·奥康纳', '黛比·雷诺斯', '简·哈根', '米勒德·米切尔']}
                type={['喜劇', '愛情', '歌舞']}
                length="103分钟"
                poster="https://img9.doubanio.com/view/photo/l/public/p2560889037.webp"
              />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

function TimeItem (props) {
  const { beginTime, endTime, price, tickets } = props;

  return (
    <div className={styles.time_item}>
      <div className={styles.time}>
        <span className={styles.begin_time}>{beginTime}</span>
        <span className={styles.end_time}>{endTime}</span>
      </div>

      <div className={styles.price}>
        <span>$</span>{price}
      </div>
      <div className={styles.actions}>
        <button className={styles.button}>购买</button>
      </div>
    </div>
  )
}

function Shows () {
  return (
    <div className={styles.shows}>
      <div className={styles.shows_header}>
        <div className={styles.show_item}>
          10月01日
        </div>
        <div className={styles.show_item}>
          10月01日
        </div>
      </div>

      <div className={styles.shows_content}>
        <TimeItem 
          beginTime="14:40"
          endTime="16:40"
          price="60.00"
          tickets={60}
        />

        <TimeItem 
          beginTime="14:40"
          endTime="16:40"
          price="60.00"
          tickets={60}
        />
        
      </div>
    </div>
  )
}

export default function () {
  return (
    <div className={styles.programme}>
      <Films />
      <Shows />
    </div>
  );
}