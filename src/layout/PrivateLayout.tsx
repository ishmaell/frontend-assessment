import { Outlet } from 'react-router-dom';

interface LayoutPropsType {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutPropsType> = ({ children }) => (
  <div>{children}</div>
);

const PrivateLayout = () => (
  <main className="App">
    <Layout>
      <Outlet />
    </Layout>
  </main>
);

export default PrivateLayout;
