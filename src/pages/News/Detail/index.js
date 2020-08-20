import { useState, useCallback, useMemo } from 'react';
import Swiper from 'react-id-swiper';
import classnames from 'classnames';
import styles from './index.less';  


export default function () {

  return (
    <div className={styles.news_detail}>
      <div className={styles.detail}>
        <h1 className={styles.detail_title}>
          我們致電影的情書<br />
          戀愛・電影館 9 月在浪漫的光影中出發
        </h1>

        <div className={styles.detail_desc}>
          发布于 2020-08-20
        </div>

        <div className={styles.detail_content}>
          <p>戀愛・電影館與觀眾闊別兩個月後，光影大門即將於九月重開，讓我們在銀幕下再次 相聚。</p>
          <p>2020 疫情影響着每一個人日常生活，讓我們更明白到世態無常，一切在變。唯一不變 的，可能是我們仍對生活有盼望，對夢想有執着。 或許對影迷來說，是他對電影不變 的熱愛。故戀愛‧電影館恢復對外開放的第一個主題，是選擇向電影致敬，展題名 為:《致電影的情書:大銀幕裡拍電影》。</p>
          <p>在這個主題展中，我們選映了十部橫跨不同年代來自不同國家或地區的作品。這些作 品的主題都跟電影有關，它們或是影史上的經典，或是自成一格的傑作。無論在形式 或內容上，總能勾起觀眾對電影無以名狀的愛――費里尼《八部半》中導演在現實與 夢幻中的妙想;活地・阿倫《戲假情真》的女主角躍進銀幕去尋找真愛;《星光伴我 心》與電影結伴成長的回憶與鄉愁 ;《萬花嬉春》真・基利在雨中倚着燈柱踢躂喜 舞.... 一個一個的經典場面，不同形式的敘事風格，讓觀眾伴隨每個導演的思緒，進入 一個又一個電影中的電影世界。</p>
          <p>9 月 12-23 日《致電影的情書:大銀幕裡拍電影》主題影展片單: 開幕電影:《萬花嬉春》數碼修復版 Singin' in the Rain (Remastered) (1952)</p>
          <p>1. 《紅樓金粉》數碼修復版 Sunset Boulevard (Remastered) (1950) 2. 《八部半》數碼修復版 Otto e Mezzo (Remastered) (1963)</p>
          <p>3. 《戲假情真》The Purple Rose of Cairo (1985)</p>
          <p>4. 《星光伴我心》數碼修復版 Cinema Paradiso (Remastered) (1990) 5. 《大寫特寫》Close-up (1990)</p>
          <p>6. 《阮玲玉》數碼修復版 Center Stage (Remastered) (1992)</p>
          <p>7. 《不散》數碼修復版 Goodbye, Dragon Inn (Remastered) (2003) 8. 《當光影不在》Phantom of Illumination (2017)</p>
          <p>9. 《王牌辯士》Talking the Pictures (2019)</p>
        </div>
      </div>
    </div>
  );
}