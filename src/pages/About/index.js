import Map from './Map';
import styles from './index.less';

import logo from '../../assets/common/logo.png';

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
      <sction className={styles.brief}>
        <div className={styles.brief_content}>
          <img className={styles.brief_img} src={logo} />

          <h2>澳门特别行政区政府文化局< br />辖下的恋爱・电影馆于<br />2017年3月31日正式对外开放</h2>
          <p>恋爱・电影馆位于澳门恋爱巷十三号，毗邻澳门的著名世遗景点「大三巴牌坊」（即「圣保禄大教堂遗址」）。电影馆楼高三层，是一个集合电影欣赏、本土影像保存、以及电影书籍阅读等功能的空间。馆内地面层设售票处、放映厅、控制室﹔一层为电影资料室，收藏澳门电影及录像、电影书籍、期刊及杂志等，供市民在馆内查阅。</p>
        </div>
      </sction>

      <section className={styles.map}>
          <GoogleMap />
          <div className={styles.transport}>
            <div className={styles.address}>
              澳门恋爱巷11及13号
            </div>
            <div className={styles.buses}>
              
            </div>
          </div>
      </section>
    </div>
  )
} 

export default About;