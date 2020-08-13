import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import {useAuth} from '../../auth'
import {Badge,Navbar,NavItem,NavLink,Nav,
    NavbarText,NavbarToggler,Collapse} from 'reactstrap'
 import {Menu,Dropdown} from 'antd'   
 import {categories,brand} from './ShopCategories'
 const { SubMenu } = Menu;


    const menu = (
      <Menu>
        <SubMenu title="Shop By Categories">
          {categories.map((item,index)=>{

          return (<Menu.Item key={index}><Link to={item.target}>{item.title}</Link></Menu.Item>)
          })}
          </SubMenu>
        <SubMenu title="Shop By Brand" >
        {brand.map((item,index)=>{

          return (<Menu.Item key={index}><Link to={item.target}>{item.title}</Link></Menu.Item>)
          })}
        </SubMenu>
      </Menu>
    );    
function Header() {
    const {state} = useAuth()
    const [isOpen,setOpen] = React.useState(false)
    function toggle(){

        setOpen(!isOpen)

    }
    return (
        <div >
            <nav className="navbar navbar-light  navheader">
                <Link to="/" className="navbar-brand "><h3 className="text">Health and Diet Portal</h3></Link>
                {!state.token?<div className="justify-content-end">
                <Link to="/login" className="navbar-brand text-white">Login</Link>
                <Link to="/signup" className="navbar-brand text-white">Signup</Link>
                </div>:
                <div className="justify-content-end">
                    <Link to="/dashboard" className="navbar-brand text-white"><i className=' fa fa-tachometer'></i> Dashboard</Link>
                </div>
                }
            </nav>
            <Navbar className="text-dark" color='warning' expand="md">
                    <NavbarToggler className='text-dark' navbar onClick={toggle} > <span className=' fa fa-lg fa-align-justify'></span> </NavbarToggler>
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                    <NavItem>
                    <NavLink className='text-dark' to="/" tag={Link} ><i className=' fa fa-home'></i>Home</NavLink>
                    </NavItem>
           
                    <NavItem>

                    <NavLink className='text-dark' tag={Link} to="/search_food/" ><i className='fa fa-search'></i> Food</NavLink>
                    </NavItem>

                    <NavItem>
                    <Dropdown overlay={menu}>
                      <NavLink className='text-dark' tag={Link}  to='/all_products/1'>
                        Products
                      </NavLink>
                     </Dropdown>
                  </NavItem>
             </Nav>
             </Collapse>
             <NavbarText>
                <Nav >
                    <NavItem>
              <NavLink className='text-dark' to='/shop-cart' tag={Link}>Cart <Badge>{state.cart.length}</Badge></NavLink>
                    </NavItem>
                </Nav>
             </NavbarText>
            </Navbar>


            {localStorage.getItem('token')===undefined&&<h1 className='text-danger'>Page Not Found</h1>}
        </div>
    )
}

export default Header;