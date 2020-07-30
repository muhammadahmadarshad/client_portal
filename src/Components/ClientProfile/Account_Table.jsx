import React from 'react';
import { Table } from 'reactstrap';
import moment from 'moment'
const AccountTable = (props) => {
  const  { first_name,last_name,email,city,country,address,weight,height,dob,gender}=props.data
  
  return ( 
  <div className='m-5 text-center'>
    <h1><span className='fa fa-user'></span>  Account</h1>
    <Table striped className=' m-auto' style={{width:"60%"}}>
      <tbody >
        <tr>
          <th>First Name</th>
          <td>{first_name}</td>
        </tr>
        <tr>
          <th>Last Name</th>
          <td>{last_name}</td>
        </tr>
        <tr>
          <th>Sex</th>
          <td>{gender}</td>
        </tr>

        <tr>
          <th>Email</th>
          <td>{email}</td>
        </tr>

        <tr>
          <th>Date of Birth</th>
          <td>{moment(dob).format('DD/MM/YYYY')}</td>
        </tr>
        <tr>
          <th>Weight</th>
          <td>{weight} kg</td>
        </tr>
        <tr>
          <th>Height
          </th>
          <td>{height} cm</td>
        </tr>
        <tr>
          <th>Country</th>
          <td>{country}</td>
        </tr>

        <tr>
          <th>City</th>
          <td>{city}</td>
        </tr>

        <tr>
          <th>Address</th>
          <td>{address}</td>
        </tr>
      </tbody>

    </Table>



  </div> );
}
 
export default AccountTable;