import React from "react";
import {Job} from "../../models";
import JobListItem from "../JobListItem/JobListItem";

interface Props {
    data: Job[];
}

const JobList: React.FC<Props> =({data}: Props)=>{
    console.log(`data`,data)
    return (
        <ul className="mx-auto my-0">
            {data.map((job)=>(
                <JobListItem job={job} key={job.id}/>
            ))}
        </ul>
    )
}

export default JobList;