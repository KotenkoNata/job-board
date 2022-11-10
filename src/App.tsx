import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import routes from "./routes";
import './App.css';
import Container from "./components/Container/Container"
import getJobList from "./services/jobAPI";
import {Job} from "./models";
import JobList from "./views/JobListView/JobListView";
import DetailedJob from "./views/DetailedJob/DetailedJob";

// const JobList = React.lazy(() => import("./views/JobListView/JobListView"));
// const DetailedJob = React.lazy(()=>import("./views/DetailedJob/DetailedJob"));

interface Props {
    error: string;
    responseData: Job[];
}

const App: React.FC = () => {
    const [data, setData] = useState({
        error: "",
        responseData: [],
    });

    useEffect(() => {
        async function getJob() {
            try {
                const response = await getJobList();
                if (!response.data || response.data.length === 0) {
                    setData(() => ({
                        error: "Response data is empty",
                        responseData: [],
                    }));
                    console.log(`data`, response.data)
                    return;
                }
                setData(() => ({
                    error: "",
                    responseData: response.data,
                }));
            } catch (error: any) {
                setData(() => ({
                    error: error.message,
                    responseData: [],
                }));
            }
            return null
        }

        getJob();
    }, [])

    return (
        <div className="App">
            <Container>
                <Routes>
                    <Route path={routes.jobList} element={<JobList data={data.responseData}/>}/>
                    <Route path={routes.detailedJob} element={<DetailedJob jobs={data.responseData}/>}/>
                    {/*<Route component={NotFound} />*/}
                </Routes>
            </Container>
        </div>
    );
}

export default App;
