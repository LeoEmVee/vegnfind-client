import Footer from '../footer/footer';

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
