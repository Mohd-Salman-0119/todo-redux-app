import React, { useEffect } from "react";
import InputFeild from "../Components/InputFeild";
import Button from "../Components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editTodo } from "../Redux/TodoReducer/action";

const EditTodo = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  useEffect(() => {
   
    if (state && state.todo) {
      setTitle(state.todo.title);
    }
  }, [state]);

  const navigate = useNavigate()


  const navigateToBack = ()=>{
    navigate('/')
  }

  const handleEditTodo = () => {
    const payload = {
      ...state,
      title,
    };

    dispatch(editTodo(state.todo.id, payload, navigateToBack))
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20 m-auto shadow-md w-max p-8 bg-[#42855B] rounded-sm">
      <InputFeild
        type="text"
        placeholder="Add todo here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button
        name="Edit Todo"
        className="bg-blue-800 text-center w-[250px] mt-3"
        onClick={handleEditTodo}
      />
    </div>
  );
};

export default EditTodo;
