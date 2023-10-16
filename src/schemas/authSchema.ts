import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    password: yup.string().min(6).max(32).required('Password required'),
    email: yup.string().email().required('Email is required'),
})