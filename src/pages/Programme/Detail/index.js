import { useState } from 'react';
import classnames from 'classnames';
import { formatMessage } from 'umi-plugin-react/locale';

import styles from './index.less';


export default function ProgrammeDetail (props) {
  
  return (
    <div className={styles.programme_detail}>
      <div className={styles.programme_header}>
        <h2 className={styles.title}>看见澳门：影像力量再现</h2>
        <div className={styles.brief}>
          <p>作为本澳首座艺术电影院，恋爱．电影馆以积极推广本澳电影为其中一个重要己任。我们每月会精选两部澳门长片或短片，在两个周六、日作免费放映，让澳门市民、游客及有兴趣了解澳门电影的人士在这个常设的平台上看见澳门、发现澳门的影像和文化。</p>
          <p>(为更方便观众留座观赏「看见澳门 - 影像力量重现」的电影，请选取心水场次，及按购票程序领取免费电子票。此外，每场放映将预留10个座位让观众现场登记，先到先得)</p>
        </div>
      </div>
      <section className={styles.programme}>
        <div className={styles.content}>
          <div className={styles.album}>
            <img 
              className={styles.image}
              src="https://cinematheque-api.bpprojects.com/uploads/4Q4wE2Ph061v5IDDIBGN1Yla5Po9MqN2KpufcLmk.jpg" 
            />
          </div>
          <div className={styles.detail}>
            <iframe src="https://www.youtube.com/embed/1Ckxadd2sVk" frameborder="0" allowfullscreen=""></iframe>
          </div>
        </div>

        
      </section>
    </div>
  )
}