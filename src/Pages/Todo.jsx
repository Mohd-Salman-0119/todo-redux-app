import React from "react";
import TodoRow from "../Components/TodoRow";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTodos } from "../Redux/TodoReducer/action";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.TODO.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className="w-[80%] m-auto p-2 mt-10">
      <table className="w-full text-white text-center border border-black p-10">
        <thead className="bg-[#42855B]">
          <tr className="">
            <th className="p-3">I'd</th>
            <th className="p-3">Title</th>
            <th className="p-3">Status</th>
            <th className="p-3">Edit</th>
            <th className="p-3">Add</th>
            <th className="p-3">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos?.reverse().map((todo,index) => {
            return <TodoRow 
            key={todo.id}
            todo={todo}
            index={index + 1}
            />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
