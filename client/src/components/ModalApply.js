import React, { useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addrequest } from "../JS/RequestSlice";
import Swal from "sweetalert2";

function ModalApply({ internship }) {
  const [modal, setModal] = useState(false);
  const user = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();
  const [request, setrequest] = useState({
    name: user?.name,
    lastname: user?.LastName,
    age: "",
    intrenshipname: internship?.internshipname,
    entityshipname: internship?.Entityname,
    email: user?.email,
    duration: internship?.Duration,
    phonenumber: "",
    diplome: "",
    skills: "",
  });
  return (
    <div>
      <button className="buttonapply" onClick={() => setModal(true)}>
        Apply
      </button>
      <PureModal
        header={internship.internshipname}
        footer={
          <div>
            <button>Cancel</button>
            <button
              onClick={() => {
                dispatch(addrequest(request));
                Swal.fire(
                  "Good job!",
                  "You applied for this internship!",
                  "Good luck!"
                );
              }}
            >
              Apply
            </button>
          </div>
        }
        isOpen={modal}
        width="758px"
        closeButton="close"
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <Form>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Age"
              onChange={(e) => setrequest({ ...request, age: e.target.value })}
            />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone Number"
              onChange={(e) =>
                setrequest({ ...request, phonenumber: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Diplome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Diplome"
              onChange={(e) =>
                setrequest({ ...request, diplome: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Skills</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Skills"
              onChange={(e) =>
                setrequest({ ...request, skills: e.target.value })
              }
            />
          </Form.Group>
        </Form>
      </PureModal>
      ;
    </div>
  );
}

export default ModalApply;
