import React, { PropTypes, Component } from 'react';

export default class User extends Component {
    render() {
        console.log(this.props.name)
        const { name } = this.props
        return <div>
            <p>Привет, {name}!</p>
        </div>
    }
}

// User.PropTypes = {
//     name: PropTypes.string.isRequired
// }