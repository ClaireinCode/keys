import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HousingContactPage from './pages/HousingContactPage';
import HousingDetailsPage from './pages/HousingDetailsPage';
import HousingPage from './pages/HousingPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
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
        element: <Signup_LoginLandingPage/>,
      },
      {
        path: "houses/",
        element: <HousingPage/>,
      },
      {
        path: "house_contact/",
        element: <HousingContactPage/>,
      },
      {
        path: "house_details/:house_id",
        element: <HousingDetailsPage/>,
      },
      {
        path: "login/",
        element: <LoginPage/>,
      },
      {
        path: "preferences/",
        element: <PreferencesPage/>,
      }, 
      {
        path: "profile/",
        element: <ProfilePage/>,
      },
      {
          path: "account_details/",
          element: <ProfileAccountDetailsPage/>,
      },
      {
          path: "hidden_houses/",
          element: <ProfileHiddenHousingPage/>,
      },
      {
          path: "your_houses/",
          element: <ProfileHousingPage/>,
      },
      {
          path: "thoughts/",
          element: <ProfileThoughtsPage/>,
      },
      {
        path: "signup/",
        element: <SignupPage/>,
      },
    ],
    errorElement: <NotFoundPage/>
  },
]);

export default router;