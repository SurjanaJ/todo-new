import { useContext } from "react";
import { useForm } from "react-hook-form";
import { schema } from "../schema";
import { AppProvider } from "../TodoList";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc } from "firebase/firestore";

export const InputBar = () => {
  const { refetch, todosCollection } = useContext(AppProvider);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (newData) => {
    await addDoc(todosCollection, {
      name: newData.task,
      complete: false
    });
    reset();
    refetch();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-75 ">
      <div className="d-flex input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task"
          {...register("task")}
        />
        <input className="submit btn" type="submit" value="Add Task" />
      </div>
      <p className="text-danger fst-italic"> {errors.task?.message} </p>
    </form>
  );
};
