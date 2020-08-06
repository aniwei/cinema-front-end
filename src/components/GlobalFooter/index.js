import { Link } from 'umi';
import styles from './index.less';

import logoIcm from '../../assets/customer/logo-icm.png';
import logoCci from '../../assets/customer/logo-cci.png';
import logoCcm from '../../assets/customer/logo-ccm.png';

export default function () {
  return (
    <footer className={styles.footer}>
      <section className={`${styles['section']}`}>
        <div className={styles['section-inner']}>
          <div className={styles['customer']}>
            <ul className={styles['customer-list']}>
              <li className={styles['customer-item']}>
                <a className={styles['customer-link']} href="http://www.icm.gov.mo/">
                  <img src={logoIcm} alt="" />
                </a>
              </li>

              <li className={styles['customer-item']}>
                <a className={styles['customer-link']} href="http://www.macaucci.com/">
                  <img src={logoCci} alt="" />
                </a>
              </li>

              <li className={styles['customer-item']}>
                <a className={styles['customer-link']} href="https://www.ccm.gov.mo/">
                  <img src={logoCcm} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className={styles.right}>
        <div className={styles['right-inner']}>
          戀愛・電影館 Cinematheque・Passion © 2017
        </div>
      </div>
    </footer>
  );
}