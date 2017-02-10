import React from 'react'
import App from './App.jsx'

let items = [{
    name:'中文网',
    href:'#'
},
{
    name:'2.0文档',
    href:'#'
},
{
    name:'3.0文档',
    href:'#'
},
{
    name:'4.0文档',
    href:'#'
},
{
    name:'教程',
    href:'#'
},
{
    name:'网站实例',
    href:'#'
},
{
    name:'高薪职位',
    href:'#'
}]

let nav = {
    color:'#ddd',
    fontSize:20,
    listStyle:'none',
    padding:0
}

class Header extends React.Component{
    render(){
        return (
            <div className='header'>
            <ul style={nav} className='nav'>
                {
                    items.map(function (item,index) {
                        return<li key={index}><a href={item.href}>{item.name}</a></li>
                    })
                }
            </ul>
            </div>
        )
    }
}

export default Header;