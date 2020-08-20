


import Message from './Message';
import Programme from './Programme';

import styles from './index.less';


export default function () {
  return (
    <div className={styles.home}>
      <div className={styles.album}>
        <img src="https://cinematheque.oss-cn-hongkong.aliyuncs.com/album/september.jpg" />
      </div>
      <Programme />
      <Message />
    </div>
  );
}