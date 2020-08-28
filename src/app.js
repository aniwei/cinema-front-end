import style from './assets/style/style.less'

export const dva = {
  config: {
    onError(error) {
      // error.preventDefault();

      if (error.graphQLErrors) {
        const firstError = error.graphQLErrors[0];
        const { body } = firstError.extensions.response || {};

        if (body) {
          if (body.code === 209) {
            window.localStorage.removeItem('token');
  
            return window.location.replace('/admin/user.signin');
          }
        }

      }

      console.error(error.message);
      alert(error.message);
    },
  },
};
