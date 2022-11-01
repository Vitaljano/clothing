import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.js";

import FormInput from "../form-input/form-input";
import Button from "../button/button";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = formFields;

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields(defaultFormFields);
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/user-not-found":
          alert("user not exists");
          break;
        case "auth/wrong-password":
          alert("wrong password");
          break;
        default:
          console.log(error);
      }
    }
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Sign In Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
