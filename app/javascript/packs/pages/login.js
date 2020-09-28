import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../hooks/user-action";
import Layout from "../components/commons/layout";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout signOut={() => alert('not yet')} >
      <div className="g-public-container">
        <div>
          <label className="g-label">Email</label>
          <input
            className="g-input"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label className="g-label">Password</label>
          <input
            className="g-input"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button
          className="g-primary-button"
          onClick={() => loginUser(email, password)}
        >
          Login
        </button>
        <p>
          <Link to="/sign-up">No account? Sign up from here</Link>
        </p>
        <p>Forgot password?</p>
        <style jsx>{`
        .container {
          max-width: 30rem;
          margin: 0 auto;
          margin-top: 5rem;
        }
      `}</style>
      </div>
    </Layout>
  )
};

export default LoginPage;
