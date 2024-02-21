/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useRef, useState } from "react";
import { Task } from "./components/tasks";
import styles from './App.module.css'

const data = [
  {
    id: 1,
    title: "estudar react por 30 minutos",
    isCompleted: 'false',
  }
];

export function App() {

  const inputref = useRef(null)
  const [tasks,setTasks] = useState([])

  function handleAddTask(){
    const newTask = {
      id: tasks.length + 1,
      title : inputref.current.value,
      isCompleted: 'false',
    }

    setTasks([...tasks, newTask])

    inputref.current.value = ''

  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Todo App</h1>
      <div className={styles.inputgroup}>
      <input className={styles.input} placeholder="nome da tarefa" ref={inputref} type="text" />
      <button className={styles.button} onClick={handleAddTask}>Add</button>
      </div>
      {tasks.length > 0 && tasks.map((item) => (
       <Task key = {item.id} task={item}/>
      ))}
      {!tasks.length && <p className={styles.p}>nenhuma tarefa ainda... 😀 </p>}
    </main>
  );
}