import React,{useState} from "react";
import {Job} from "../../models";
import JobListItem from "../JobListItem/JobListItem";
import Pagination from "../Pagination/Pagination";

interface Props {
    data: Job[];
}

const JobList: React.FC<Props> =({data}: Props)=>{
    const [currentPage, setCurrentPage] = useState(1);
    const lastPage = Math.ceil(data.length / 15);

    return (
        <>
        <ul className="mx-auto my-0">
            {data.map((item, index) =>(
                <JobListItem job={item} key={index}/>
            ))}
        </ul>
            <Pagination
                currentPage={currentPage}
                lastPage={lastPage}
                maxLength={5}
                setCurrentPage={setCurrentPage}
            />
        </>
    )
}

export default JobList;