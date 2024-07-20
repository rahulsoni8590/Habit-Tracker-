import './App.css';
import Navbar from './component/Navbar';
import Home from './component/home';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ToastContainer 
        limit={3} 
        pauseOnFocusLoss={false} 
        autoClose={1000}
        />
    </>
  );
}

export default App;
