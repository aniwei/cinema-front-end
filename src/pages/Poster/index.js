import { useEffect } from 'react';
import { connect } from 'dva';
import { getLocale } from 'umi-plugin-react/locale';
import styles from './index.less';

export default connect(({ configs }) => {
  return { ...configs }
})(function (props) {
  const { config, dispatch } = props;
  const locale = getLocale();

  useEffect(() => {
    const asyncConfig = async () => {
      await dispatch({
        type: 'configs/configs',
        payload: {
          type: 'home'
        }
      });
    }

    if (!config.home) {
      asyncConfig();
    }
  }, [config.home]);

  return (
    <div className={styles.poster}>
      {
        config.home && <>
          <div className={styles.poster_background}>
            <div className={styles.background}></div>
            <img className={styles.poster_image} src={config.home.data.announcement.image} />
          </div>
          <div className={styles.poster_content} style={{ background: `linear-gradient(0, rgba(255, 255, 255, 0.12), ${config.home.data.color})` }}>
            <h1 className={styles.poster_title}>{config.home.data.announcement.title[locale]}</h1>
            <div className={styles.poster_content_detail} dangerouslySetInnerHTML={{ __html: config.home.data.announcement.content[locale] }}></div>
          </div>
          
        </>
      }
    </div>
  );
})