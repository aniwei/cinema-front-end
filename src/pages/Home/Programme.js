import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { formatMessage, getLocale } from 'umi-plugin-locale';
import { Link } from 'umi';
import { connect } from 'dva';
import moment from 'moment';
import Swiper from 'react-id-swiper';
import classnames from 'classnames';


import styles from './index.less';  

function Movie (props) {
  const { className, poster, objectId } = props;

  return (
    <div className={classnames(styles.film, className)}>
      <div className={styles.poster}>
        <img src={poster} />
      </div>
    </div>
  )
}

function MovieMeta ({ rating, director, title, color, language, subtitles , year, length, format, region, objectId }) {
  const locale = getLocale();

  return (
    <div className={styles.film_meta}>
      <h2 className={styles.meta_title}>{title[locale]}</h2>
      <div className={styles.meta_data}>
      <span>{director[locale]}</span> / <span>{region[locale]}</span> / <span>{year}</span> / <span>{length}min</span> / <span>{format}</span> / <span>{formatMessage({ id: color ? 'common.movie.color' : 'common.movie.blackwhite' })}</span> / <span>{language[locale]}</span> / <span>{subtitles[locale]}</span> / <span>{formatMessage({ id: `common.rating` })}{rating}</span>
      </div>
      <Link to={`/programme?objectId=${objectId}`} className={styles.button}>{formatMessage({ id: 'home.programme.view' })}</Link>
    </div>
  )
}

function Movies (props) {
  const { onChange, movies, movie } = props;
  const swiperOptions = useMemo(() => ({
    initialSlide: movie.index,
    slidesPerView: 3,
    centeredSlides: true,
    on: {
      slideChange: onChange
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  }), [movie.index, onChange]);

  const ref = useRef(null);

  const onNavigationClick = (type) => {
    if (ref.current !== null && ref.current.swiper !== null) {
      const swiper = ref.current.swiper;

      if (type === 'prev') {
        swiper.slidePrev();
      } else {
        swiper.slideNext();
      }
    }
  }

  return (
    <div className={styles.hot}>
      {/* <h2 className={styles.programme_tilte}>{formatMessage({ id: 'home.programme.title' })}</h2> */}
      <div className={styles.background} style={{ backgroundImage: `url(${movie.poster})` }} />
      <div className={styles.hot_content}>
        
        <Swiper {...swiperOptions} ref={ref}>
          {
            movies.map(movie => {
              return (
                <div className={styles.swiper_film} key={movie.objectId}>
                  <div className={styles.inner}>
                    <Movie 
                      className={styles.foreground}
                      poster={movie.poster}
                      objectId={movie.objectId}
                    />
                  </div>
                </div>
              );
            })
          }
        </Swiper>

        <div className="swiper-button-prev" onClick={(e) => onNavigationClick('prev', e)}></div>
        <div className="swiper-button-next" onClick={(e) => onNavigationClick('next', e)}></div>
      </div>
      {movie && <MovieMeta {...movie} />}
    </div>
  );
}

function Programme (props) {
  const { movies, location } = props;
  const { query } = location;
  const [movie, setMovie] = useState(movies[0]);

  useEffect(() => {
    const { dispatch } = props;
    const getMovies = async () => {
      await dispatch({
        type: 'movie/movies',
        payload: query
      })
    }

    if (movies.length === 0) {
      getMovies();
    }
  }, [movies.length]);

  useEffect(() => {
    if (movies.length > 0) {
      setMovie(movies[0]);
    }
  }, [movies]);

  const onChange = useCallback(function () {
    setMovie(movies[this.activeIndex]);
  }, [movies]);

  return (
    <div className={styles.programme}>
      {movies.length > 0 && movie && <Movies movie={movie} movies={movies} onChange={onChange} />}
    </div>
  );
}

export default connect(({ movie, router }) => ({
  movies: movie.movies,
  ...router
}))(Programme);