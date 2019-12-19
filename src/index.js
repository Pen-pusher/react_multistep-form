// Absolute Imports
import React from "react";
import { render } from "react-dom";

import { FiUserPlus } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard, FaCcPaypal } from "react-icons/fa";

// Relative Imports
import "./styles/normalize.css";
import "./styles/style.css";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      username: "",
      name: "",
      password: "",
      gender: "",
      about: "",
      card: "",
      nameError: "",
      emailError: "",
      passwordError: ""
    };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  validate = () => {
    //  let nameError = ""
    let emailError = "";
    //  let passwordError = ""
    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (emailError) {
      this.setState({ emailError });
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
           Email: ${email} \n 
           Username: ${username} \n
           Password: ${password}`);
  };

  _next = () => {
    const isValid = this.validate();
    if (isValid) {
      let currentStep = this.state.currentStep;
      currentStep = currentStep >= 2 ? 3 : currentStep + 1;
      this.setState({
        currentStep: currentStep
      });
      console.log(this.state);
    }
  };

  _previous = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          {/* 
  
      */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
            next={this._next}
            emailError={this.state.emailError}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
            previous={this._previous}
            next={this._next}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
            previous={this._previous}
          />
        </form>
      </>
    );
  }
}
function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div>
      <main>
        <body>
          <div className=" wrapper">
            <h3 className="color-grey">
              <FiUserPlus />
              Sign up to create account
            </h3>
            <hr />
            <div className="flex">
              <h2>
                {" "}
                <span className="circle">1</span>Accont Information
              </h2>
              <h2>
                {" "}
                <span className="circle">2</span>Personal Information
              </h2>
              <h2>
                {" "}
                <span className="circle">3</span>Payment details
              </h2>
            </div>
            <hr />

            <div>
              <form>
                <label htmlFor="email">
                  Email address
                  <input
                    className=""
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter email"
                    value={props.email}
                    onChange={props.handleChange}
                  />
                </label>
                <div
                  style={{
                    fontSize: 16,
                    textTransform: "uppercase",
                    color: "red"
                  }}
                >
                  {props.emailError}
                </div>
                <br />

                <label htmlFor="username">
                  Username
                  <input
                    className=""
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    value={props.username}
                    onChange={props.handleChange}
                  />
                </label>
                <br />

                <label htmlFor="password">
                  Password
                  <input
                    className=""
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={props.password}
                    onChange={props.handleChange}
                  />
                </label>
                <hr />
                <br />
              </form>

              <div className="flex">
                <p className="step">Step 1 of 3</p>
                <div className="flex">
                  <button>Cancel</button>
                  <p className="span-p">or</p>
                  <button className="next-button" onClick={props.next}>
                    NEXT STEP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </body>
      </main>
    </div>
  );
}
function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div>
      <main>
        <body>
          <div className=" wrapper">
            <h3 className="color-grey">
              <FiUserPlus />
              Create Account For Full Access
            </h3>
            <hr />
            <div className="flex">
              <h2>
                {" "}
                <span className="tick">
                  <MdDone />
                </span>
                Accont Information
              </h2>
              <h2>
                {" "}
                <span className="circle">2</span>Personal Information
              </h2>
              <h2>
                {" "}
                <span className="circle">3</span>Payment details
              </h2>
            </div>
            <hr />

            <div>
              <form>
                <label htmlFor="name">
                  Full Name
                  <input
                    className=""
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter Your Name"
                    value={props.name}
                    onChange={props.handleChange}
                  />
                </label>
                <br />

                <label htmlFor="country">
                  Country
                  <select>
                    <option onChange={props.handleChange}>Select</option>
                    <option onChange={props.handleChange}>#</option>
                    <option onChange={props.handleChange}>#</option>
                  </select>
                </label>
                <br />

                <label htmlFor="gender">
                  Gender
                  <button
                    value={props.gender}
                    onChange={props.handleChange}
                    className="male-btn"
                  >
                    Male
                  </button>
                  <button
                    value={props.gender}
                    onChange={props.handleChange}
                    className="female-btn"
                  >
                    Female
                  </button>
                </label>
                <br />
                <label htmlFor="about">
                  About You
                  <textarea
                    className="about "
                    id="about"
                    name="about"
                    type="textarea"
                    placeholder="Write something about yourself"
                    value={props.about}
                    onChange={props.handleChange}
                  ></textarea>
                </label>
                <hr />
              </form>

              <div className="flex">
                <p className="step">Step 2 of 3</p>
                <div className="flex">
                  <button onClick={props.previous}>Previous</button>
                  <p className="span-p">or</p>
                  <button className="next-button" onClick={props.next}>
                    NEXT STEP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </body>
      </main>
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div>
      <main>
        <body>
          <div className=" wrapper">
            <h3 className="color-grey">
              <FiUserPlus />
              Create Account For Full Access
            </h3>
            <hr />
            <div className="flex">
              <h2>
                {" "}
                <span className="tick">
                  <MdDone />
                </span>
                Accont Information
              </h2>
              <h2>
                {" "}
                <span className="tick">
                  <MdDone />
                </span>
                Personal Information
              </h2>
              <h2>
                {" "}
                <span className="circle">3</span>Payment details
              </h2>
            </div>
            <hr />

            <div>
              <form>
                <label htmlFor="name">
                  Payment Type
                  <button>
                    <FaCcVisa />
                  </button>
                  <button>
                    <FaCcMastercard />
                  </button>
                  <button>
                    <FaCcPaypal />
                  </button>
                </label>
                <br />

                <label htmlFor="country">
                  Card Number
                  <input
                    className=""
                    id="card"
                    name="card"
                    type="number"
                    placeholder="Enter Your Card Number"
                    value={props.card}
                    onChange={props.handleChange}
                  />
                </label>
                <br />

                <label htmlFor="card-name">
                  Name On Card
                  <input
                    className=""
                    id="card"
                    name="card"
                    type="number"
                    placeholder="Enter Your Name As On The Card"
                    value={props.card}
                    onChange={props.handleChange}
                  />
                </label>
                <hr />
              </form>

              <div className="flex">
                <div className="flex">
                  <button className="submit-button">Submit</button>
                  <p className="para-3">
                    By submitting this form, you agree with our
                    <span className="term">Terms and Conditions</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </main>
    </div>
  );
}

render(<Index />, document.getElementById("root"));
