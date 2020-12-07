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
    out_trade_no, 
    trade_no,
    buyer_pay_amount 
  } = query;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isSuccess = trade_status === 'TRADE_SUCCESS';
  
  const classes = classnames({
    [styles.fail]: !isSuccess,
    [styles.success]: isSuccess
  }, styles.payment);

  return (
    <div className={classes}>
      <h1 className={styles.payment_title}>
        { 
          isSuccess ?
            formatMessage({ id: 'payment.title.success' }) :
            formatMessage({ id: 'payment.title.fail' })
        }
      </h1>

      {
        isSuccess && <div className={styles.payment_desc}>
          {formatMessage({ id: 'payment.reminder' })}
        </div>
      }

      <div className={styles.payment_content}>
        <div className={styles.payment_item}>
          <div className={styles.payment_item_label}>
            {formatMessage({ id: 'payment.content.movie'})}
          </div>
          <div className={styles.payment_item_value}>
            {body}
          </div>
        </div>
        {
          trade_no && <div className={styles.payment_item}>
            <div className={styles.payment_item_label}>
              {formatMessage({ id: 'payment.content.tradeNumber'})}
            </div>
            <div className={styles.payment_item_value}>
              {trade_no}
            </div>
          </div>
        }
        

        <div className={styles.payment_item}>
          <div className={styles.payment_item_label}>
            {formatMessage({ id: 'payment.content.outTradeNumber'})}
          </div>
          <div className={styles.payment_item_value}>{out_trade_no}</div>
        </div>

        <div className={styles.payment_amount}>
          {formatMessage({ id: 'payment.content.amount' })} ${buyer_pay_amount}
        </div>
      </div>
      
    </div>
  );
}