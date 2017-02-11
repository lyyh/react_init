import React from 'react';

let names = [1,2,3];
var myStyle = {
	fontSize:20,
	color:'#FF0000'
}

class App extends React.Component{
	static defaultProps = {
		autoPlay: true,
		maxLoops: 10
	};
	static propTypes ={
		name: React.PropTypes.number.isRequired
	};
	render(){
		console.log(this.props)
	return (
		<div style={myStyle}>
			{
				React.Children.map(this.props.children,child => {
					return child;
				})
			}
		</div>
	)
	}
}

export default App;