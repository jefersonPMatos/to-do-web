import React, { useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../Contexts/AuthContext";

import { Avatar } from "../../components/Avatar";
import { Checkbox } from "../../components/Checkbox";
import { Button } from "../../components/Button";
import { Box } from "../../components/Box";
import Card from "../../components/Card";
import { Container, Form, Input, ActionButtons, Header } from "./styles";

import { Pen, Plus, Trash, Check } from "phosphor-react";
import Api from "../../services/Api";

const cookies = new Cookies();

export function User() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const token = cookies.get("token");
  Api.defaults.headers["authorization"] = token;

  useEffect(() => {
    Api.get("task/").then((res) => {
      setTodos(res.data.tasks);
    });

    // const json = localStorage.getItem("todos");
    // const loadedTodos = JSON.parse(json);
    // if (loadedTodos) {
    //   setTodos(loadedTodos);
    // }
  }, []);

  useEffect(() => {
    const tasks = JSON.stringify(todos);
    localStorage.setItem("todos", tasks);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };

    Api.post("task/", newTodo)
      .then((res) => console.log(newTodo))
      .catch(console.log);

    setTodos([...todos, newTodo]);
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    Api.delete(`task/${id}`, todo)
      .then((res) => console.log(res))
      .catch(console.log);
  }

  function submitEdits(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;

        Api.post(`task/${id}`, todo)
          .then((res) => console.log(res))
          .catch(console.log);
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  function handleLogout() {
    setUser(null);
    cookies.remove("token");
    navigate("/login");
  }

  return (
    <Card>
      <Container>
        <Header>
          <Avatar w="50px" h="50px" src={user.avatar} />
          <Box w="10px" />
          <p>{user.email} </p>
          <Box w="20px" />
        </Header>
        <Button link onClick={handleLogout}>
          Logout
        </Button>
        <Box h="50px" />
        <h2>
          <span style={{ color: "#00ca4e" }}>{"<"}</span>
          To do
          <span style={{ color: "#00ca4e" }}>{"/>"}</span>
        </h2>
        <Box h="15px" />
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <Button link disabled={todo.length === 0} type="submit">
            <Plus color="#fff" size={20} />
          </Button>
        </Form>
        <Box h="20px" />

        {todos &&
          todos.map((todo) => (
            <ActionButtons key={todo.id}>
              {todo.id === todoEditing ? (
                <Input
                  defaultValue={todo.text}
                  type="text"
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                <Checkbox>{todo.text}</Checkbox>
              )}
              <ActionButtons>
                {todo.id === todoEditing ? (
                  <Check
                    cursor="pointer"
                    color="#fff"
                    size={20}
                    onClick={() => submitEdits(todo.id)}
                  />
                ) : (
                  <Pen
                    cursor="pointer"
                    color="#fff"
                    size={20}
                    onClick={() => setTodoEditing(todo.id)}
                  />
                )}

                <Trash
                  cursor="pointer"
                  color="#fff"
                  size={20}
                  onClick={() => deleteTodo(todo.id)}
                />
              </ActionButtons>
            </ActionButtons>
          ))}
      </Container>
    </Card>
  );
}
