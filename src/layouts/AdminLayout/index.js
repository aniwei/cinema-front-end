import { Redirect } from 'dva/router';
import { PureComponent } from 'react';
import Navigation from './components/Navigation';


class BasicLayout extends PureComponent {

  render() {
    return (
      <div>
        <Navigation />

        <main>  
          <Redirect to="/admin/user/signin" />
          {this.props.children}
        </main>

      </div>
    );
  }
}

export default BasicLayout;
