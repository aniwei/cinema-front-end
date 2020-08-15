import { Route, Redirect } from 'dva/router';

export default function (props) {
  const { route } = props;
  const { component: Component } = route;

  const render = (props) => {
    return false ? <Component { ...props } /> : <Redirect to="/admin/user/signin" />
  }

  return <Route render={render} />;
}