import React, { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import {
  Col,
  Container,
  FormControl,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";

const App = (props) => {
  const [userInput, setUserInput] = useState(""); // input state
  const [listTodo, setListTodo] = useState([]); // list of todo state

  const updateInput = (value) => setUserInput(value); // update input state on change
  const addItem = () => {
    // ====== empty input field check
    if (userInput === "") {
      alert("Add some todo");
      return false;
    }

    // ===== prepare todo array
    const tempInput = {
      id: Math.random(),
      value: userInput,
    };
    listTodo.push(tempInput); // push new todo
    setListTodo(listTodo); // update state
    setUserInput(""); // clear input field
  };
  const removeTodo = (id) => {
    const tempTodo = listTodo.filter((item) => item.id != id);
    setListTodo(tempTodo);
  };
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
          fontWeight: "bolder",
        }}
      >
        TODO LIST
      </Row>
      <hr />
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <InputGroup className="mb-3">
            <FormControl
              type="text"
              value={userInput}
              placeholder="add item..."
              size="lg"
              onChange={(event) => updateInput(event.target.value)}
              aria-label="add something"
              aria-describedby="basic-addon2"
            />
            <Button variant="dark" size="lg" onClick={() => addItem()}>
              Add
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup>
            {listTodo.map((todo, i) => (
              <ListGroup.Item
                variant="dark"
                key={i}
                onClick={() => removeTodo(todo.id)}
              >
                {todo.value}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
