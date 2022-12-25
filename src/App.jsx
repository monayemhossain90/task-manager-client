import React, {Fragment} from 'react';
import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import CreatePage from "./pages/Create-Page";
import DashboardPage from "./pages/Dashboard-Page";
import NewPage from "./pages/New-Page";
import CompletedPage from "./pages/Completed-Page";
import ProgressPage from "./pages/Progress-Page";
import CanceledPage from "./pages/Canceled-Page";
import ProfilePage from "./pages/Profile-Page";
import LoginPage from "./pages/Login-Page";
import RegistrationPage from "./pages/Registration-Page";
import Page404 from "./pages/Page-404";
import FullscreenLoader from "./components/MasterLayout/Fullscreen-Loader";
import {getToken} from "./helper/SessionHelper";
import ForgetPassPage from "./pages/ForgetPass-Page";
import SendOTPPage from "./pages/Send-OTP-Page";
import VerifyOTPPage from "./pages/Verify-OTP-Page";
import CreatePasswordPage from "./pages/Create-Password-Page";

const App = () => {
    if (getToken()){
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<DashboardPage />} />
                        <Route exact path="/create" element={<CreatePage />} />
                        <Route exact path="/all" element={<NewPage />} />
                        <Route exact path="/completed" element={<CompletedPage />} />
                        <Route exact path="/progress" element={<ProgressPage />} />
                        <Route exact path="/canceled" element={<CanceledPage />} />
                        <Route exact path="/profile" element={<ProfilePage />} />
                        <Route  path="*" element={<Page404 />} />
                    </Routes>
                </BrowserRouter>
                <FullscreenLoader/>
            </Fragment>
        );
    }
    else {
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route  path="/" element={<Navigate to="/login" replace />} />
                        <Route exact path="/login" element={<LoginPage />} />
                        <Route exact path="/registration" element={<RegistrationPage />} />
                        <Route exact path="/sendotp" element={<SendOTPPage/>} />
                        <Route exact path="/verifyotp" element={<VerifyOTPPage/>} />
                        <Route exact path="/createpassword" element={<CreatePasswordPage/>} />
                        {/*<Route exact path="/forgetPass" element={<ForgetPassPage/>} />*/}

                        <Route  path="*" element={<Page404 />} />
                    </Routes>
                </BrowserRouter>
                <FullscreenLoader/>
            </Fragment>
        );
    }

};

export default App;