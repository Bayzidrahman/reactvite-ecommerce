import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login, googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {error && (
          <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-3"
        >
          Login
        </button>

        <div className="my-4 text-center text-sm text-gray-500">OR</div>

        <button
          type="button"
          onClick={googleLogin}
          className="w-full border py-2 rounded mb-2 hover:bg-gray-100"
        >
          Continue with Google
        </button>

        <button
          type="button"
          onClick={githubLogin}
          className="w-full border py-2 rounded hover:bg-gray-100"
        >
          Continue with GitHub
        </button>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

// import { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';


// const Login = () => {
// const { login, googleLogin, githubLogin } = useContext(AuthContext);


// const handleLogin = e => {
// e.preventDefault();
// login(e.target.email.value, e.target.password.value);
// };


// return (
// <form onSubmit={handleLogin} className="p-6 max-w-md mx-auto">
// <input name="email" placeholder="Email" className="input" />
// <input name="password" type="password" placeholder="Password" className="input" />
// <button className="btn">Login</button>
// <button onClick={googleLogin} type="button">Google Login</button>
// <button onClick={githubLogin} type="button">GitHub Login</button>
// </form>
// );
// };


// export default Login;