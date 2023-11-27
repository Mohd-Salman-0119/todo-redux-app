import React from "react";
import { Route, Routes } from "react-router-dom";
import EditTodo from "../Pages/EditTodo";
import AddTodo from "../Pages/AddTodo";
import Login from "../Pages/Login";
import Todo from "../Pages/Todo";
import PrivateRoute from "./PrivateRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/update/:id"
        element={
          <PrivateRoute>
            <EditTodo />
          </PrivateRoute>
        }
      />
      <Route
        path="/addtodo"
        element={
          <PrivateRoute>
            <AddTodo />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Todo />} />
    </Routes>
  );
};
export default MainRoutes;
