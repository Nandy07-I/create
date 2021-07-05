import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header';
import Login from './Components/Login';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Link,Switch,Route} from  'react-router-dom';
import logo from './logo.png';
function App(props) {
  return (
   
     <div>
            <div class="header">
      <li class='li'><Link to='/'><img src={logo} alt="logo"/></Link></li>
      <p><Link to='/components/Login' class='login'>Login</Link></p>
     </div>
     
     <Switch>
     <Route path='/components/Login' component={Login}></Route>
     <Route exact path='/' component={Header}></Route>
     </Switch>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
