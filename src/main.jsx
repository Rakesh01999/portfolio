import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Banner from './components/Banner/Banner.jsx';
import Residential from './components/Residential/Residential.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Footer from './components/Footer/Footer.jsx';
// import ResidentialDetails from './components/ResidentialDetails/ResidentialDetails.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import UserProfile from './components/UserProfile/UserProfile.jsx';
import UpdateProfile from './components/UpdateProfile/UpdateProfile.jsx';
import PrivateRoute from './components/Routes/PrivateRoute.jsx';
import { register } from 'swiper/element/bundle';
import Articles from './components/Articles/Articles.jsx';
import MapView from './components/MapView/MapView.jsx';
import MyList from './components/MyList/MyList.jsx';
import ViewDetails from './components/ViewDetails/ViewDetails.jsx';
import Countries from './components/Countries/Countries.jsx';
import CountrySpots from './components/CountrySpots/CountrySpots.jsx';
import AllBook from './components/AllBook/AllBook.jsx';
import AddBook from './components/AddBook/AddBook.jsx';
import UpdateBook from './components/UpdateBook/UpdateBook.jsx';
import AddCategory from './components/AddCategory/AddCategory.jsx';
import Categories from './components/Categories/Categories.jsx';
import CategoryBooks from './components/CategoryBooks/CategoryBooks.jsx';
import BookReview from './components/BookReview/BookReview.jsx';

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
        path: '/residential',
        element: <Residential></Residential>,
        loader: () => fetch('https://tourist-spot-server-rho.vercel.app/spot')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/footer',
        element: <Footer></Footer>
      },
      {
        path: '/userProfile',
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
      {
        path: '/updateProfile',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: '/articles',
        element: <PrivateRoute><Articles></Articles></PrivateRoute>
      },
      {
        path: '/mapview',
        element: <MapView></MapView>
      },
      {
        path: '/allBook',
        element: <PrivateRoute><AllBook></AllBook></PrivateRoute>
      },
      {
        path: '/addBook',
        element: <PrivateRoute><AddBook></AddBook> </PrivateRoute>
      },
      {
        path: '/updateBook/:id',
        element: <PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
        loader: ({ params }) => fetch(`https://library-server-blue.vercel.app/book/${params.id}`)
      },
      {
        path: '/myList',
        element: <PrivateRoute><MyList></MyList> </PrivateRoute>,
        loader: () => fetch('https://library-server-blue.vercel.app/borrowedBook')
      },
      {
        path: '/viewDetails/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://library-server-blue.vercel.app/book/${params.id}`)
      },
      {
        path: '/countries',
        element: <Countries></Countries>,
        loader: () => fetch('https://tourist-spot-server-rho.vercel.app/country')
      },
      {
        path: '/categories',
        element: <Categories></Categories>,
        loader: () => fetch('https://library-server-blue.vercel.app/category')
      },
      {
        path: '/addCategory',
        element: <AddCategory></AddCategory>
      },
      {
        path: '/countrySpots/:id',
        element: <CountrySpots></CountrySpots>,
        loader: ({ params }) => fetch(`https://tourist-spot-server-rho.vercel.app/country/${params.id}`)
      },
      {
        path: '/categoryBooks/:id',
        element: <PrivateRoute><CategoryBooks></CategoryBooks></PrivateRoute>,
        loader: ({ params }) => fetch(`https://library-server-blue.vercel.app/category/${params.id}`)
      },
      {
        path: '/bookReview',
        element: <BookReview></BookReview>,
        // loader: ({params}) => fetch(`https://library-server-blue.vercel.app/category/${params.id}`)
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
