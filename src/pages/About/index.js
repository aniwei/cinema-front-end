import classnames from 'classnames';
import styles from './index.less';

import iconPlanning from '../../assets/svg/icon_planning.svg';
import iconMission from '../../assets/svg/icon_mission.svg';

function AboutHeader (props) {
  return (
    <div className={styles.about_header}>
      <h1 className={styles.header_title}>澳門特別行政區政府文化局轄下的戀愛・電影館於2017年3月31日正式對外開放</h1>
      <p className={styles.header_desc}>戀愛・電影館位於澳門戀愛巷十三號，毗鄰澳門的著名世遺景點「大三巴牌坊」（即「聖保祿大教堂遺址」）。電影館樓高三層，是一個集合電影欣賞、本土影像保存、以及電影書籍閱讀等功能的空間。館內地面層設售票處、放映廳、控制室﹔一層為電影資料室，收藏澳門電影及錄像、電影書籍、期刊及雜誌等，供市民在館內查閱。</p>
    </div>
  );
}

function Feature (props) {
  const { icon, title, text } = props;

  return (
    <div className={styles.feature}>
      <img className={styles.feature_icon} src={icon} />
      <h3 className={styles.feature_title}>{title}</h3>
      <p className={styles.feature_text}>{text}</p>
    </div>
  )
}

function PlanningFeature (props) {
  const { icon, title, text } = props;

  return (
    <div className={classnames(styles.feature, styles.planning)}>
      <p className={styles.feature_text}>{text}</p>
      <h3 className={styles.feature_title}>{title}</h3>
      <img className={styles.feature_icon} src={icon} />
    </div>
  );
}

function Features () {
  return (
    <div className={styles.about_features}>
      <div className={styles.background}></div>
      
      <div className={styles.features}>
        <Feature 
          icon={iconMission}
          title="定位與使命"
          text="作為觀眾及電影創作人互動交流的平台，電影館肩負起推動電影藝術文化的角色，對外推廣本土電影，為澳門人和喜愛電影的人士注入更多精神養份。澳門人和訪澳的遊客可以善用這電影館，欣賞更多來自世界不同地方的優質電影。"
        />
        <PlanningFeature 
          icon={iconPlanning}
          title="節目策劃"
          text="因應以上之定位與目標對象，電影館的節目策劃將同時兼顧藝術和文化方面，策劃方向務求在藝術電影和商業電影之間取得平衡，選片方向亦以多元題材和集合不同類型為主，兼顧不同喜好、年齡、性別和教育程度的觀眾，以開拓更廣泛及多元的觀眾層，帶動更多潛在觀眾，擴大現有的觀眾群，並進一步增加電影創作人、影評人和市民之間的互動，提升觀眾的參與度及增加討論電影的氛圍。"
        />
      </div>

      <Information />
    </div>
  )
}

function Information () {
  return (
    <div className={styles.about_info}>
      <Business />
      {/* <Transport /> */}
    </div>
  )
}

function Transport () {
  return (
    <div className={styles.about_transport}>
      <h3 className={styles.transport_title}>公共交通</h3> 
    </div>
  );
}

function Business () {
  return (
    <div className={styles.about_business}>
      <h3 className={styles.business_title}>开放时间</h3>  
      <div className={styles.business_content}>
        <div className={styles.sell}>
          <h5>售票处</h5>
          <p>星期二至日: 上午10時至晚上11時30分（逢星期一休館）（公眾假期皆開放）</p>
        </div>
        <div className={styles.file}>
          <h5>電影資料室</h5>
          <p>星期二至日: 上午10時至晚上8時（逢星期一休館）（公眾假期皆開放）</p>
        </div>
      </div>
    </div>
  );
}

export default function () {
  return (
    <div className={styles.about}>
      <AboutHeader />
      <Features />
    </div>
  );
}