// Absolute Imports
import React from "react";
import { render } from "react-dom";

import { FiUserPlus } from "react-icons/fi";
import { MdDone } from "react-icons/md";

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
      about: ""
    };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
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
                    <option onChange={props.handleChange}>country</option>
                    <option onChange={props.handleChange}>india</option>
                    <option onChange={props.handleChange}>india</option>
                  </select>
                </label>
                <br />

                <label htmlFor="gender">
                  Gender
                  <button value={props.gender} onChange={props.handleChange}>
                    Male
                  </button>
                  <button value={props.gender} onChange={props.handleChange}>
                    Female
                  </button>
                </label>
                <br />
                <label htmlFor="about">
                  About You
                  <input
                    className=""
                    id="about"
                    name="about"
                    type="text"
                    placeholder="Write something about yourself"
                    value={props.about}
                    onChange={props.handleChange}
                  />
                </label>
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
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
        />
      </div>
      <button onClick={props.previous}>Previous</button>

      <button className="btn btn-success btn-block">Sign up</button>
    </React.Fragment>
  );
}

render(<Index />, document.getElementById("root"));
