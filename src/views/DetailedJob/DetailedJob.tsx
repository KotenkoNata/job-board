import React from "react";
import {useParams} from "react-router-dom";
import {Job} from "../../models";
import ButtonApply from "../../components/Button/ButtonApply";
import JobDescription from "../../components/JobDescription/JobDescription";
import JobDetailsHeader from "../../components/JobDetailsHeader/JobDetailsHeader";
import AdditionalInfo from "../../components/AdditionalInfo/AdditionalInfo";
import AttachedImages from "../../components/AttachedImages/AttachedImages";
import ButtonBack from "../../components/Button/ButtonBack";
import Map from "../../components/Map/Map";

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
        <div className="grid grid-cols-[_2fr_1fr] gap-[8rem] pt-14 pb-40">
            <div>
                <div className="pl-24">
                    <JobDetailsHeader/>
                    <ButtonApply/>
                    <JobDescription detailedJob={detailedJob}/>
                    <ButtonApply/>
                    <AdditionalInfo detailedJob={detailedJob}/>
                    <AttachedImages detailedJob={detailedJob}/>
                </div>
                <ButtonBack />
            </div>
            <div>
                <Map detailedJob={detailedJob} />
            </div>
        </div>
    )
}

export default DetailedJob;
