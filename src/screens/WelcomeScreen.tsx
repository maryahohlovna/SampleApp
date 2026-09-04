import StatusBar from '../components/StatusBar';
import FooterActions from '../components/PrimaryButton';
import styles from './WelcomeScreen.module.css';

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export default function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  return (
    <div className={styles.screen}>
      <div className={styles.background} aria-hidden="true" />
      <StatusBar />
      <div className={styles.brandCenter}>
        <p className={styles.appName}>Stillness</p>
        <p className={styles.tagline}>Find your calm.</p>
      </div>
      <FooterActions label="Get Started" onClick={onGetStarted} />
    </div>
  );
}
