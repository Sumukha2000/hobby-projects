import React from "react";
import "./task.css";
import classNames from "classnames";
import { useStore } from "../store";

const STATUS = "ONGOING";

function Task({ title }) {
  const tasks = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  return (
    <div className="task">
      <div>{title}</div>
      <div className="bottomWrapper">
        <div></div>
        <div className={classNames("status", tasks.state)}>{tasks.state}</div>
      </div>
    </div>
  );
}

export default Task;
