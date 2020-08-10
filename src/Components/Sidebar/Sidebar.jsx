import React, { Component } from 'react';
import './Sidebar.css'
import {Nav,NavItem,NavLink} from 'reactstrap';
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import SubMenu from './Submenu'
import {HomeOutlined,DashboardOutlined,FavoriteOutlined,
  DescriptionOutlined, PollOutlined, TodayOutlined, Description, FastfoodOutlined, SearchOutlined,PeopleAltOutlined,MessageOutlined} from '@material-ui/icons'
export default class Sidebar extends Component {
  render() {
    return (
    
      <div className={classNames('sidebar',{'is-open':this.props.isOpen}
      )} >
      <div className='sidebar-header' >
        <span color="info" onClick={this.props.toggle} style={{color: '#fff'}}>&times;</span>
        <h3>Health Portal</h3>
      </div>
      <div className='side-menu'>
        <Nav vertical className="list-unstyled pb-3">
        <NavItem>
        <NavLink className='text-white' tag={Link} to={'/dashboard'}>
            <DashboardOutlined/> Dashboard
            </NavLink>


 




        </NavItem>
        <NavItem>
          <NavLink className='text-white' tag={Link} to={'/'}>
           <HomeOutlined/> Home
            </NavLink>
          </NavItem>
        <NavItem>
        <NavLink className='text-white' tag={Link} to={'/queries/1'}>
            <MessageOutlined/> Queries
            </NavLink>
        </NavItem>
 

          <SubMenu title={<span><PollOutlined/>Reports</span>}  items={submenus[0]}/>

          <SubMenu title={<span><FastfoodOutlined/> Recipes and Food</span>}  items={submenus[1]}/>
          <NavItem>
          <SubMenu title={<span> <Description/> Diet Plan</span>} items={submenus[2]}/>
          </NavItem>

          <NavItem>
          <NavLink className='text-white' tag={Link} to={'/nutritionists'}>
            <PeopleAltOutlined/> Nutritionists
            </NavLink>
          </NavItem>
        </Nav>        
      </div>
    </div>
      
    );
  }
}


const submenus = [
  [
    {
      title: <span><PollOutlined/> Todays Report</span>,
      target: "/today_report"
    },
    {
      title: <span><PollOutlined/> Weekly Report</span>,
      target: "/week_report",        
    },
    {
      title: <span><PollOutlined/> Overall Report</span>,
      target: "/complete_report",        
    },

  ],
  [
    {
      title: <span><SearchOutlined/> Search Recipes</span>,
      target: "/search_recipe",          
    },
    {
      title: <span><SearchOutlined/> Search Food</span>,
      target: "/search_food",        
    },
    {
      title:<span><FavoriteOutlined/> Favorite Foods</span>,
      target:"/my_foods/1"
    }
  ],
  
  [{
    title:<span><DescriptionOutlined/>Diet Plan</span> ,
    target: "/diet_plan_details/my_diet_plan", 
  },
    {
      title: <span><TodayOutlined/> Today's Meals</span>,
      target: "/today_meals",        
    },{
      title:<span><DescriptionOutlined/> Personal Diet Plan</span> ,
      target: "/personal_diet/1", 
    },
  
  ]
]