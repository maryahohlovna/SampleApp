import styles from './ToggleSwitch.module.css';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

export default function ToggleSwitch({ checked, onChange, label }: ToggleSwitchProps) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      className={`${styles.track} ${checked ? styles.trackOn : ''}`}
      onClick={() => onChange(!checked)}
    >
      <span className={`${styles.knob} ${checked ? styles.knobOn : ''}`} />
    </button>
  );
}
