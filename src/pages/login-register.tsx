import { useEffect, useState } from 'react';
import LoginForm from '../components/login-form';
import Navbar from '../components/navbar/navbar';
import RegisterForm from '../components/register-form';

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);

  function toggleLogin(): void {
    setIsLogin(!isLogin);
  }

  return (
    <>
      <Navbar />
      <div className="login-register-page">
        <br />
        <button onClick={() => toggleLogin()}>toggle Login</button>
        <div>
          <strong>LOGIN/REGISTER PAGE</strong>
        </div>
        {isLogin ? <LoginForm /> : <RegisterForm />}

        <br />

        <br />
      </div>
    </>
  );
}

export default LoginRegister;
