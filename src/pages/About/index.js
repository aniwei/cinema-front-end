import classnames from 'classnames';
import { formatMessage, getLocale } from 'umi-plugin-react/locale';
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
      <div className={styles.feature_header}>
        <img className={styles.feature_icon} src={icon} />
        <h3 className={styles.feature_title}>{title}</h3>
      </div>
      <p className={styles.feature_text}>{text}</p>
    </div>
  )
}

function PlanningFeature (props) {
  const { icon, title, text } = props;

  return (
    <div className={classnames(styles.feature, styles.planning)}>
      <div className={styles.feature_header}>
        <img className={styles.feature_icon} src={icon} />
        <h3 className={styles.feature_title}>{title}</h3>
      </div>
      <p className={styles.feature_text}>{text}</p>
    </div>
  );
}

function Features () {
  const locale = getLocale();

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

      { locale !== 'en_US' && <Lease /> }
    </div>
  )
}

function Information () {
  return (
    <div className={styles.about_info}>
      <Business />
    </div>
  )
}

function Lease () {
  const locale = getLocale();

  return (
    <div className={styles.about_lease}>
      <h3 className={styles.lease_title}>{formatMessage({ id: 'about.lease.title' })}</h3> 
      <p className={styles.lease_desc}>{formatMessage({ id: 'about.lease.desc' })}</p>  
      
      <div className={styles.lease_content}>
        <h4 className={styles.lease_fee_title}>{formatMessage({ id: 'about.lease.fee.title' })}</h4>
        <div className={styles.lease_zoom}>
          <h5>{formatMessage({ id: 'about.lease.zoom.title' })}</h5>
          <div dangerouslySetInnerHTML={{ __html: formatMessage({ id: 'about.lease.zoom.content' }) }}></div>
        </div>
        <div className={styles.lease_advert}>
          <h5>{formatMessage({ id: 'about.lease.advert.title' })}</h5>
          <div dangerouslySetInnerHTML={{ __html: formatMessage({ id: 'about.lease.advert.content' }) }}></div>
        </div>

        <div className={styles.lease_files}>
          
          <a className={styles.lease_pdf} href={`https://cinematheque.oss-cn-hongkong.aliyuncs.com/lease/${locale}/1.pdf`}>
            <i className={styles.lease_icon}></i> {formatMessage({ id: 'about.lease.pdf.1' })}
          </a>
          <a className={styles.lease_pdf} href={`https://cinematheque.oss-cn-hongkong.aliyuncs.com/lease/${locale}/2.pdf`}>
            <i className={styles.lease_icon}></i> {formatMessage({ id: 'about.lease.pdf.2' })}
          </a>
          <a className={styles.lease_pdf} href={`https://cinematheque.oss-cn-hongkong.aliyuncs.com/lease/${locale}/3.pdf`}>
            <i className={styles.lease_icon}></i> {formatMessage({ id: 'about.lease.pdf.3' })}
          </a>
          <a className={styles.lease_pdf} href={`https://cinematheque.oss-cn-hongkong.aliyuncs.com/lease/${locale}/4.pdf`}>
            <i className={styles.lease_icon}></i> {formatMessage({ id: 'about.lease.pdf.4' })}
          </a>
        </div>
      </div>
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