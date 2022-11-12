import React from "react";
import PageLink from "./PageLink";
import {getPaginationItems} from "./../../services/pagination"
export type Props = {
    currentPage: number;
    lastPage: number;
    maxLength: number;
    setCurrentPage: (page: number) => void;
};

const Pagination = (
    {currentPage,
        lastPage,
        maxLength,
        setCurrentPage,}: Props) => {

    const pageNums = getPaginationItems(currentPage, lastPage, maxLength);

  return(
          <nav className="text-center">
              <ul className="inline-flex items-center shadow-paginationShadow rounded-lg">
              <PageLink
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
              >
                  <svg aria-hidden="true" className="border-r w-12 h-8 mr-4 pr-4" fill="#BEC2CE" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
              </PageLink>
              {pageNums.map((pageNum, idx) => (
                  <PageLink
                      key={idx}
                      active={currentPage === pageNum}
                      disabled={isNaN(pageNum)}
                      onClick={() => setCurrentPage(pageNum)}
                  >
                      {!isNaN(pageNum) ? pageNum : '...'}
                  </PageLink>
              ))}
              <PageLink
                  disabled={currentPage === lastPage}
                  onClick={() => setCurrentPage(currentPage + 1)}
              >
                  <svg aria-hidden="true" className="border-l w-12 h-8 ml-4 pl-4" fill="#BEC2CE" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                  </svg>
              </PageLink>
              </ul>
          </nav>
  )
}

export default Pagination;