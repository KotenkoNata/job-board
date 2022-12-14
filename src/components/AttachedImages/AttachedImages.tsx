import React from "react";
import {Job} from "../../models";

interface Props {
    detailedJob: Job
}

const AttachedImages = ({detailedJob}: Props) => {
    return(
        <>
            <h2 className="mt-20 mb-10 border-b-[2px] pb-[10px] text-[28px] leading-[34px] tracking-[0.413333px] sm:mt-10">
                Attached images
            </h2>
            <ul className="grid grid-cols-[13rem_13rem_13rem] gap-2 mb-24 sm:block sm:mb-10">
                {detailedJob.pictures.map((item,index)=>{
                    return(
                        <li key={index} className="rounded-[8px] overflow-hidden w-52 h-[116px] sm:mx-auto sm:mb-3">
                            <img className="object-cover w-[100%] h-[100%]" src={item} alt={detailedJob.name}/>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default AttachedImages;