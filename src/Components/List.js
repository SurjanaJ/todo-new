import { deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { useQuery } from "react-query";
import { db } from "../config/firebase";
import { AppProvider } from "../TodoList";

export const List = () => {
  const { todos, refetch, todosCollection } = useContext(AppProvider);

  const removeTask = async (id) => {
    const taskDoc = doc(db, "todoList", id);
    await deleteDoc(taskDoc);
    refetch();
  };

  const completeTask = async (id, complete) => {
    const taskDoc = doc(db, "todoList", id);
    const newField = { complete: !complete };
    await updateDoc(taskDoc, newField);
    refetch();
  };

  return (
    <div className="w-75">
      <ul className="list-group list-group-flush rounded ">
        {todos.map((todo) => {
          return (
            <li
              style={{ backgroundColor: todo.complete ? "#E9EDC9" : "#FAEDCD" }}
              className="list-group-item text-wrap d-flex justify-content-between "
            >
              <div>
                <input
                  type="checkbox"
                  onClick={() => completeTask(todo.id, todo.complete)}
                  checked={todo.complete}
                />{" "}
                {todo.name}{" "}
              </div>
              <div
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeTask(todo.id)}
              >
                {" "}
                X{" "}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
