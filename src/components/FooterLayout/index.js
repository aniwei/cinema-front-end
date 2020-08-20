import classnames from 'classnames';
import styles from './index.less';
import Socials from './Socials';

function GoogleMap () {
  return (
    <iframe className={styles.footer_map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.125936946831!2d113.53836301553498!3d22.197319785377143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34017ae4513b42cf%3A0xfb3b8a01e718c228!2z5oiA5oSb44O76Zu75b2x6aSo!5e0!3m2!1szh-TW!2s!4v1492159619498"></iframe>
  )
}

function About () {
  return (
    <div className={styles.footer_about}>
      <h3 className={styles.title}>关于本馆</h3>
      <p className={styles.desc}>戀愛・電影館位於澳門戀愛巷十三號，毗鄰澳門的著名世遺景點「大三巴牌坊」（即「聖保祿大教堂遺址」）。電影館樓高三層，是一個集合電影欣賞、本土影像保存、以及電影書籍閱讀等功能的空間。</p>
    </div>
  )
}

function Contact () {
  return (
    <div className={styles.footer_contact}>
      <div className={styles.map_item}>
        <GoogleMap />
        <div className={styles.location}>
          <h4 className={styles.location_title}>場地位置</h4>
          <span className={styles.contact_text}>澳門戀愛巷11-13號</span>
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