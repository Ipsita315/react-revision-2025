import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "./styles.scss";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
//import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Support from "./components/Support/Support";
import ResProfile from "./components/ResProfile/ResProfile";
//import Grocery from "./components/Grocery/Grocery";

// const parent = React.createElement("div", { id: "parent", className: "heading" },
//     [
//         React.createElement("div", { id: "child1", key: "div_1" }, React.createElement("h1", {}, "This is H1 using React")),
//         React.createElement("div", { id: "child2", key: "div_2" }, React.createElement("h2", {}, "This is H2"))
//     ]
// );

const Grocery = lazy(() => import("./components/Grocery/Grocery"));
const About = lazy(()=>import("./components/About/About"));

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
};

const routesList = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/support",
                element: <Support />
            },
            {
                path: "/res-profile/:id",
                element: <ResProfile />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            }
        ]
    }
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routesList} />);