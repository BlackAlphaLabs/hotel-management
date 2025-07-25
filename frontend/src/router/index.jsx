import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
// import Dashboard from "../pages/admin/Dashboard";
// import Layout from "../layouts/Layout";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />

            {/* <Route element={<Layout />}>
                <Route path="/admin/dashboard" element={<Dashboard />} />
            </Route> */}
        </Routes>
    </BrowserRouter>
);

export default AppRouter;
