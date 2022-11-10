import React from "react";
import {Job} from "./../../models";
import JobList from "../../components/JobList/JobList";


interface Props {
    data: Job[];
}

const JobListView = ({data}: Props) => {

    return (
        <>
            <JobList data = {data}/>
        </>
    )
}

export default JobListView;
