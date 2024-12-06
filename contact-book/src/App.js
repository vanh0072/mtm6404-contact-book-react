import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Contact Book</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact-list" component={ContactList} />
          <Route path="/contact/:id" component={ContactDetails} />
          <Route path="/add-contact" component={AddContact} />
          <Route path="/edit-contact/:id" component={EditContact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
