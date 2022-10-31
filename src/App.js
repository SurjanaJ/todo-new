import { QueryClient, QueryClientProvider } from "react-query";
import "./styles.css";
import { TodoList } from "./TodoList";

const client = new QueryClient({});

export default function App() {
  //get the database

  return (
    <QueryClientProvider client={client}>
      <TodoList />
    </QueryClientProvider>
  );
}
