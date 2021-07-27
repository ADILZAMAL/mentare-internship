import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import Home from './pages/Home'
import Landing from './pages/Landing';
import Advertiser from './pages/Advertiser';
import Vendor from './pages/Vendor';
import PrivateRoute from './components/PrivateRoute';

const Test = () =>{
  return(
    <h1>This is private route</h1>
  )
}
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" ><Landing/></Route>
        <Route path="/home" ><Home/></Route>
        <PrivateRoute path="/advertiser" component={Advertiser} />
        <PrivateRoute path="/vendor" component={Vendor} />
        <PrivateRoute path="/private" component={Test } />
      </Switch>
    </Router>
  );
}

export default App;
