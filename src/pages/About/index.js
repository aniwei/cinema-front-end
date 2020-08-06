import Map from './Map';
import styles from './index.less';

import bgIntro from '../../assets/about/bg-intro.jpg';

function GoogleMap () {
  const googleMapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`;

  return (
    <Map 
      isMarkerShown
      googleMapURL={googleMapURL}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `600px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}


function About (props) {


  return (
    <div className={styles.about}>
      <section className={`${styles.introduction} ${styles['section']}`}>
        <div className={`${styles['section-inner']}`}>
          <div className={`${styles['section-tit']}`}>
            <em>关于我们</em>about us
          </div>

          <div className={`${styles['introduction-media']}`}>
            <div className={`${styles['introduction-media-object']}`}>
              <img className={`${styles['introduction-media-image']}`} src={bgIntro} />
            </div>
            <div className={`${styles['introduction-media-main']}`}>
              <h3 className={`${styles['introduction-media-tit']}`}>
                澳门特别行政区政府文化局辖下的恋爱・电影馆于2017年3月31日正式对外开放
              </h3>

              <div className={`${styles['introduction-media-desc']}`}>
                恋爱・电影馆位于澳门恋爱巷十三号，毗邻澳门的著名世遗景点「大三巴牌坊」（即「圣保禄大教堂遗址」）。电影馆楼高三层，是一个集合电影欣赏、本土影像保存、以及电影书籍阅读等功能的空间。馆内地面层设售票处、放映厅、控制室﹔一层为电影资料室，收藏澳门电影及录像、电影书籍、期刊及杂志等，供市民在馆内查阅。
              </div>
            </div>
          </div>

          <div className={`${styles['feature']}`}>
            <ul className={`${styles['feature-list']}`}>
              <li className={`${styles['feature-item']}`}>
                <div className={`${styles['feature-cont']}`}>
                  <div className={`${styles['feature-icon']}`}></div>
                  <h3 className={`${styles['feature-tit']}`}>定位与使命</h3>
                  <div className={`${styles['feature-desc']}`}>作为观众及电影创作人互动交流的平台，电影馆肩负起推动电影艺术文化的角色，对外推广本土电影，为澳门人和喜爱电影的人士注入更多精神养份。澳门人和访澳的游客可以善用这电影馆，欣赏更多来自世界不同地方的优质电影。</div>
                </div>
              </li>
              <li className={`${styles['feature-item']}`}>
                <div className={`${styles['feature-cont']}`}>
                  <div className={`${styles['feature-icon']}`}></div>
                  <h3 className={`${styles['feature-tit']}`}>节目策划</h3>
                  <div className={`${styles['feature-desc']}`}>因应以上之定位与目标对象，电影馆的节目策划将同时兼顾艺术和文化方面，策划方向务求在艺术电影和商业电影之间取得平衡，选片方向亦以多元题材和集合不同类型为主，兼顾不同喜好、年龄、性别和教育程度的观众，以开拓更广泛及多元的观众层，带动更多潜在观众，扩大现有的观众群，并进一步增加电影创作人、影评人和市民之间的互动，提升观众的参与度及增加讨论电影的氛围。</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.map}>
          {/* <GoogleMap /> */}
          <div className={styles.transport}>

          </div>
      </section>
    </div>
  )
} 

export default About;