import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function SignUp() {
  const history = useHistory();
  const email = useRef(null);
  const password = useRef(null);
  const passwordConfirm = useRef(null);
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    if (password.current.value !== passwordConfirm.current.value) {
      return setError("Password doesn't match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email.current.value, password.current.value);
     // setUser(email.current.value.split("@")[0]);
      history.push("/boards");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="bg-white p-12 h-auto w-96 space-y-8 rounded-lg shadow-2xl">
        {error && <div>{error}</div>}
        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <label htmlFor="email">Email</label>
            <div>
              <input
                id="email"
                type="text"
                ref={email}
                placeholder="Enter your email"
                required
                className="w-full focus:outline-none border-gray-300 border-solid border-2 h-8 rounded-lg px-3 py-4 focus:border-blue-500"
              ></input>
            </div>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <div>
              <input
                id="password"
                type="password"
                ref={password}
                placeholder="Enter your password"
                required
                className="w-full focus:outline-none border-gray-300 border-solid border-2 h-8 rounded-lg px-3 py-4 focus:border-blue-500"
              ></input>
            </div>
          </div>
          <div>
            <label htmlFor="password-confirm">Confirm Password</label>
            <div>
              <input
                id="password-confirm"
                type="password"
                ref={passwordConfirm}
                placeholder="Enter your password again"
                required
                className="w-full focus:outline-none border-gray-300 border-solid border-2 h-8 rounded-lg px-3 py-4 focus:border-blue-500"
              ></input>
            </div>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="bg-blue-600 p-2 text-yellow-50 rounded-md min-w-full"
          >
            Sign Up
          </button>
        </form>
        <div>
          Already have an account?
          <Link to="/login" className="text-blue-900 underline px-2">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
