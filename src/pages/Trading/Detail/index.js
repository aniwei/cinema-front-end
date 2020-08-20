

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

        <div className={styles.actions}>
          <button className={styles.button}>购票</button>
        </div>
      </div>
    </div>
  )
}

function Header () {
  return (
    <div className={styles.hot}>
      <div className={styles.hot_content}>
        <Swiper>
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

export default function () {
  return (
    <div className={styles.programme}>
      <Header />
    </div>
  );
}