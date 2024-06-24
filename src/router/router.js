import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/Auth";
import OrderPage from "../pages/OrderPage";
import SelectedPage from "../pages/SelectedPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import FeedBackPage from "../pages/FeedBackPage";
import RegistrationPage from "../pages/RegistrationPage";


export default createBrowserRouter([
    {
        element: <AuthPage />,
        path: "/",
        errorElement: '400 error',
    },
    {
        element: <RegistrationPage />,
        path: '/register',
    },
    {
        element: <App />,
        path: '/home',
        children: [
            {
                element: <HomePage />,
                path: '',
            },
            {
                element: <OrderPage />,
                path: 'order',
            },
            {
                element: <SelectedPage />,
                path: 'selected',
            },
            {
                element: <AboutPage />,
                path: 'about',
            },
            {
                element: <ContactPage />,
                path: 'contact',
            },
            {
                element: <FeedBackPage />,
                path: 'feedback',
            },
        ]
    }
]);