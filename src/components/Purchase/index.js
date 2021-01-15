import { useMemo, useEffect, useState } from 'react';
import { connect } from 'dva';
import { getLocale, formatMessage } from 'umi-plugin-react/locale';
import { createPortal } from 'react-dom';
import classnames from 'classnames';

import checkout from './checkout';

import styles from './index.less';

import mpayLogo from '../../assets/common/mpay.png';
import masterAndVisa from '../../assets/common/master_visa.jpeg';

const discounts = {
  ORIGINAL: 1,
  STUDENT: 0.5,
  SENIOR: 0.5,
}

const notice = {
  zh_CN: `【注意事项】\n\n- 凡购买优惠票者，入场前请出示有效证件。\n- 网上8折优惠只限于一次性购买同一场次普通票十张。\n- 优惠票与折扣优惠不能重叠使用。`,
  zh_MO: `【注意事項】\n\n- 凡購買優惠票者，入場前請出示有效證件。\n- 網上8折優惠只限於一次性購買同一場次普通票十張。\n- 優惠票與折扣優惠不能重疊使用。`,
  en_US: `【Notice】\n\n- For those who purchase concessionary tickets, a valid proof of identity must be shown before entering the venue.\n- A 20% discount is offered to the individual who purchases 10 regular tickets for the same session at each online transactions.\n- Concessionary tickets and discount offers cannot overlap.`,
  pt_PT: `【Aviso】\n\n- Para quem comprar bilhetes concessionados, por favor, mostre um documento válido antes entrar no cinema.\n- Na compra de 10 bilhetes regulares da mesma sessão, é oferecido 20% de desconto, em cada transação online.\n- Os bilhetes concessionados e as ofertas de desconto não podem ser acumuladas.`
}

const profile = {
  zh_CN: `- <span style="color: #000">购票前请先阅读<a style="color: #007aff" href="//cinematheque.oss-cn-hongkong.aliyuncs.com/profile/zh_CN.pdf">「收集个人资料声明」</a>，输入电邮并按下「获取」按钮后代表同意有关声明。</span>`,
  zh_MO: `- <span style="color: #000">購票前請先閱讀<a style="color: #007aff" href="//cinematheque.oss-cn-hongkong.aliyuncs.com/profile/zh_MO.pdf">「收集個人資料聲明」</a>，輸入電郵並按下「獲取」按鈕後代表同意有關聲明。</span>`,
  en_US: `- <span style="color: #000">Please read the <a style="color: #007aff" href="//cinematheque.oss-cn-hongkong.aliyuncs.com/profile/en_US.pdf">"Statement on Collection of Personal Data"</a> before purchasing tickets, enter your email and press the "Send" button to agree to the statement.</span>`,
  pt_PT: `- <span style="color: #000">Por favor, leia a <a style="color: #007aff" href="//cinematheque.oss-cn-hongkong.aliyuncs.com/profile/pt_PT.pdf">"Declaração de recolha de dados pessoais"</a> antes da compra dos bilhetes, introduza o seu email e pressione “Obter” para concordar com a declaração.</span>`
}

function TicketType ({ show, onSelect }) {
  const ticketTypes = [
    { value: 'ORIGINAL', text: formatMessage({ id: 'payment.ticket.type.original' }) },
    { value: 'STUDENT', text: formatMessage({ id: 'payment.ticket.type.student' }) },
    { value: 'SENIOR', text: formatMessage({ id: 'payment.ticket.type.senior' }) }
  ];

  const [ticketType, setTicketType] = useState('ORIGINAL');
  

  useEffect(() => {
    setTicketType('ORIGINAL');
    onSelect('ORIGINAL');
  }, [show]);

  const onTicketTypeClick = (type) => {
    setTicketType(type.value);
    onSelect(type.value);
  }

  return <div className={styles.ticket_types}>
    {
      ticketTypes.map(type => {
        const classes = classnames(styles.ticket_type, { 
          [styles.ticket_type_selected]: type.value === ticketType
        })

        return (
          <div className={classes} key={type.value} onClick={(event) => onTicketTypeClick(type)}>
            <span className={styles.ticket_type_text}>{type.text}</span>
          </div>
        )
      })
    }
  </div>
}

function Show (props) {
  const locale = getLocale();

  const { movie, date, time, tickets } = props;
  return <div className={styles.purchase_show}>
    
    <div>{formatMessage({ id: 'payment.remaining.tickets' })} {tickets}</div> 
  </div>
}


function MovieMeta (props) {
  const { compose, groups } = props;
  const locale = getLocale();

  if (compose) {
    return null;
  }

  const { rating, year, length, region } = props;

  return <>
    <span>{region[locale]}</span> / 
    <span> {year}</span> /   
    <span> {length}min</span> / 
    <span> {formatMessage({ id: `common.rating` })}{rating}</span>
  </>
}

function MovieTitle (props) {
  const locale = getLocale();
  const { compose, groups } = props;

  if (compose) {

    return <h4 className={styles.movie_tilte}>
      {
        groups.map(group => {
          return `《${group.title[locale]}》`
        }).join('')
      }
    </h4>
  }

  const { title } = props;


  return (
    <h4 className={styles.movie_tilte}>{title[locale]}</h4>
  );
}

