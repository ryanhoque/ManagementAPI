import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {viewChange} from '../actions/viewChange';
import {reduxForm} from 'redux-form';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div>No user selected</div>);
        }
        return (
            <div>
                <h2> Edit team member <button onClick={() => this.props.viewChange('list')}> X </button></h2>
                <p> Edit contact info, location and role. </p>  
                <hr/>
                <form>
                    <h4>Info</h4>
                    <input type="text" name="first" defaultValue={this.props.user.first}/><br/>
                    <input type="text" name="last" defaultValue={this.props.user.last}/><br/>
                    <input type="text" name="email" defaultValue={this.props.user.email}/><br/>
                    <input type="text" name="phone" defaultValue={this.props.user.phone}/><br/><br/>
                    <h4>Role</h4>
                    <input type="radio" name="role" defaultChecked /> Regular - Can't delete members<br/>
                    <input type="radio" name="role" /> Admin - Can delete members<hr/>
                    <div className="Container">
                    <button className="btn btn-danger"> Delete </button>
                    <button className="btn btn-primary"> Save </button>
                    </div>
                </form>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({viewChange: viewChange}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);
