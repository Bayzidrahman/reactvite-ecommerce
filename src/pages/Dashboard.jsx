import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full text-center">

        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt="User"
            className="h-24 w-24 rounded-full border"
          />
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-bold mb-1">
          Dashboard
        </h2>

        <p className="text-gray-600 mb-6">
          Logged in as <br />
          <span className="font-semibold">{user?.email}</span>
        </p>

        {/* Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            View Orders
          </button>

          <button
            onClick={logout}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;


// import { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';


// const Dashboard = () => {
// const { user, logout } = useContext(AuthContext);
// return (
// <div className="p-6">
// <h1 className="text-xl">Welcome {user.email}</h1>
// <button onClick={logout}>Logout</button>
// </div>
// );
// };


// export default Dashboard;