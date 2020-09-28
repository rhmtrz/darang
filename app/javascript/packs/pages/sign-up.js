import React, { useState, useContext } from "react";

import PublicPageHeader from "../components/commons/public-page-header";
import { Context } from "../app";
import { signUpUser } from "../hooks/user-action";

const SignUpPage = () => {
  const { dispatch } = useContext(Context);
  const defaultState = {
    email: "tt@test.com",
    nickname: "password",
    password: "password",
    passwordConfirmation: "password"
  };

  const [state, setState] = useState(defaultState);

  const onChangeState = (field, value) => {
    let newState = { ...state };
    newState[field] = value;
    setState(newState);
  };

  return (
    <div className="g-public-container">
      <PublicPageHeader pageName="Sign up" />
      <div>
        <label className="g-label">Email</label>
        <input
          className="g-input"
          value={state.email}
          onChange={e => onChangeState("email", e.target.value)}
        />
        <label className="g-label">Nickname</label>
        <input
          className="g-input"
          value={state.nickname}
          onChange={e => onChangeState("nickname", e.target.value)}
        />
        <label className="g-label">Password</label>
        <input
          className="g-input"
          value={state.password}
          onChange={e => onChangeState("password", e.target.value)}
          type="password"
        />
        <label className="g-label">Password confirmation</label>
        <input
          className="g-input"
          value={state.passwordConfirmation}
          onChange={e => onChangeState("passwordConfirmation", e.target.value)}
          type="password"
        />
      </div>
      <button
        onClick={() => signUpUser(dispatch, state)}
        className="g-primary-button"
      >
        Create account
      </button>
      <style jsx>{``}</style>
    </div>
  );
};

export default SignUpPage;
