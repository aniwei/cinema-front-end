import classnames from 'classnames';
import { getLocale } from 'umi-plugin-react/locale';
import styles from './index.less';

const posterContent = {
  title: {
    zh_MO: '致電影的情書：大銀幕裡拍電影',
    en_US: 'A Love Letter to the Cinema: Making Films on the Big Screen'
  },
  content: {
    zh_MO: '2020年行至下半，疫情的影響未歇。人們明白了現實生活不似電影，無法在黑畫面後奇蹟地重回正軌；反倒是電影的世界脫離不了現實，當社交距離已成常規，聚首銀幕前的並肩觀看也格外珍貴。電影產製及觀影文化都在調整步伐，電影的未來將如何轉變？影院角色又面臨何種變化？關於這些問題，我們無法預言或解答，只能回到我們鍾愛的影像，透過不同創作者之眼，溫習電影百年來帶給我們的哀樂與啟示。盼在瞬息萬變之際，透過電影中的電影、銀幕上的銀幕，以影迷不變的熱烈目光，寫一封致電影的情書，與所有電影館觀眾共享。\n\n此專題選映了多部橫跨不同年代、地區及形式的作品，並將主題擴及影展開幕片《萬花嬉春》及動畫《布紐爾超現實人生》。藉此串連出電影藝術的轉生流變，從無聲到有聲，自黑白至彩色，不變的是電影始終是造夢的產業，影廳內的美好歲月也將永存凝結。作品亦展現影像再現與真實人生如何交纏難解，無論影中人是作者、是影迷，活在電影裡的人生有荒謬有哀傷，但更多的是對創作與觀影的執迷不悔。\n\n習以為常的電影地景勢將被重建，然而無論媒材形式如何改變，電影帶來的感動和省思並不消退，放映機啟動後的電影之光亦不滅。',
    en_US: 'The year 2020 is already halfway through and the impact of the epidemic has not yet ceased. People have come to understand that real life is not like films, as they can no longer miraculously get back on track after the curtain call. On the contrary, the world of films cannot be divorced from reality. When social distancing has become the norm, it is especially precious to watch films side by side in front of the screen.\n\nThe film production and the film-viewing culture are adjusting to keep pace. How will the future of the film change? What changes are the roles of cinemas facing?\n\nWe can neither predict nor answer these questions, but only go back to our beloved images and review the sorrows, happiness, and revelations brought to us by films over the centuries through the eyes of various creators. At a time of transient changes, we hope to write a love letter to films and share it with all film-goers by their unchanging passionate gazes through the films in the films and screens on the screens.\n\nThe selected works from different eras, regions, and forms are screened, the theme of which is extended to include the film festival-opening film SINGIN’ IN THE RAIN, and the animation BUÑUEL IN THE LABYRINTH OF THE TURTLES, showing the kaleidoscopic changes of film art, from silent to sound, from black-and-white to color. What remains unchanged is that film is always a dream-making industry, and the beautiful years in the film hall will remain forever. The works also show how image reproduction and real-life are intertwined. No matter whether the character in the film is an author or a film fan, the life in the film is of absurdity and sorrow, but more is the obsession with creation and film watching without regret.\n\nThe customary film landscape will be rebuilt. However, no matter how the media form changes, the emotion and reflection brought by the film will not fade away, nor will the light of the film after the projector is activated.'
  }
}

export default function () {
  const locale = getLocale();

  return (
    <div className={styles.poster}>
      <div className={styles.poster_background}>
        <div className={styles.background}></div>
        <img className={styles.poster_image} src="https://cinematheque.oss-cn-hongkong.aliyuncs.com/album/september.jpg" />
      </div>
      {/* <h1 className={styles.poster_title}>{posterContent.title[locale]}</h1> */}
      <p className={styles.poster_content}>{posterContent.content[locale]}</p>
    </div>
  );
}