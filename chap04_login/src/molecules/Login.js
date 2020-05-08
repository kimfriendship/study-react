import React from 'react';
import Form from '../atoms/Form';
import IdInputs from '../atoms/IdInputs';
import PwInputs from '../atoms/PwInputs';
import Button from '../atoms/Button';
import Header from '../atoms/Header';

const Login = () => (
  <Form>
    <Header />
    <IdInputs />
    <PwInputs />
    <Button />
  </Form>
);

export default Login;
