import React from 'react';
import {Route, Routes} from "react-router-dom";
import routes from "./routes";
import './App.css';
import Container from "./components/Container/Container"

const JobList = React.lazy(() => import("./views/JobList/JobList"));

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
