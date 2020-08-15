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
      <div className={styles.content}>
        <div className={styles.album}>
          <img 
            className={styles.image}
            src="https://cinematheque-api.bpprojects.com/uploads/86oeRpviWYJGktfX3fYKAqW0VHf5S6ErRpYXWoEF.jpg" 
          />
        </div>
        <div className={styles.detail}>
          <h3 className={styles.title}>失路人</h3>
          <h5 className={styles.sub_title}>Someone Who Was Lost</h5>

          <ul className={styles.data}>
            <li className={styles.item}>
              <span className={styles.label}>类型: </span>剧情 / 悬疑
            </li>
            <li className={styles.item}>
              <span className={styles.label}>制片国家/地区: </span>中国台湾
            </li>
            <li className={styles.item}>
              <span className={styles.label}>语言: </span>粤语 / 汉语普通话
            </li>
            <li className={styles.item}>
              <span className={styles.label}>上映日期: </span>2020-02-21(中国台湾)
            </li>
            <li className={styles.item}>
              <span className={styles.label}>片长: </span>93分钟
            </li>
          </ul>

          <div className={styles.brief}>
            荃湾灰窰角街工厦水泥藏尸案死者是28岁男子张万里，疑因上门追债遭四名年轻人杀害，事后尸体藏在自製水泥棺内，案发于2016年4月4日，张疑到DAN6案发单位向租客追债后便告失踪，4月6日张的女友人报案寻人，警方列失踪人口处理
          </div>  
        </div>
      
        <div className={styles.actions}>
          <button className={styles.buy}>
            购买
          </button>
        </div>
      </div>
    </section>
  )
}