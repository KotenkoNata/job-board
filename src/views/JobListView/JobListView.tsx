import React, {useEffect, useState} from "react";
import {Job} from "./../../models";
import axios from "axios";
import JobList from "../../components/JobList/JobList";


interface Props {
    error: string;
    responseData: Job[];
}

const {
    REACT_APP_API_KEY: headerApiKey,
    REACT_APP_API_BASE_URL: baseUrl,
} = process.env;

const JobListView:React.FC = () => {

    const [data, setData] = useState({
        error: "",
        responseData: [],
    });

    useEffect(() => {

        const getJobList = async () => {
            try {

                const response = await axios({
                    method: "GET",
                    url: `${baseUrl}?access_token=${headerApiKey}`
                })

                if (!response.data || response.data.length === 0) {
                    setData(() => ({
                        error: "Response data is empty",
                        responseData: [],
                    }));
                    return;
                }
                setData(() => ({
                    error: "",
                    responseData: response.data,
                }));

                console.log(`response.data`,response.data, `data.responseData`,data.responseData)
            } catch (error: any) {
                console.error(error);
                setData(() => ({
                    error: error.message,
                    responseData: [],
                }));
            }

            return null
        }

        getJobList()

    }, [])

    return (
        <>
            <JobList data = {data.responseData}/>
        </>
    )
}

export default JobListView;