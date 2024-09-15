import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
