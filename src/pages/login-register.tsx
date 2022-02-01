import { useState } from 'react';
import LoginForm from '../components/login-form';
import Navbar from '../components/navbar';
import RegisterForm from '../components/register-form';

function LoginRegister() {
  const [logOrReg, setLogOrReg] = useState('log');

  return (
    <div className="login-register-page">
      <Navbar setLogOrReg={setLogOrReg} />
      <br />
      <div>
        <strong>LOGIN/REGISTER PAGE</strong>
      </div>
      {logOrReg === 'reg' ? <RegisterForm /> : <LoginForm />}

      <br />

      <br />
    </div>
  );
}

export default LoginRegister;
