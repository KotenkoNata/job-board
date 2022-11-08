import React from "react";

const JobDetailsHeader = () => {
  return (
      <div className="flex mt-12 border-b-[2px] pb-[10px] items-baseline">
        <h1 className="text-[28px] leading-[34px] tracking-[0.413333px]">Job Details</h1>
        <ul className="jod-detailed-text flex ml-auto">
          <li className="flex mr-12 w-[100%]">
            <img className="mr-2" src={`${process.env.PUBLIC_URL}/images/Bookmark.svg`}></img>
            <span className="">Save to my list</span>
          </li>
          <li className="flex">
            <img  className="mr-2" src={`${process.env.PUBLIC_URL}/images/Share.svg`}></img>
            <span>Share</span>
          </li>
        </ul>
      </div>
  )
}

export default JobDetailsHeader;