import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions'

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.id);
    }
    render() {
        console.log(this.props.user)
        return <div>{this.props.user}bla</div>
    }
}

const mapStateToProps = state => {
    return {user: state.user}
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);