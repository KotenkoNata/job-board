import React from 'react';
import {Route, Routes} from "react-router-dom";
import routes from "./routes";
import './App.css';
import Container from "./components/Container/Container"
import JobList from "./views/JobList/JobList";

const {
    REACT_APP_TIK_TUK_API_KEY: headerApiKey,
    REACT_APP_TIK_TUK_API_BASE_URL: baseUrl,
} = process.env;

function App() {
    return (
        <div className="App">
            <Container>
                <Routes>
                    <Route path={routes.jobList} element={<JobList/>}/>
                    {/*<Route component={UserView} path={routes.userProfile} />*/}
                    {/*<Route component={NotFound} />*/}
                </Routes>
            </Container>
        </div>
    );
}

export default App;
