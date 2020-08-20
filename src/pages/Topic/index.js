import { useState, useCallback, useMemo } from 'react';
import Swiper from 'react-id-swiper';
import classnames from 'classnames';
import styles from './index.less';  

function Topic (props) {
  const { title, en, type, actors, className, poster, length } = props;

  return (
    <div className={classnames(styles.film, className)}>
      <div className={styles.poster}>
        <img src={poster} />

      </div>
    </div>
  )
}

function Topics (props) {
  const { topics, topic, onChange } = props;
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
      <div className={styles.background} style={{ backgroundImage: `url(${topic.poster})` }}></div>
      <div className={styles.hot_content}>
        <Swiper {...swiperOptions} onChange={props.onChange}>
          {
            topics.map(topic => { 
              return (
                <div className={styles.swiper_film} key={topic.key}>
                  <div className={styles.inner}>
                    <Topic 
                      className={styles.foreground}
                      poster={topic.poster}
                    />
                  </div>
                </div>
              );
            })
          }
        </Swiper>
      </div>
    </div>
  );
}

function TopicDetail (props) {
  const { topic } = props;
  return (
    <div className={styles.topic_detail}>
      <h2 className={styles.title}>{topic.title}</h2>
      <div className={styles.video}>
        <iframe className={styles.iframe} src={topic.youtube} />
      </div>
      <div className={styles.content}>
        <h4 className={styles.content_title}>活動簡介</h4>
        <div className={styles.content_desc}>
          {topic.content}
        </div>
      </div>
    </div>
  );
}

const topics = [
  {
    key: '0',
    title: '‘FASHION IS AN ATTITUDE’ - 時裝電影專題展',
    poster: 'https://cinematheque-api.bpprojects.com/uploads/I1Vq9pDNTfRt6DmyAsGAdfvguBlemoOTdxplx1Cc.jpg',
    youtube: 'https://www.youtube.com/embed/_bpAxZKKHJM',
    content: [
      '時裝／時尚是什麼？',
      'Jean Paul Gaultier說我們所做的一切都是時尚，你所吃的東西，以及吃的方式，當然包括你穿的衣服，還有，生命也是。',
      '時裝／時尚是不是衣服、配飾或名牌？',
      'Martin Margiela說過，現在設計師已忘了衣服的本質，他們只對形象有興趣，卻忘了時裝為何物。',
      '時裝／時尚是不是一幅幅漂亮的名模硬照，或一季季的時裝秀？',
      '山本耀司說，我將全部感情都放在我的服裝裡，我讓我的衣服說話。 ',
      '時裝／時尚，或許是一種表現自己的態度？',
      '看畢是次專題展中，各用著「時裝」為自己講話的眾人，你又覺得什麼是時裝／時尚？'
    ].join('\n')
  }, {
    key: '1',
    title: '看見澳門：影像力量再現',
    poster: 'https://cinematheque-api.bpprojects.com/uploads/4Q4wE2Ph061v5IDDIBGN1Yla5Po9MqN2KpufcLmk.jpg',
    youtube: 'https://www.youtube.com/embed/1Ckxadd2sVk',
    content: [
      '作為本澳首座藝術電影院，戀愛．電影館以積極推廣本澳電影為其中一個重要己任。我們每月會精選兩部澳門長片或短片，在兩個周六、日作免費放映，讓澳門市民、遊客及有興趣了解澳門電影的人士在這個常設的平台上看見澳門、發現澳門的影像和文化。',
      '(為更方便觀眾留座觀賞「看見澳門 - 影像力量重現」的電影，請選取心水場次，及按購票程序領取免費電子票。此外，每場放映將預留10個座位讓觀眾現場登記，先到先得)'
    ].join('\n')
  }, {
    key: '2',
    title: '9月电影推介',
    poster: 'https://cinematheque-api.bpprojects.com/uploads/86oeRpviWYJGktfX3fYKAqW0VHf5S6ErRpYXWoEF.jpg',
    youtube: 'https://www.youtube.com/embed/rTSes-Gd2ew'
  }
];

export default function () {
  const [topic, setTopics] = useState(topics[0]);

  const onChange = useCallback((swiper) => {
    setTopics(topics[swiper.activeIndex]);
  }, []);

  return (
    <div className={styles.programme}>
      <Topics onChange={onChange} topics={topics} topic={topic} />
      <TopicDetail topic={topic} />
    </div>
  );
}