import React, {useEffect, useState} from "react";
import {Job} from "../../models";
import JobListItem from "../JobListItem/JobListItem";
import Pagination from "../Pagination/Pagination";
import {useLocation} from "react-router-dom";

interface Props {
    data: Job[];
}

const JobList: React.FC<Props> = ({data}: Props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const countPages = Math.ceil(data.length / 10.0);

    const render = [...data];
    const els = render.slice((currentPage - 1) * 10, (currentPage) * 10)

    return (
        <>
            <ul className="mx-auto my-0 mb-8 sm:mb-6">
                {els.map((item, index) => (
                    <JobListItem job={item} key={index}/>
                ))}
            </ul>
            <Pagination
                currentPage={currentPage}
                lastPage={countPages}
                maxLength={5}
                setCurrentPage={setCurrentPage}
            />
        </>
    )
}

export default JobList;