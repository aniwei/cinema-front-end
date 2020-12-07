import menu from './pt_PT/menu';
import home from './pt_PT/home';
import about from './pt_PT/about';
import programme from './pt_PT/programme';
import news from './pt_PT/news';
import payment from './pt_PT/payment';
import error from './pt_PT/error';

export default {
  'common.rating': 'Classificação: ',
  'common.payment.mpay.tips': 'MPay Recomendado',
  'common.purchase.email.placeholder': 'Introduza o email',
  'common.purchase.code.placeholder': 'Introduza o código de verificação',
  'common.purchase.buy.button': 'Compra',
  'common.purchase.buy.quantity': 'Quantidade de compra',
  'common.purchase.cancel.button': 'Cancelar',
  'common.purchase.email.sender': 'Obter',
  'common.purchase.mpay.check': 'Por favor confirme a reserva.\n\nConfimação da reserve: {title} x {count} {ticketType} \nPreço total: {amount}\n\nA página web será redirecionada para o sistema do MPay para o pagamento\nPor favor complete o pagamento no prazo de cinco minutos.',
  'common.purchase.masterPay.check': 'Por favor confirme a reserva.\n\nConfimação da reserve: {title} x {count} {ticketType} \nPreço total: {amount}\n\nA página web será redirecionada para o sistema do Master Pay para o pagamento\nPor favor complete o pagamento no prazo de cinco minutos.',
  'common.movie.color': 'Cores',
  'common.movie.blackwhite': 'Preto e branco',
  'common.merchant.name': 'Cinemateca · Paixão',
  'common.merchant.address': 'Endereço Travessa da Paixão, n.os 9-13, Macau',
  'footer.about.title': 'Sobre nós',
  'common.movie.min': 'min',
  'footer.about.desc': 'Situada na Travessa da Paixão no.º 9 - 13, perto das Ruínas de S. Paulo, inscritas na Lista do Património Mundial, a Cinemateca ∙ Paixão está instalada num edifício de três andares multifuncional, que inclui a projecção de filmes, espaço para exibições, espaços de informação dos filmes, armazenamento de vídeos locais, assim como espaços para a leitura de livros relativos ao cinema.',
  'footer.about.address': 'Travessa da Paixão No. 9-13',
  'footer.about.address.title': 'Localização',
  "footer.about.profile": "Declaração de recolha de dados pessoais",
  ...error,
  ...home,
  ...menu,
  ...about,
  ...programme,
  ...news,
  ...payment
};
