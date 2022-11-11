import React from "react";
import {Job} from "./../../models";
import { Link } from "react-router-dom";
import PostedDay from "../PostedDay/PostedDay";
import Rating from "../Rating/Rating";

type Props = {
    job: Job,
}

const JobListItem = ({job}: Props)=>{

   return(
       <li key={job.id} className="bg-[#FFFFFF] px-6 py-4 flex h-40 items-center mb-[8px] shadow-listShadow sm:bg-[#EFF0F5] sm:h-52 sm:px-4 sm:py-3">
           <div className="h-20 w-20 rounded-full overflow-hidden mr-7 sm:h-16 sm:mr-4">
                <img className="object-cover w-[100%] h-[100%]" src={job.pictures[0]} alt={job.name}/>
           </div>
           <div className="w-[90%]">
               <div className="secondary-text hidden sm:flex sm:justify-between sm:text-[14px] sm:font-light sm:leading-4 sm:tracking-[0.206667px] sm:mb-3">
                   <Rating />
                   <PostedDay createdAt={job.createdAt} updatedAt={job.updatedAt}/>
               </div>
               <div className="flex">
                   <div>
                       <Link to={{pathname: `/job/${job.id}`}}>
                            <p className="mb-2 sm:mb-1 sm:text-[18px] sm:font-normal sm:leading-6 sm:tracking-[-0.5625px] sm:break-all">{job.title}</p>
                       </Link>
                   </div>
                   <div className="ml-auto sm:hidden">
                       <img src={`${process.env.PUBLIC_URL}/images/Bookmark.svg`} alt={job.title}></img>
                   </div>
               </div>

               <div className="secondary-text">
               <h3 className="mb-2 sm:text-[14px] sm:leading-4">Department name · {job.name}</h3>
               <div className="flex">
                   <div className="flex items-center">
                       <img className="mr-2" src={`${process.env.PUBLIC_URL}/images/Location.svg`} alt="Location icon"></img>
                       <span className="sm:text-[14px] sm:leading-4">{job.address}</span>
                   </div>
                   <div className="ml-auto sm:hidden">
                       <PostedDay createdAt={job.createdAt} updatedAt={job.updatedAt} />
                   </div>
               </div>
               </div>
           </div>
       </li>
   )
}

export default JobListItem;