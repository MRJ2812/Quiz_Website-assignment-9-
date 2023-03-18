import {
    createBrowserRouter,
} from "react-router-dom";
import About from "../Components/About";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";
import Quiz from "../Components/Quiz";
import Solve from "../Components/Solve";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async () => fetch(`https://openapi.programming-hero.com/api/quiz`)
            },
            {
                path: "/quiz/:id",
                element: <Quiz></Quiz>,
                loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            },
            {
                path: "/about",
                element: <About></About>,
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
    {
        path: "/solve",
        element: <Solve></Solve>,
    }
]);
