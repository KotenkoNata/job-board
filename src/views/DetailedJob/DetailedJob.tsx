import React from "react";
import {useParams} from "react-router-dom";
import {Job} from "../../models";
import ButtonApply from "../../components/Button/ButtonApply";
import JobDescription from "../../components/JobDescription/JobDescription";
import JobDetailsHeader from "../../components/JobDetailsHeader/JobDetailsHeader";

interface Props {
    jobs: Job[]
}

const DetailedJob = ({jobs}: Props) => {
    const {id} = useParams();

    function findJob(jobs: Job[], id: string): Job | null {
        const result = jobs.filter(item => {
            return item["id"] === id
        })
        if (result.length > 0) {
            return result[0]
        }
        return null;
    }

    const detailedJob = findJob(jobs, `${id}`)


    if (!detailedJob) {
        return <>
            <div>Job Not Found</div>
        </>
    }

    return (
        <div className="grid grid-cols-[_2fr_1fr] gap-[8rem]">
            <div>
                <JobDetailsHeader/>
                <ButtonApply/>
                <JobDescription detailedJob={detailedJob}/>
                <ButtonApply/>
            </div>
            <div>
                map
            </div>
        </div>
    )
}

export default DetailedJob;
