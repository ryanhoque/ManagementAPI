import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {deleteUser} from '../actions/deleteUser';

let MemberForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h4> Info </h4>
      <div>
        <div>
          <Field name="first" component="input" size="40" type="text"/>
        </div>
      </div>
      <div>
        <div>
          <Field name="last" component="input" size="40" type="text"/>
        </div>
      </div>
      <div>
        <div>
          <Field name="email" component="input" size="40" type="email"/>
        </div>
      </div>
      <div>
        <div>
          <Field name="phone" component="input" size="40" type="text"/>
        </div>
      </div>
      <h4> Role </h4>
      <div>
        <div>
          <label><Field name="role" component="input" type="radio" value="regular"/> Regular - Can't delete members </label><br/>
          <label><Field name="role" component="input" type="radio" value="admin"/> Admin - Can delete members </label>
        </div>
      </div>
      <hr/>
      <div className="Container">
        <button className="btn btn-danger" onClick={() => props.del(props.user.id)}>Delete</button>
        <button className="btn btn-primary" disabled={pristine || submitting} type="submit">Save</button>
      </div>
    </form>
  );
};

MemberForm = reduxForm({
  form: 'member'
})(MemberForm);

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({del: deleteUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MemberForm);