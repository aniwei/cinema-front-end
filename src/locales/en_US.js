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
  'common.purchase.check': 'Please confirm your booking.\n\nBooking confirmation: {title} x {count}\nTotal amount: {amount}\n\nPlease complete your payment within five minutes.',
  'common.movie.color': 'Color',
  'common.movie.blackwhite': 'Black and White',
  'footer.about.title': 'About Us',
  'footer.about.desc': 'Adjacent to the renowned Macao’s world heritage listed icon Ruins of St. Paul’s, the Cinematheque‧Passion, located at Travessa da Paixão No. 9-13, is a three-storey multifunctional building assembled including film screening, exhibition hall and film information room, local video storage, as well as film journals and book reading services.',
  'footer.about.address': 'Travessa da Paixão No. 9-13',
  'footer.about.address.title': 'Venue',
  ...error,
  ...home,
  ...menu,
  ...about,
  ...programme,
  ...news,
  ...payment
};
