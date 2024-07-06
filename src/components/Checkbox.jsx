import { Check } from 'lucide-react';
import styles from './Checkbox.module.css'; // Import the CSS module

export default function Checkbox({ toggleCompleted, todoId }) {
  return (
    <div className={styles.relativeContainer}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={() => toggleCompleted(todoId)}
      />
      <span className={styles.checkboxBackground}></span>
      <Check
        className={styles.checkIcon}
        strokeWidth={3}
        size={24}
      />
    </div>
  );
}
