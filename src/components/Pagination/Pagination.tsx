import React from "react";

const Pagination = () => {
  return(
      <nav aria-label="Page navigation example">
          <ul className="inline-flex items-center shadow-paginationShadow rounded-lg text-center">
              <li className="">
                  <a href="#" className="block py-2 px-3 ml-0 leading-tight text-[#70778B] bg-[#FFFFFF] rounded-l-lg">
                      <span className="sr-only">Previous</span>
                      <svg aria-hidden="true" className="border-r w-12 h-8 mr-4 pr-4" fill="#BEC2CE" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                  </a>
              </li>
              <li>
                  <a href="#"
                     className="block py-2 px-3 leading-tight text-[#70778B] bg-[#FFFFFF] hover:border-b-2 hover:border-[#5876C5] hover:text-[#5876C5]">1</a>
              </li>
              <li>
                  <a href="#"
                     className="block py-2 px-3 leading-tight text-[#70778B] bg-[#FFFFFF] hover:border-b-2 hover:border-[#5876C5] hover:text-[#5876C5]">2</a>
              </li>
              <li>
                  <a href="#" aria-current="page"
                     className="block z-10 py-2 px-3 leading-tight text-[#70778B] bg-[#FFFFFF] hover:border-b-2 hover:border-[#5876C5] hover:text-[#5876C5]">3</a>
              </li>
              <li>
                  <a href="#"
                     className="block py-2 px-3 leading-tight text-[#70778B] bg-[#FFFFFF] rounded-r-lg">
                      <span className="sr-only">Next</span>
                      <svg aria-hidden="true" className="border-l w-12 h-8 ml-4 pl-4" fill="#BEC2CE" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                      </svg>
                  </a>
              </li>
          </ul>
      </nav>
  )
}

export default Pagination;