import axios from "axios";

const {
    REACT_APP_API_KEY: headerApiKey,
    REACT_APP_API_BASE_URL: baseUrl,
} = process.env;

export default function getJobList() {
    return axios({
        method: "GET",
        url: `${baseUrl}?access_token=${headerApiKey}`
    })
}
