import React from "react";
import {Job} from "../../models";
import PostedDay from "../PostedDay/PostedDay";

interface Props {
    detailedJob: Job
}

const JobDescription = ({detailedJob}: Props) => {

    function divideTextDescription(str: string) {
        let result = [];
        result = str.trim()
            .replace(/[\r\n|\n|\r]/g, "")
            .split(/\s\s+/g)
            .filter(item => item !== 'Responsopilities:' && item !== 'Compensation & Benefits:');

        return result;
    }

        const descriptionArray = divideTextDescription(detailedJob.description);


    return (
        <>
            <div className="grid grid-cols-[_3fr_auto] gap-[4rem] mt-10 sm:mt-8">
                <div>
                <h2 className="leading-[30px] text-[24px] tracking-[-0.75px]">{detailedJob.title}</h2>
                </div>
                <div className="ml-auto sm:hidden">
                    <p>€ {detailedJob.salary.replace(/[k]/gi," 000")}</p>
                    <p className="jod-detailed-text">Brutto, per year</p>
                </div>
            </div>
            <div className="secondary-text sm:flex sm:items-center">
                <div className="text-[13px] font-[300] tracking-[0.191905px] text-[#888D9D]">
                <PostedDay createdAt={detailedJob.createdAt} updatedAt={detailedJob.updatedAt} />
                </div>
                <div className="ml-auto hidden sm:block sm:text-right">
                    <p className="jod-detailed-text text-[#5C637A]">Brutto, per year</p>
                    <p className="text-[20px] font-[700] text-[#3A4562]">€ {detailedJob.salary.replace(/[k]/gi," 000")}</p>
                </div>
            </div>
            <p className="jod-detailed-text mb-8 mt-2 sm:mb-10">
                {descriptionArray[0]}
            </p>
            <h3 className="mb-4">Responsopilities</h3>
            <p className="jod-detailed-text mb-8 sm:mb-10">
                {descriptionArray[1]}
            </p>
            <h3 className="mb-4">Compensation & Benefits:</h3>
            <p className="jod-detailed-text">Our physicians enjoy a wide range of benefits, including:</p>
            <ul className="sm:pl-9">
                {descriptionArray[2].split('. ').map((item: string, index: number)=>{
                  return(<li className="benefit-item" key={index}>
                      <p className="jod-detailed-text">
                          {item}
                      </p>
                  </li>)
                })}
            </ul>
        </>
    )
}

export default JobDescription;