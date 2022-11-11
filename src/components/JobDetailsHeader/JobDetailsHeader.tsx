import React from "react";

const JobDetailsHeader = () => {
  return (
      <div className="flex border-b-[2px] pb-[10px] items-baseline sm:block sm:border-b-0">
        <h1 className="text-[28px] leading-[34px] tracking-[0.413333px] sm:border-b-[2px] sm:pb-[12px] sm:mb-6">Job Details</h1>
        <ul className="jod-detailed-text flex ml-auto sm:justify-start">
          <li className="flex mr-12 w-[100%] sm:w-max">
            <img className="mr-2" src={`${process.env.PUBLIC_URL}/images/Bookmark.svg`} alt="Bookmark icon"></img>
            <span className="">Save to my list</span>
          </li>
          <li className="flex">
            <img  className="mr-2" src={`${process.env.PUBLIC_URL}/images/Share.svg`} alt="Share icon"></img>
            <span>Share</span>
          </li>
        </ul>
      </div>
  )
}

export default JobDetailsHeader;