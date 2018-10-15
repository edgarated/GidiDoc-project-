import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Pages/Home';
import Register from './Pages/Register';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appointment from './Pages/Appointment';
import Signin from './Pages/Signin';
import Clinic from './Pages/Clinic';


ReactDOM.render(
<BrowserRouter>
<Switch>
<Route path= '/' exact component={Home} />
<Route path= '/register' component={Register} />
<Route path= '/appointment' component={Appointment} />
<Route path= '/signin' component={Signin} />
<Route path= '/clinic' component={Clinic} />
</Switch>

</BrowserRouter>, 
document.getElementById('root'));