function Movie (props) {
  const { rating, poster, director, title, color, subtitles, format, language, year, length, region } = props;
  const locale = getLocale();

  return (
    <div className={styles.purchase_movie}>
      <div className={styles.purchase_movie_inner}>
        <div className={styles.movie_poster}>
          <img src={poster} className={styles.poster_image} />
        </div>
        <div className={styles.movie_data}>
          <MovieTitle {...props} />
          <div className={styles.movie_desc}>
            <div className={styles.desc_item}>
              <MovieMeta {...props}  />
            </div> 
            <div className={styles.desc_item}>  
              <strong>* {formatMessage({ id: 'payment.ticket.rate.' + rating })}</strong>
              {/* <span>{language[locale]}</span> /   */}
              {/* <span>{subtitles[locale]}</span> */}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.notice_desc} onClick={() => {
        alert(notice[locale])
      }}>
        <span>{formatMessage({ id: 'payment.notice.desc' })}</span>
      </div>
      <div className={styles.notice_item}>
        <p dangerouslySetInnerHTML={{ __html: notice[locale] }}></p>
        <p dangerouslySetInnerHTML={{ __html: profile[locale] }}></p>
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
  }, [show]);


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

function MPay (props) {
  return (
    <div className={classnames(styles.payment_item, {
      [styles.payment_item_selected]: props.selected
    })} {...props}>
      <img src={mpayLogo} className={styles.img} />
      {/* <span className={styles.text}>{formatMessage({ id: 'common.payment.mpay.tips' })}</span> */}
    </div>
  );
}

function MasterAndVisa (props) {
  return (
    <div className={classnames(styles.payment_item, {
      [styles.payment_item_selected]: props.selected
    })} {...props}>
      <img src={masterAndVisa} className={styles.img} />
      {/* <span className={styles.text}>{formatMessage({ id: 'common.payment.mpay.tips' })}</span> */}
    </div>
  );
}

function Payments (props) {
  const onMPayClick = () => {
    props.onChange('MPAY');
  }

  const onMasterAndVisaClick = () => {
    props.onChange('MASTER_VISA');
  }

  return (
    <div className={styles.payment}>
      <MPay onClick={onMPayClick} selected={props.value === 'MPAY'} />
      <MasterAndVisa onClick={onMasterAndVisaClick} selected={props.value === 'MASTER_VISA'} />
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
    if (count < show.tickets) {
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
        [styles.count_decreator_disabled]: count >= show.tickets
      })} onClick={onIncoreatorClick}>
        +
      </span>
    </div>
  </div>
}

function Form ({ show, movie, onClose, dispatch, location }) {
  const [disabledSubmit, setDisabledSubmit] = useState(false);
  const [payment, setPayment] = useState('MPAY')
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

  const onTicketTypeSelect = (type) => {
    data.type = type;
  }

  const onPaymentChange = (payment) => {
    setPayment(payment)
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

    if (data.count < 1 || data.count > show.tickets) {
      return alert('count');
    }

    let discount = discounts[data.type] || 1;

    if (data.count >= 10) {
      if (data.type === 'ORIGINAL') {
        discount = 0.8;
      }
    }

    data.description = `${movie.title[locale]} ${show.date} ${show.time}`;

    if (window.confirm(formatMessage({ id: 'payment.privacy.notice' }))) {
      const yes = window.confirm(formatMessage({ id: payment === 'MPAY' ? 'common.purchase.mpay.check' : 'common.purchase.masterPay.check' }, {
        title: `${movie.title[locale]} ${show.date} ${show.time}`,
        count: data.count,
        email: data.email,
        amount: Number(Number(data.count) * Number(show.price) * discount).toFixed(2),
        ticketType: formatMessage({ id: 'payment.ticket.type.' + data.type.toLowerCase() })
      }));
  
      if (yes) {
        const { tickets } = await dispatch({
          type: 'movie/tickets',
          payload: {
            showId: data.showId
          }
        });
  
        if (tickets >= data.count) {
          const action = payment === 'MPAY' ? {
            type: 'movie/trading',
            payload: data
          } : {
            type: 'movie/creditMaster',
            payload: data
          }

          const res = await dispatch(action);

          if (payment === 'MPAY') {
            if (res && res.location) {
              if (res.status === 'PENDING') {
                alert(formatMessage({ id: 'error.code.708' }));
              }
      
              window.location.href = res.location;
            }
          } else {
            const { orderId, currency, amount, session, merchantId } = res;
            let currentLocale = locale.replace('_', '-');
            if (locale === 'zh_MO') {
              currentLocale = 'zh-HK';
            }

            window.Checkout.configure({
              merchant: merchantId,
              order: {
                amount,
                currency,
                description: `${movie.title[locale]} ${show.date} ${show.time}`,
                id: orderId,
              },
              interaction: {
                operation: 'PURCHASE',
                locale: currentLocale,
                merchant: {
                  name: formatMessage({ id: 'common.merchant.name' }),
                  address: {
                    line1: formatMessage({ id: 'common.merchant.address' }),
                  }
                }
              },
              session: {
                id: session.id
              }
            });

            window.Checkout.showPaymentPage();
          }
    
        } else {
          alert(formatMessage({ id: 'error.code.705' }));
        }
      }
    }

  }

  return (
    <>
      <Payments {...show} movie={movie} onChange ={onPaymentChange} value={payment} />
      <div className={styles.form}>
        <Email 
          onInputEmail={onInputEmail}
          onInputCode={onInputCode}
          dispatch={dispatch}
        />
        <Show {...show} movie={movie} />
        <TicketType show={show} onSelect={onTicketTypeSelect} />
        <Counter onCounting={onCounting} show={show} />

        <div className={styles.notice_profile} dangerouslySetInnerHTML={{ __html: profile[locale] }}></div>

        <div className={styles.button_item}>
          <button onClick={onClose} className={classnames(styles.button, styles.cancel_button)}>{formatMessage({ id: 'common.purchase.cancel.button' })}</button>
          <button onClick={onConfirm} className={classnames({ [styles.button_disabled]: disabledSubmit }, styles.button)}>{formatMessage({ id: 'common.purchase.buy.button' })}</button>
        </div>
      </div>
    </>
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
