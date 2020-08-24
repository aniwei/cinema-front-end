import * as MovieGQL from './movie';
import * as UserGQL from './user';
import * as TicketGQL from './ticket';

export default {
  ...MovieGQL,
  ...UserGQL,
  ...TicketGQL
};
