import * as yup from 'yup';

export const LoginSchema = yup.object({
  email: yup.string().required('Please enter your email').trim().lowercase(),
  password: yup.string().required('Please enter a password'),
});
