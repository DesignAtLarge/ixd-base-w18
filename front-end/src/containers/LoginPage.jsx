import { connect } from 'react-redux';
import { withFormik } from 'formik';

import LoginPage from '../components/LoginPage';
import { loginUser } from '../actions/userActions';

const LoginPageContainer = withFormik({
mapPropsToValues() {
  return {
    username: '',
    password: ''
  };
},
handleSubmit(values, { resetForm,  props }) {
  props.loginUser(values);
},
})(LoginPage);

export default connect(
null,
{loginUser}
)(LoginPageContainer);
