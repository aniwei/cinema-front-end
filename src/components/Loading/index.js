import styles from './index.less';

export default function Loading () {
  return (
    <div className={styles.loading}>
      <svg class="qodef-svg-circle"><circle cx="50%" cy="50%" r="45%"></circle></svg>
    </div>
  )
}