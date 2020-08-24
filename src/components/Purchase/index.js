import { useMemo, useEffect, useState } from 'react';
import { getLocale } from 'umi-plugin-react/locale';
import { createPortal } from 'react-dom';
import classnames from 'classnames';

import styles from './index.less';

import mpayLogo from '../../assets/common/mpay.png';


function Movie (props) {
  const { poster, title, region, year } = props;
  const locale = getLocale();

  return (
    <div className={styles.purchase_movie}>
      <div className={styles.movie_poster}>
        <img src={poster} className={styles.poster_image} />
      </div>
      <div className={styles.movie_data}>
        <h4 className={styles.movie_tilte}>{title[locale]}</h4>
        <p className={styles.movie_desc}>{region[locale]} / {year}</p>
      </div>
    </div>
  )
}


function Purchase (props) {
  const { movie, visible } = props;
  const [value, setValue] = useState(null);

  const onChange = (value) => {

  }

  const classes = classnames({
    visible,
  }, styles.purchase);

  return (
    <div className={classes}>
      <div className={styles.purchase_mask} />
      <div className={styles.purchase_content}>
        <div className={styles.purchase_context}>
          <Movie {...movie} />

          <div className={styles.purchase_payment}>
            <div className={styles.payment_mapy}>
              <img src={mpayLogo} className={styles.payment_image} />
            </div>

            <div className={styles.form}>
              <div className={styles.email_item}>
                <input 
                  className={styles.email_input} 
                  onChange={onChange}
                  placeholder={`请输入电邮`} 
                  value={value}
                />
                <button className={styles.code_sender}>

                </button>
              </div>
              <div className={styles.code_item}>
                <input 
                  className={styles.code_input} 
                  onChange={onChange} 
                  placeholder={`请输入购票数量`} 
                  value={value}
                />
              </div>

              <div className={styles.button_item}>
                <button className={styles.button}>确定</button>
              </div>
            </div>
          
          </div>
        </div>

      </div>
    </div>
  );
}

export default function (props) {
  const container = useMemo(() => {
    return document.createElement('span');
  }, []);

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    }
  }, [container]);

  return (
    createPortal(
      <Purchase {...props} />,
      container
    )
  )
}