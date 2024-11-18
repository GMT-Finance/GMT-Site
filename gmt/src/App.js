import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/FooterHome';
import Cards from './components/Cards';
import Stocks from './components/Stocks';
import Info from './components/Info';
import StockContext from "./context/StockContext";


function App() {
  const [stockSymbol, setStockSymbol] = useState("MSFT");
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
             <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
              <Stocks/>
      </StockContext.Provider>
             </Route>
             <Route path="/info">
              <Info />
             </Route>
          </Switch>
              <Cards />

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App