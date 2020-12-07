import menu from './en_US/menu';
import home from './en_US/home';
import about from './en_US/about';
import programme from './en_US/programme';
import news from './en_US/news';
import payment from './en_US/payment';
import error from './en_US/error';

export default {
  'common.rating': 'Group: ',
  'common.payment.mpay.tips': 'MPay is recommended',
  'common.purchase.email.placeholder': 'Please enter your emaill',
  'common.purchase.code.placeholder': 'Please enter your verification code',
  'common.purchase.buy.button': 'Buy Now',
  'common.purchase.buy.quantity': 'Purchase quantity',
  'common.purchase.cancel.button': 'Cancel',
  'common.purchase.email.sender': 'Send',
  'common.purchase.mpay.check': 'Please confirm your booking.\n\nBooking confirmation: {title} x {count} {ticketType} \nTotal amount: {amount}\n\nThe web page will be redirected to MPay system for payment\nPlease complete your payment within five minutes.',
  'common.purchase.masterPay.check': 'Please confirm your booking.\n\nBooking confirmation: {title} x {count} {ticketType} \nTotal amount: {amount}\n\nThe web page will be redirected to Master Pay system for payment\nPlease complete your payment within five minutes.',
  'common.movie.color': 'Color',
  'common.movie.blackwhite': 'Black and White',
  'common.merchant.name': 'Cinematheque・Passion',
  'common.merchant.address': 'Endereço Travessa da Paixão, n.os 9-13, Macau',
  'footer.about.title': 'About Us',
  'common.movie.min': 'min',
  'footer.about.desc': 'Adjacent to the renowned Macao’s world heritage listed icon Ruins of St. Paul’s, the Cinematheque‧Passion, located at Travessa da Paixão No. 9-13, is a three-storey multifunctional building assembled including film screening, exhibition hall and film information room, local video storage, as well as film journals and book reading services.',
  'footer.about.address': 'Travessa da Paixão No. 9-13',
  'footer.about.address.title': 'Venue',
  'footer.about.profile': 'Statement on collection of personal data',
  ...error,
  ...home,
  ...menu,
  ...about,
  ...programme,
  ...news,
  ...payment
};
