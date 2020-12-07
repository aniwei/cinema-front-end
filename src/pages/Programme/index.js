
import { useEffect, useState } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import { formatMessage, getLocale } from 'umi-plugin-react/locale';
import { connect } from 'dva';

import classnames from 'classnames';


import styles from './index.less';
import 'react-infinite-calendar/styles.css';
import { Link } from 'umi';

const theme = {
  accentColor: '#448AFF',
  floatingNav: {
    background: 'rgba(56, 87, 138, 0.94)',
    chevron: '#FFA726',
    color: '#FFF',
  },
  headerColor: '#f8b5b3',
  selectionColor: '#ef9e9c',
  textColor: {
    active: '#FFF',
    default: '#333',
  },
  todayColor: '#FFA726',
  weekdayColor: '#ef9e9c',
}

function ToolBar () {
  return (
    <div></div>
  );
}

export default connect(({ movie }) => {
  return { ...movie }
})(function Programme (props) {
  const { categories, dispatch } = props;
  const [selectedIds, setSelectedIds] = useState([]);
  const now = new Date();
  const locale = getLocale();
  

  const onSelect = (cate) => {
    if (selectedIds.includes(cate.objectId)) {
      if (selectedIds.length > 1) {
        const index = selectedIds.indexOf(cate.objectId);
  
        selectedIds.splice(index, 1);
        setSelectedIds([...selectedIds]);
      }
    } else {
      selectedIds.push(cate.objectId);
      setSelectedIds([...selectedIds]);
    }
  }

  useEffect(() => {
    const asyncCategories = async () => {
      const categories = await dispatch({
        type: 'movie/categories'
      });

      setSelectedIds(categories.map(cate => cate.objectId))
    }

    asyncCategories();
  }, [categories === null]);

  return (
    <div>
      {/* <div className={styles.programme_calendar_section}>
        <div className={styles.programme_calendar}>
          <InfiniteCalendar 
            locale={locale}
            min={now}
            minDate={now}
            theme={theme}
            onSelect={onSelect}
          />
        </div>
        <div></div>
      </div> */}

      <div className={styles.categories}>
        <div className={styles.categories_header}>
          {
            categories && categories.map(cate => {
              return <div className={classnames(styles.category, {
                [styles.category_selected]: selectedIds.includes(cate.objectId)
              })}
              onClick={() => onSelect(cate)}
              >
                {cate.name[locale]}
              </div>
            })
          }
        </div>
        <div className={styles.categories_list}>
          {
            categories && categories.filter(cate => selectedIds.includes(cate.objectId)).map(cate => {
              return (
                <div className={styles.category_item} key={cate.objectId}>
                  <h3 className={styles.category_name}>{cate.name[locale]}</h3>
                  <div className={classnames(styles.category_movies, {
                    [styles.category_movies_single]: cate.movies.length === 1
                  })}>
                    {
                      cate.movies.map(movie => {
                        const title = movie.compose ? movie.groups.map(movie => {
                          return movie.title[locale]
                        }).join(' / ') : movie.title[locale];


                        return (
                          <div className={styles.category_movie} key={movie.objectId}>
                            <div className={styles.movie_poster}>
                              <img className={styles.movie_poster_img} src={movie.poster + '?' + 'x-oss-process=image/crop'} />
                              <h4 className={styles.movie_title}>{title}</h4>
                              <Link className={styles.movie_button} to={`/programme/category?categoryId=${cate.objectId}&objectId=${movie.objectId}&filmName=${movie.title.en_US.split(/\s+/g).join('-')}`}>
                                {formatMessage({ id: 'programme.view' })}
                              </Link>
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              );
            })
          }
          
        </div>
      </div>
    </div>
  );
})