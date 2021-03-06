// Container w/ component for the list screen.
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/clickUser';
import {viewChange} from '../actions/viewChange';


class UserList extends Component {

    renderList() {
        return this.props.users.map((user) => {
            if (user.role == "admin") {
                return (
                    <div key={user.id}>
                    <li    
                        onClick={
                            () => {
                                this.props.viewChange('edit');
                                return this.props.selectUser(user);
                            }
                        }
                    >
                        <div>
                            <a href="#"> <b>{user.first} {user.last} ({user.role}) </b><br/>
                            {user.phone} <br/>
                            {user.email} </a>
                        </div>
                    </li>
                    <hr/>
                    </div>
                );
            } else {
                return (
                    <div key={user.id}>
                    <li    
                        onClick={
                            () => {
                                this.props.viewChange('edit');
                                return this.props.selectUser(user);
                            }
                        }
                    >
                        <div>
                            <a href="#"> <b>{user.first} {user.last} </b><br/>
                            {user.phone} <br/>
                            {user.email} </a>
                        </div>
                    </li>
                    <hr/>
                    </div>
                );
            }
        });
    }

    render() {
        return ( 
            <div>
                <h2>  Team members <button onClick={() => this.props.viewChange('add')}> + </button> </h2>
                <p>  You have {this.props.users.length} team members.</p>
                <hr/>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser, viewChange: viewChange}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
