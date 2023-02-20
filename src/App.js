import './App.css';
import Register from './Components/Register';
import Login from './Components/Login'
import {
  createBrowserRouter, RouterProvider

} from "react-router-dom";
import MainLAyout from './Components/MainLAyout';
import Home from './Components/Home';

function App() {
  const routers = createBrowserRouter([{
    path: '/', element: <MainLAyout />, children: [
      { path: 'home', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ]
  },
  ])


  return (
    <RouterProvider router={routers} />
  );
}

export default App;
