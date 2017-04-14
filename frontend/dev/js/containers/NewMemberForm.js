// Component for the new member form. Uses the Redux Form library.
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

let MemberForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h4> Info </h4>
      <div>
        <div>
          <Field name="first" component="input" size="40" type="text" placeholder="First Name"/>
        </div>
      </div>
      <div>
        <div>
          <Field name="last" component="input" size="40" type="text" placeholder="Last Name"/>
        </div>
      </div>
      <div>
        <div>
          <Field name="email" component="input" size="40" type="email" placeholder="Email Address"/>
        </div>
      </div>
      <div>
        <div>
          <Field name="phone" component="input" size="40" type="text" placeholder="Phone Number"/>
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
      <div className="Container2">
        <button className="btn btn-primary" disabled={pristine || submitting} type="submit">Save</button>
      </div>
    </form>
  );
};

MemberForm = reduxForm({
  form: 'member'
})(MemberForm);

export default MemberForm;