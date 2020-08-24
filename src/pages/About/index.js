import classnames from 'classnames';
import { formatMessage } from 'umi-plugin-react/locale';
import styles from './index.less';

import iconPlanning from '../../assets/svg/icon_planning.svg';
import iconMission from '../../assets/svg/icon_mission.svg';

function AboutHeader (props) {
  return (
    <div className={styles.about_header}>
      <h1 className={styles.header_title}>{formatMessage({ id: 'about.title' })}</h1>
      <p className={styles.header_desc}>{formatMessage({ id: 'about.desc' })}</p>
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
          title={formatMessage({ id: 'about.feature.mission.title' })}
          text={formatMessage({ id: 'about.feature.mission' })}
        />
        <PlanningFeature 
          icon={iconPlanning}
          title={formatMessage({ id: 'about.feature.planing.title' })}
          text={formatMessage({ id: 'about.feature.planing' })}
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
      <h3 className={styles.business_title}>{formatMessage({ id: 'about.openhour.title' })}</h3>  
      <div className={styles.business_content}>
        <div className={styles.sell}>
          <h5>{formatMessage({ id: 'about.openhour.ticket.title' })}</h5>
          <p>{formatMessage({ id: 'about.openhour.ticket.desc' })}</p>
        </div>
        <div className={styles.file}>
        <h5>{formatMessage({ id: 'about.openhour.info.title' })}</h5>
          <p>{formatMessage({ id: 'about.openhour.info.desc' })}</p>
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