import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './styles/App.css';
import TweetTable from "./components/TweetTable";
import HelpRequestForm from './components/HelpRequestForm';
import {RecentWatch} from "./components/RecentWatch";
import DisasterMap from "./components/DisasterMap";
import FirstResponderDashboard from './components/FirstResponderDashboard';
import FirstResponderLogin from './components/FirstResponderLogin';
import {HelpRequestProvider} from './context/HelpRequestContext';
import Analytics from "./components/Analytics";

const App = () => {
    return (
        <HelpRequestProvider>
            <Router>
                <div className="app-container">
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Home/>
                                <DisasterMap/>
                                <TweetTable filePath="/json/bluesky_raw_data_02-26-2025.json"/>
                                <RecentWatch/>
                            </>
                        }/>
                        <Route path="/help-request" element={<HelpRequestForm/>}/>
                        <Route path="/first-responder" element={<FirstResponderDashboard/>}/>
                        <Route path="/first-responder-login" element={<FirstResponderLogin/>}/>
                        <Route path="/analytics" element={<Analytics/>}/>
                    </Routes>
                </div>
            </Router>
        </HelpRequestProvider>
    );
};

export default App;