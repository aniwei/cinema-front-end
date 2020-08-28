import { useMemo, useEffect, useState } from 'react';
import { connect } from 'dva';
import { getLocale, formatMessage } from 'umi-plugin-react/locale';
import { createPortal } from 'react-dom';
import classnames from 'classnames';

import styles from './index.less';

import mpayLogo from '../../assets/common/mpay.png';

function Show (props) {
  const locale = getLocale();

  const { movie, date, time, tickets } = props;
  return <div className={styles.purchase_show}>
    <div>{movie.title[locale]} {date} {time}</div>
    <div>Remaining tickets: {tickets}</div> 
  </div>
}

function Movie (props) {
  const { rating, poster, director, title, color, subtitles, format, language, year, length, region } = props;
  const locale = getLocale();

  return (
    <div className={styles.purchase_movie}>
      <div className={styles.movie_poster}>
        <img src={poster} className={styles.poster_image} />
      </div>
      <div className={styles.movie_data}>
        <h4 className={styles.movie_tilte}>{title[locale]}</h4>
        <div className={styles.movie_desc}>
          <div className={styles.desc_item}><span>{director[locale]}</span></div>
          <div className={styles.desc_item}>
            <span>{region[locale]}</span> / 
            <span>{year}</span> /  
            <span>{length}min</span> / 
            <span>{formatMessage({ id: `common.rating` })}{rating}</span> / 
            <span>{formatMessage({ id: color ? 'common.movie.color' : 'common.movie.blackwhite' })}</span> / 
            <span>{format}</span>
          </div> 
          <div className={styles.desc_item}>  
            <span>{language[locale]}</span> /  
            <span>{subtitles[locale]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Email ({ show, onInputEmail, onInputCode, dispatch }) {
  const [email, setEmail] = useState(null);
  const [code, setCode] = useState(null);
  const [seconds, setSeconds] = useState(0);

  const memo = useMemo(() => {
    return {};
  }, []);

  useEffect(() => {
    setCode(null);
    setSeconds(0);
    clearTimeout(memo.timer);
  }, [memo.timer, show]);


  const onEmailChange = ({ target }) => {
    setEmail(target.value);
    onInputEmail(target.value);
  }

  const onSenderClick = async () => {
    if (seconds < 1 && email) {
      setSeconds(100);

      const res = await dispatch({
        type: 'movie/code',
        payload: {
          email
        }
      });

      if (!res) {
        alert(formatMessage({ id: 'error.code.710' }));
        setSeconds(0);
      }
    } 
  }

  const onCodeChange = ({ target }) => {
    setCode(target.value);
    onInputCode(target.value);
  }

  useEffect(() => {
    if (seconds > 0) {
      memo.timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
  }, [memo.timer, seconds]);


  return (
    <div className={styles.purchase_email}>
      <div className={styles.email_item}>
        <input 
          className={classnames(styles.email_input)} 
          onChange={onEmailChange}
          placeholder={formatMessage({ id: 'common.purchase.email.placeholder' })} 
          value={email}
        />
        <button className={classnames(styles.code_sender, { 
          [styles.code_sender_disabled]: !email || seconds > 0 || email.indexOf('@') === -1
        })} onClick={onSenderClick}>
          { seconds > 0 ? `${seconds}s` : formatMessage({ id: 'common.purchase.email.sender' })}
        </button>
      </div>
      <div className={styles.code_item}>
        <input 
          className={styles.code_input} 
          onChange={onCodeChange} 
          placeholder={formatMessage({ id: 'common.purchase.code.placeholder' })} 
          value={code}
        />
      </div>
    </div>
  )
}

function MPay () {
  return (
    <div className={styles.payment_mpay}>
      <img src={mpayLogo} className={styles.img} />
      <span className={styles.text}>{formatMessage({ id: 'common.payment.mpay.tips' })}</span>
    </div>
  );
}

function Counter ({ show, onCounting }) {
  const [count, setCount] = useState(1);
 
  const onDecoreatorClick = () => {
    if (count > 1) {
      setCount(count - 1);
      onCounting(count - 1);
    }
  }

  const onIncoreatorClick = () => {
    if (count < 4) {
      setCount(count + 1);
      onCounting(count + 1);
    }
  }

  useEffect(() => {
    setCount(1);
  }, [show]);

  return <div className={styles.count_item}>
    <div className={styles.count_label}>{formatMessage({ id: 'common.purchase.buy.quantity' })}</div>
    <div className={styles.count_ctrl}>
      <span className={classnames(styles.count_decreator, {
        [styles.count_decreator_disabled]: count < 2
      })} onClick={onDecoreatorClick}>
        -
      </span>
      <input 
        className={styles.count_input} 
        value={count}
        disabled
      />
      <span className={classnames(styles.count_decreator, {
        [styles.count_decreator_disabled]: count > 3
      })} onClick={onIncoreatorClick}>
        +
      </span>
    </div>
  </div>
}

function Form ({ show, movie, onClose, dispatch }) {
  const [disabledSubmit, setDisabledSubmit] = useState(false);
  const locale = getLocale();
  const data = useMemo(() => {
    return {
      showId: show.objectId,
      email: null,
      code: null,
      count: 1
    }
  }, [show]);

  useEffect(() => {
    setDisabledSubmit(false);
  }, [show])

  const onInputEmail = (email) => {
    data.email = email;
  }

  const onInputCode = (code) => {
    data.code = code;
  }

  const onCounting = (count) => {
    data.count = count;
  }

  const onConfirm = async () => {

    if (disabledSubmit) {
      return;
    }
    
    if (!data.email || data.email.indexOf('@') === -1) {
      return alert(formatMessage({ id: 'common.purchase.email.placeholder' }));
    }

    if (!data.code || String(data.code).length !== 6) {
      return alert(formatMessage({ id: 'common.purchase.code.placeholder'}));
    }

    if (!data.showId) {
      return alert('show')
    }

    if (data.count < 1 || data.count > 4) {
      return alert('count');
    }
    

    const yes = window.confirm(formatMessage({ id: 'common.purchase.check' }, {
      title: `${movie.title[locale]} ${show.date} ${show.time}`,
      count: data.count,
      email: data.email,
      amount: Number(Number(data.count) * Number(show.price)).toFixed(2)
    }));

    if (yes) {
      setDisabledSubmit(true);

      const { tickets } = await dispatch({
        type: 'movie/tickets',
        payload: {
          showId: data.showId
        }
      });

      if (tickets >= data.count) {
        const res = await dispatch({
          type: 'movie/trading',
          payload: data
        });
  
        if (res && res.location) {
          if (res.status === 'PENDING') {
            alert(formatMessage({ id: 'error.code.708' }));
          }
  
          window.location.href = res.location;
        }
      } else {
        alert(formatMessage({ id: 'error.code.705' }));
      }

      setDisabledSubmit(false);
    }
  }

  return (
    <div className={styles.form}>
      <Email 
        onInputEmail={onInputEmail}
        onInputCode={onInputCode}
        dispatch={dispatch}
      />
      <Show {...show} movie={movie} />
      <Counter  
        onCounting={onCounting}
      />

      <div className={styles.button_item}>
        <button onClick={onClose} className={classnames(styles.button, styles.cancel_button)}>{formatMessage({ id: 'common.purchase.cancel.button' })}</button>
        <button onClick={onConfirm} className={classnames({ [styles.button_disabled]: disabledSubmit }, styles.button)}>{formatMessage({ id: 'common.purchase.buy.button' })}</button>
      </div>
    </div>
  );
}

function Purchase (props) {
  const { movie, visible, show, onClose } = props;
  

  const classes = classnames({
    [styles.purchase_visible]: visible,
  }, styles.purchase);

  return (
    <div className={classes}>
      <div className={styles.purchase_mask}  />
      <div className={styles.purchase_content}>
        <div className={styles.purchase_context}>
          <Movie {...movie} />

          <div className={styles.purchase_payment}>
            <MPay />
            <Form {...props} show={show} movie={movie} onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(({ movie }) => {
  return {
    ...movie
  }
})(function (props) {
  const container = useMemo(() => {
    return document.createElement('span');
  }, []);

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    }
  }, [container]);

  return (
    createPortal(
      <Purchase {...props} />,
      container
    )
  )
})