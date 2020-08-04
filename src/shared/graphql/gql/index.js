import * as UserGQL from './user';
import * as GlobalGQL from './global';

export default {
  ...UserGQL,
  ...GlobalGQL
};
