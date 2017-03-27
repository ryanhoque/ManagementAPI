// Container w/ component for the add screen.
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {viewChange} from '../actions/viewChange';
import {reduxForm} from 'redux-form';
import MemberForm from '../containers/NewMemberForm';
import { initialize } from 'redux-form';
import {addMember} from '../actions/addMember';

class NewUser extends Component {

    handleSubmit(data) {
        console.log('Submitted!', data);
        this.props.viewChange('list');
        return this.props.addMember(data);
    }

    render() {
        return (
            <div>
                <h2> Add a team member <button onClick={() => this.props.viewChange('list')}> X </button></h2>
                <p> Set email, location and role. </p>  
                <hr/>
                <MemberForm onSubmit={this.handleSubmit.bind(this)}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({viewChange: viewChange, addMember: addMember}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(NewUser);