import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import DesktopListItem from './DesktopListItem';
import { Link, Switch, Route, useRouteMatch, useLocation } from 'react-router-dom'
import Slider from './Slider'
import Slider2 from './Slider2'
import Footer from './Footer'
import AllProduct from './AllProducts'
import UsedLaptop from './UsedLaptop'
import Monitors from './Monitors'
import Gaming from './Gaming'
import Accessories from './Accessories'
import AllInOne from './AllInOne'
import Software from './Software'

function Home() {
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const { pathname } = location;
  const splitlocation = pathname.split('home/')
  return (
    <div className="Home">
      <Slider />
      <Slider2 />
      <div className="all_links">
        <Link to="/home/laptop" className={splitlocation[1] === "laptop" ? "active1" : "link1"}>New Laptop</Link>
        <Link to="/home/usedlaptop" className={splitlocation[1] === "usedlaptop" ? "active1" : "link1"}>Used Laptop</Link>
        <Link to="/home/desktop" className={splitlocation[1] === "desktop" ? "active1" : "link1"}>Desktop</Link>
        <Link to="/home/monitors" className={splitlocation[1] === "monitors" ? "active1" : "link1"}>Monitors</Link>
        <Link to="/home/gaming" className={splitlocation[1] === "gaming" ? "active1" : "link1"}>Gaming PCs</Link>
        <Link to="/home/accessories" className={splitlocation[1] === "accessories" ? "active1" : "link1"}>Accessories</Link>
        <Link to="/home/allinone" className={splitlocation[1] === "allinone" ? "active1" : "link1"}>All In One</Link>
        <Link to="/home/software" className={splitlocation[1] === "software" ? "active1" : "link1"}>Software</Link>
      </div>
      <Switch>
        <Route path="/home/laptop">
          <AllProduct />
        </Route>
        <Route path='/home/desktop'>
          <DesktopListItem />
        </Route>
        <Route path="/home/usedlaptop">
          <UsedLaptop />
        </Route>
        <Route path="/home/monitors">
          <Monitors />
        </Route>
        <Route path="/home/gaming">
          <Gaming />
        </Route>
        <Route path="/home/accessories">
          <Accessories />
        </Route>
        <Route path="/home/allinone">
          <AllInOne />
        </Route>
        <Route path="/home/software" >
          <Software />
        </Route>
      </Switch>
      <ExpenseList />
      <Footer />
      <div class="elfsight-app-6f84af5c-a4b4-4a56-9624-b7e0bed23957"></div>
      <div class="elfsight-app-08c6a049-5a9a-4ac8-ac5a-540f66cd8f8d"></div>
    </div>
  );
}

export default Home;
