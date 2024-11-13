import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/FooterHome';
import Cards from './components/Cards';
import Stocks from './components/Stocks';
function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Hero />
            </Route>
            <Route path="/stocks">
              <Stocks/>
            </Route>
            {/* Adicione mais rotas conforme necessário */}
          </Switch>
              <Cards />

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
