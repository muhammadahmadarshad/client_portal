import React from 'react';
import Pagination from 'react-js-pagination';

const Paginate = ({recipe,match,history}) => {

  const {query,page}=match.params
  const {push}=history
  const {total_results,max_results}=recipe 
  



  function setPage(number){

      push(`/search_recipe/${query}/${number}`)

  }



  return (
    <div className='d-flex justify-content-center'>
      <Pagination
      
        activePage={parseInt(page)}
        itemCountPerPage={parseInt(max_results)} 
        totalItemsCount={parseInt(total_results)}
        pageRangeDisplayed={10}
        onChange={setPage}
        itemClass='page-item'
        linkClass='page-link'
        nextPageText='Next'
        prevPageText='Prev'
        lastPageText='Last'
        firstPageText='First'
        >

      </Pagination>
    </div>
  );
}

export default Paginate;