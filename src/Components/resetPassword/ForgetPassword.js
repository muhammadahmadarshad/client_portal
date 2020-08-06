import React, { useState } from 'react';
// import axios from 'axios';
import {Form,Row,Card,CardBody,FormGroup,Col,Input,Label, FormFeedback,Spinner, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
function Forgetpassword (props) {

        let {email, changeEmail, handleForm,loading}=props


        return (
                <Form onSubmit={handleForm} className='mt-5'>
                  
                            <div className='jumbotron w-75 m-auto' >
                                <h1 className="text-center">Forget Password</h1>
                               
                                    <FormGroup >
                                        <Label>Email:</Label>
                                        <Input type="email" placeholder='Enter Email' value={email.email} invalid={email.invalid} name="email"  onChange={changeEmail} required />
                                        <FormFeedback>{email.msg}</FormFeedback>
                                    </FormGroup>

                                    <Button type="submit" block color="primary">{!loading?'Send Code':<Spinner/>}</Button>
                                
                            </div>
             
                </Form>

        )
    }
export default Forgetpassword;