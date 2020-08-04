


import Message from './Message';
import Programme from './Programme';

import styles from './index.less';


export default function () {
  return (
    <div className={styles.home}>
      <section className={styles.slides}>
        <img src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev1.jpg" />
      </section>

      <Programme />

      <Message />
    </div>
  );
}