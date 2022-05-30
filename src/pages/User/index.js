import React, { useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";

import { AuthContext } from "../../Contexts/AuthContext";

import { Title } from "../../components/Title";
import { Avatar } from "../../components/Avatar";
import { Checkbox } from "../../components/Checkbox";
import { Button } from "../../components/Button";
import { Box } from "../../components/Box";
import {
  Container,
  Div,
  Form,
  Input,
  ActionButtons,
  P,
  Header,
} from "./styles";

import { Pen, Plus, Trash, Check } from "phosphor-react";

const cookies = new Cookies();

export function User() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  function handleLogout() {
    setUser(null);
    cookies.remove("token");
  }

  // var name = user.email.substring(0, user.email.lastIndexOf("@"));

  return (
    <Container>
      <Header>
        <Box w="10px" />
        <span>
          <Avatar w="40px" h="40px" src={user.avatar} />
        </span>
        <Box w="10px" />
        <P>{user.email} </P>
        <Box w="1100px" />
        <span>
          <Button onClick={handleLogout}>Logout</Button>
        </span>
      </Header>
      <Div>
        <Title>To do</Title>
        <Box h="15px" />
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <Button
            disabled={todo.length === 0}
            mt={"0px"}
            mb={"0.4rem"}
            pdd={"0.1rem "}
            type="submit"
          >
            <Plus color="#fff" size={16} />
          </Button>
        </Form>

        {todos.map((todo) => (
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
      </Div>
    </Container>
  );
}
