import Footer from './footer';
import Navbar from './navbar';

interface IFLayout {
  children: React.ReactNode;
}

function Layout({ children }: IFLayout) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
