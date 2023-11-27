import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  fetchTodos,
  toggleTodo,
} from "../Redux/TodoReducer/action";

const TodoRow = ({ todo, index }) => {
  const { id, title, status } = todo;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    navigate("/addtodo");
  };
  const handleEditTodo = (id) => {
    navigate(`/update/${id}`, { state: { todo } });
  };
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id)).then(() => dispatch(fetchTodos()));
  };

  const handleToggleStatus = () => {
    dispatch(toggleTodo(id, status)).then(() => dispatch(fetchTodos()));
  };

  return (
    <tr className="bg-[#242424] border border-black font-semibold">
      <td className="p-3">{index}</td>
      <td className="p-3">{title}</td>
      <td className="p-3">
        <Button
          type="button"
          name={status ? "Completed" : "Not-Completed"}
          className="bg-gray-600 w-max rounded-lg font-semibold"
          onClick={() => {
            handleToggleStatus(id);
          }}
        />
      </td>
      <td className="p-3">
        <Button
          type="button"
          name="Edit"
          onClick={() => {
            handleEditTodo(id);
          }}
          className="bg-green-600 w-[80px] rounded-lg font-semibold"
        />
      </td>
      <td className="p-3">
        <Button
          type="button"
          name="Add"
          onClick={handleAddTodo}
          className="bg-blue-600 w-[80px] rounded-lg font-semibold"
        />
      </td>
      <td className="p-3">
        <Button
          type="button"
          name={"Delete"}
          onClick={() => {
            handleDeleteTodo(id);
          }}
          className="bg-red-600 w-[80px] rounded-lg font-semibold"
        />
      </td>
    </tr>
  );
};

export default TodoRow;
