import { useEffect, useState, useCallback, useMemo } from 'react';
import { formatMessage, setLocale, getLocale, FormattedMessage } from 'umi-plugin-locale';
import { connect } from 'dva';
import moment from 'moment';
import Swiper from 'react-id-swiper';
import classnames from 'classnames';


import styles from './index.less';  

function Movie (props) {
  const { className, poster } = props;

  return (
    <div className={classnames(styles.film, className)}>
      <div className={styles.poster}>
        <img src={poster} />
      </div>
    </div>
  )
}

function MovieMeta ({ title, director, year, length, rating, region }) {
  const locale = getLocale();

  return (
    <div className={styles.film_meta}>
      <h2 className={styles.meta_title}>{title[locale]}</h2>
      <div className={styles.meta_data}>
        {year} / {region[locale]}
      </div>
    </div>
  )
}

function Movies (props) {
  const { onChange, movies, movie } = props;
  const swiperOptions = useMemo(() => ({
    slidesPerView: 3,
    centeredSlides: true,
    on: {
      slideChange: onChange
    },
    pagination: {
      el: `.${styles.pagination}`,
    }
  }), [onChange]);

  return (
    <div className={styles.hot}>
      <h2 className={styles.programme_tilte}>即日及预售</h2>
      <div className={styles.background} style={{ backgroundImage: `url(${movie.poster})` }} />
      <div className={styles.hot_content}>
        
        <Swiper {...swiperOptions}>
          {
            movies.map(movie => {
              return (
                <div className={styles.swiper_film} key={movie.objectId}>
                  <div className={styles.inner}>
                    <Movie 
                      className={styles.foreground}
                      poster={movie.poster}
                    />
                  </div>
                </div>
              );
            })
          }
        </Swiper>
      </div>
      {movie && <MovieMeta {...movie} />}
    </div>
  );
}

function Programme (props) {
  const { movies } = props;
  const [movie, setMovie] = useState(movies[0]);

  useEffect(() => {
    const { dispatch } = props;
    const getMovies = async () => {
      await dispatch({
        type: 'movie/movies',
        payload: {
  
        }
      })
    }

    if (movies.length === 0) {
      getMovies();
    }
  }, [movies.length, props]);

  useEffect(() => {
    if (movies.length > 0) {
      setMovie(movies[0]);
    }
  }, [movies]);

  const onChange = useCallback((swiper) => {
    setMovie(movies[swiper.activeIndex]);
  }, [movies]);

  return (
    <div className={styles.programme}>
      {movies.length > 0 && movie && <Movies movie={movie} movies={movies} onChange={onChange} />}
    </div>
  );
}

export default connect(({ movie }) => ({
  movies: movie.movies
}))(Programme);