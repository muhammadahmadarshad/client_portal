import React from 'react';
import Pagination from 'react-js-pagination';

 const Paginate = ({total_results,match,history,url}) => {
  console.log(history)
  const {page}=match.params
  const {push}=history
  

  function onPageChange(number){

    push(url+number)
  }




  return (
    <div className='d-flex justify-content-center'>
      <Pagination
        totalItemsCount={total_results}
        activePage={parseInt(page)}
        itemsCountPerPage={12}
        onChange={onPageChange}
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

export default Paginate