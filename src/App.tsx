import React from 'react';
import {Route, Routes} from "react-router-dom";
import routes from "./routes";
import './App.css';
import Container from "./components/Container/Container"
import DetailedJob from "./views/DetailedJob/DetailedJob";

const JobList = React.lazy(() => import("./views/JobListView/JobListView"));

function App() {
    return (
        <div className="App">
            <Container>
                <Routes>
                    <Route path={routes.jobList} element={<JobList/>}/>
                    <Route path={routes.detailedJob} element={<DetailedJob/>} />
                    {/*<Route component={NotFound} />*/}
                </Routes>
            </Container>
        </div>
    );
}

export default App;
