import { useState, useEffect } from 'react';
import { getLocale, setLocale as updateLocale } from 'umi-plugin-react/locale';
import classnames from 'classnames';

import styles from './index.less';


const langs = [
  { text: '繁', key: 'zh_MO' },
  { text: 'EN', key: 'en_US' },
  { text: '简', key: 'zh_CN' },
  { text: 'PT', key: 'pt_PT' }
];

const INQUIRED_LOCALE_SETTING_KEY = 'locale';

export default function Language ({ className }) {
  const [locale, setLocale] = useState(getLocale());


  const onLangItemClick = (lang) => {
    setLocale(lang.key);
    updateLocale(lang.key, true);
  }
  
  return (
    <div className={classnames(styles.langs, className )}>
      {
        langs.map(l => {
          const classes = classnames({
            [styles.lang_item_active]: l.key === locale
          }, styles.lang_item)

          return <div className={classes} onClick={(e) => onLangItemClick(l, e)}>
            {l.text}
          </div>
        })
      }
    </div>
  );
}