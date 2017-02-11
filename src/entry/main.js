import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import Header from '../components/Header.jsx';
// var myDivElement = <div className="foo" >你好</div>;
//
// ReactDOM.render(myDivElement, document.getElementById('example'));
// var myComment = <textarea rows = '30' cols = '20'>nihaoya</textarea>;
// ReactDOM.render(myComment,document.getElementsByClassName('comment')[0]);
//
// ReactDOM.render(<App/>,document.getElementById('app'));

// let nav = <div className="header"></div>; 

ReactDOM.render(
    // const header = 
    // <Header>
    // <span>中文网</span>
    // <span>2文档</span>
    // <span>3文档</span>
    // <span>4文档</span>
    // <span>less教程</span>
    // <span>jquery API</span>
    // <span>网站实例</span>
    // <span>前端高薪</span>
    // </Header>,
    <App name='jack'>
        <ul>
            <li>hahaha</li>
            <li>yayaya</li>
            <li>hehehe</li>
        </ul>
    </App>,
    document.getElementById('container')
)
