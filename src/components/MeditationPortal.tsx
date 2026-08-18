import styles from './MeditationPortal.module.css';

export default function MeditationPortal() {
  return (
    <div className={styles.portal} aria-hidden="true">
      <div className={styles.ring} />
    </div>
  );
}
