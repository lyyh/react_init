import React from 'react';

var myStyle = {
	fontSize:20,
	color:'#FF0000'
}
class App extends React.Component{
	render(){
	return (
		<div style={myStyle}>
		hello world!<br/>
		我的第一个webpack应用
		</div>
	)
	}
}

export default App;