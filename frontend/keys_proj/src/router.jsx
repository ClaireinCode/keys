import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HousingContactPage from './pages/HousingContactPage';
import HousingDetailsPage from './pages/HousingDetailsPage';
import HousingPage from './pages/HousingPage';
import LoginPage from './pages/LoginPage';
import PreferencesPage from './pages/PreferencesPage';
import ProfileAccountDetailsPage from './pages/ProfileAccountDetailsPage';
import ProfileHiddenHousingPage from './pages/ProfileHiddenHousingPage';
import ProfileHousingPage from './pages/ProfileHousingPage';
import ProfilePage from './pages/ProfilePage';
import ProfileThoughtsPage from './pages/ProfileThoughtsPage';
import Signup_LoginLandingPage from './pages/Signup_LoginLandingPage';
import SignupPage from './pages/SignupPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HousingPage/>,
      },
      {
        path: "housing_contact",
        element: <HousingContactPage/>,
      },
      {
        path: "housing_details",
        element: <HousingDetailsPage/>,
      },
      {
        path: "login",
        element: <LoginPage/>,
      },
      {
        path: "preferences",
        element: <PreferencesPage/>,
      }, 
      {
        path: "profile",
        element: <ProfilePage/>,
        children: [
            {
                path: "account_details",
                element: <ProfileAccountDetailsPage/>,
            },
            {
                path: "hidden_housing",
                element: <ProfileHiddenHousingPage/>,
            },
            {
                path: "housing",
                element: <ProfileHousingPage/>,
            },
            {
                path: "thoughts",
                element: <ProfileThoughtsPage/>,
            },
        ]
      },
      {
        path: "signup_login",
        element: <Signup_LoginLandingPage/>,
      },
      {
        path: "signup",
        element: <SignupPage/>,
      }
    ],
  },
]);

export default router;