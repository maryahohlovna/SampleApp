import StatusBar from '../components/StatusBar';
import AmbientGlow from '../components/AmbientGlow';
import MeditationPortal from '../components/MeditationPortal';
import FooterActions from '../components/PrimaryButton';
import styles from './WelcomeScreen.module.css';

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export default function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  return (
    <div className={styles.screen}>
      <AmbientGlow size={350} top={120} left={26} color="rgba(134, 243, 211, 0.35)" />
      <AmbientGlow size={250} top={450} left={-50} color="rgba(124, 102, 255, 0.4)" />
      <StatusBar />
      <div className={styles.hero}>
        <MeditationPortal />
      </div>
      <div className={styles.branding}>
        <p className={styles.kicker}>A Space for Being</p>
        <p className={styles.appName}>Stillpoint</p>
        <p className={styles.tagline}>
          Find your calm. Nurture your mind through effortless daily breath and stillness.
        </p>
      </div>
      <FooterActions label="Get Started" onClick={onGetStarted} />
    </div>
  );
}
