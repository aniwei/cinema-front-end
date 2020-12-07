import { useEffect, useState, useCallback, useRef } from 'react';
import { formatMessage, getLocale } from 'umi-plugin-locale';
import { connect } from 'dva';
import moment from 'moment';
import Swiper from 'react-id-swiper';
import classnames from 'classnames';
import ImageGallery from 'react-image-gallery';

import Purchase from '../../../components/Purchase';

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

function MovieMeta ({ rating, director, title, color, subtitles, format, language, year, length, region, disabledTitle }) {
  const locale = getLocale();

  return (
    <div className={styles.film_meta}>
      {disabledTitle ? null : <h2 className={styles.meta_title}>{title[locale]}</h2>}
      <div className={styles.meta_data}>
        <span>{director[locale]}</span> / <span>{region[locale]}</span> / <span>{year}</span> / <span>{length}{formatMessage({ id: 'common.movie.min' })}</span> / <span>{format}</span> / <span>{formatMessage({ id: color ? 'common.movie.color' : 'common.movie.blackwhite' })}</span> / <span>{language[locale]}</span> / <span>{subtitles[locale]}</span> / <span>{formatMessage({ id: `common.rating` })}{rating}</span>
      </div>
    </div>
  )
}

function MoviesMeta ({ groups }) {
  const locale = getLocale();
  const elements = groups.map((movie, index) => {
    if (index < groups.length -1) {
      if (locale === 'zh_MO' || locale === 'zh_CN') {
        return <>
          <span key={movie.objectId}>{movie.title[locale]}</span> / 
        </>
      } else {
        return <>
          <span key={movie.objectId}>{movie.title[locale]}</span> / 
        </>
      }

    } else {
      if (locale === 'zh_MO' || locale === 'zh_CN') {
        return <span key={movie.objectId}>{movie.title[locale]}</span>
      } else {
        return <span key={movie.objectId}>{movie.title[locale]}</span>
      }
    }
  });

  return (
    <div className={styles.film_meta}>
      <div className={styles.meta_data}>
        {elements}
      </div>
    </div>
  )
}

function MoviesDetail ({ groups }) {
  const locale = getLocale();
  const elements = groups.map((group, index) => {
    const { plot, notes, honors, title } = group;

    return <div className={styles.film_detail}>
      <div className={styles.detail_chunk}>
        <h3 className={styles.chunk_title}>《{title[locale]}》</h3>
        <div className={styles.chunk_meta}>
          <MovieMeta {...group} disabledTitle />
        </div>

        {
          honors && honors[locale] && <div className={styles.chunk_desc_content} dangerouslySetInnerHTML={{ __html: honors[locale] }}>
          </div>
        }

        <div className={styles.chunk_desc}>
          <h4 className={styles.chunk_desc_title}>{formatMessage({ id: 'programme.synopsis.title' })}</h4>
          <div className={styles.chunk_desc_content} dangerouslySetInnerHTML={{ __html: plot[locale] }}></div>
        </div>

        {
          notes && notes[locale] && <div className={styles.chunk_desc}>
            <h4 className={styles.chunk_desc_title}>{formatMessage({ id: 'programme.notes.title' })}</h4>
            <div className={styles.chunk_desc_content} dangerouslySetInnerHTML={{ __html: notes[locale] }}></div>
          </div>
        }        
      </div>
    </div>
  });

  let stills = [];
  let trailers = [];
  let stillsIndexes = {};
  let trailersIndexes = {};
  let stillIndex = 0;

  groups.forEach((movie, index) => {
    if (movie.trailer) {
      trailers = trailers.concat(movie.trailer);
    }
    
    trailersIndexes[movie.trailer] = index;

    if (movie.stills && movie.stills.length > 0) {
      stills = stills.concat(movie.stills.map(image => {
        stillsIndexes[stillIndex++] = movie;

        return {
          index,
          image,
          trailer: movie.trailer
        }
      }));
    }
  });

  const onImageGallerySlide = (current) => {
    const movie = stillsIndexes[current];
    const trailer = movie.trailer;

    const index = trailersIndexes[trailer];

    ref.current.swiper.slideTo(index);
  }

  const onSlideChange = function () {

  }

  const swiperOptions = {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
    on: {
      slideChange: onSlideChange
    }
  }

  useEffect(() => {
    if (ref.current && ref.current.swiper) {
      ref.current.swiper.update();
    }
  }, [groups])

  const ref = useRef(null);

  return <>
    {elements}
    {
      trailers && trailers.length > 0 && <div className={classnames(styles.film_detail, styles.trailers)}>
        <Swiper {...swiperOptions} ref={ref} >
          {
            trailers.map((trailer, index) => {

              return (
                <div className={styles.swiper_trailer} key={index}>
                  <iframe className={styles.iframe} src={trailer} />
                </div>
              );
            })
          }
        </Swiper>
      </div>
    }
    {
      stills && stills.length > 0 && <div className={styles.movies_stills}>
        <div className={styles.detail_stills_content}>
          <ImageGallery 
            showNav={false}
            onSlide={onImageGallerySlide}
            items={stills.map(still => {
              return {
                original: still.image,
                thumbnail: still.image + '?x-oss-process=image/resize,h_100'
              }
            })}
          />
        </div>
      </div>
    }
  </>
}

