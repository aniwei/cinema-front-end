import classnames from 'classnames';
import styles from './index.less';
import Socials from './Socials';
import { formatMessage } from 'umi-plugin-react/locale';

function GoogleMap () {
  return (
    <iframe className={styles.footer_map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.125936946831!2d113.53836301553498!3d22.197319785377143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34017ae4513b42cf%3A0xfb3b8a01e718c228!2z5oiA5oSb44O76Zu75b2x6aSo!5e0!3m2!1szh-TW!2s!4v1492159619498"></iframe>
  )
}

function About () {
  return (
    <div className={styles.footer_about}>
      <h3 className={styles.title}>{formatMessage({ id: 'footer.about.title' })}</h3>
      <p className={styles.desc}>{formatMessage({ id: 'footer.about.desc' })}</p>
    </div>
  )
}

function Contact () {
  return (
    <div className={styles.footer_contact}>
      <div className={styles.map_item}>
        <GoogleMap />
        <div className={styles.location}>
          <h4 className={styles.location_title}>{formatMessage({ id: 'footer.about.address.title' })}</h4>
          <span className={styles.contact_text}>{formatMessage({ id: 'footer.about.address' })}</span>
        </div>
      </div>

      <div className={styles.contact_item}>
        <i className={styles.contact_icon}><svg t="1597477735640" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2301" width="40" height="40"><path d="M1024 0l-1024 512 384 128 128 384 512-1024z" p-id="2302"></path></svg></i>
        <span className={styles.contact_info}>(853)2852 2585</span>
        <span  className={styles.contact_info}>info@cinematheque-passion.mo</span>
      </div>
    </div>
  )
}

export default function FooterLayout () {
  return (
    <footer className={styles.footer}>
      <About />

      <Contact />

      <Socials />

      <div className={styles.footer_rights}>
        戀愛・電影館 Cinematheque・Passion © 2020
      </div>
    </footer>
  )
}