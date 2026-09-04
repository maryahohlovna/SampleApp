import { Sparkles } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import FooterActions from '../components/PrimaryButton';
import styles from './CompletionScreen.module.css';

interface CompletionScreenProps {
  onRestart: () => void;
}

export default function CompletionScreen({ onRestart }: CompletionScreenProps) {
  return (
    <div className={styles.screen}>
      <div className={styles.content}>
        <StatusBar />
        <div className={styles.header}>
          <span className={styles.sparkleBadge}>
            <Sparkles size={28} strokeWidth={2} />
          </span>
          <p className={styles.headline}>You're all set</p>
          <p className={styles.summary}>Your journey to stillness begins now.</p>
        </div>
        <div className={styles.visualWrap}>
          <div className={styles.serenePortal} aria-hidden="true" />
        </div>
      </div>
      <FooterActions label="Start Meditating" onClick={onRestart} />
    </div>
  );
}
