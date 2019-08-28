import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import FastDish from './pages/Common/FastDish';
import GoodWithRice from './pages/Common/GoodWithRice';
import Porridge from './pages/Breakfast/Porridge';
import Soybean from './pages/Breakfast/Soybean';
import Bread from './pages/Breakfast/Bread';
import Sticks from './pages/Breakfast/Sticks';
import Prok from './pages/Meat/Pork';
import Chicken from './pages/Meat/Chicken';
import Duck from './pages/Meat/Duck';
import Beef from './pages/Meat/Beef';
import Mutton from './pages/Meat/Mutton';
import Fish from './pages/Meat/Fish';
import Fruit from './pages/Fruit/Fruit';
import Root from './pages/Vegetable/Root';
import Mushroom from './pages/Vegetable/Mushroom';
import Leave from './pages/Vegetable/Leave';
import Soup from './pages/Soup/Soup';
import Dessert from './pages/Bake/Dessert';
import Cake from './pages/Bake/Cake';
import Mantou from './pages/Staple/Mantou';
import Baozi from './pages/Staple/Baozi';
import Noodles from './pages/Staple/Noodles';
import Rice from './pages/Staple/Rice';
import Coffee from './pages/Drinks/Coffee';
import Milk from './pages/Drinks/Milk';
import Detail from './pages/Detail/Detail';
import Sushi from './pages/Sushi/Sushi';

const MyRouter = () => (
  <HashRouter>
    <Route
      path="/"
      render={() => (
        <Switch>
          <App>
            <Redirect to="/home" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/common/fast" exact component={FastDish} />
            <Route path="/common/overrice" exact component={GoodWithRice} />
            <Route path="/breakfast/porridge" exact component={Porridge} />
            <Route path="/breakfast/soybean" exact component={Soybean} />
            <Route path="/breakfast/bread" exact component={Bread} />
            <Route path="/breakfast/sticks" exact component={Sticks} />
            <Route path="/bake/dessert" exact component={Dessert} />
            <Route path="/bake/cake" exact component={Cake} />
            <Route path="/meat/pork" exact component={Prok} />
            <Route path="/meat/chicken" exact component={Chicken} />
            <Route path="/meat/duck" exact component={Duck} />
            <Route path="/meat/beef" exact component={Beef} />
            <Route path="/meat/mutton" exact component={Mutton} />
            <Route path="/meat/fish" exact component={Fish} />
            <Route path="/fruit" exact component={Fruit} />
            <Route path="/vegetable/root" exact component={Root} />
            <Route path="/vegetable/mushroom" exact component={Mushroom} />
            <Route path="/vegetable/leave" exact component={Leave} />
            <Route path="/soup" exact component={Soup} />
            <Route path="/staple/mantou" exact component={Mantou} />
            <Route path="/staple/baozi" exact component={Baozi} />
            <Route path="/staple/noodles" exact component={Noodles} />
            <Route path="/staple/rice" exact component={Rice} />
            <Route path="/drinks/coffee" exact component={Coffee} />
            <Route path="/drinks/milk" exact component={Milk} />
            <Route path="/sushi" exact component={Sushi} />
            <Route path="/detail/:id" exact component={Detail} />
          </App>
        </Switch>
      )}
    />
  </HashRouter>
);

export default MyRouter;
