import React,{useState,useEffect} from 'react';
import './Checkout.css'
import {useAuth} from '../../auth'
import Loading from '../../Components/Loading/Loading'
import StripeCheckout from 'react-stripe-checkout';
import {Input,Modal,ModalHeader,ModalFooter,Button, Spinner} from 'reactstrap'
import axios from 'axios'

export default function Checkout (props){
    const {state,dispatch}=useAuth() 
    const [modal, setModal] = useState(false);
    const [message,setMessage]=useState('')
    const toggle = () => setModal(!modal);
    const [loading,setLoading]=useState(false);
    const [total,setTotal]=useState(0)
    const [token,setToken]=useState('')
    const [email,setEmail]=useState({value:'',invalid:false})
    const [firstname,setFirstName]=useState({value:'',invalid:false})
    const [lastname,setLastName]=useState({value:'',invalid:false})
    const [shipingAddress,setShipingAddress]=useState({value:'',invalid:false})
    const [billingAddress,setBillingAddress]=useState({value:'',invalid:false})
    const [country,setCountry]=useState({value:'',invalid:false})
    const [city,setCity]=useState({value:'',invalid:false})
    const [phone,setPhone]=useState({value:'',invalid:false})
    const [postalCode,setPostalCode]=useState({value:'',invalid:false})
    const [paymentMethod,setPaymentMethod]=useState('')
    const [place_order,setPlaceOrder]=useState(false)
    const [err,setErr]=useState(false)
    const {cart}=state
    const [touched, settouched]=useState({firstname:false,lastname:false,email:false,phone:false,postalCode:false,
                                          billingAddress:false,shipingAddress:false,country:false,city:false})

    function onChangeEmail({target}){

      setEmail({...email,value:target.value})
        
    }

    function onChangeFirstname({target}){

      setFirstName({...firstname,value:target.value})
        
    }

    function onChangeLastname({target}){

      setLastName({...lastname,value:target.value})
        
    }

    function onChangeShipping({target}){

      setShipingAddress({...shipingAddress,value:target.value})
        
    }

    function onChangeBilling({target}){

      setBillingAddress({...billingAddress,value:target.value})
        
    }

    function onChangeCountry({target}){
      setCountry({...country,value:target.value})
        
    }

    function onChangeCity({target}){

      setCity({...city,value:target.value})
        
    }

    function onChangePostalCode({target}){

      setPostalCode({...postalCode,value:target.value})
        
    }


    function onChangePhone({target}){

      setPhone({...phone,value:target.value})
        
    }




  function onSubmit(e){

    e.preventDefault()
      const errors= validate(firstname.value, lastname.value, email.value,
        shipingAddress.value, billingAddress.value, country.value, city.value, phone.value, postalCode.value)
      if(!(errors.billingAddress!==''|| errors.city!=='' || errors.country!=='' || errors.email!=='' || errors.firstname!==''
       || errors.lastname!=='' || errors.phone!=='' || errors.postalCode!=='' || errors.shipingAddress!=='') ){
            let products= cart.map(item=>{


                return {qty:item.qty,amount:item.price,product_id:item._id}



            })
          const data={
            first_name:firstname.value,
            last_name:lastname.value,
            email:email.value,
            shipping_address:shipingAddress.value,
            billing_address:billingAddress.value,
            phone:phone.value,
            country:country.value,
            city:city.value,
            postal_code:postalCode.value,
            products,
            token:token,
            paymentType:paymentMethod,
            total
        }
        if(paymentMethod==='Paid by Card'){
          if(token!==''){
          setPlaceOrder(true)
          axios({method:'post',data,url:'http://localhost:5000/orders/add_new_order'}).then(res=>{
          setMessage(res.data.success)
          toggle()
          localStorage.setItem('cart','[]')
          setPlaceOrder(false)
          setErr(false)
          }).catch(()=>{
            setPlaceOrder(false)
            setErr(true)

          })}
        }
        else {
          setPlaceOrder(true)
          axios({method:'post',data,url:'http://localhost:5000/orders/add_new_order'}).then(res=>{

            setMessage(res.data.success)
            toggle()
            localStorage.setItem('cart','[]')
            setPlaceOrder(false)
            setErr(false)
          })
          .catch(()=>{
            setPlaceOrder(false)
            setErr(true)

          })



        }



       }

       else {

        alert('Error')
       }


  }
  function handleBlur(field){
   
    settouched({...touched,[field]:true})

  }

  function validate(firstname, lastname, email,shipingAddress, billingAddress, country, city, phone, postalCode) {
    const errors = {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      shipingAddress: "",
      billingAddress: "",
      country: "",
      city:"",
      postalCode: ""
    };
    

    if (touched.firstname && firstname.length < 3)
      errors.firstname = "First Name should be >= 3 characters.";
    else if (touched.firstname && firstname.length > 10)
      errors.firstname = "First Name should be <= 10 characters.";

    if (touched.lastname && lastname.length < 3)
      errors.lastname = "Last Name should be >= 3 characters.";
    else if (touched.lastname && lastname.length > 10)
      errors.lastname = "Last Name should be <= 10 characters.";

    const reg = /^\d{11}$/;
    if (touched.phone && !reg.test(phone))
      errors.phone = "Your Phone Number should contain only 11 digit numbers.";
  
    if (
      touched.email &&
      email.split("").filter(x => x === "@").length !== 1
    )
      errors.email = "Email should contain a @.";

    if(touched.shipingAddress && shipingAddress.length < 10)
      errors.shipingAddress="Shipping Address should be filled or must be atleast 10 characters."

    if(touched.billingAddress && billingAddress.length < 10)
      errors.billingAddress="Billing Address should be filled or must be atleast 10 characters."
    
    if(touched.country&&country==='')
      errors.country="Please select the Country."

    if(touched.city && city.length < 3 )
      errors.city="Please Mention the City."
    
    if(touched.postalCode && postalCode.length<5)
      errors.postalCode="Your Postal code is invalid. Please mention the 5-Digit postal code."
      

    return errors;
  }


  function onChangePaymentMehtod({target}){
 
    setPaymentMethod(target.value)
}
   
    useEffect(()=>{
        setLoading(true)
       let count=0;
        cart.forEach(item=>{

            count=count+item.price

        })

        setTotal(count)
        setLoading(false)


    },[cart])
    




    if(loading){

        return(<div className=' mt-5'>
            
            <Loading></Loading>
            
            </div>)
    }

    else if(cart.length<=0){

      return (

        <div className='text-center'>
          <h1 className='text-danger'>Cart is Empty</h1>

        </div>


      )


    }

    const errors= validate(firstname.value, lastname.value, email.value,
      shipingAddress.value, billingAddress.value, country.value, city.value, phone.value, postalCode.value)
    return (
        
    <div className="container mb-5">

<Modal backdrop='static' isOpen={modal} toggle={toggle} >
    <ModalHeader >
      <h5 className='text-center text-success'>{message}</h5>
    </ModalHeader>
        <ModalFooter>
          <Button color="success" onClick={()=>{toggle(); props.history.push('/');
           dispatch({type:'empty_cart',payload:{}})
        }}>Back to Home</Button>{' '}
        </ModalFooter>
      </Modal>
    <div className="py-5 text-center">
      <h2>Checkout form</h2>
    </div>
    <div className="row">
      <div className="col-md-4 order-md-2 mb-4">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Your cart</span>
    <span className="badge badge-secondary badge-pill">{cart.length}</span>
        </h4>
        <ul className="list-group mb-3">

        {state.cart.map(product=>{

            return(
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div className='row'>

                <div className='col-md-4 col-4'>
                    <img style={{width:'80px',height:"70px"}} alt={product.name} src={product.image.url}/>

                </div>
                <div className='col-md-8 col-8'>
                    <h6 className="my-0">{product.name}</h6>
                  <small className="text-muted">{product.description}</small>
                </div>


                </div>
   
            <span className="text-muted">${product.price}</span>
              </li>
            )


            })
            }
   
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>${total}</strong>
          </li>
        </ul>


      </div>
      <div className="col-md-8 order-md-1">
        <h4 className="mb-3">Billing address</h4>
        <form onSubmit={onSubmit} className="needs-validation" >
          <div className="row">
            <div className="col-md-6 mb-3">
              <label for="firstName">First name</label>
              <Input value={firstname.value} valid={errors.firstname === ''} required 
                    invalid={errors.firstname !== ''}onChange={onChangeFirstname} placeholder='Enter Firstname'
              type="text" className="form-control" id="firstName" onBlur={()=>{handleBlur('firstname')}} />
              <div className="invalid-feedback">
                {errors.firstname}
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label for="lastName">Last name</label>
              <Input type="text" value={lastname.value} valid={errors.lastname === ''}  required 
                    invalid={errors.lastname !== ''} onChange={onChangeLastname} placeholder='Enter Lastname'
              className="form-control" id="lastName" onBlur={()=>{handleBlur('lastname')}} />
              <div className="invalid-feedback">
                {errors.lastname}
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label for="username">Phone No.</label>
    

              <Input type='number' valid={errors.phone === ''}  required 
                    invalid={errors.phone !== ''}
               placeholder="Enter Phone No." value={phone.value} 
                onChange={onChangePhone} onBlur={()=>{handleBlur('phone')}}
                />
              <div className="invalid-feedback" style={{width: '100%'}}>
                {errors.phone}
              </div>
            
          </div>

          <div className="mb-3">
            <label for="email">Email Address</label>
            <Input type="email" className="form-control"  required 
              valid={errors.email === ''}
              invalid={errors.email !== ''}
              value={email.value} 
              onChange={onChangeEmail}
              onBlur={()=>{handleBlur('email')}}            
            id="email" placeholder="you@example.com"/>
            <div className="invalid-feedback">
              {errors.email}
            </div>
          </div>

          <div className="mb-3">
            <label for="address">Shipping Address</label>
            <Input  type="text" value={shipingAddress.value}  required 
            valid={errors.shipingAddress === ''}
            invalid={errors.shipingAddress !== ''}
             onChange={onChangeShipping} 
            id="address" placeholder="1234 Main St" onBlur={()=>{handleBlur('shipingAddress')}} />
            <div className="invalid-feedback">
             { errors.shipingAddress}
            </div>
          </div>

          <div className="mb-3">
            <label for="address2">Billing Address <span className="text-muted">(Optional)</span></label>
            <Input type="text"id="address2" placeholder="Apartment or suite"  required 
               value={billingAddress.value}    valid={errors.billingAddress === ''}
               invalid={errors.billingAddress !== ''} onChange={onChangeBilling} onBlur={()=>{handleBlur('billingAddress')}}
            />
            <div className="invalid-feedback">
             { errors.billingAddress}
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 mb-3">
              <label for="country">Country</label>
              <Input type='select' className="custom-select d-block w-100" id="country"  required 
                value={country.value}  valid={errors.country === ''}
                invalid={errors.country !== ''} onChange={onChangeCountry} 
                onBlur={()=>{handleBlur('country')}}
              >
                <option value=''>Choose Country</option>
         
                  <option value={"Pakistan"} >Pakistan</option>
              

              
              </Input>
              <div className="invalid-feedback">
                {errors.country}
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label for="state">City</label>
              <Input type='text' className=" d-block w-100" id="state"  placeholder='Enter City Name'  required 
               value={city.value}  valid={errors.city === ''}
               invalid={errors.city !== ''} onChange={onChangeCity} 
                onBlur={()=>{handleBlur('city')}}
              />
              <div className="invalid-feedback">
                {errors.city}
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <label for="zip">Postal Code</label>
              <Input type="text" className="form-control" id="zip" placeholder="Enter Postal Code"  required 
               value={postalCode.value}  valid={errors.postalCode === ''}
               invalid={errors.postalCode !== ''} onChange={onChangePostalCode} 
                onBlur={()=>{handleBlur('postalCode')}}
              />
              <div className="invalid-feedback">
                {errors.postalCode}
              </div>
            </div>
          </div>


          <h4 className="mb-3">Payment</h4>

          <div className="d-block my-3">
            <div className="custom-control custom-radio">
              <Input id="debit" name="paymentMethod" value='Paid by Card'  required  onChange={onChangePaymentMehtod} type="radio" className="custom-control-input" />
              <label className="custom-control-label" for="debit">Pay by Card</label>
            </div>
            <div className="custom-control custom-radio">
              <Input id="paypal" name="paymentMethod" onChange={onChangePaymentMehtod} required   value='Cash on Delivery' type="radio" className="custom-control-input" />
              <label className="custom-control-label" for="paypal">Cash on Delivery</label>
            </div>
          </div>
      

          <hr className="mb-4"/>


            {token!==''&& <h5 className='text-center p-2 text-success '>

              Card Cardentials Verified.
            </h5>
            }


          {(paymentMethod==='Paid by Card'&&token!=='')&&
          <button className="btn mt-2 btn-primary btn-lg btn-block" type="submit">{place_order?<Spinner/>:'Place Order'}</button>
          }
          

          {(paymentMethod==='Cash on Delivery')&&
          <button disabled={place_order} className="btn mt-2 btn-primary btn-lg btn-block" type="submit">{place_order?<Spinner/>:'Place Order'}</button>
          }



          </form>
          {(paymentMethod==='Paid by Card'&&token===''&&touched.email&&errors.email===''&&total!==0)&&
          <StripeCheckout className='btn btn-primary' 
          email={email.value}
          token={
            (token)=>{
              setToken(token)
            }
          }
         
          stripeKey="pk_test_FSCNJPbqw8vY8O6i25AxGk9V00kbuiaHOm"
          amount={total*100}
          >
            <button className='btn btn-primary btn-lg btn-block'>Pay</button>
          </StripeCheckout>
            }

            {err&&<h5 className="text-center text-danger">Order Failed</h5>}
      </div>
    </div>

            
          
  </div>

    );
        }
  