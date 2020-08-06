


import Message from './Message';
import Programme from './Programme';

import styles from './index.less';


export default function () {
  return (
    <div className={styles.home}>
      <section className={styles.slides}>
        <div className={styles.slide}>

          <div className={styles.inner}>
            <div className={styles.content}>
              <h3>恋爱．电影馆修缮工程通知</h3>
            </div>
          </div>
        </div>
      </section>

      <Programme />
      <Message />
    </div>
  );
}