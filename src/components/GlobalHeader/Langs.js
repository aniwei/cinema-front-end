import { useState } from 'react';
import classnames from 'classnames';
import { getLocale, setLocale } from 'umi-plugin-react/locale';

import styles from './index.less';

export default function Langs () {
  const [locale, updateLocale] = useState(getLocale());

  const locales = [
    { key: 'zh-MO', text: '繁' },
    { key: 'zh-CN', text: '简' },
    { key: 'en-US', text: 'EN' },
    { key: 'pt-PT', text: 'PT' }
  ];

  const onClick = (locale, event) => {
    updateLocale(locale);
    setLocale(locale.key, true);
  }

  return (
    <div className={styles.langs}>
      {
        locales.map(loc => {
          const classes = classnames({
            [styles.active]: loc.key === locale
          });

          return (
            <i 
              key={loc.key} 
              className={classes}
              onClick={(e) => onClick(loc, e)}
            >{loc.text}</i>
          );
        })
      }
    </div>
  );
}