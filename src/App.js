import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Topics from './Components/Topics/Topics';
import Nav from './Components/Nav/Nav';
import Main from './Main/Main';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import Head from './Components/Head/Head';
import Topic from './Components/Topic/Topic';
import Quiz from './Components/Quiz/Quiz';


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Head></Head> },
        {
          path: 'Topics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>
        },
        { path: 'statistics', element: <Statistics></Statistics> },
        { path: 'Blog', element: <Blog></Blog> },
        { path: 'Head', element: <Head></Head> },
        {
          path: 'Topics/:id',
          loader: async ({ params }) => {
            // console.log(params)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quiz></Quiz>
        }
      ]
    },
    { path: 'nav', element: <Main></Main> },
    { path: 'Topic', element: <Topic></Topic> },



  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;