import { useState, useEffect } from 'react';
import { getLocale, setLocale as updateLocale } from 'umi-plugin-react/locale';
import classnames from 'classnames';
import qs from 'querystring';

import styles from './index.less';


const langs = [
  { text: '繁', key: 'zh_MO' },
  { text: 'EN', key: 'en_US' },
  { text: '简', key: 'zh_CN' },
  { text: 'PT', key: 'pt_PT' }
];

export default (function Language ({ className, location, history }) {
  const { query } = location;
  let queryLocale;

  if (
    query.locale === 'zh_MO' ||
    query.locale === 'zh_CN' ||
    query.locale === 'en_US' ||
    query.locale === 'pt_PT'
  ) {
    queryLocale = query.locale;
  }

  const [locale, setLocale] = useState(queryLocale || getLocale());


  const onLangItemClick = (lang) => {
    setLocale(lang.key);
    history.replace(location.pathname + '?' + qs.stringify({ ...location.query, locale: lang.key }))

    updateLocale(lang.key, true);
  }

  useEffect(() => {
    if (queryLocale) {
      setLocale(queryLocale);
      updateLocale(queryLocale, true);
    } else {
      history.replace(location.pathname + '?' + qs.stringify({ ...location.query, locale: getLocale() }))
    }
  }, [])
  
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
})