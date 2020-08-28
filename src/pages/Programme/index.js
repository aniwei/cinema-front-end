import { useEffect, useState, useCallback, useRef } from 'react';
import { formatMessage, getLocale } from 'umi-plugin-locale';
import { connect } from 'dva';
import moment from 'moment';
import Swiper from 'react-id-swiper';
import classnames from 'classnames';
import ImageGallery from 'react-image-gallery';

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

function MovieMeta ({ rating, director, title, color, subtitles, format, language, year, length, region }) {
  const locale = getLocale();

  return (
    <div className={styles.film_meta}>
      <h2 className={styles.meta_title}>{title[locale]}</h2>
      <div className={styles.meta_data}>
        <span>{director[locale]}</span> / <span>{region[locale]}</span> / <span>{year}</span> / <span>{length}min</span> / <span>{format}</span> / <span>{formatMessage({ id: color ? 'common.movie.color' : 'common.movie.blackwhite' })}</span> / <span>{language[locale]}</span> / <span>{subtitles[locale]}</span> / <span>{formatMessage({ id: `common.rating` })}{rating}</span>
      </div>
    </div>
  )
}

function MovieDetail ({ plot, trailer, stills, notes }) {
  const locale = getLocale();

  return (
    <div className={styles.film_detail}>
      <div className={styles.detail_plot}>
        <h4 className={styles.detail_title}>{formatMessage({ id: 'programme.synopsis.title' })}</h4>
        <p className={styles.detail_desc}>{plot[locale]}</p>
        
      </div>

      {
        notes && <div className={styles.detail_notes}>
          <h4 className={styles.detail_title}>{formatMessage({ id: 'programme.notes.title' })}</h4>
          <div className={styles.detail_desc} dangerouslySetInnerHTML={{ __html: notes[locale] }}></div>
        </div>
      }

      {
        trailer && <div className={styles.detail_trailer}>
          <iframe className={styles.iframe} src={trailer} />
        </div>
      }


      <div className={styles.detail_stills}>
        <div className={styles.detail_stills_content}>
          <ImageGallery 
            showNav={false}
            items={stills.map(still => {
              return {
                original: still,
                thumbnail: still + '?x-oss-process=image/resize,h_100'
              }
            })}
          />
        </div>
      </div>
    </div>
  )
}

function Movies (props) {
  const { onChange, movies, movie } = props;

  const swiperOptions = {
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
  }

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideTo(movie.index);
    }
  }, [movie, movie.index]);

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

function TimeItem (props) {
  const { beginTime, endTime, price, tickets, onClick, movie } = props;

  return (
    <div className={styles.time_item}>
      <div className={styles.time}>
        <span className={styles.begin_time}>{beginTime}</span>
        <span className={styles.end_time}>{endTime}</span>
      </div>

      <div className={styles.tickets}>
        {tickets === 0 ? formatMessage({ id: 'programme.shows.sellout' }) : null}
      </div>

      {
        movie.status === 'ON_SALES' && tickets > 0 ?
          <>
            <div className={styles.price}>
              <span>$</span>{price}
            </div>
            <div className={styles.actions}>
              <button className={styles.button} onClick={onClick}>{formatMessage({ id: 'programme.shows.buy.button'})}</button>
            </div> 
          </> : null
      }
    </div>
  )
}

function DatesSelect (props) {
  const { dates, movie } = props;
  const [selectedShow, setSelectedShow] = useState(null);

  const onButtonClick = (show, event) => {
    setSelectedShow(show);
  }

  const onShowItemClick = (value) => {
    setDate(value);
  }

  const onClose = () => {
    setSelectedShow(null);
  }

  let newDates = [];

  dates.forEach((show, key) => {
    newDates.push({
      key,
      show
    });
  });  

  newDates = newDates.sort((a, b) => {
    return a.key > b.key ? 1 : -1
  });

  

  useEffect(() => {
    const first = newDates[0];
    setDate([first.key, first.show]);
  }, [dates, newDates]);

  const first = newDates[0];
  const [date, setDate] = useState([first.key, first.show]);

  const datesSelections = newDates.map(({ key, show }) => {
    const time = new Date(key);

    const classes = classnames({
      [styles.show_item_active]: date[0] === key
    }, styles.show_item)

    return (
      <div className={classes} key={show.objectId} onClick={() => onShowItemClick([key, show])}>
        {moment(time).format(`MM-DD`)}
      </div>
    )
  })

  return (
    <div className={styles.shows}>
      <div className={styles.shows_header}>
        {datesSelections}
      </div>

      <div className={styles.shows_content}>

        {
          date[1].sort((a, b) => {
            return a.timestamp > b.timestamp ? 1 : -1;
          }).map(date => {
            return (
              <TimeItem 
                movie={movie}
                objectId={date.objectId}
                key={date.timestamp}
                beginTime={moment(new Date(date.timestamp * 1000)).format(`HH:mm`)}
                endTime={moment(new Date((date.timestamp + 60 * movie.length) * 1000)).format(`HH:mm`)}
                price={date.price}
                tickets={date.tickets}
                onClick={(e) => onButtonClick(date, e)}
              />
            );
          })
        }
        
      </div>

      {
        selectedShow && <Purchase 
          movie={movie} 
          show={selectedShow} 
          visible={!!selectedShow} 
          onClose={onClose}
        />
      }
    </div>
  );
}

function NoDates () {
  return (
    <div className={styles.no_dates}>{formatMessage({ id: 'programme.shows.empty' })}</div>
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
  }, [movie, movie.shows, props]);

  const movieShows = movie.shows || [];
  const dates = new Map();

  movieShows.forEach(show => {
    let date = dates.get(show.date);

    if (!date) {
      date = [];
      dates.set(show.date, date);
    }

    if (show.status !== 'REMOVE') {
      date.push(show);
    }
  });

  return (
    dates.size > 0 ?
      <DatesSelect movie={movie} dates={dates} /> :
      null
  )
}

function Programme (props) {
  const { movies } = props;
  
  const [movie, setMovie] = useState(movies[0]);
  
  useEffect(() => {
    const { dispatch, location } = props;
    const query = location.query;
    let selected = movies[0];

    const getMovies = async () => {
      await dispatch({
        type: 'movie/movies',
        payload: query
      })
    }

    if (query.objectId) {
      movies.some(movie => {
        if (movie.objectId === query.objectId) {
          selected = movie;
          return true;
        }
      })
    }

    setMovie(selected);

    if (movies.length === 0) {
      getMovies();
    }
  }, [movies, movies.length, props]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onChange = useCallback(function () {
    setMovie(movies[this.activeIndex]);
  }, [movies]);

  return (
    <div className={styles.programme}>
      {movies.length > 0 && movie && <Movies movie={movie} movies={movies} onChange={onChange} />}
      {movie && <Shows {...props} movie={movie} />}
      {movie && <MovieDetail {...movie} />}
    </div>
  );
}

export default connect(({ movie, router }) => ({
  movies: movie.movies,
}))(Programme);