import { connect } from 'dva';
import { useEffect } from 'react';
import { Link } from 'umi';

import Spinner from '@atlaskit/spinner';
import DynamicTable from '@atlaskit/dynamic-table';

import styles from './index.less';


const head = {
  cells: [
    {
      key: 'title',
      content: '电影名称',
      isSortable: true,
      width: 25
    },
    {
      key: 'status',
      content: '状态',
      isSortable: true,
      width: 25
    },
  ],
};

function Movie (props) {

  useEffect(() => {
    const { dispatch } = props;

    dispatch({ type: 'AdminMovie/movies' });
    
  }, [props]);

  const { movies } = props;

  const onRowsRendering = () => {
    return movies.map(movie => {
      return {
        key: movie.objectId,
        cells: [
          {
            key: 'title',
            content: (
              <Link to={`/admin/movie/${movie.objectId}`}>
                {movie.title.zh_MO}
              </Link>
            )
          }
        ]
      }
    })
  }



  return (
    <div className={styles.movie}>
      
      <DynamicTable 
        caption={`所有电影`}
        rows={onRowsRendering()}
        head={head}
        rowsPerPage={movies.length}
        defaultPage={1}
        loadingSpinnerSize="large"
        isLoading={false}
        isFixedSize
        defaultSortKey="term"
        defaultSortOrder="ASC"
        onSort={() => console.log('onSort')}
        onSetPage={() => console.log('onSetPage')}
      />
    </div>
  );
}

export default connect(({ AdminMovie }) => {
  return {
    ...AdminMovie
  }
})(Movie);