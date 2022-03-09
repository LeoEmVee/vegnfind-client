import LoginForm from '../components/login-register-forms/login-form';
import Navbar from '../components/navbar/navbar';
import RegisterForm from '../components/login-register-forms/register-form';
import { useAppSelector } from '../redux/store';

function LoginRegister() {
  const { isRegister } = useAppSelector(state => state.loginReducer);

  return (
    <>
      <Navbar />
      {isRegister ? <RegisterForm /> : <LoginForm />}
    </>
  );
}

export default LoginRegister;
