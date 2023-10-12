/*import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";*/

/*function App() {
  return (
    <Router>
      <div className="App">
        <Header>
          <Navbar />
        </Header>
        <Switch>
          <Route exact path="/" component={Homepage}>
            <AnimatedDiv />
            <AnimatedLogosContainer />
            <ServicesDiv />
            <GravityInfoSolutions />
            <ValuedCustomer />
            <Reviews />
            <Workflow />
          </Route>
          <Route path="/about-us" component={AboutUs} />
          <Route path="/info-table" component={InfoTable} />
        </Switch>
        <PictureDiv />
        <PictureDiv />
        <Footer />
      </div>
    </Router>
  );
}*/

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./Homepage";
import AboutUs from "./AboutUs";
import InfoTable from "./InfoTable";

function App() {
  return (
    <Router>
      <div className="App">
        <Header>
          <Navbar />
        </Header>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/info-table" component={InfoTable} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
