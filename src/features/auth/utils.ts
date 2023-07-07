import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password should be more than 8 symbols')
    .max(20, 'Password should be less than 20 symbols')
    .required('Password is required'),
});

export const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password should be more than 8 symbols')
    .max(20, 'Password should be less than 20 symbols')
    .required('Password is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords must match',
  ),
});

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export const CodeSchema = Yup.object().shape({
  1: Yup.number().required('Enter a full code'),
  2: Yup.number().required('Enter a full code'),
  3: Yup.number().required('Enter a full code'),
  4: Yup.number().required('Enter a full code'),
});
