import React from "react";
import {Job} from "./../../models";

type Props = {
    key: string,
    job: Job,
}

const JobListItem = ({job, key}: Props)=>{

    function dateDiffInDays(a: string, b:string) {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;

        let first = new Date(a);
        let second = new Date(b);

        const utc1 = Date.UTC(first.getFullYear(), first.getMonth(), first.getDate());
        const utc2 = Date.UTC(second.getFullYear(), second.getMonth(), second.getDate());

        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }

   return(
       <li className="bg-[#FFFFFF] px-6 py-4 flex h-[164px] items-center mb-[8px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]" key={key}>
           <div className="h-[85px] w-[85px] bg-slate-800 rounded-full overflow-hidden mr-7">
           <img className="object-fill" src={job.pictures[0]} alt={job.name}/>
           </div>
           <div className="w-[100%]">
               <p className="mb-2">{job.title}</p>
               <div className="secondary-text">
               <h3 className="mb-2">Department name · {job.name}</h3>
               <div className="flex">
                   <div className="flex">
                       <img className="mr-2" src={`${process.env.PUBLIC_URL}/images/Location.svg`}></img>
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