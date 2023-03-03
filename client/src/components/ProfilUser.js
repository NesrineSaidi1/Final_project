import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import Form from "react-bootstrap/Form";
import "../ProfilUser.css";
import Table from "react-bootstrap/Table";
import { edituser, logout } from "../JS/userSlice/userSlice";
import { deleterequest } from "../JS/RequestSlice";
import Swal from "sweetalert2";
function ProfilUser({ ping, setping }) {
  const user = useSelector((state) => state.user?.user);
  const request = useSelector((state) => state.request?.requestList);
  console.log(request);
  const [modal, setModal] = useState(false);
  // const [user, setUser] = useState(second);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [edit, setedit] = useState({
    img: user?.img,
    name: user?.name,
    LastName: user?.LastName,
    age: user?.age,
    email: user?.email,
    User_cv: user?.User_cv,
  });
  return (
    <div style={{ position: "absolute", marginTop: "70px" }}>
      <div>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <div className="container bootstrap snippets bootdey">
          <div className="row">
            <div className="profile-nav col-md-3">
              <div className="panel">
                <div className="user-heading round">
                  <a href="#">
                    <img src={user?.img} alt="" />
                  </a>
                  <h1>{user?.name}</h1>
                  <p>{user?.email}</p>
                </div>
                <div className="panel-body bio-graph-info">
                  <h1>Your Profile</h1>
                  <div className="row">
                    <div className="bio-row">
                      <p>
                        <span>First Name </span>: {user?.name}
                        {(e) =>
                          setedit({ ...edit, name: e.target.value })
                        }
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Last Name </span>: {user?.LastName}
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Email </span>: {user?.email}
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Age </span>: {user?.age}
                      </p>
                    </div>
                    <button
                      style={{ marginBottom: "10px" }}
                      className="ymin"
                      onClick={() => {
                        dispatch(logout());
                        navigate("/");
                      }}
                    >
                      logout
                    </button>{" "}
                    <br />
                    <br />
                    {/* ================Modal================== */}
                    <button className="ysar" onClick={() => setModal(true)}>
                      Update Profil
                    </button>
                    <PureModal
                      header="Update Your Informations"
                      footer={
                        <div>
                          <button
                            style={{ marginLeft: "90px" }}
                            className="ymin"
                            onClick={() => {
                              dispatch(edituser({ id: user?._id, edit }));
                              setping(!ping);
                              Swal.fire("profil updated!");
                            }}
                          >
                            Save
                          </button>
                        </div>
                      }
                      isOpen={modal}
                      closeButton="close"
                      closeButtonPosition="bottom"
                      onClose={() => {
                        setModal(false);
                        return true;
                      }}
                    >
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>First name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={user?.name}
                            onChange={(e) =>
                              setedit({ ...edit, name: e.target.value })
                            }
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={user?.LastName}
                            onChange={(e) =>
                              setedit({
                                ...edit,
                                LastName: e.target.value,
                              })
                            }
                          />
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder={user?.email}
                              onChange={(e) =>
                                setedit({
                                  ...edit,
                                  email: e.target.value,
                                })
                              }
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder={user?.age}
                              onChange={(e) =>
                                setedit({ ...edit, age: e.target.value })
                              }
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Picture</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder={user?.img}
                              onChange={(e) =>
                                setedit({ ...edit, img: e.target.value })
                              }
                            />
                          </Form.Group>
                        </Form.Group>
                      </Form>
                    </PureModal>
                    {/* ================================== */}
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-info col-md-9">
              <div className="panel">
                <div className="bio-graph-heading">
                  Keep tracking your applications
                </div>
              </div>
              <div>
                <Table striped bordered hover size="sm">
                  <thead style={{ backgroundColor: "#18297d", color: "azure" }}>
                    <tr>
                      <th>Internship Name</th>
                      <th>Entity Name</th>
                      <th>Duration</th>
                      <th>Phonenumber</th>
                      <th>Diplome</th>
                      <th>Skills</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {request
                      ?.filter((el) => el.name === user?.name)
                      .map((el) => (
                        <tr>
                          <td>{el?.intrenshipname}</td>
                          <td>{el?.Entityname}</td>
                          <td>{el?.duration}</td>
                          <td>{el?.phonenumber}</td>
                          <td>{el?.diplome}</td>
                          <td>{el?.skills}</td>
                          <td>
                            <button
                              onClick={() => {
                                dispatch(deleterequest(el?._id));
                                setping(!ping);
                              }}
                            >
                              x
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilUser;

//  <button  onClick={() => {
//             setTimeout(() => {localStorage.removeItem("token");

//               navigate("/logi");
//             }, 1000);}} >logout</button>

// ===================================log out button

/* <button
        onClick={() => {
          dispatch(logout());
          navigate("/logi");
        }}
      >
        logout
      </button> */

/* {user?.isAdmin ? <h1>dash</h1> : <h1>profil</h1>} */
