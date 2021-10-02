import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Inventory from './components/inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/notfound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
          <Shop></Shop>
          </Route>
          <Route path='/shop'>
          <Shop></Shop>
          </Route>
          <Route path='/inventory'>
            <Inventory></Inventory>
          </Route>
          <Route path='/review'>
            <OrderReview></OrderReview>

          </Route>
          <Route path='*'>
            <NotFound/>
      </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
