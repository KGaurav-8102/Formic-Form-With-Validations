import React from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';

const Signup = () => {
    const validate = Yup.object({
        firstName:  Yup.string()
        .max(15, 'Must  be 15 Character or less')
        .required('Required'),
        lastName:  Yup.string()
        .max(20, 'Must  be 20 Character or less')
        .required('Required'),
        email:  Yup.string()
        .email('Email is Invalid!')
        .required('Email is Required'),
        password:  Yup.string()
        .min(6, 'Password must be atleast 6 Characters')
        .required('Password is Required'),
        confirmPassword:  Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm password is Required')
    })

    return (
        <Formik
            initialValues={{
                firstName :'',
                lastName : '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema = {validate}
            >
            {formik => (
                <div>
                    <h1 className="my-4 font-weight-bold-display-4">SignUp</h1>
                    {console.log(formik.values)}
                    <Form>
                        <TextField label='First Name' name='firstName' type='text' />
                        <TextField label='Last Name' name='lastName' type='text' />
                        <TextField label='Email' name='email' type='email' />
                        <TextField label='Password' name='password' type='password' />
                        <TextField label='Confirm password' name='confirmpassword' type='password' />
                        <button className="btn btn-dark mt-3" type='submit'>Register</button>
                        <button className="btn btn-danger mt-3" type='reset' style={{ marginLeft: '8px'}}>Reset</button>
                    </Form> 
                </div>
            )}
        </Formik>
    );
}

export default Signup;
