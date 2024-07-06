import Checkbox from './Checkbox';
import { SquarePen, Trash2 } from 'lucide-react';
import { useContext } from 'react';
import { TodoContext } from '../App';
import styles from './TodoItem.module.css'; // Import the CSS module

function TodoItem({ todo }) {
  const { toggleCompleted, deleteTodo, handleOpenModal } =
    useContext(TodoContext);

  return (
    <div className={styles.todoItem}>
      <div className={styles.todoDetails}>
        <Checkbox toggleCompleted={toggleCompleted} todoId={todo.id} />
        <div className={styles.todoTextContainer}>
          <p className={todo.completed ? styles.completed : ''}>
            {todo.title}
          </p>
          <p className={styles.todoDate}>{`${todo.time} ${todo.date.date}-${todo.date.month}-${todo.date.year}`}</p>
        </div>
      </div>

      <div className={styles.todoActions}>
        <button
          onClick={() => deleteTodo(todo.id)}
          className={styles.actionButton}
        >
          <Trash2 size={20} className={styles.trashIcon} />
        </button>
        <button
          onClick={() => handleOpenModal(todo.id)}
          className={styles.actionButton}
        >
          <SquarePen size={20} />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
