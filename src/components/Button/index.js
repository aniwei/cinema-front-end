import classnames from 'classnames';

import styles from './index.less';

export default function Button (props) {
  const { disabled, primary, secondary, lighthigh, className, children } = props;
  const classes = classnames({
    [styles.disabled]: disabled,
    [styles.primary]: primary,
    [styles.secondary]: secondary,
    [styles.lighthigh]: lighthigh
  }, styles.button, className);

  return (
    <button className={classes}>
      {children}
    </button>
  );
}