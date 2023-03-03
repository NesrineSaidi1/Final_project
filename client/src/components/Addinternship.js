import React, { useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
import { addinternship } from "../JS/internshipSlice";
function Addinternship() {
  const [modal, setModal] = useState(false);
  const user = useSelector((state) => state.user?.user);
  const [newinternship, setnewinternship] = useState({
    UserName: user?.name,
    Entityname: "",
    Domain: "",
    Duration: "",
    Post_av: "",
    Salary: "",
    Location: "",
    Description: "",
    isPaid: "",
    Timing: "",
    img: "",
  });
  const dispatch = useDispatch();
  return (
    <div>
      <button className="buttonapply" onClick={() => setModal(true)}>
        Apply
      </button>
      <PureModal
        header="Add Internship"
        footer={
          <div>
            <button>Cancel</button>
            <button
              onClick={() => {
                dispatch(addinternship(newinternship));
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
       
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Entityname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Entityname"
              onChange={(e) =>
                setnewinternship({
                  ...newinternship,
                  Entityname: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            onChange={(e) =>
              setnewinternship({ ...newinternship, Domain: e.target.value })
            }
          >
            <Form.Label>Domain</Form.Label>
            <Form.Control type="text" placeholder="Enter Domain" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            onChange={(e) =>
              setnewinternship({ ...newinternship, Duration: e.target.value })
            }
          >
            <Form.Label>Duration</Form.Label>
            <Form.Control type="text" placeholder="Enter Duration" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            onChange={(e) =>
              setnewinternship({ ...newinternship, Post_av: e.target.value })
            }
          >
            <Form.Label>Post_av</Form.Label>
            <Form.Control type="text" placeholder="Enter Post_av" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            onChange={(e) =>
              setnewinternship({ ...newinternship, Salary: e.target.value })
            }
          >
            <Form.Label>Salary</Form.Label>
            <Form.Control type="text" placeholder="Enter Salary" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            onChange={(e) =>
              setnewinternship({ ...newinternship, Location: e.target.value })
            }
          >
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Enter Location" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            onChange={(e) =>
              setnewinternship({
                ...newinternship,
                Description: e.target.value,
              })
            }
          >
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Description" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            onChange={(e) =>
              setnewinternship({ ...newinternship, isPaid: e.target.value })
            }
          >
            <Form.Label>isPaid</Form.Label>
            <Form.Control type="text" placeholder="Enter isPaid" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            onChange={(e) =>
              setnewinternship({ ...newinternship, Timing: e.target.value })
            }
          >
            <Form.Label>Timing</Form.Label>
            <Form.Control type="text" placeholder="Enter Timing" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            onChange={(e) =>
              setnewinternship({ ...newinternship, img: e.target.value })
            }
          >
            <Form.Label>img</Form.Label>
            <Form.Control type="text" placeholder="Enter img" />
          </Form.Group>
        </Form>
      </PureModal>
      ;
    </div>
  );
}

export default Addinternship;
