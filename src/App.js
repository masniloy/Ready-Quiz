import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Topics from './Components/Topics/Topics';
import Nav from './Components/Nav/Nav';
import Main from './Main/Main';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import Head from './Components/Head/Head';


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Head></Head> },
        { path: 'Topics', element: <Topics></Topics> },
        { path: 'statistics', element: <Statistics></Statistics> },
        { path: 'Blog', element: <Blog></Blog> },
        { path: 'Head', element: <Head></Head> }


      ]
    },
    { path: 'nav', element: <Main></Main> }


  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;