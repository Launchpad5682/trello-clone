import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LogIn() {
  const history = useHistory();
  const email = useRef(null);
  const password = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  async function submitHandler(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      // waits until the login credentials are updated
      await login(email.current.value, password.current.value);
      //   setUser(email.current.value.split("@")[0]);
      history.push("/boards");
    } catch {}
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-800">
      <div className="bg-gray-900 p-12 h-auto w-96 space-y-8 rounded-lg shadow-2xl text-white">
        {error && <div>Enter correct email and password</div>}
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
                className="bg-transparent w-full focus:outline-none border-gray-300 border-solid border-2 h-8 rounded-lg px-3 py-4 focus:border-green-500"
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
                className="bg-transparent w-full focus:outline-none border-gray-300 border-solid border-2 h-8 rounded-lg px-3 py-4 focus:border-green-500"
              ></input>
            </div>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="bg-green-600 p-2 text-yellow-50 rounded-md min-w-full"
          >
            Login
          </button>
        </form>
        <div className="text-left">
          Create an account?{" "}
          <Link
            to="/signup"
            className="text-green-900 text-lg font-bold underline px-2"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
