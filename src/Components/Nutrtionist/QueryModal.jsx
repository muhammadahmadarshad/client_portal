import React from 'react'
import {Modal,ModalBody,ModalFooter,ModalHeader, Form,Input, FormGroup, Label, Button, Spinner} from 'reactstrap'

import { useState } from 'react'
import Axios from 'axios'




const QueryModal = (props) => {

    let {modal,toggle,name,_id} =props

    let [query,setQuery]=useState('')
    let [resp,setResp]=useState({success:false,msg:''})
    var [loading,setLoading]=useState(false)
    function onchange(e){

      setQuery(e.target.value)
    }

    function onSubmit(e){

      e.preventDefault()
    
      setLoading(true)
      Axios({method:'POST',url:"http://localhost:5000/query/sendMessage",data:{query,nutri_id:_id},headers:{'x-auth-token':localStorage.getItem('token')}}) 
      .then(res=>{

        setResp(res.data)
        setQuery('')
        setLoading(false)
        
      })
      .catch(
        (err)=>{
          setResp(err.response.data)
          setLoading(false)
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
    <Button color='primary' block type='submit'  >{loading?<Spinner/>:'Send Query'}</Button>
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

