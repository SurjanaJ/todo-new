import { collection, getDocs } from "firebase/firestore";
import { createContext, useState } from "react";
import { QueryClient, useQuery } from "react-query";
import { InputBar } from "./Components/InputBar";
import { List } from "./Components/List";
import { db } from "./config/firebase";

export const client = new QueryClient({});
export const AppProvider = createContext();
export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const todosCollection = collection(db, "todoList");

  const { isLoading, refetch } = useQuery(["todos"], async () => {
    const data = await getDocs(todosCollection);
    setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  });
  return (
    <AppProvider.Provider value={{ todos, setTodos, refetch, todosCollection }}>
      <div className="App d-flex align-items-center flex-column gap-3">
        <InputBar />
        <div className="display-4">Today's Tasks</div>
        <List />
      </div>
    </AppProvider.Provider>
  );
};
