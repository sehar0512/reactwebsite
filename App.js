import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Headers from './Headers';
import Footer from './Footer';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import { Route, Switch } from 'react-router-dom';
import Alert from './Alert';

function App() {
  return (
    <>
    <Alert />
    <Headers />
    <Footer />
    </>
  );
}

export default App;
