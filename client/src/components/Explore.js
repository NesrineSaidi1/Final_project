import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../Explore.css";
import { getinternshipWithFilter } from "../JS/internshipSlice";
function Explore() {
  const [filterObject, setfilterObject] = useState({});
  const dispatch = useDispatch();
  const [filter, setfilter] = useState("back");
  const internships = useSelector((state) => state.internship?.internshipList);
  console.log(internships);

  const handleSelect = (e) => {
    setfilterObject({ ...filterObject, [e.target.name]: e.target.value });
  };

  return (
    <div className="explore">
      <h2>
        Search <span>Internship</span>
      </h2>
      <div className="flex">
        {/* ======================================================= Filter */}
        {/* filters */}
        <div className="filter">
          {/* profile filter */}
          <div className="select">
            <label className="title" htmlFor="pet-select">
              Profile
            </label>
            <br />
            <select name="domain" id="pet-select" onChange={handleSelect}>
              <option value="" disabled selected hidden>
                Select Profile
              </option>

              <option value="Administration">Administration</option>
              <option value="Architecture">Architecture</option>
              <option value="Banking">Banking</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Marketing">Marketing</option>
              <option value="UX Design">UX Design</option>
              <option value="Web Developement">Web Developement</option>
            </select>
          </div>
          {/* location filter */}
          <div className="select">
            <label className="title" htmlFor="pet-select">
              Location
            </label>
            <br />
            <select name="location" id="pet-select" onChange={handleSelect}>
              <option value="" disabled selected hidden>
                Select Location
              </option>
              <option value="Tunis">Tunis</option>
              <option value="Gabes">Gabes</option>
              <option value="Sfax">Sfax</option>
              <option value="Sousse">Sousse</option>
              <option value="Nabeul">Nabeul</option>
              <option value="Medenine">Medenine</option>
            </select>
          </div>
          {/* Duration filter */}
          <div className="select">
            <label className="title" htmlFor="pet-select">
              Duration
            </label>
            <br />
            <select name="Duration" id="pet-select" onChange={handleSelect}>
              <option value="" disabled selected hidden>
                Select Duration
              </option>
              <option value="Below 15 days">Below 15 days</option>
              <option value="Below 1 Month">Below 1 Month</option>
              <option value="Below 2 Months">Below 2 Months</option>
              <option value="Below 3 Months">Below 3 Months</option>
            </select>
          </div>
          {/* timing filter */}
          <fieldset className="select">
            <legend style={{ border: "none" }} className="title">
              Timing
            </legend>

            <div>
              <input
                type="radio"
                id="dewey"
                name="Timing"
                defaultValue="Full time"
                onChange={handleSelect}
              />
              <label
                style={{ color: "azure", fontSize: "13px" }}
                htmlFor="dewey"
              >
                Full Time
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="dewey"
                name="Timing"
                defaultValue="Part"
                onChange={handleSelect}
              />
              <label
                style={{ color: "azure", fontSize: "13px" }}
                htmlFor="louie"
              >
                Part Time
              </label>
            </div>
          </fieldset>
          <div style={{ marginRight: "30px" }}>
            <button
              className="apply"
              type="submit"
              value="Apply"
              onClick={() => {
                setfilter(!filter);
                dispatch(getinternshipWithFilter(filterObject));
              }}
            >
              Apply
            </button>
          </div>
        </div>

        {/* =============================================================================== */}

        {filter === "back" ? (
          <div className="fishing under">
            {" "}
            <img
              className="search "
              src="https://internme.app/public/assets/img/filter_no_result.svg"
              alt=""
            />
          </div>
        ) : (
          <div className="fishing">
            {internships?.map((el) => (
              <div className="bodycard">
                <div className="container d-flex justify-content-center mt-50 mb-50">
                  <div className="row">
                    <div className="col-md-10">
                      <div className="card card-body">
                        <div
                          style={{ display: "flex", marginTop: "13px" }}
                          className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row"
                        >
                          <div
                            style={{ width: "148px" }}
                            className="mr-2 mb-3 mb-lg-0"
                          >
                            <img
                              src={el.img}
                              alt=""
                              style={{
                                width: "171px",
                                height: "128px",
                                marginTop: "6px",
                              }}
                            />
                          </div>
                          <div className="media-body">
                            <h3 style={{ marginLeft: "30px" }}>
                              {el.internshipname}
                            </h3>

                            <ul className="list1">
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-geo-alt-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>
                                Location
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-calendar2-range"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                                  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM9 8a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1zm-8 2h4a1 1 0 1 1 0 2H1v-2z" />
                                </svg>
                                Duration
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-clock"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                </svg>
                                Timing
                              </li>
                            </ul>
                            <ul className="list2">
                              <li>{el.Location}</li>
                              <li>{el.Duration}</li>
                              <li>{el.Timing}</li>
                            </ul>
                          </div>
                          <div
                            style={{ marginTop: "30px" }}
                            className="mt-3   text-center"
                          >
                            <div>
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                            <Link to={`/details/${el._id}`}>
                              <Button className="BBBTn" variant="primary">
                                View Details
                                <svg
                                  style={{ width: "14px" }}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-chevron-double-right"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                                  />
                                </svg>
                              </Button>{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Explore;
