import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import MainLayout from './layout.jsx/MainLayout';
import Home from '../src/pages/Home';
import ErrorPage from '../src/pages/ErrorPage';
import About from './pages/About';
import Classes from './pages/Classes';
import Blog from './pages/Blog';
import Contact from './pages/Contacts';
import {MyProvider} from './contexts/MyContext';
import './App.css';
import Kindargaten from './pages/Kindargaten';
import Primary from './pages/Primary';
import Admission from './pages/Admission';
import Portal from './pages/Portal';
import ApplicationForm from './pages/ApplicationForm';
import Activities from './pages/Activities';
import Facilities from './pages/Facilities';
import Hostel from './pages/Hostel';
import Secondary from './pages/Secondary';
import Faq from './pages/Faq';
import Contacts from './pages/Contacts';
import PostDetail from './pages/PostDetail';
import Payment from './pages/Payment';

function App() {
 const router = createBrowserRouter([
  {
    path :"/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {index: true, element: <Home/>},
      {path: 'about', element: <About/>},
      {path: 'classes', element: <Classes/>},
      {path: 'blog', element: <Blog/>},
      {path: 'kindagarten', element: <Kindargaten/>},
      {path: 'primary', element: <Primary/>},
      {path: 'secondary', element: <Secondary/>},
      {path: 'admission', element: <Admission/>},
      {path: 'portal', element: <Portal/>},
      {path: 'application', element: <ApplicationForm/>},
      {path: 'activities', element: <Activities/>},
      {path: 'facilities', element: <Facilities/>},
      {path: 'hostel', element: <Hostel/>}, 
      {path: 'faq', element: <Faq/>},
      {path: 'form', element: <ApplicationForm/>},
      {path: 'contacts', element: <Contacts/>},
      {path: '/blog/:id', element: <PostDetail/>},
      {path: '/payment', element: <Payment/>}
       
    ] 
  }
 ])

  return (
    <MyProvider>
      <RouterProvider router ={router}/>
    </MyProvider>
  )
}
export default App;
