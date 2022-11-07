import React from "react";
import {Job} from "./../../models";

type Props = {
    key: string,
    job: Job,
}

const JobListItem = ({job, key}: Props)=>{
   return(
       <li className="bg-[#FFFFFF] px-2 py-4 flex h-[164px] justify-between items-center mb-[8px]" key={key}>
           <div className="h-[85px] w-[85px] bg-slate-800 rounded-full overflow-hidden">
           <img className="object-fill" src={job.pictures[0]} alt={job.name}/>
           </div>
           <div>
               <p>{job.title}</p>
               <div className="secondary-text">
               <h3>Department name · {job.name}</h3>
               <div className="flex ">
                   <img src={`${process.env.PUBLIC_URL}/images/Location.svg`}></img>
                   <span>{job.address}</span>
               </div>
               </div>
           </div>
       </li>
   )
}

export default JobListItem;