import { useState, useCallback, useMemo, useEffect } from 'react';
import { formatMessage, getLocale } from 'umi-plugin-locale';
import { Link } from 'umi';
import Swiper from 'react-id-swiper';
import classnames from 'classnames';
import styles from './index.less';  


export default function (props) {
  const locale = getLocale();
  const { location } = props;
  const query = location.query;

  const { 
    trade_status, 
    body, 
    subject, 
    out_trade_no, 
    buyer_email, 
    buyer_pay_amount 
  } = query;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.payment}>
      <h1 className={styles.payment_title}>
        { 
          trade_status === 'TRADE_SUCCESS' ?
            formatMessage({ id: 'payment.title.success' }) :
            formatMessage({ id: 'payment.title.fail' })
        }
      </h1>

      
    </div>
  );
}