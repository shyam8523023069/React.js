import React, { Component } from 'react'

 class UserLogin extends Component {
    render() {
        return (
            <div>
                name : {this.props.render(true)}
            </div>
        )
    }
}

export default UserLogin;
