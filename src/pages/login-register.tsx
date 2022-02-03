import { useEffect } from 'react';
import LoginForm from '../components/login-register-forms/login-form';
import Navbar from '../components/navbar/navbar';
import RegisterForm from '../components/login-register-forms/register-form';
import { useAppSelector } from '../redux/store';

function LoginRegister() {
  const { isRegister } = useAppSelector(state => state.loginReducer);

  useEffect(() => {
    console.log('REGISTER:', isRegister);
  }, [isRegister]);

  return (
    <>
      <Navbar />
      <div className="login-register-page">
        <br />
        <div>
          {isRegister ? (
            <strong>REGISTER PAGE</strong>
          ) : (
            <strong>LOGIN PAGE</strong>
          )}
        </div>
        {isRegister ? <RegisterForm /> : <LoginForm />}
        <br />

        <br />
      </div>
    </>
  );
}

export default LoginRegister;
