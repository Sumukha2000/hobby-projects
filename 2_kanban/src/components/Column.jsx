import React, { useMemo } from "react";
import "./column.css";
import Task from "./Task";
import { useState } from "react";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";

function Column({ state }) {
  const tasks = useStore((store) =>
    store.tasks?.filter((task) => task.state === state)
  );

  const addTask = useStore((store) => store.addTask);
  return (
    <div className="column">
      <div className="titleWrapper">
        <p>{state}</p>
        <button
          onClick={() => {
            addTask("testtask" + state, state);
          }}
        >
          Add
        </button>
      </div>
      {tasks?.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
    </div>
  );
}

export default Column;
