import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Job} from "../../models";

import JobDetailsHeader from "../../components/JobDetailsHeader/JobDetailsHeader";

interface Props {
    data: Job[]
}

const DetailedJob = ({data}: Props) => {
    const {jobId} = useParams();
    const[detailedJob, setDetailedJob] = useState([{}]);
    
    function findJob(id:string) {
        let result = [];
        result = data.filter(item=>{
           return item.id === id
        })
        return result;
    }

    useEffect(() => {
        if(jobId){
            const job = findJob(jobId);
            setDetailedJob(job);
        }

    }, [])

console.log(`detailedJob`, detailedJob)
    return (
        <>
            <JobDetailsHeader />
        </>
    )
}

export default DetailedJob;
