import { Route } from 'react-router-dom';
import Login from './routes/login/Login';
import Register from './routes/register/Register';
import Table from './routes/table/Table';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/table" component={Table} />
      <ToastContainer />
    </>
  );
}

export default App;
