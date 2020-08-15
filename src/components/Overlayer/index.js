import classnames from 'classnames';
import styles from './index.less';

export default function Overlayer (props) {
  const classes = classnames(
    styles.overlayer, 
    props.className,
  );

  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}