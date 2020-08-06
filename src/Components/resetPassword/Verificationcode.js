import React, {  Component } from 'react';
import {Form,Row,Jumbotron,FormGroup,Col, Button,Spinner } from 'reactstrap'
import OtpInput from 'react-otp-input';

export default function Verification(props) {
    let {opt,handleChange,handleForm,loading}=props

    
   
        return (
                <Form onSubmit={handleForm} className='mt-5' >
            
                            <Jumbotron className='w-50 m-auto'  >
                                
                                
                                    <FormGroup  >
                                    <h1 className="text-center">Verification Code</h1>
                                        <p>Verification code has been sent to your email.
                                            Please type the 6 digit verifications code to reset the password</p>
                                            <div className='m-auto'>
                                            <OtpInput
                                            
                                                value={opt.opt}
                                                hasErrored={opt.invalid}
                                                onChange={handleChange}
                                                numInputs={6}
                                                separator={<span>_</span>}
                                                isInputNum={true}
                                                
                                                inputStyle='w-100'
                                            />
                                            {opt.invalid&&<h5 className='text-center text-danger'>{opt.msg}</h5>}
                                            </div>
                                    </FormGroup>
                               
                                    <Button type="submit" block color="primary">{!loading?'Verfiy':<Spinner/>}</Button>
                            </Jumbotron>
          
                </Form>

        )
    }

