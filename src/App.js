import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Nav></Nav> },
    { path: 'nav', element: <Nav></Nav> },
    { path: 'home', element: <Home></Home> },
    { path: 'about', element: <div>about</div> },
    { path: 'header', element: <Header></Header> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;