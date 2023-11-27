import React from "react";
import InputFeild from "../Components/InputFeild";
import Button from "../Components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../Redux/TodoReducer/action";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const payload = {
      title,
      status: false,
    };
    setTitle("")
    dispatch(addNewTodo(payload));
   
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20 m-auto shadow-md w-max p-8 bg-[#42855B] rounded-sm">
      <InputFeild
        type="text"
        placeholder="Add todo here..."
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Button
        name="Add Todo"
        className="bg-blue-800 text-center w-[250px] mt-3"
        onClick={handleAddTodo}
      />
    </div>
  );
};

export default AddTodo;
