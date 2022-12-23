import { useState } from "react";

export const useForm = ({initialValues, onSubmit}) => {
  const [data, setData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submit UseForm", data);
    onSubmit(data);
  };

  return { form: data, handleChange, handleSubmit };
};
