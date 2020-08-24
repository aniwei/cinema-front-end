import { connect } from 'dva';
import { useEffect, useState } from 'react';

import DynamicTable from '@atlaskit/dynamic-table';

import Modal from './Modal';
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
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const { dispatch } = props;

    dispatch({ type: 'AdminTicket/movies' });
    
  }, [props]);

  const { movies } = props;

  const onMovieSelect = (movie) => {
    setMovie(movie);
  }

  const onSubmit = async (payload) => {
    const { dispatch } = props;

    dispatch({
      type: 'AdminTicket/trading',
      payload
    });

    setMovie(null);
  }

  const onClose = () => {
    setMovie(null);
  }

  const onRowsRendering = () => {
    return movies.map(movie => {
      return {
        key: movie.objectId,
        onClick: (event) => onMovieSelect(movie),
        cells: [
          {
            key: 'title',
            content: movie.title.zh_MO
          }, {
            key: 'status',
            content: movie.status === '可售票'
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
        defaultSortKey="title"
        defaultSortOrder="ASC"
        onSort={() => console.log('onSort')}
        onSetPage={() => console.log('onSetPage')}
      />

      <Modal {...props} onSubmit={onSubmit} onClose={onClose} movie={movie}  />
    </div>
  );
}

export default connect(({ AdminTicket }) => {
  return {
    ...AdminTicket
  }
})(Movie);