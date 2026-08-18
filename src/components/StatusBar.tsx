import { SignalHigh, Wifi, BatteryFull } from 'lucide-react';
import styles from './StatusBar.module.css';

export default function StatusBar() {
  return (
    <div className={styles.bar}>
      <p className={styles.time}>9:41</p>
      <div className={styles.icons}>
        <SignalHigh size={16} strokeWidth={2.25} />
        <Wifi size={16} strokeWidth={2.25} />
        <BatteryFull size={18} strokeWidth={2} />
      </div>
    </div>
  );
}
