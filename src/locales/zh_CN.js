import menu from './zh_CN/menu';
import home from './zh_CN/home';
import about from './zh_CN/about';
import programme from './zh_CN/programme';
import news from './zh_CN/news';
import payment from './zh_CN/payment';
import error from './zh_CN/error';

export default {
  'common.rating': '评级: ',
  'common.payment.mpay.tips': '推荐使用MPay',
  'common.purchase.email.placeholder': '请输入电邮',
  'common.purchase.code.placeholder': '请输入验证码',
  'common.purchase.buy.button': '购买',
  'common.purchase.buy.quantity': '购买数量',
  'common.purchase.cancel.button': '取消',
  'common.purchase.email.sender': '获取',
  'common.purchase.mpay.check': '请核对订单信息\n\n订单信息: {title} x {count} {ticketType} \n总金额: {amount}\n\n将跳转至Mpay系统进行支付\n请在5分钟内完成支付',
  'common.purchase.masterPay.check': '请核对订单信息\n\n订单信息: {title} x {count} {ticketType} \n总金额: {amount}\n\n将跳转至Master Pay系统进行支付\n请在5分钟内完成支付',
  'common.movie.color': '彩色',
  'common.movie.blackwhite': '黑白',
  'common.movie.min': '分钟',
  'common.merchant.name': '恋爱・电影馆',
  'common.merchant.address': '澳门恋爱巷九至十三号',
  'footer.about.title': '关于本馆',
  'footer.about.desc': '恋爱・电影馆位于澳门恋爱巷九至十三号，毗邻澳门的著名世遗景点「大三巴牌坊」（即「圣保禄大教堂遗址」）。电影馆楼高三层，是一个集合电影欣赏、展览空间、本土影像保存、以及电影书籍阅读等功能的空间。',
  'footer.about.address': '恋爱巷9号至13号',
  'footer.about.address.title': '场地位置',
  "footer.about.profile": "收集个人资料声明",
  ...error,
  ...menu,
  ...home,
  ...about,
  ...programme,
  ...news,
  ...payment
};
