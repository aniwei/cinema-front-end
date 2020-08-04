import classnames from 'classnames';

import styles from './index.less';

export default function socials (props) {

  return (
    <div className={styles.socials}>
      <i className={classnames('iconfont', 'icon-facebook')}></i>
      <i className={classnames('iconfont', 'icon-instagram')}></i>
      <i className={classnames('iconfont', 'icon-youtube')}></i>
    </div>
  );
} 