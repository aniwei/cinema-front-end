import classnames from 'classnames';
import Swiper from 'react-id-swiper';

import Map from './Map';

import styles from './index.less';

import logo from '../../assets/common/logo.png';
import iconMission from '../../assets/svg/icon_mission.svg';
import iconPlanning from '../../assets/svg/icon_planning.svg';

// import slide_1 from '../../assets/about/slides/slide_1.JPG';
// import slide_2 from '../../assets/about/slides/slide_2.JPG';
// import slide_3 from '../../assets/about/slides/slide_3.JPG';

import 'swiper/swiper.less'

function GoogleMap () {
  // const googleMapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`;

  return (
    <iframe className={styles.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.125936946831!2d113.53836301553498!3d22.197319785377143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34017ae4513b42cf%3A0xfb3b8a01e718c228!2z5oiA5oSb44O76Zu75b2x6aSo!5e0!3m2!1szh-TW!2s!4v1492159619498">

    </iframe>
  );
}


function About (props) {
  return (
    <div className={styles.about}>
      <header className={styles.about_header}>
        <div className={styles.background}>

          <div className={styles.header_content}>
            
            <section className={styles.description}>
              <img src={logo} />
              <h1>澳门特别行政区政府文化局<br />辖下的恋爱・电影馆于<br />2017年3月31日正式对外开放</h1>
              <p>恋爱・电影馆位于澳门恋爱巷十三号，毗邻澳门的著名世遗景点「大三巴牌坊」（即「圣保禄大教堂遗址」）。电影馆楼高三层，是一个集合电影欣赏、本土影像保存、以及电影书籍阅读等功能的空间。馆内地面层设售票处、放映厅、控制室﹔一层为电影资料室，收藏澳门电影及录像、电影书籍、期刊及杂志等，供市民在馆内查阅。</p>
            </section>
          </div>
        </div>
        

        
      </header>

      <section className={styles.features}>
        <div className={classnames(styles.feature, styles.mission)}>
          <img src={iconMission} />
          <h2>定位與使命</h2>
          <p>作為觀眾及電影創作人互動交流的平台，電影館肩負起推動電影藝術文化的角色，對外推廣本土電影，為澳門人和喜愛電影的人士注入更多精神養份。澳門人和訪澳的遊客可以善用這電影館，欣賞更多來自世界不同地方的優質電影。</p>
        </div>
        <div className={classnames(styles.feature, styles.planning)}>
          <img src={iconPlanning} />
          <h2>節目策劃</h2>
          <p>因應以上之定位與目標對象，電影館的節目策劃將同時兼顧藝術和文化方面，策劃方向務求在藝術電影和商業電影之間取得平衡，選片方向亦以多元題材和集合不同類型為主，兼顧不同喜好、年齡、性別和教育程度的觀眾，以開拓更廣泛及多元的觀眾層，帶動更多潛在觀眾，擴大現有的觀眾群，並進一步增加電影創作人、影評人和市民之間的互動，提升觀眾的參與度及增加討論電影的氛圍。</p>
        </div>
      </section>

      <section className={styles.business}>
        <div className={styles.content}>
          <h3>开放时间</h3>
        </div>
      </section>

      <section className={styles.map}>
          <GoogleMap />

          <div className={styles.content}>
            <div className={styles.transport}>
              <div className={styles.location}>
                <h4>場地位置</h4>
                澳门恋爱巷11及13号
              </div>
              <div className={styles.tools}>
                <h4>公共交通</h4>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
} 

export default About;