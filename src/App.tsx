import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Task from "./components/Task";
import CreateArea from "./components/CreateArea";
import {TaskDataServiceCreate, TaskDataServiceGetAll, TaskDataServiceDelete} from "./services/task.service";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const updateTasks = () => {
    TaskDataServiceGetAll().then((tasks:any) => {
      setTasks(tasks.data.tasks);
    }).catch((e) => {alert(e); console.log(e)})
  }

useEffect(() => {
  updateTasks()
}, [])

  const addTask = (newTask: any) => {
    TaskDataServiceCreate(newTask);
    updateTasks()
  }

  function deleteTask(id:any) {
    TaskDataServiceDelete(id);
    updateTasks()
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addTask} />
      {tasks.map((taskItem:any, index) => {
        return (
          <Task
            key={index}
            id={taskItem._id}
            title={taskItem.title}
            content={taskItem.description}
            onDelete={deleteTask}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
