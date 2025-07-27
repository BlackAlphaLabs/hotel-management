import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import WebsiteLayout from "../layouts/WebsiteLayout";
import ErrorCom from "../components/Error/ErrorCom";
import Register from "../pages/Register";
import VerifyOTPE from "../pages/VerifyOTPE";
import Dashboard from "../layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import DashHome from "../pages/Dashboard/DashHome";
import DashError from "../components/Dash/DashError";
import Home from "../pages/Website/Home/Home";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>

            <Route path="/" element={<WebsiteLayout />}>
                <Route path="*" element={<ErrorCom errorCode={404} errorMessage="Page Not Found" />} />
                <Route index element={<Home />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify-email-otp" element={<VerifyOTPE />} />



            <Route path="/dashboard/" element={<PrivateRoute roles={["guest"]}><Dashboard /></PrivateRoute> } >
                <Route path="*" element={<DashError type="developing" />}/>
                <Route path="home" element={<PrivateRoute roles={["guest"]}><DashHome /></PrivateRoute> } />
                
            </Route>


        </Routes>
    </BrowserRouter>
);

export default AppRouter;
