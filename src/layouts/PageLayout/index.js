import { PureComponent } from 'react';
import { connect } from 'dva';
import { GlobalHeader, GlobalFooter, GlobalPagingTitle } from '../../components';

class PageLayout extends PureComponent {

  render() {
    return (
      <div>
        <GlobalHeader />

        <main>
          <GlobalPagingTitle />

          {this.props.children}
        </main>

        <GlobalFooter />
      </div>
    );
  }
}

export default connect()(PageLayout);
