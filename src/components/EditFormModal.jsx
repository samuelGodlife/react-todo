import { X } from 'lucide-react';
import MaxWidthWrapper from './MaxWidthWrapper';
import TodoForm from './TodoForm';
import styles from './EditFormModal.module.css'; // Import the CSS module

export default function EditFormModal({ isEdit, todo, close }) {
  return (
    <div className={styles.relativeContainer} role="dialog">
      <div className={styles.backdrop}></div>

      <MaxWidthWrapper className={styles.wrapper}>
        <button
          onClick={close}
          className={styles.closeButton}
        >
          <X size={24} />
        </button>
        <TodoForm isEdit={isEdit} todo={todo} />
      </MaxWidthWrapper>
    </div>
  );
}
