import { Bell } from 'lucide-react';
import StatusBar from '../components/StatusBar';
import AmbientGlow from '../components/AmbientGlow';
import OnboardingHeader from '../components/OnboardingHeader';
import FooterActions from '../components/PrimaryButton';
import ToggleSwitch from '../components/ToggleSwitch';
import { TIME_SLOTS } from '../data/onboarding';
import styles from './DailyReminderScreen.module.css';

interface DailyReminderScreenProps {
  selectedSlotId: string;
  onSelectSlot: (id: string) => void;
  notificationsEnabled: boolean;
  onToggleNotifications: (checked: boolean) => void;
  onBack: () => void;
  onClose: () => void;
  onFinish: () => void;
}

export default function DailyReminderScreen({
  selectedSlotId,
  onSelectSlot,
  notificationsEnabled,
  onToggleNotifications,
  onBack,
  onClose,
  onFinish,
}: DailyReminderScreenProps) {
  const selectedSlot = TIME_SLOTS.find((slot) => slot.id === selectedSlotId) ?? TIME_SLOTS[0];
  const hourDisplay = String(selectedSlot.hour).padStart(2, '0');
  const minuteDisplay = String(selectedSlot.minute).padStart(2, '0');

  return (
    <div className={styles.screen}>
      <AmbientGlow size={350} top={400} left={26} color="rgba(134, 243, 211, 0.3)" />
      <div className={styles.content}>
        <StatusBar />
        <OnboardingHeader step={3} totalSteps={3} onBack={onBack} onClose={onClose} />
        <div className={styles.titleBlock}>
          <p className={styles.title}>Set a gentle reminder</p>
          <p className={styles.subtitle}>
            Building consistency is key to a calm mind. Choose a time slot that fits your current daily
            flow.
          </p>
        </div>
        <div className={styles.picker}>
          <div className={styles.bigClock}>
            <span className={styles.clockDigit}>{hourDisplay}</span>
            <span className={styles.clockColon}>:</span>
            <span className={`${styles.clockDigit} ${styles.clockDigitAccent}`}>{minuteDisplay}</span>
            <div className={styles.meridiem}>
              <span className={selectedSlot.meridiem === 'AM' ? styles.meridiemActive : styles.meridiemInactive}>
                AM
              </span>
              <span className={selectedSlot.meridiem === 'PM' ? styles.meridiemActive : styles.meridiemInactive}>
                PM
              </span>
            </div>
          </div>
          <div className={styles.slotGrid}>
            {TIME_SLOTS.map((slot) => {
              const selected = slot.id === selectedSlotId;
              return (
                <button
                  key={slot.id}
                  className={`${styles.slot} ${selected ? styles.slotSelected : ''}`}
                  onClick={() => onSelectSlot(slot.id)}
                  aria-pressed={selected}
                >
                  <span className={`${styles.slotLabel} ${selected ? styles.slotLabelSelected : ''}`}>
                    {slot.label}
                  </span>
                  <span className={styles.slotTime}>{slot.display}</span>
                </button>
              );
            })}
          </div>
          <div className={styles.toggleCard}>
            <div className={styles.toggleLeft}>
              <Bell size={20} strokeWidth={2} className={styles.bellIcon} />
              <div className={styles.toggleText}>
                <span className={styles.toggleTitle}>Send daily reminder</span>
                <span className={styles.toggleSubtitle}>Highly recommended for routine</span>
              </div>
            </div>
            <ToggleSwitch
              checked={notificationsEnabled}
              onChange={onToggleNotifications}
              label="Send daily reminder"
            />
          </div>
        </div>
      </div>
      <FooterActions label="Begin Your Journey" onClick={onFinish} />
    </div>
  );
}
