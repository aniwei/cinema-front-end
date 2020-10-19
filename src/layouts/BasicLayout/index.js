import { PureComponent } from 'react';
import { connect } from 'dva';
import { HeaderLayout, FooterLayout } from '../../components';

class BasicLayout extends PureComponent {
  

  render() {
    return (
      <div>
        <HeaderLayout {...this.props} />

        <main>
          {this.props.children}
        </main>

        <FooterLayout {...this.props} />
      </div>
    );
  }
}

export default connect()(BasicLayout);
