import React from 'react';

class HelloMessage extends React.Component {
    render() {
        return <h1>Hello {this.prop.name}</h1>;
    }
}
export default HelloMessage;