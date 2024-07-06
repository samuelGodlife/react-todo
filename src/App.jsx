import { createContext, useState } from 'react';
import Todos from './components/Todos';
import MaxWidthWrapper from './components/MaxWidthWrapper';
import TodoForm from './components/TodoForm';
import EditFormModal from './components/EditFormModal';
import styles from './App.module.css'; // Import the CSS module

export const TodoContext = createContext();

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [edittingTodo, setEdittingTodo] = useState({});
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
      date: {
        date: 1,
        month: 6,
        year: 2024,
      },
      time: '12:30',
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
      date: {
        date: 1,
        month: 6,
        year: 2024,
      },
      time: '12:30',
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
      date: {
        date: 1,
        month: 6,
        year: 2024,
      },
      time: '12:30',
    },
  ]);

  const toggleCompleted = (todoId) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  const deleteTodo = (todoId) => {
    const updateTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(updateTodos);
  };

  const addTodo = (todoTitle, todoDate) => {
    if (todoTitle === '') return;

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
      ...todoDate,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };

  const editTodo = (todoId, todoData) => {
    const index = todos.findIndex((todo) => todo.id === todoId);

    const updatedTodos = [...todos];
    updatedTodos[index] = { ...updatedTodos[index], ...todoData };
    setTodos(updatedTodos);
  };

  const handleOpenModal = (todoId) => {
    const index = todos.findIndex((todo) => todo.id === todoId);

    setEdittingTodo(todos[index]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <TodoContext.Provider
      value={{
        toggleCompleted,
        deleteTodo,
        handleOpenModal,
        handleCloseModal,
        editTodo,
      }}
    >
      <main className={styles.main}>
        <MaxWidthWrapper>
          <h1 className={styles.header}>Welcome Back!</h1>
          <TodoForm addTodo={addTodo} />
          <Todos todos={todos} />
        </MaxWidthWrapper>
      </main>

      {showModal && (
        <EditFormModal
          isEdit={showModal}
          close={handleCloseModal}
          todo={edittingTodo}
        />
      )}
    </TodoContext.Provider>
  );
}
