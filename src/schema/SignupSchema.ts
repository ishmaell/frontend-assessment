import * as yup from 'yup';

export const SignupSchema = yup.object({
  firstName: yup.string().required('Please enter your first name'),
  lastName: yup.string().required('Please enter your last name'),
  email: yup
    .string()
    .required('Please enter your email')
    .email('Please enter a valid email address')
    .trim()
    .lowercase(),
  password: yup.string().required('Please enter a password'),
});
