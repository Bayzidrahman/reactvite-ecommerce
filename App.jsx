import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProductDetails from './pages/ProductDetails';
import Order from './pages/Order';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';


function App() {
return (
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/product/:id" element={<ProductDetails />} />
<Route path="/order/:id" element={<PrivateRoute><Order /></PrivateRoute>} />
<Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
<Route path="*" element={<NotFound />} />
</Routes>
</BrowserRouter>
);
}


export default App;






// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         hello world!
//         </div>
//     </>
//   )
// }

// export default App
