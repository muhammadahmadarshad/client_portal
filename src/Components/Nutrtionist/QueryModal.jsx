import React from 'react'
import {Modal,ModalBody,ModalFooter,ModalHeader, Form,Input, FormGroup, Label} from 'reactstrap'

import { useState } from 'react'
import Axios from 'axios'




const QueryModal = (props) => {

    let {modal,toggle,name,_id} =props

    let [query,setQuery]=useState('')
    let [resp,setResp]=useState({success:false,msg:''})
    function onchange(e){

      setQuery(e.target.value)
    }

    function onSubmit(e){

      e.preventDefault()
    

      Axios({method:'POST',url:"http://localhost:5000/query/sendMessage",data:{query,nutri_id:_id},headers:{'x-auth-token':localStorage.getItem('token')}}) 
      .then(res=>{

        setResp(res.data)
        setQuery('')
        
      })
      .catch(
        (err)=>{
          setResp(err.response.data)
        }
      )


    }



    return (     
    <div>
       
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
            <ModalBody>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                <Label for='msg'>
                    Your Message:
                </Label>
                
                    <Input name='msg' value={query} onChange={onchange} id='msg' type='textarea'></Input>

                </FormGroup>
                <FormGroup>
                <Input className='btn-primary' type='submit' value='Send Query' ></Input>
                </FormGroup>
                <FormGroup>
                <h4 className={resp.success?"text-success":'text-danger'}>{resp.msg}</h4>
                </FormGroup>
            </Form>
            </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div> );
}
 
export default QueryModal;