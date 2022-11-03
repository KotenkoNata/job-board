import React, {useEffect, useState} from "react";
import axios from "axios";

type Data = {
    id: number;
    name: string;
    email: string;
    phone: string;
}

interface Props {
    error: string;
    responseData: Data[];
}

const {
    REACT_APP_API_KEY: headerApiKey,
    REACT_APP_API_BASE_URL: baseUrl,
} = process.env;

const JobList = () => {

    const [data, setData] = useState({
        error: "",
        responseData: [],
    });

    useEffect(() => {

        const getJobList = async () => {
            try {

                const response = await axios({
                    url: baseUrl,
                    method: "get",
                    data: {
                        access_token: `${headerApiKey}`,
                    }
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

                console.log(response)
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
            <h1>Hello aaaaaayyyyyyyy dfsdfsdf</h1>
        </>
    )
}

export default JobList;