function MovieDetail ({ plot, trailer, stills, notes, honors }) {
  const locale = getLocale();

  return (
    <div className={styles.film_detail}>
      {
        honors && honors[locale] && <div className={styles.detail_plot}>
          <div className={styles.detail_desc} dangerouslySetInnerHTML={{ __html: honors[locale] }}></div>
        </div>
      }
      

      <div className={styles.detail_plot}>
        <h4 className={styles.detail_title}>{formatMessage({ id: 'programme.synopsis.title' })}</h4>
        <div className={styles.detail_desc} dangerouslySetInnerHTML={{ __html: plot[locale] }}></div>
      </div>

      {
        notes && notes[locale] && <div className={styles.detail_notes}>
          <h4 className={styles.detail_title}>{formatMessage({ id: 'programme.notes.title' })}</h4>
          <div className={styles.detail_desc} dangerouslySetInnerHTML={{ __html: notes[locale] }}></div>
        </div>
      }

      {
        trailer && <div className={styles.detail_trailer}>
          <iframe className={styles.iframe} src={trailer} />
        </div>
      }


      {
        stills && stills.length > 0 && <div className={styles.detail_stills}>
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
      }

      
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
      slideChange: function (...argv) {
        onChange.call(this, ...argv);
      }
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
  }, [movie]);

  useEffect(() => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.update();
    }
  }, [movies]);

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
      <div className={styles.background} style={{ backgroundImage: `url(${movie.poster}?x-oss-process=image/crop)` }} />
      <div className={styles.hot_content}>
        
        <Swiper {...swiperOptions} ref={ref}>
          {
            movies.map(movie => {

              return (
                <div className={styles.swiper_film} key={movie.objectId}>
                  <div className={styles.inner}>
                    <Movie 
                      className={styles.foreground}
                      poster={movie.poster + '?x-oss-process=image/crop'}
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
      {movie && ( movie.compose ? <MoviesMeta {...movie} />: <MovieMeta {...movie} />)}
    </div>
  );
}

function TimeItem (props) {
  const { beginTime, endTime, price, tickets, onClick, movie, status } = props;

  return (
    <div className={styles.time_item}>
      <div className={styles.time}>
        <span className={styles.begin_time}>{beginTime}</span>
        <span className={styles.end_time}>{endTime}</span>
      </div>

      <div className={styles.status}>
        {
          status === 'OFF_SALES' ?
            formatMessage({ id: 'programme.shows.off' }) : 
            (tickets === 0 ? formatMessage({ id: 'programme.shows.sellout' }) : formatMessage({ id: 'payment.remaining.tickets' }) + ' ' + tickets)
        }
      </div>

      {
        movie.status === 'ON_SALES' && status !== 'OFF_SALES' && tickets > 0 ?
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
  }, [dates]);

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
        <div className={styles.shows_header_inner} style={{ width: 70 * newDates.length + 'px' }}>
          {datesSelections}
        </div>
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
                endTime={moment(new Date((date.timestamp + 60 * ( movie.compose ? movie.composeLength : movie.length )) * 1000)).format(`HH:mm`)}
                price={date.price}
                tickets={date.tickets}
                status={date.status}
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
  }, [movie]);

  const movieShows = movie.shows || [];
  const dates = new Map();

  movieShows.filter(show => {
    return show.status !== 'REMOVE'
  }).forEach(show => {
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
  const { match, location, history } = props;
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(movies[0]);

  const asyncMovies = () => {
    const { dispatch, location, match } = props;
    const query = location.query;
    const { releasedAt } = match.params;

    const getMovies = async () => {
      if (releasedAt === 'category') {
        const movies = await dispatch({
          type: 'movie/category',
          payload: { ...query, id: query.categoryId }
        });
  
        setMovies(movies);
      } else {
        const movies = await dispatch({
          type: 'movie/movies',
          payload: { ...query, releasedAt: releasedAt }
        });
  
        setMovies(movies);
      }

    }
    
    getMovies();
  }
  
  useEffect(() => {
    const { location } = props;
    const query = location.query;
    let selected = movies[0];
    

    if (query.objectId) {
      movies.some(movie => {
        if (movie.objectId === query.objectId) {
          selected = movie;
          return true;
        }
      })
    }

    setMovie(selected);
  }, [movies]);

  useEffect(() => {
    asyncMovies();
  }, [match.params.releasedAt]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onChange = function () {
    const movie = movies[this.activeIndex];
    setMovie(movie);
    history.push(`/programme/${match.params.releasedAt}?categoryId=${movie.categoryId || ''}&objectId=${movie.objectId}&filmName=${movie.title.en_US.split(/\s+/g).join('-')}`)
  }

  if (movie && movie.compose && !movie.isComputed) {
    let composeLength = movie.groups.reduce((length, movie) => {
      return length + movie.length;
    }, 0)

    movie.composeLength = composeLength;
    movie.isComputed = true;
  }

  return (
    <div className={styles.programme}>
      {movies.length > 0 && movie && <Movies movie={movie} movies={movies} onChange={onChange} />}
      {movie && <Shows {...props} movie={movie} />}
      {movie && (movie.compose ? <MoviesDetail {...movie} /> : <MovieDetail {...movie} />)}
    </div>
  );
}

export default connect(({ movie, router }) => {
  return {
    movies: movie.movies,
  }
})(Programme);
