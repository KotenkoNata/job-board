import React from "react";
import {Job} from "./../../models";
import { Link } from "react-router-dom";
import dateDiffInDays from "./../../services/dateDiffInDays";

type Props = {
    job: Job,
}

const JobListItem = ({job}: Props)=>{

   return(
       <li key={job.id} className="bg-[#FFFFFF] px-6 py-4 flex h-[164px] items-center mb-[8px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
           <div className="h-[85px] w-[85px] bg-slate-800 rounded-full overflow-hidden mr-7">
           <img className="object-fill" src={job.pictures[0]} alt={job.name}/>
           </div>
           <div className="w-[100%]">
               <div className="flex">
                   <div>
                       <Link to={{pathname: `/job/${job.id}`}}>
                            <p className="mb-2">{job.title}</p>
                       </Link>
                   </div>
                   <div className="ml-auto">
                       <img src={`${process.env.PUBLIC_URL}/images/Bookmark.svg`} alt={job.title}></img>
                   </div>
               </div>

               <div className="secondary-text">
               <h3 className="mb-2">Department name · {job.name}</h3>
               <div className="flex">
                   <div className="flex">
                       <img className="mr-2" src={`${process.env.PUBLIC_URL}/images/Location.svg`} alt="Location icon"></img>
                       <span>{job.address}</span>
                   </div>
                   <div className="ml-auto">
                       <span>Posted {`${dateDiffInDays(job.createdAt, job.updatedAt) > 0 ?
                           `${dateDiffInDays(job.createdAt, job.updatedAt)} day` :
                           `${dateDiffInDays(job.createdAt, job.updatedAt)} days`} `} ago</span>
                   </div>
               </div>
               </div>
           </div>
       </li>
   )
}

export default JobListItem;