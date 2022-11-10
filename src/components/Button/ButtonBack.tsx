import React from "react";
import { NavLink } from "react-router-dom";


const ButtonBack = () => {
  return(
      <NavLink to="/">
          <button type="button" className="flex rounded-[8px] bg-[#E4E5EA] text-[#3A4562] py-[18px] px-[26px] text-[12px] leading-[16px] hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition ease-in-out duration-300">
              <img className="mr-5" src={`${process.env.PUBLIC_URL}/images/Arrow.svg`} alt="Arrow icon"></img>
              RETURN TO JOB BOARD
          </button>
      </NavLink>
  )
}

export default ButtonBack;