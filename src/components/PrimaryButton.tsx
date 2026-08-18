import styles from './PrimaryButton.module.css';

interface FooterActionsProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function FooterActions({ label, onClick, disabled }: FooterActionsProps) {
  return (
    <div className={styles.footer}>
      <button className={styles.button} onClick={onClick} disabled={disabled}>
        {label}
      </button>
      <div className={styles.homeIndicator}>
        <div className={styles.pill} />
      </div>
    </div>
  );
}
