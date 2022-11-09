import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Job} from "../../models";
import ButtonApply from "../../components/Button/ButtonApply";
import JobDescription from "../../components/JobDescription/JobDescription";
import JobDetailsHeader from "../../components/JobDetailsHeader/JobDetailsHeader";

interface Props {
    data: Job[]
}

const DetailedJob = ({data}: Props) => {
    const {id} = useParams();
    console.log(`id`,id)
    const[detailedJob, setDetailedJob] = useState<Job[]>([]);

    function findJob(id:string) {
        console.log(`id inside findJob`, id)
        let result = [];
        result = data.filter(item=>{
           return item["id"] === id
        })
        console.log(`result findJob`,result)
        return result;
    }

    useEffect(() => {
        console.log(`id second step`,id)
        if(id){
            const jobObject = findJob(id);
            console.log(`jobDetails inside UseEffect`,jobObject);
            setDetailedJob(()=>jobObject);
        }else{
            console.log("error", id)
        }

    }, [id])

console.log(`detailedJob finish`,detailedJob)
    return (
        <>
            <JobDetailsHeader />
            <ButtonApply />
            {/*<JobDescription detailedJob={detailedJob}/>*/}
        </>
    )
}

export default DetailedJob;
