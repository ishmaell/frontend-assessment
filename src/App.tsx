import './css/index.css';
import Routers from './routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer
        theme="colored"
        autoClose={false}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routers />
    </>
  );
}

export default App;
