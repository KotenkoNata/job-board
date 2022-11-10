import React from "react";
import {Job} from "../../models";

interface Props {
    detailedJob: Job
}

const AdditionalInfo = ({detailedJob}:Props) => {
  return(
      <>
          <h2 className="mt-20 mb-5 border-b-[2px] pb-[10px] text-[28px] leading-[34px] tracking-[0.413333px]">
              Additional info
          </h2>
          <h4 className="secondary-text mb-3">Employment type</h4>
          <div className="mb-10">
              {detailedJob.employment_type.map(item=>{
                  return(
                      <button className="rounded-[8px] bg-[#E2E6F4] py-[17px] px-[90px] border-[#B7C1DA] border-solid border mr-2 hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition ease-in-out duration-300" type="button">{item}</button>
                  )
              })}
          </div>
          <h4 className="secondary-text mb-3">Benefits</h4>
          <div>
              {detailedJob.benefits.map(item=>{
                  return(
                      <button className="rounded-[8px] bg-[#FFF8D9] py-[17px] px-[90px] border-[#FFCF00] border-solid border mr-2 text-[#988B49] hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition ease-in-out duration-300" type="button">{item}</button>
                  )
              })}
          </div>

      </>
  )
}

export default AdditionalInfo;