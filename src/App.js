import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import About from './components/About/About';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/products',
          element: <Products></Products>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
        }
      ]
    }
  ])

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
