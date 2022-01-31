import Footer from '../components/footer';
import FormComponent from '../components/form-component';
import Navbar from '../components/navbar';

function LoginRegister() {
  return (
    <div className="login-register-page">
      <br />
      <div>
        <strong>LOGIN/REGISTER PAGE</strong>
      </div>
      <br />
      <Navbar />
      <br />
      <FormComponent />
      <br />
      <Footer />
    </div>
  );
}

export default LoginRegister;
