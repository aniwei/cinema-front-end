import menu from './zh_MO/menu';
import home from './zh_MO/home';
import about from './zh_MO/about';
import programme from './zh_MO/programme';
import news from './zh_MO/news';
import payment from './zh_MO/payment';
import error from './zh_MO/error';

export default {
  'common.rating': '評級: ',
  'common.payment.mpay.tips': '推薦使用MPay',
  'common.purchase.email.placeholder': '請輸入電郵',
  'common.purchase.code.placeholder': '請輸入驗證碼',
  'common.purchase.buy.button': '購買',
  'common.purchase.buy.quantity': '購買數量',
  'common.purchase.cancel.button': '取消',
  'common.purchase.email.sender': '獲取',
  'common.purchase.mpay.check': '請核對訂單信息\n\n訂單信息: {title} x {count} {ticketType} \n總金額: {amount}\n\n將跳轉至Mpay系統進行支付\n請在5分鐘內完成支付',
  'common.purchase.masterPay.check': '請核對訂單信息\n\n訂單信息: {title} x {count} {ticketType} \n總金額: {amount}\n\n將跳轉至Master Pay系統進行支付\n請在5分鐘內完成支付',
  'common.movie.color': '彩色',
  'common.movie.blackwhite': '黑白',
  'common.merchant.name': '戀愛・電影館',
  'common.merchant.address': '澳門戀愛巷九至十三號',
  'footer.about.title': '關於本館',
  'common.movie.min': '分鐘',
  'footer.about.desc': '戀愛・電影館位於澳門戀愛巷九至十三號，毗鄰澳門的著名世遺景點「大三巴牌坊」（即「聖保祿大教堂遺址」）。電影館樓高三層，是一個集合電影欣賞、展覽空間、本土影像保存、以及電影書籍閱讀等功能的空間。',
  'footer.about.address': '戀愛巷9號至13號',
  'footer.about.address.title': '場地位置',
  "footer.about.profile": "收集個人資料聲明",
  ...error,
  ...menu,
  ...home,
  ...about,
  ...programme,
  ...news,
  ...payment
};
