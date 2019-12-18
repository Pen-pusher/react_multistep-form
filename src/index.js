// Absolute Imports
import React from "react";
import { render } from "react-dom";

import { FiUserPlus } from "react-icons/fi";

// Relative Imports
import "./styles/normalize.css";
import "./styles/style.css";

// class Index extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentStep: 1,
//       email: "",
//       username: "",
//       password: ""
//     };
//   }
//   render() {
//     return <Step1 />;
//   }
// }
function Index(props) {
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
                  <button>Previous</button>
                  <p className="span-p">or</p>
                  <button className="next-button">NEXT STEP</button>
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
