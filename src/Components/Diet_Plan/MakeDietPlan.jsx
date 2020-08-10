import React from 'react'
import {Form,Input, Spinner} from 'reactstrap'
import Loading from '../Loading/Loading'

const MakeDietPlan = (props) => {

    let {title,start_date,loading,onSubmit,duration,onChangeDuration,onChangeTitle,onChangeStartDate,save}= props

    if(loading){

        return(<Loading/>)
    }




    return ( <div className='container'>
    <h3 className='text-center p-2'>Diet Plan</h3>
    <div className='m-auto w-50 jumbotron'>
        <h5 className='text-center'>Make Your Own Diet Plan</h5>
      <Form onSubmit={onSubmit}>
          <div className='form-group'>
              <div className='row'>
                  <div className='col-md-12'>
                     Purpose/Title: <Input type='select' invalid={title.err} value={title.value} onChange={onChangeTitle} placeholder='Purpose of your Diet Plan'>
                              <option value='0'>Select Purpose/Title</option>
                              <option value='Weight Loss'>Weight Loose</option>
                              <option value='Weight Gain'>Weight Gain</option>
                              <option value='Healthy LifeStyle'>Healthy LifeStyle</option>
                         </Input>
                  {title.err&&<span className='text-danger'>{title.msg}</span>}
                  </div>
              </div>
          </div>

          <div className='form-group'>
              <div className='row'>
                  <div className='col-md-6'>
                     Start Date: <Input invalid={start_date.err} value={start_date.value} onChange={onChangeStartDate} type='date'/>
                     {start_date.err&&<span className='text-danger'>{start_date.msg}</span>}
                  </div>
                  <div className='col-md-6'>
                   Duration:   <Input type='number' value={duration.value} invalid={duration.err} onChange={onChangeDuration} placeholder='Enter Duration (Days)'/>
                   {duration.err&&<span className='text-danger'>{duration.msg}</span>}
                  </div>
              </div>
          </div>
          
          <div className='form-group'>
              <div className='row'>
                  <div className='col-md-12'>
        <button  className='btn btn-success btn-block' type='Submit'>{save?<Spinner/>:'Make Diet Plan'}</button>
                  <span></span>
                  </div>
              </div>
          </div>

      </Form>



    </div>

</div> );
}
 
export default MakeDietPlan;