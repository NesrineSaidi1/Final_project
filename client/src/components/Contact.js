import React from "react";
import "../contact.css";

function Contact() {
  return (
    <div>
      {" "}
      <div className="background1">
        <div className="container1">
          <div className="screen1">
            <div className="screen-header1">
              <div className="screen-header-left1">
                <div className="screen-header-button1 close1" />
                <div className="screen-header-button1 maximize1" />
                <div className="screen-header-button1 minimize1" />
              </div>
              <div className="screen-header-right1">
                <div className="screen-header-ellipsis1" />
                <div className="screen-header-ellipsis1" />
                <div className="screen-header-ellipsis1" />
              </div>
            </div>
            <div className="screen-body1">
              <div className="screen-body-item1 left1">
                <div className="app-title1">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="app-contact1">CONTACT INFO : 123456789</div>
              </div>
              <div className="screen-body-item1">
                <div className="app-form1">
                  <div className="app-form-group1">
                    <input
                      className="app-form-control1"
                      placeholder="NAME"
                      defaultValue="{USER NAME}"
                    />
                  </div>
                  <div className="app-form-group1">
                    <input className="app-form-control1" placeholder="EMAIL" />
                  </div>
                  <div className="app-form-group1">
                    <input
                      className="app-form-control1"
                      placeholder="PHONE NUMBER"
                    />
                  </div>
                  <div className="app-form-group1 message1">
                    <input className="app-form-control1" placeholder="MESSAGE" />
                  </div>
                  <div className="app-form-group1 buttons1">
                    <button className="app-form-button1">CANCEL</button>
                    <button className="app-form-button1">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
