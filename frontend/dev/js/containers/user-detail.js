// Container w/ component for edit screen.
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {viewChange} from '../actions/viewChange';
import {reduxForm} from 'redux-form';
import MemberForm from '../containers/MemberForm';
import { initialize } from 'redux-form';
import {updateForm} from '../actions/updateForm';

class UserDetail extends Component {

    handleSubmit(data) {
        console.log('Submitted!', data);
        this.props.viewChange('list');
        return this.props.updateForm(data);
    }

    render() {
        if (!this.props.user) {
            return (<div>No user selected</div>);
        }
        const InitialValues = {
            initialValues: this.props.user
        };
        return (
            <div>
                <h2> Edit team member <button onClick={() => this.props.viewChange('list')}> X </button></h2>
                <p> Edit contact info, location and role. </p>  
                <hr/>
                <MemberForm {...InitialValues} onSubmit={this.handleSubmit.bind(this)}/>
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
    return bindActionCreators({viewChange: viewChange, updateForm: updateForm}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);
