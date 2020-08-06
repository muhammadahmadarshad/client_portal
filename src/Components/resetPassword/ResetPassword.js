import React,{useState} from 'react';
import {Form,Row,Card,CardBody,FormGroup,Col,Button,Input,Label, FormFeedback, Spinner} from 'reactstrap'

function ResetPassword(props){
    let {changeConfirmPassword,changePassword,password,confirmpassword,handleForm,loading}=props
    return(
        <Form onSubmit={handleForm} className='mt-5'>
     
                <div className='jumbotron w-50 m-auto ' >
                    <h1 className="text-center">Reset Password</h1>
                    
                        <FormGroup >
                            <Label>New Password:</Label>
                            <Input type="password" placeholder='New Password' required value={password.password} invalid={password.invalid} name="password"  onChange={changePassword}  />
                            <FormFeedback>{password.msg}</FormFeedback>
                        </FormGroup>
                        <FormGroup >
                            <Label>Confirm Password:</Label>
                            <Input type="password" placeholder='Confirm Password' required value={confirmpassword.confirmpassword} invalid={confirmpassword.invalid}  onChange={changeConfirmPassword}  />
                            <FormFeedback>{confirmpassword.msg}</FormFeedback>
                        </FormGroup>
                   
                    <Button type="submit" block color="primary">{!loading?'Change Password':<Spinner/>}</Button>
                </div>
       
    </Form>
    )
}

export default ResetPassword