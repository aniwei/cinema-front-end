import classnames from 'classnames';
import styles from './index.less';

export default function Container (props) {
  return (
    <div className={classnames(styles.container, props.className)}>
      {props.children}
    </div>
  )
}