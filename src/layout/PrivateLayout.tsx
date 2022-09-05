import { Outlet } from 'react-router-dom';
import Header from '../components/ui/Header';
import Sidenav from '../components/ui/Sidenav';

interface LayoutPropsType {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutPropsType> = ({ children }) => {
  return (
    <section className="private-layout">
      <Header />
      <Sidenav />
      <main className="main">{children}</main>
    </section>
  );
};

const PrivateLayout = () => (
  <>
    <Layout>
      <Outlet />
    </Layout>
  </>
);

export default PrivateLayout;
