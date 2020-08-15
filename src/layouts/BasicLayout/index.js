import { PureComponent } from 'react';
import { connect } from 'dva';
import { GlobalHeader, GlobalFooter, GlobalContact } from '../../components';

class BasicLayout extends PureComponent {

  render() {
    return (
      <div>
        <GlobalHeader {...this.props} />

        <main>
          {this.props.children}
        </main>

        <GlobalContact />
        <GlobalFooter />
      </div>
    );
  }
}

export default connect()(BasicLayout);
