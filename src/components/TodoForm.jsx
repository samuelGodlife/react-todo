import { useContext, useRef } from 'react';
import { TodoContext } from '../App';
import styles from './TodoForm.module.css'; // Import the CSS module

function dateConversion(data) {
  const date = new Date(data);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return { hour, minute, day, month, year };
}

function parseTime(data) {
  const month = data.date.month < 10 ? `0${data.date.month}` : data.date.month;
  const date = data.date.date < 10 ? `0${data.date.date}` : data.date.date;

  return `${data.date.year}-${month}-${date}T${data.time}`;
}

export default function TodoForm({ addTodo, isEdit, todo }) {
  const formRef = useRef(null);
  const { handleCloseModal, editTodo } = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const title = formData.get('title');
    const { hour, minute, day, month, year } = dateConversion(
      formData.get('date')
    );

    const dateTime = {
      date: {
        date: day,
        month,
        year,
      },
      time: `${hour < 10 ? `0${hour}` : hour}:${
        minute < 10 ? `0${minute}` : minute
      }`,
    };

    if (!isEdit) {
      addTodo(title, dateTime);
      formRef.current.reset();
    } else {
      const newTodo = {
        id: todo.id,
        title,
        completed: false,
        ...dateTime,
      };

      editTodo(todo.id, newTodo);
      handleCloseModal();
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={(event) => handleSubmit(event)}
      className={styles.formContainer}
    >
      <input
        name="title"
        type="text"
        defaultValue={isEdit ? todo.title : undefined}
        placeholder="Add your todo"
        className={styles.inputField}
      />
      <div className={styles.flexContainer}>
        <input
          name="date"
          type="datetime-local"
          defaultValue={isEdit ? parseTime(todo) : undefined}
          className={styles.dateInput}
          required
        />
        <button className={styles.submitButton}>
          {isEdit ? 'Edit' : 'Add'}
        </button>
        {isEdit && (
          <button className={styles.cancelButton}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
