import { connect } from 'react-redux';
import { withFormik } from 'formik';

import LoginPage from '../components/LoginPage';

const LoginPageContainer = withFormik({
mapPropsToValues() {
  return {
    username: '',
    password: ''
  };
},
handleSubmit(values, { resetForm,  props }) {
},
})(LoginPage);

export default connect(
null,
{}
)(LoginPageContainer);
