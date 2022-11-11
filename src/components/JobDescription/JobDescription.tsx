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
            <div className="grid grid-cols-[_3fr_auto] gap-[4rem] mt-10">
                <div>
                <h2 className="leading-[30px] text-[24px] tracking-[-0.75px]">{detailedJob.title}</h2>
                </div>
                <div className="ml-auto">
                    <p>€ {detailedJob.salary.replace(/[k]/gi," 000")}</p>
                    <p className="jod-detailed-text">Brutto, per year</p>
                </div>
            </div>
            <div className="secondary-text">
                <PostedDay createdAt={detailedJob.createdAt} updatedAt={detailedJob.updatedAt} />
            </div>
            <p className="jod-detailed-text mb-8 mt-2">
                {descriptionArray[0]}
            </p>
            <h3 className="mb-4">Responsopilities</h3>
            <p className="jod-detailed-text mb-8">
                {descriptionArray[1]}
            </p>
            <h3 className="mb-4">Compensation & Benefits:</h3>
            <ul>
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