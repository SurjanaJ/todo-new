import * as yup from "yup";
export const schema = yup.object().shape({
  task: yup.string().required("Please enter a task")
});
