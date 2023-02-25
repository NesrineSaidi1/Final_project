import React from "react";
import "../Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div className="all">
      {/* welcome section */}
      <div className="home">
        <h1 id="quote">
          “Internship: The <span>key</span> to your <span>biggest </span>
          carrer opportunity”
        </h1>
        <h6>
          Choose from a wide range of opportunities from AI, ML, IOT, core
          engineering, banking and other opportunities, with internships from
          leading corporates and 100% verified startup's.{" "}
        </h6>

        <div className="home">
          <img
            id="handshake"
            src="https://internme.app/public/assets/img/banner2_img.svg"
            alt=""
          />
        </div>
      </div>

      <div id="slider">
        <Carousel id="action1">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://internme.app/public/assets/img/banner7.jpg"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://internme.app/public/assets/img/banner4.jpg"
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://internme.app/public/assets/img/banner5.jpg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* what we do section */}
      <section>
        <div style={{ backgroundColor: "white" }} className="home">
          <h1 id="whatwedo">What we do ?</h1>
          <p id="wedo">
            InternMee is a start-up that connects high school students with
            suitable internship, volunteering and leadership opportunities.
            Founded by high school students, InternMee is an online platform
            that enables companies to post internship projects and then connect
            with high school students who are actively seeking new experiences.
          </p>
        </div>
        <div style={{ backgroundColor: "white" }} className="home">
          <img
            id="hand"
            src="https://www.internmee.com/wp-content/uploads/2021/11/tab1.jpg"
            alt=""
          />
        </div>
      </section>
      {/* how it works section */}
      <section>
        <h2 className="question">How It Works For Students ?</h2>
        <div className="explanation">
          <div className="ex">
            <img
              src="https://www.internmee.com/wp-content/uploads/2022/03/1-removebg-preview.png"
              alt=""
            />
            <div>
              <h2>Sign up or Sign in</h2>
              <div>
                <p>
                  Create an account/ log in and build your profile on your
                  dashboard
                </p>
              </div>
            </div>
          </div>
          <div className="ex">
            <img
              src="https://www.internmee.com/wp-content/uploads/2022/03/2-removebg-preview.png"
              alt=""
            />
            <div>
              <h2>Create your resume</h2>
              <div>
                <p>
                  Construct a comprehensive resume, providing essential
                  information, and highlighting your skills and areas of
                  interest
                </p>
              </div>
            </div>
          </div>
          <div className="ex">
            <img
              src="https://www.internmee.com/wp-content/uploads/2022/03/4-removebg-preview.png"
              alt=""
            />
            <div>
              <h2>Browse and Apply!</h2>
              <div>
                <p>
                  Browse the various positions on the Opportunities page,
                  exploring the categories of your interest. Proceed to apply
                  for the openings of your choice! Explore Opportunities
                </p>
              </div>
            </div>
          </div>
          <div className="ex">
            <img
              src="https://www.internmee.com/wp-content/uploads/2022/03/6-removebg-preview.png"
              alt=""
            />
            <div>
              <h2>Check application status update! </h2>
              <div>
                <p>
                  For information about following steps (whether you have been
                  chosen for the interview, etc), regularly check your email
                  address or the website dashboard
                </p>
              </div>
            </div>
          </div>
          <div className="ex">
            <img
              src="https://www.internmee.com/wp-content/uploads/2022/03/5-removebg-preview.png"
              alt=""
            />
            <div>
              <h2>Begin your learning experience!</h2>
              <div>
                <p>
                  Once you are selected, you begin working with the
                  organisation, in line with terms and role requirements. Be
                  sure to share your feedback with us 🙂
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="question">How It Works For Organisations? </h2>
        <div className="explanation">
          <div className="ex">
            <img
              src="https://www.internmee.com/wp-content/uploads/2022/03/1-removebg-preview.png"
              alt=""
            />
            <div>
              <h2>Sign up or Sign in</h2>
              <div>
                <p>
                  Create an account/ log in and build your profile on your
                  dashboard
                </p>
              </div>
            </div>
          </div>
          <div className="ex">
            <img
              src="https://www.internmee.com/wp-content/uploads/2022/03/2-removebg-preview.png"
              alt=""
            />
            <div>
              <h2>Post Opportunities</h2>
              <div>
                <p>
                  Submit a posting for review and once we approve it, it will
                  show up on the ‘opportunities’ page and will be made to our
                  student community.
                </p>
              </div>
            </div>
          </div>
          <div className="ex">
            <img
              src="https://www.internmee.com/wp-content/uploads/2022/03/4-removebg-preview.png"
              alt=""
            />
            <div>
              <h2>Shortlist applicants</h2>
              <div>
                <p>
                  You will be updated whenever a student applies for your
                  Opportunities and you can start shortlisting students for
                  interviews Post Opportunities
                </p>
              </div>
            </div>
          </div>
          <div className="ex">
            <img
              src="https://www.internmee.com/wp-content/uploads/2022/03/6-removebg-preview.png"
              alt=""
            />
            <div>
              <h2>Complete interviews and choose suitable candidates</h2>
              <div>
                <p>
                  Complete all the interviews for the shortlisted candidates and
                  make your final selection of candidates that suit your
                  requirements
                </p>
              </div>
            </div>
          </div>
          <div className="ex">
            <img
              src="https://www.internmee.com/wp-content/uploads/2022/03/5-removebg-preview.png"
              alt=""
            />
            <div>
              <h2>Onboard the candidates and start working!</h2>
              <div>
                <p>
                  Onboard the selected candidates onto your team and start
                  working with them! Once they complete their internship, you
                  will get a chance to review and rate their performance!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial section */}
      <section style={{ backgroundColor: "white" }} className="testimonial">
        <div>
          <h2 style={{ paddingTop: "47px" }} className="question">
            What our candidates are saying{" "}
          </h2>
        </div>
        <div style={{ textAlign: "center", marginTop: "17px" }}>
          <img
            src="https://www.internmee.com/wp-content/uploads/2022/02/5ed76f8cf5d8a6d5d017d5df3db7f098-removebg-preview.png"
            alt=""
          />
        </div>
        <div style={{ textAlign: "center", marginTop: "25px" }}>
          <h3>Exceeded expectations!</h3>
        </div>
        <div style={{ textAlign: "center" }}>
          <h4>
            I was lucky to have found one of your posts because I learnt how to
            create a resume and applied for an internship. I was overjoyed when
            I got selected for the internship since I never thought I could find
            such opportunities as a high schooler. Thank you so much InternMee,
            you guys are the best!
          </h4>
        </div>
        <svg
          id="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-quote"
          viewBox="0 0 16 16"
        >
          <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
        </svg>
        <div style={{ textAlign: "center" }}>
          <p>Nesrine Saidi</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
