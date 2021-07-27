import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import Home from './pages/Home'
import Landing from './pages/Landing';
import Advertiser from './pages/Advertiser';
import Vendor from './pages/Vendor';
import PrivateRoute from './components/PrivateRoute';
import SignUpPage from './pages/SignUpPage';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
 
  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/signup/:role" component={SignUpPage} />
        <PrivateRoute path="/advertiser" role="advertiser" component={Advertiser} />
        <PrivateRoute path="/vendor" role="vendor" component={Vendor} />

      </Switch>
    </Router>
  );
}

export default App;
