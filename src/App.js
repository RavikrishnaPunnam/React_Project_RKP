import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Contacts from './components/pages/Contacts';
import { AddContacts } from './components/pages/AddContacts';
import { EditContact } from './components/pages/EditContact';
function App() {
  return (
    <>
    <Router>
       <Navbar />
       <Switch>
           <Route  path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />     
          <Route path='/contacts/addContacts' component={AddContacts}  ></Route>     

          <Route exact path='/contacts' component={Contacts} />   
          <Route path='/edit/:id' component={EditContact} />     
  

      </Switch>

    </Router>
    </>
  );
}

export default App;
