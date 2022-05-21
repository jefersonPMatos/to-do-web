import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Contexts/AuthContext";

import { Title } from "../../components/Title";
import { Avatar } from "../../components/Avatar";
import { Checkbox } from "../../components/Checkbox";
import { Button } from "../../components/Button"
import { Container, Div, Form, P, Input, LabelStyle } from "./styles";

import { Pen, Plus, Trash, Check } from "phosphor-react";

export function User() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

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

  return (
    <Container>
      <Div>
        <Avatar />
        <Title>Hello </Title>
      </Div>
      <Div>
        <Title>Tarefas</Title>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <Button type="submit"><Plus color="#fff" size={24} /></Button>
        </Form>

        {todos.map((todo) => (
          <Div key={todo.id}>
            {todo.id === todoEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <Checkbox>{todo.text}</Checkbox>
            )}

            {todo.id === todoEditing ? (
              <Button onClick={() => submitEdits(todo.id)}>
                <Check color="#fff" size={24} />
              </Button>
            ) : (
              <Button onClick={() => setTodoEditing(todo.id)}>
                <Pen color="#fff" size={24} />
              </Button>
            )}
            <Button onClick={() => deleteTodo(todo.id)}>
              <Trash color="#fff" size={24} />
            </Button>
          </Div>
        ))}
      </Div>
    </Container>
  );
}
