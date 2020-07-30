import React from 'react';

import {Form,Input} from 'reactstrap'
import {countryList} from '../../Components/Countries/countries'
export default function UpdateAccount (props) {
    const {
        Firstname,
        Lastname,
        
        Address,
        DOB,
        City,
        Country,
        Weight,
        Height,
        onChangeAddress,
        onChangeCity,
        onChangeCountry,
        onChangeDOB,
        onChangeWeight,
        onChangeHeight,
        onChangeFirstName,
        onChangeLastName,
        onSubmit,
       

    } =props


    return (
      
      <div className="signup-form">
          <Form onSubmit={onSubmit} >
              <h2>Account</h2>
              <div className="form-group">
                  <div className="row">
                      <div className="col-sm-6">First Name:<Input value={Firstname.firstname} invalid={Firstname.err} onChange={onChangeFirstName} type="text" className="form-control" placeholder="First Name" />
                      {Firstname.err&&<span className='text-danger'>{Firstname.msg}</span>}
                      </div>
                      <div className="col-sm-6">Last Name :<Input type="text" value={Lastname.lastname} onChange={onChangeLastName} className="form-control" placeholder="Last Name" />
                      {Lastname.err&&<span className='text-danger'>{Lastname.msg}</span>}
                      </div>
                      
                  </div>
              </div>

              <div className="form-group">
                  <div className="row">

                      <div className="col-sm-12">DOB: 
                      
                      <Input defaultValue={DOB.dob} onChange={onChangeDOB} type="date" id="birthday"  name="birthday" className="form-control" />
                      {DOB.err&&<span className='text-danger'>{DOB.msg}</span>}
                      </div>
                      

                  </div>
              </div>
              <div className="form-group">
                  <div className="row">
                     
                      <div className="col-sm-6">Weight:
                      <Input type="number" value={Weight.weight} invalid={Weight.err} onChange={onChangeWeight} className="form-control" placeholder="Weight" />
                      {Weight.err&&<span className='text-danger'>{Weight.msg}</span>}
                      </div>
                      <div className="col-sm-6">Height:
                      <Input type="number" value={Height.height} invalid={Height.err} onChange={onChangeHeight} className="form-control" placeholder="Height" />
                      {Height.err&&<span className=' text-danger'>{Height.msg}</span>}
                      </div>
                      
                  
                  </div>
                  
                  
              </div>
              <div className="form-group">
                  <div className="row">
                  <div className="col-sm-6">Country:<Input id="country" type='select' invalid={Country.err}  value={Country.country} onChange={onChangeCountry} name="country" className="form-control" >
                          <option value="0" className="display">Select Country</option>
                      {countryList.map((country,index)=>(<option key={index} value={country}>{country}</option>))}
          
                      </Input> 
                      {Country.err&&<span className='text-danger'>{Country.msg}</span>}
                      
                      </div>
                      <div className="col-sm-6">City:<Input value={City.city} invalid={City.invalid} onChange={onChangeCity} type= "text" className="form-control" placeholder="City" />
                      {City.err&&<span className='text-danger'>{City.msg}</span>}
                      </div>
                      

                  </div>
              </div>
              <div className="row">
              <div className="col-sm-12">Address:<Input invalid={Address.err} type='textarea' value={Address.address} onChange={onChangeAddress} className="form-control" placeholder="Address" />
              {Address.err&&<span className='text-danger'>{Address.msg}</span>}
              </div>
              
              </div>
              <div >
              
              <div className="row mt-3">
                  <div className='col-sm-12'><button type="submit" className="btn btn-warning btn-lg btn-block">Update</button>
                  
             
              </div>
              </div>
              </div>
              
          </Form>
          
      </div>
      
      
    );
  }

