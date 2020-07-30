import React from 'react'
import {Modal,ModalBody,ModalFooter,Button,ModalHeader, Form,Input, FormGroup, Label} from 'reactstrap'

import { useState } from 'react'
import Axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import { useAuth } from '../../auth'




const BuyDietPlan = (props) => {

    let {modal,toggle,name} =props 
    let nutri_data= props.data
    let {state}=useAuth()
    let [form,setForm]=useState({
        purpose:'',description:'',
        token:'',
        phone:""
    })

    console.log(form)
    let [resp,setResp]=useState({success:false,msg:''})
    function onchange(e){
    let {name,value}=e.target
      setForm({...form,[name]:value})
    }

    function onSubmit(e){

      e.preventDefault()
        let data={

            purpose:form.purpose,
            token:form.token,
            description:form.description,
            nutri_id:nutri_data._id,
            phone:form.phone
        }
        console.log(data)
      Axios({method:"post",url:'http://localhost:5000/diet_plan_order/make_new_order',headers:{'x-auth-token':localStorage.getItem('token')},
        data
       
    })

    .then(res=>{

       props.get()


    })
    .catch(err=>{

    console.log(err)
    })

    }



    return (     
    <div>
       
        <Modal backdrop='static' isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
            <ModalBody>
            <Form onSubmit={onSubmit} >
          <div className='form-group'>
              <div className='row'>
                  <div className='col-md-12'>
                     Purpose: <Input type='text' value={form.purpose} name='purpose' onChange={onchange} required placeholder='Purpose of your Diet Plan'>

                         </Input>
                  </div>
              </div>
          </div>

          <div className='form-group'>
              <div className='row'>
                  <div className='col-md-12'>
                     Phone No.: <Input type='text' value={form.phone} name='phone' onChange={onchange} required placeholder='Phone No.'>

                         </Input>
                  </div>
              </div>
          </div>


          <div className='form-group'>
              <div className='row'>
                  <div className='col-md-12'>
                     Description: <Input type='textarea' value={form.description} name='description' required onChange={onchange} placeholder='Description'>

                         </Input>
                  </div>
              </div>
          </div>
          {form.token!==''&&
          <div className='form-group'>
              <span className='text-success'> Payment Verifed.</span>
              <div className='row'>
                  <div className='col-md-12'>
                      <Input value='Place Order' className='btn btn-success btn-block' type='Submit'/>
                    <span className={resp.success?'text-success':'text-danger'}> {resp.msg}</span>
                  </div>
              </div>
          </div>

}
      </Form>

      {form.token===''&&<div>
                <StripeCheckout className='btn btn-primary' 
                amount={nutri_data.fee*100}
              
                token={
                        (token)=>{
                            console.log(token)
                            setForm({...form,token})
                         }
                    }        
                    email={state.me.email}       
                stripeKey="pk_test_FSCNJPbqw8vY8O6i25AxGk9V00kbuiaHOm">

                    <Button block color='primary'>Pay</Button>
                </StripeCheckout>
            </div>}
            </ModalBody>
          <ModalFooter>


          </ModalFooter>
        </Modal>
      </div> );
}
 
export default BuyDietPlan;