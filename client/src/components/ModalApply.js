import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addrequest } from "../JS/RequestSlice";
function ModalApply() {
  const [newrequest, setnewrequest] = useState({
    name: "",
    lastname: "",
    age: "",
    email: "",
    Phonenumber: "",
    diplome: "",
    skills: "",
  });
  const dispatch = useDispatch();
  return (
    <div style={{ width: "70%" }}>
      <div className="Form">
        {" "}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h3>Please Enter Your Details</h3>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              onChange={(e) =>
                setnewrequest({ ...newrequest, name: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Last name"
              onChange={(e) =>
                setnewrequest({ ...newrequest, lastname: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your age"
              onChange={(e) =>
                setnewrequest({ ...newrequest, age: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              validated
              type="email"
              placeholder="Enter your email"
              onChange={(e) =>
                setnewrequest({ ...newrequest, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              onChange={(e) =>
                setnewrequest({ ...newrequest, Phonenumber: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Diplome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your diplome"
              onChange={(e) =>
                setnewrequest({ ...newrequest, diplome: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Skills</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your skills"
              onChange={(e) =>
                setnewrequest({ ...newrequest, skills: e.target.value })
              }
            />
          </Form.Group>
        </Form>
        <Button onClick={() => dispatch(addrequest(newrequest))}>Apply</Button>
      </div>
    </div>
  );
}

export default ModalApply;
