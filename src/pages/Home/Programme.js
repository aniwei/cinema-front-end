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

function MoviesMeta ({ releasedAt, groups, objectId }) {
  const locale = getLocale();
  const elements = groups.map((movie, index) => {
    if (index < groups.length -1) {
        return <>
          <h2  className={styles.meta_title} key={movie.objectId}>{movie.title[locale]}</h2>/
        </>
    } else {
        return <h2 className={styles.meta_title} key={movie.objectId}>{movie.title[locale]}</h2>
    }
  });

  return (
    <div className={styles.film_meta}>
      <div className={styles.meta_data}>
        {elements}
      </div>
      <Link to={`/programme/${releasedAt}?objectId=${objectId}&locale=${locale}`} className={styles.button}>{formatMessage({ id: 'home.programme.view' })}</Link>
    </div>
  )
}

function MovieMeta ({ releasedAt, rating, director, title, color, language, subtitles , year, length, format, region, objectId }) {
  const locale = getLocale();

  return (
    <div className={styles.film_meta}>
      <h2 className={styles.meta_title}>{title[locale]}</h2>
      <div className={styles.meta_data}>
      <span>{director[locale]}</span> / <span>{region[locale]}</span> / <span>{year}</span> / <span>{length}{formatMessage({ id: 'common.movie.min' })}</span> / <span>{format}</span> / <span>{formatMessage({ id: color ? 'common.movie.color' : 'common.movie.blackwhite' })}</span> / <span>{language[locale]}</span> / <span>{subtitles[locale]}</span> / <span>{formatMessage({ id: `common.rating` })}{rating}</span>
      </div>
      <Link to={`/programme/${releasedAt}?objectId=${objectId}&locale=${locale}`} className={styles.button}>{formatMessage({ id: 'home.programme.view' })}</Link>
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
      {movie && ( movie.compose ? <MoviesMeta {...movie}  /> :  <MovieMeta {...movie} />)}
    </div>
  );
}

function Programme (props) {
  const { location, dispatch } = props;
  const { query } = location;
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(movies[0]);

  const getMovies = async () => {
    const movies = await dispatch({
      type: 'movie/movies',
      payload: { ...query, status: 'REMOVE' }
    });

    setMovies(movies);
  }

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    setMovie(movies[0]);
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
  ...router
}))(Programme);
