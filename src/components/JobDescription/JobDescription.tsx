import React, {useEffect, useState} from "react";
import {Job} from "../../models";
import dateDiffInDays from "./../../services/dateDiffInDays";
import BenefitsList from "../BenefitsList/BenefitsList";

interface Props{
    detailedJob: Job[]
}

const JobDescription = ({detailedJob}: Props) => {

    const [descriptionText, setDescriptionText] = useState<string[]>([]);

    console.log(`detailedJob`,detailedJob)

    function divideTextDescription(str: string) {
        let result = [];
        result =  str.trim()
            .replace(/[\r\n|\n|\r]/g, "")
            .split(/\s\s+/g)
            .filter(item => item !== 'Responsopilities:' && item !== 'Compensation & Benefits:');

        return result;
    }

    useEffect(()=>{
        const text = divideTextDescription(detailedJob[0].description);
        setDescriptionText(() => text);
    }, [])

  return (
      <>
          <div className="flex">
              <h2>{detailedJob[0].title}</h2>
              <div className="ml-auto">
                  <span>{detailedJob[0].salary}</span>
                  <p>Brutto, per year</p>
              </div>
          </div>
          <span>Posted {`${dateDiffInDays(detailedJob[0].createdAt, detailedJob[0].updatedAt) > 0 ?
              `${dateDiffInDays(detailedJob[0].createdAt, detailedJob[0].updatedAt)} day` :
              `${dateDiffInDays(detailedJob[0].createdAt, detailedJob[0].updatedAt)} days`} `} ago
          </span>
          <p>
              {descriptionText[0]}
          </p>
          <h3>Responsopilities</h3>
          <p>
              {descriptionText[1]}
          </p>
          <h3>Compensation & Benefits</h3>
          {/*<BenefitsList arrayBenefits={descriptionText[2].split('.')}/>*/}

      </>
  )
}

export default JobDescription;