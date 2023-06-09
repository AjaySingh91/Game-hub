import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePAge from "./pages/HomePAge";
import GameDetailPage from "./pages/GameDetailPage";


const router = createBrowserRouter([
    {
    path: '/',
    element: <Layout />,
    children: [
        {index:true, element: <HomePAge />},
        {path: 'game/:id' , element: <GameDetailPage />}
    ]
}
])

export default router;