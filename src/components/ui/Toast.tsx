import { ToastContainer } from 'react-toastify';

const Toast = () => (
  <ToastContainer
    position="bottom-right"
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
);

export default Toast;
