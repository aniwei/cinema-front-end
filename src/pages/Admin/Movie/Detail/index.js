import { useEffect } from 'react';
import { connect } from 'dva';

import styles from './index.less';

function MovieDetail (props) {
  const { movies, dispatch } = props;

  useEffect(() => {
    dispatch({ type: 'AdminMovie/movies' });
  }, [dispatch, movies]);
  
  return (
    <div className={styles.movie}>
      
    </div>
  );
}

export default connect(({ AdminMovie }) => {
  return {
    ...AdminMovie
  }
})(MovieDetail);