import { connect } from 'dva';
import { Redirect } from 'dva/router';
import { PureComponent } from 'react';

import Spinner from '@atlaskit/spinner';

import Navigation from './components/Navigation';

import styles from './index.less';


class BasicLayout extends PureComponent {

  componentDidMount () {
    this.getUserInformation();
  }

  async getUserInformation () {  
    const { dispatch, token, user } = this.props;
    
    if (token) {
      if (user === null) {
        await dispatch({
          type: 'AdminUser/viewer'
        });
      }
    }
  }

  render() {
    const { user, token, location } = this.props;    


    if (location.pathname === '/admin/user/signin') {
      return this.props.children;
    }

    if (token) {
      if (user) {
        return (
          <div className={styles.admin}>
            <header className={styles.header}>
              <Navigation />
            </header>
            <main className={styles.content}>{this.props.children}</main>
          </div>
        )
      }

      return <Spinner />
    }


    return <Redirect to="/admin/user/signin" />;
  }
}

export default connect(({ AdminUser }) => {
  return {
    ...AdminUser
  }
})(BasicLayout);
