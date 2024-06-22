import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Banner from './components/Banner/Banner.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { register } from 'swiper/element/bundle';

register();


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/banner',
        element: <Banner></Banner>
      },
      {
        path: '/footer',
        element: <Footer></Footer>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        {/* <div className='max-w-screen-xl mx-auto'> */}
        {/* <div className='mx-auto'> */}
        <div>
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
