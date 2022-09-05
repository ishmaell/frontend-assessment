import { Outlet } from 'react-router-dom';

interface LayoutPropsType {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutPropsType> = ({ children }) => <>{children}</>;

const PublicLayout = () => (
  <main className="public-layout">
    <Layout>
      <Outlet />
    </Layout>
  </main>
);

export default PublicLayout;
