import { useState, useCallback, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import classnames from 'classnames';
import { getLocale } from 'umi-plugin-react/locale';
import styles from './index.less';  


export default function () {
  const locale = getLocale();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (locale === 'en_US') {
    return (
      <div className={styles.news_detail}>
        <div className={styles.detail}>
          <h1 className={styles.detail_title}>
          Our Love Letter to the Cinema<br />
          Cinematheque·Passion – Starting Your September in Romantic Light and Shadows
          </h1>

          <div className={styles.detail_desc}>
            ANNOUNCEMENT 2020-08-20
          </div>

          <div className={styles.detail_content}>
            <p>After two months of hiatus, Cinematheque·Passion will reopen its gate of light and shadows in September. Let us gather in front of the big screen all over again.</p>
            <p>The pandemic of 2020 has left an impact on everyone's daily life, reminding all of us of the volatility of the world where change is constant. Perhaps the only thing that remains unchanged is our aspirations in life and the persistence of our dreams. And that, for cinema fans, is perhaps their consistent passion for the cinema. In this reopening season, Cinematheque·Passion pays tribute to the cinematic art, with our program entitled: A Love Letter to the Cinema: Making Films on the Big Screen.</p>
            <p>In this program, we selected films in different countries and territories across different eras. Either classics in film history or masterpieces in their own right, their themes are all related to the cinema. In form or content, they always manage to evoke an indescribable love for the films among film-goers – the director's fantastical musings across reality and dreams in 8½; the heroine who walks into the big screen to seek her true love in THE PURPLE ROSE OF CAIRO; the memories and nostalgia of growing up with film in CINEMA PARADISO; Gene Kelly tap dancing under the lamppost in the rain in SINGIN’ IN THE RAIN... All these classic scenes and different narrative styles invite the audience into one film world after another through the mind of every director.</p>
            <p>12 – 23 September: Selections for “A Love Letter to the Cinema: Making Films on the Big Screen”:</p>
            <p>Opening Film: Singin' in the Rain (Remastered) (1952)</p>
            {/* <p>1. Sunset Boulevard (Remastered) (1950)</p>  */}
            <p>1. 8½ (Remastered) (1963)</p>
            <p>2. The Purple Rose of Cairo (1985)</p>
            <p>3. Cinema Paradiso (Remastered) (1990)</p>
            <p>4. Close-up (1990)</p>
            <p>5. Center Stage (Remastered) (1992)</p>
            <p>6. Goodbye, Dragon Inn (Remastered) (2003)</p>
            <p>7. Phantom of Illumination (2017)</p>
            <p>8. Talking the Pictures (2019)</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.news_detail}>
      <div className={styles.detail}>
        <h1 className={styles.detail_title}>
          我們致電影的情書<br />
          戀愛・電影館 9 月在浪漫的光影中出發
        </h1>

        <div className={styles.detail_desc}>
          發布於 2020-08-20
        </div>

        <div className={styles.detail_content}>
          <p>戀愛・電影館與觀眾闊別兩個月後，光影大門即將於九月重開，讓我們在銀幕下再次相聚。</p>
          <p>2020 疫情影響着每一個人日常生活，讓我們更明白到世態無常，一切在變。唯一不變的，可能是我們仍對生活有盼望，對夢想有執着。 或許對影迷來說，是他對電影不變的熱愛。故戀愛‧電影館恢復對外開放的第一個主題，是選擇向電影致敬，展題名為:《致電影的情書:大銀幕裡拍電影》。</p>
          <p>在這個主題展中，我們選映了多部橫跨不同年代來自不同國家或地區的作品。這些作品的主題都跟電影有關，它們或是影史上的經典，或是自成一格的傑作。無論在形式或內容上，總能勾起觀眾對電影無以名狀的愛――費里尼《八部半》中導演在現實與夢幻中的妙想;活地・阿倫《戲假情真》的女主角躍進銀幕去尋找真愛;《星光伴我心》與電影結伴成長的回憶與鄉愁;《萬花嬉春》真・基利在雨中倚着燈柱踢躂喜舞....一個一個的經典場面，不同形式的敘事風格，讓觀眾伴隨每個導演的思緒，進入一個又一個電影中的電影世界。</p>
          <p>9月12-23日《致電影的情書:大銀幕裡拍電影》主題影展片單: </p>
          <p>開幕電影:《萬花嬉春》數碼修復版 Singin' in the Rain (Remastered) (1952)</p>
          {/* <p>1. 《紅樓金粉》數碼修復版 Sunset Boulevard (Remastered) (1950)</p> */}
          <p>1. 《八部半》數碼修復版 Ottoe Mezzo (Remastered) (1963)</p>
          <p>2. 《戲假情真》The Purple Rose of Cairo (1985)</p>
          <p>3. 《星光伴我心》數碼修復版 Cinema Paradiso (Remastered) (1990) </p>
          <p>4. 《大寫特寫》Close-up (1990)</p>
          <p>5. 《阮玲玉》數碼修復版 Center Stage (Remastered) (1992)</p>
          <p>6. 《不散》數碼修復版 Goodbye, Dragon Inn (Remastered) (2003) </p>
          <p>7. 《當光影不再》Phantom of Illumination (2017)</p>
          <p>8. 《王牌辯士》Talking the Pictures (2019)</p>
        </div>
      </div>
    </div>
  );
}