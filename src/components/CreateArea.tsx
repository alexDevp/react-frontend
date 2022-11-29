import React, { useState } from "react";

const CreateArea = (props: any) => {
  
  const [task, setTask] = useState({
    title: "",
    description: "",
    userId: "636d3cd30edc4e6ca7bbfafa",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  };

  const submitTask = (event: any) => {
    props.onAdd(task);
    setTask({
      title: "",
      description: "",
      userId: "636d3cd30edc4e6ca7bbfafa"
    });
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={task.title}
          placeholder="Title"
        />
        <textarea
          name="description"
          onChange={handleChange}
          value={task.description}
          placeholder="Write a task..."
          rows={3}
        />
        <button onClick={submitTask}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
