import { useState } from 'react';
import classnames from 'classnames';
import { formatMessage } from 'umi-plugin-react/locale';
import styles from './index.less';

const PROGRAMME = 'programme';
const SPECIAL = 'special';

export default function Programme (props) {
  const [activeKey, setActiveKey] = useState(PROGRAMME);

  const onClick = (key) => {
    if (activeKey !== key) {
      setActiveKey(key);
    }
  }

  return (
    <section className={styles.programme}>
      <div className={styles.programme_content}>
        <div className={styles.tabs}>
          <span 
            className={classnames(styles.tab, { [styles.active]: activeKey === PROGRAMME })}
            onClick={(e) => onClick(PROGRAMME)}
          >{formatMessage({ id: 'home.programme.title' })}</span>
          <span className={styles.line}></span>
          <span 
            className={classnames(styles.tab, { [styles.active]: activeKey === SPECIAL })}
            onClick={(e) => onClick(SPECIAL)}
          >{formatMessage({ id: 'home.special.title' })}</span>
        </div>
        <div className={styles.content}>
          <article className={styles.movie}>
            <div className={styles.movie_inner}>
              <img src="https://p0.meituan.net/movie/22857bface4d3e8586c8f45858d4fa92662013.jpg@464w_644h_1e_1c" />
              <div className={styles.movie_detail}>
                <h4>误杀</h4>
                <p>Sheep Without a Shepherd</p>

                <div className={styles.movie_data}>

                  <span className={styles.count}>50/60</span>
                  <span className={styles.price}>$60</span>
                </div>

              </div>
            </div>
            <div className={styles.movie_layer}>
              <button className={styles.buy}>购买</button>
            </div>
          </article>
          <article className={styles.movie}>
            <div className={styles.movie_inner}>
              <img src="https://p0.meituan.net/movie/22857bface4d3e8586c8f45858d4fa92662013.jpg@464w_644h_1e_1c" />
              <div className={styles.movie_detail}>
                <h4>误杀</h4>
                <p>Sheep Without a Shepherd</p>

                <div className={styles.movie_data}>

                  <span className={styles.count}>50/60</span>
                  <span className={styles.price}>$60</span>
                </div>

              </div>
            </div>
            <div className={styles.movie_layer}>
              <button className={styles.buy}>购买</button>
            </div>
          </article>
          <article className={styles.movie}>
            <div className={styles.movie_inner}>
              <img src="https://p0.meituan.net/movie/22857bface4d3e8586c8f45858d4fa92662013.jpg@464w_644h_1e_1c" />
              <div className={styles.movie_detail}>
                <h4>误杀</h4>
                <p>Sheep Without a Shepherd</p>

                <div className={styles.movie_data}>

                  <span className={styles.count}>50/60</span>
                  <span className={styles.price}>$60</span>
                </div>

              </div>
            </div>
            <div className={styles.movie_layer}>
              <button className={styles.buy}>购买</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}