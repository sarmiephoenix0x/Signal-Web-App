// App.js
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './Pages/DashBoard.js';
import AuthenticationPage from './Pages/AuthenticationPage';
import LogIn from './authenticationPages/LogIn.js';
import Register from './authenticationPages/Register';
import DashBoardPage from './dashboardPages/DashBoardPage';
import Packages from './dashboardPages/Packages.js';
import Crypto from './dashboardPages/Crypto.js';
import Forex from './dashboardPages/Forex.js';
import Stocks from './dashboardPages/Stocks.js';
import DepositHistory from './dashboardPages/DepositHistory.js';
import Referral from './dashboardPages/Referral.js'
import Course from './dashboardPages/Course.js';
import ProfileSettings from './dashboardPages/ProfileSettings.js'
import ChangePassword from './Pages/ChangePassword.js'
import SplashScreen from './Components/SplashScreen.js';
import './index.css';
import './fonts/fonts.css';
import swDev from './swDev.js';

function START() {
    const [loading, setLoading] = useState(true);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        // Function to simulate data fetching
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate data loading
            setDataLoaded(true);
        };

        // Start fetching data
        fetchData();

        // Listen for the window load event
        const handleLoad = () => {
            if (dataLoaded) {
                setTimeout(() => {
                    setLoading(false);
                }, 500); // Add a delay of 500ms after the page is loaded
            }
        };

        // Attach the event listener
        window.addEventListener('load', handleLoad);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, [dataLoaded]);

    // Check if both data and window are loaded
    useEffect(() => {
        if (dataLoaded) {
            setLoading(false); // If data is loaded, we can set loading to false
        }
    }, [dataLoaded]);

    return (
        <>
            {loading ? (
                <SplashScreen />
            ) : (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<AuthenticationPage />}>
                            <Route index element={<LogIn />} />
                            <Route path="/Register" element={<Register />} />
                        </Route>
                        <Route path="/DashBoard" element={<DashBoard />} >
                            <Route path="/DashBoard" element={<DashBoardPage />} />
                            <Route path="/DashBoard/Packages" element={<Packages />} />
                            <Route path="/DashBoard/Crypto" element={<Crypto />} />
                            <Route path="/DashBoard/Forex" element={<Forex />} />
                            <Route path="/DashBoard/Stocks" element={<Stocks />} />
                            <Route path="/DashBoard/DepositHistory" element={<DepositHistory />} />
                            <Route path="/DashBoard/Referral" element={<Referral />} />
                            <Route path="/DashBoard/Course" element={<Course />} />
                            <Route path="/DashBoard/ProfileSettings" element={<ProfileSettings />} />
                            <Route path="/DashBoard/ChangePassword" element={<ChangePassword />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            )}
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<START />);
