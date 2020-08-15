
import styles from './index.less';
import classnames from 'classnames';

export default function Arc (props) {
  const { className, reverse } = props;
  const classes = classnames(
    styles.arc, 
    className,
    { [styles.arc_reverse]: reverse }, 
  );

  return (
    <div className={classes}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="60" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 100 C40 0 60 0 100 100 Z"></path>
      </svg>
    </div>
  );
}