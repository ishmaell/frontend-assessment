import { Outlet } from 'react-router-dom';
import Header from '../components/ui/Header';
import Sidenav from '../components/ui/Sidenav';

interface LayoutPropsType {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutPropsType> = ({ children }) => {
  return (
    <>
      <Header />
      <Sidenav />
      {children}
    </>
  );
};

const PrivateLayout = () => (
  <main className="App">
    <Layout>
      <Outlet />
    </Layout>
  </main>
);

export default PrivateLayout;
