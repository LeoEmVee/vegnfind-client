import Footer from './footer';
import Navbar from './navbar/navbar';

interface IFLayout {
  children: React.ReactNode;
}

function Layout({ children }: IFLayout) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
