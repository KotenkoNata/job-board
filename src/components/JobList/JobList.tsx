import React from "react";
import {Job} from "../../models";
import JobListItem from "../JobListItem/JobListItem";

interface Props {
    data: Job[];
}

const JobList: React.FC<Props> =({data}: Props)=>{
    return (
        <ul className="mx-auto my-0">
            {data.map((item, index) =>(
                <JobListItem job={item} key={index}/>
            ))}
        </ul>
    )
}

export default JobList;