import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePAge from "./pages/HomePAge";
import GameDetailPage from "./pages/GameDetailPage";
import Error from "./pages/Error";

const router = createBrowserRouter([
    {
    path: '/',
    errorElement: <Error />,
    element: <Layout />,
    children: [
        {index:true, element: <HomePAge />},
        {path: 'game/:slug' , element: <GameDetailPage />}
    ]
}
])

export default router;