import { useEffect, useState, useCallback, useMemo } from 'react';
import { formatMessage, setLocale, getLocale, FormattedMessage } from 'umi-plugin-locale';
import { connect } from 'dva';
import moment from 'moment';
import Swiper from 'react-id-swiper';
import classnames from 'classnames';

import Purchase from '../../components/Purchase';

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

function MovieDetail ({ plot }) {
  const locale = getLocale();

  return (
    <div className={styles.film_detail}>
      <div className={styles.detail_plot}>
        <h4 className={styles.detail_title}>故事大綱</h4>
        <p className={styles.detail_desc}>{plot[locale]}</p>
        
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

function TimeItem (props) {
  const { beginTime, endTime, price, tickets } = props;

  return (
    <div className={styles.time_item}>
      <div className={styles.time}>
        <span className={styles.begin_time}>{beginTime}</span>
        <span className={styles.end_time}>{endTime}</span>
      </div>

      <div className={styles.price}>
        <span>$</span>{price}
      </div>
      <div className={styles.actions}>
        <button className={styles.button}>购买</button>
      </div>
    </div>
  )
}

function DatesSelect (props) {
  const { dates, movie } = props;
  const first = dates.entries().next();
  const [date, setDate] = useState(first.value[1]);
  const [visible, setVisible] = useState(false);

  const datesSelections = [];

  dates.forEach((show, key) => {
    const date = new Date(key);
    const classes = classnames({
      active: date.key === key
    }, styles.show_item)

    datesSelections.push(
      <div className={classes} key={show.objectId}>
        {moment(date).format(`MM月DD日`)}
      </div>
    )
  });  

  return (
    <div className={styles.shows}>
      <div className={styles.shows_header}>
        {datesSelections}
      </div>

      <div className={styles.shows_content}>

        <TimeItem 
          beginTime="14:40"
          endTime="16:40"
          price="60.00"
          tickets={60}
        />

        <TimeItem 
          beginTime="14:40"
          endTime="16:40"
          price="60.00"
          tickets={60}
        />
        
      </div>

      {
        movie && <Purchase 
          visible={visible} 
          movie={movie}
        />
      }
    </div>
  );
}

function NoDates () {
  return (
    <div className={styles.no_dates}>暫無排片</div>
  )
}

function Shows (props) {
  const { movie } = props;

  useEffect(() => {
    if (!movie.shows) {
      const { dispatch } = props;
      const getMovieShows = async () => {
        await dispatch({
          type: `movie/shows`,
          payload: {
            movie
          }
        });
      }

      getMovieShows();
    }
  }, [movie, props]);

  const dates = useMemo(() => {
    const movieShows = movie.shows || [];
    const dates = new Map();

    movieShows.forEach(show => {
      let date = dates.get(show.date);

      if (!date) {
        date = [];
        dates.set(show.date, date);
      }

      date.push(show);
    });

    return dates;
  }, [movie.shows]);

  return (
    dates.size > 0 ?
      <DatesSelect dates={dates} /> :
      <NoDates />
  )
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
      {movie && <Shows {...props} movie={movie} />}
      {movie && <MovieDetail {...movie} />}
    </div>
  );
}

export default connect(({ movie }) => ({
  movies: movie.movies
}))(Programme);