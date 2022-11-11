import React from "react";
import dateDiffInDays from "../../services/dateDiffInDays";

interface Props{
    createdAt: string;
    updatedAt: string;
}

const PostedDay = ({createdAt, updatedAt}: Props) => {
  return(
      <>
          <span>Posted {`${dateDiffInDays(createdAt, updatedAt) > 0 ?
              `${dateDiffInDays(createdAt, updatedAt)} day` :
              `${dateDiffInDays(createdAt, updatedAt)} days`} `} ago</span>
      </>
  )
}

export default PostedDay;