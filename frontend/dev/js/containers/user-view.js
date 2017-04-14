// Container for deciding which view to show based on state.view.
import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import NewUser from '../containers/new-user';

class UserView extends Component {
    render() {
        if (!this.props.view || this.props.view == 'list') {
            return (<UserList />);
        } else if (this.props.view == 'edit') {
            return (<UserDetails />);
        } else if (this.props.view == 'add') {
            return (<NewUser />);
        }
        return (<UserList />);
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        view: state.view
    };
}

export default connect(mapStateToProps)(UserView);