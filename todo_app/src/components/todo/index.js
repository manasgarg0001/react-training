import Input from "../input/index";
import "./style.css";
import { useState } from "react";
const Todolist = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      {isEditing ? (
        <div className="todo-list">
          <Input type="checkbox" className="cbox" />
          <input value={props.task} />
          <button
            className="add-button"
            onClick={() => {
              setIsEditing(false);
              props.onEdit();
            }}
          >
            update
          </button>
          <button
            className="del-button"
            onClick={() => props.onDelete(props.id)}
          >
            X
          </button>
        </div>
      ) : (
        <div className="todo-list">
          <Input type="checkbox" className="cbox" />
          <p>{props.task}</p>
          <button
            className="add-button"
            onClick={() => {
              setIsEditing(true);
              props.onEdit();
            }}
          >
            edit
          </button>
          <button
            className="del-button"
            onClick={() => {
              props.onDelete(props.id);
            }}
          >
            X
          </button>
        </div>
      )}
    </>
  );
};
export default Todolist;
