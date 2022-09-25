import "./form.css";
var React = require("react");
var { SocialIcon } = require("react-social-icons");

const Form = (_) => {
  return (
    <div id="main" title="Rutuja">
      <div id="div_left">
        <h3 id="title">
          <span>Company</span>Name{" "}
        </h3>
        <h1>
          {" "}
          <span>Sign in to Account </span>{" "}
        </h1>
        <hr />
        <SocialIcon url="https://facebook.com/in/jaketrent" id="icons" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <SocialIcon url="https://linkedin.com/in/jaketrent" id="icons" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <SocialIcon url="https://google.com/in/jaketrent" id="icons" />
        <p>or use your email account </p>
        <form>
          <input type="email" placeholder="email" required /> <br />
          <br />
          <br />
          <input type="password" placeholder="password" required />
          <br />
          <br />
          <br />
          <label>
            <input type="checkbox" /> Remember me
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Forgot password?
          </label>{" "}
          <br />
          <br />
          <br />
          <button id="btn1">Sign In </button> <br /> <br />
          <footer>
            {" "}
            Privacy policy &nbsp;&nbsp;&nbsp;&nbsp; Terms and condition{" "}
          </footer>
        </form>
      </div>
      <div id="div_right">
        <h1>Hello Friends </h1>
        <hr id="rhr" />
        <h3>
          Fill up Personal information and <br /> start journey with us !!{" "}
        </h3>
        <button id="btn">Sign Up </button>
      </div>
    </div>
  );
};

export default Form;
