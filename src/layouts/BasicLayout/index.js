import { PureComponent } from 'react';
import { connect } from 'dva';
import { GlobalHeader, GlobalFooter } from '../../components';

class BasicLayout extends PureComponent {

  render() {
    return (
      <div>
        <GlobalHeader {...this.props} />

        <main>
          {this.props.children}
        </main>

        <GlobalFooter />
      </div>
    );
  }
}

export default connect()(BasicLayout);
