import styles from './index.less';

export default function News () {
  return (
    <div className={styles.news}>
      <section className={styles.section}>

        <main className={styles.content}>

        </main>
        <aside className={styles.aside}>
          <h3 className={styles.title}>最新消息</h3>
          <ul className={styles.news_list}>
            <li className={styles.news_item}>
              <h4 className={styles.news_title}>
                恋爱．电影馆修缮工程通知
              </h4>
              <p className={styles.news_time}>
                07-01
              </p>
            </li>

            <li className={styles.news_item}>
              <h4 className={styles.news_title}>
                ‘FASHION IS AN ATTITUDE’ - 时装电影专题展 六月型格降臨戀愛‧電影館
              </h4>
              <p className={styles.news_time}>
                06-06
              </p>
            </li>

            <li className={styles.news_item}>
              <h4 className={styles.news_title}>
                恋爱．电影馆修缮工程通知
              </h4>
              <p className={styles.news_time}>
                07-01
              </p>
            </li>

            <li className={styles.news_item}>
              <h4 className={styles.news_title}>
                恋爱．电影馆修缮工程通知
              </h4>
              <p className={styles.news_time}>
                07-01
              </p>
            </li>
          </ul>
        </aside>
      </section>
    </div>
  );
}