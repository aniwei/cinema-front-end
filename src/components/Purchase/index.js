import { useMemo, useEffect, useState } from 'react';
import { getLocale } from 'umi-plugin-react/locale';
import { createPortal } from 'react-dom';
import classnames from 'classnames';

import styles from './index.less';


function Movie (props) {
  const { poster, title } = props;
  const locale = getLocale();

  return (
    <div className={styles.purchase_movie}>
      <div className={styles.movie_poster}>
        <img src={poster} className={styles.poster_image} />
      </div>
      <div className={styles.movie_data}>
        <h4 className={styles.movie_tilte}>{title[locale]}</h4>
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
        <Movie {...movie} />

        <h4 className={styles.title}>請輸入電郵</h4>
        <div className={styles.form}>
          <div className={styles.email_item}>
            <input 
              className={styles.email_input} 
              onChange={onChange} 
              value={value}
            />
            <button className={styles.code_sender}>

            </button>
          </div>
          <div className={styles.code_item}>

          </div>

          <div className={styles.button_item}>
            <button></button>
            <button>确定</button>
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
      <Purchase />,
      container
    )
  )
}