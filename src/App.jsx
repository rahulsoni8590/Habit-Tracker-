import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Allactivity from './component/allActivity';
import Home from './component/home';
function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/activity' element={<Allactivity />} />
      </Routes>
      <ToastContainer
        limit={3}
        pauseOnFocusLoss={false}
        autoClose={1000}
      />
    </>
  );
}

export default App;



// https://habit-tracker-react-seven.vercel.app/